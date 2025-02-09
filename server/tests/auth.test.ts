import request from 'supertest';
import app from '../src/app';

describe('Auth Routes', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ /* user data */ });
    expect(res.statusCode).toEqual(201);
  });
  // ... other tests
});
