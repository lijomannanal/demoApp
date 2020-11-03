import UserReposiory from '../repositories/UserRepository';
import Logger from '../config/logger';
const LOG = new Logger('UserController.js');

export class UserController {
   /**
   * Function to fetch all users
   * @function getAllUsers
   * @param {Object} req - ExpressJS req
   * @param {Object} res - ExpressJS res
   * @param {requestCallback} next - Callback that handles request
   */
    static async getAllUsers (req, res, next)  {
        try {
            LOG.info(`Fetching all users`);
            const result = await UserReposiory.getUsers();
            LOG.info(`Returning ${result.length} users`);
            return res.json(result.sort(UserController.sortUsers('name')));
        } catch (error) {
            LOG.error(error);
            next(error);
        }
       
    }
   /**
   * Function to details of a single user
   * @function getUser
   * @param {Object} req - ExpressJS req
   * @param {Object} res - ExpressJS res
   * @param {requestCallback} next - Callback that handles request
   */
    static async getUser (req, res, next) {
        try {
            const { userId } = req.params;
            LOG.info(`Fetching user with id ${userId}`);
            const result = await UserReposiory.getUsers({id: userId});
            LOG.info(`Successfully fetched user info ${JSON.stringify(result)}`);
            return res.json(result.length ? result[0] : []);
        } catch (error) {
            LOG.error(error);
            next(error);
        }
    } 
    static sortUsers (sortBy) {
        return ((a,b) => a[sortBy].localeCompare(b[sortBy], 'en', { numeric: true }));
    }  
}
export default UserController;