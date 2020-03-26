require('dotenv').config()

const request = require('supertest');

const server = require('./server.js');

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
            it.todo("Should return 200 status code.")
            it("Should return 200 status code.", () => {
                return request(server).get("/api/birds")
                    .expect(200)
                    .expect('Content-Type', /json/i)
            })
            it.todo("Should return an array.")
            it.todo("Should return bird objects.")
        })
        describe("POST birds.", () => {
            it.todo("Should return 201 status.")
            it.todo("Should return the bird you posted.")
        })
        describe("GET bird with ID.", () => {
            it.todo("Should return 200 status.")
            it.todo("Should return the bird in question.")
        })
            
    })
})