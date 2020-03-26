require('dotenv').config()

const db = require('../database/db-Config.js');

const request = require('supertest');

const server = require('./server.js');

beforeEach(async () => {
    // this function executes and clears out the table before each test
    await db('birds').truncate();
  });


describe('server.js', () => {
    it('Has NODE_ENV as testing.', () => {
        expect(process.env.NODE_ENV).toBe('testing');
    })
    describe('Index route', () => {
        it('Should return an OK status code.', async () => {
            return request(server).get('/')
                .expect(200)
                .expect('Content-Type', /text/)
                .expect('Content-Length', "8")
        })
        it("Should return 'Working.' as the response text.", async () => {
            const response = await request(server).get('/');
            expect(response.text).toMatch('Working.')
        } )
    })
    describe("Birds route", () => {
        describe("GET birds endpoint.", () => {
            it("Should return 200 status code.", () => {
                return request(server).get("/api/birds")
                    .expect(200)
                    .expect('Content-Type', /json/i)
            })
            it("Should return an array.", async () => {
                const response = await request(server).get("/api/birds")
                expect(response.body).toHaveLength(0)
                expect(typeof(response.body)).toMatch(/object/)
            })
        })
        describe("POST birds.", () => {
            it("Should return 201 status.", async () => {
                const bird = {name: "Turkey"}
                const response = await request(server).post("/api/birds").send(bird)
                expect(response.status).toBe(201);
            })
            it("Should return the bird you posted.", async () => {
                const bird = {name: "Turkey"}
                const response = await request(server).post("/api/birds").send(bird)
                expect(response.body.name).toMatch(/Turkey/)
            })
        })
        describe("GET bird with ID.", () => {
            it("Should return 200 status.", async () => {
                const response = await request(server).get("/api/birds/1")
                expect(response.status).toBe(200)
            })
            it("Should return the bird in question.", async () => {
                const bird = {name: "Turkey"}
                const postResponse = await request(server).post("/api/birds").send(bird)
                const id = postResponse.body.id;

                const getResponse = await request(server).get(`/api/birds/${id}`);

                expect(getResponse.body.id).toBe(id)
                expect(getResponse.body.name).toMatch(/turkey/i)
            })
        })
            
    })
})