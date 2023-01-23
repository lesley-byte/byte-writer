let request = require('supertest');
const express = require('express');
const { expect } = require('@jest/globals');

const app = express();
request = request('http://localhost:3001');

// test GET / route
describe('GET /api/users/1', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request.get('/api/users/1');
    expect(response.statusCode).toBe(200);
  });
});
