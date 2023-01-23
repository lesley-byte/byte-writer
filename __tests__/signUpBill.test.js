let request = require('supertest');
const express = require('express');
const { expect } = require('@jest/globals');


const app = express();
request = request('http://localhost:3001');

// test GET / route
describe('GET /', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request.post('/api/users').send({
        username: "bill",
        email:  "bill@bill.com",
        password: "password"
        });
    expect(response.statusCode).toBe(200);
  });
});