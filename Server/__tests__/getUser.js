import App from '../src/server';
const supertest = require('supertest');
const request = supertest(App);


describe('API endpoint to get user info', () => {
  beforeEach(async () => {
    jest.useFakeTimers();
  });

  it('should return status code 200', async done => {
    const response = await request.get('/api/users/1');
    expect(response.status).toBe(200);
    done();
  });

  it('should return the correct user info from the db', async done => {
    const response = await request.get('/api/users/1');
    expect(response.body['name']).toBe('James');
    done();
  });

  afterAll(done => {
    App.close(done);
  });
});