import App from '../src/server';
const supertest = require('supertest');
const request = supertest(App);

describe('API endpoint to login', () => {
  beforeEach(async () => {
    jest.useFakeTimers();
  });

  it('should return error if the login request doesn\'t contain email', async done => {
    const response = await request.post('/api/auth/login').send({password: 'test'});
    expect(response.status).toBe(400);
    done();
  });

  it('should return error if the login request doesn\'t contain password', async done => {
    const response = await request.post('/api/auth/login').send({email: 'James@123.com'});
    expect(response.status).toBe(400);
    done();
  });

  it('should return error if the email/password is incorrect', async done => {
    const response = await request.post('/api/auth/login').send({email: 'James@123.com', password: '123456'});
    expect(response.status).toBe(401);
    done();
  });

  it('should return user object if the username and password are correct', async done => {
    const response = await request.post('/api/auth/login').send({email: 'James@123.com', password: '1!23#4'});
    expect(response.status).toBe(200);
    done();
  });

  afterAll(done => {
    App.close(done);
  });
});