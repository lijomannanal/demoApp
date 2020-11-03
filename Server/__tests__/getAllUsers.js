import App from '../src/server';
import UserController from '../src/controllers/UserController';
import { users } from '../src/config/initDB';
const supertest = require('supertest');
const request = supertest(App);


describe('API endpoint to get all users', () => {
  beforeEach(async () => {
    jest.useFakeTimers();
  });

  it('should return status code 200', async done => {
    const response = await request.get('/api/users');
    expect(response.status).toBe(200);
    done();
  });

  it('should return 4 users from the db', async done => {
    const response = await request.get('/api/users');
    expect(response.body.length).toBe(4);
    done();
  });

  it('function sortUsers should sort the users by name', async done => {
    const sortedUsers = users.sort(UserController.sortUsers('name'));
    expect(sortedUsers[0].name).toBe("Fred");
    done();
  });

  afterAll(done => {
    App.close(done);
  });
});