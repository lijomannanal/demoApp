import UserReposiory from '../repositories/UserRepository';
import Logger from '../config/logger';
import ErrorBase from '../errors/ErrorBase';
import ErrorCodes from '../errors/ErrorCodes';
const LOG = new Logger('UserController.js');

 class AuthController {
   /**
   * Function to sign in to the app
   * @function getAllUsers
   * @param {Object} req - ExpressJS req
   * @param {Object} res - ExpressJS res
   * @param {requestCallback} next - Callback that handles request
   */
    static async login  (req, res, next) {
      try {
         const { email, password } = req.body;
         if (!email || !password) {
            throw new ErrorBase('Invalid Input', ErrorCodes.INVALID_INPUT, 400);
         }
         const result = await UserReposiory.getUsers({ email, password });
         if(!result.length) {
            throw new ErrorBase('Invalid username or password!', ErrorCodes.INVALID_CREDENTIALS, 401);
         } else {
             res.json(result[0]);
         }
      } catch (error) {
        LOG.error(error);
        next(error);
      }
    }
}
export default AuthController;