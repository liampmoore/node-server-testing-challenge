require('dotenv').config()

const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    it('has NODE_ENV as testing', () => {
        expect(process.env.NODE_ENV).toBe('testing');
    })
    describe('index route', () => {
        it('should return an OK status code', async () => {
            return request(server).get('/')
                .expect(200) 
        })
        it("Should return 'Working.' as the response text.", async () => {
            const response = await request(server).get('/');
            expect(response.text).toMatch('Working.')
        } )
    })

})