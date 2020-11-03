import Express from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const router = Express.Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary:  API to login to the server
 *     description: API to login to the server 
 *     tags:
 *       - Authentication
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Email ID of the user.
 *         in: formData
 *         required: true
 *         type: string   
 *       - name: password
 *         description: Password of the user.
 *         in: formData
 *         required: true
 *         type: string   
 *     responses:
 *       200:
 *         description: Authentication successful
 *         schema:
 *           $ref: '#/definitions/userData'   
 *       400:
 *         description: Invalid input
 *         schema: 
 *           $ref: '#/definitions/invalidInputError' 
 *       401:
 *         description: Invalid credentials
 *         schema: 
 *           $ref: '#/definitions/authenticationError' 
 *       500:
 *         schema: 
 *           $ref: '#/definitions/serverError'
 */ 
    router.post('/auth/login', AuthController.login);


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary:  API  to fetch all users
 *     description: API used to fetch all users
 *     tags:
 *       - Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/userData'   
 *       500:
 *         description: System error
 *         schema: 
 *           $ref: '#/definitions/serverError'
 */ 
    router.get('/users', UserController.getAllUsers);

/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     summary:  API to fetch a single user by Id
 *     description: API to fetch a single user by Id
 *     tags:
 *       - Users
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: UserId of the user
 *         in: path
 *         type: integer
 *     responses:
 *       200:
 *         description: 
 *         schema: 
 *           $ref: '#/definitions/userData'
 *       500:
 *         description: System error
 *         schema: 
 *           $ref: '#/definitions/serverError'
 * 
 */ 
    router.get('/users/:userId', UserController.getUser);

    export default router;

/**
 * @swagger
 *  definitions:
 *      userData:
 *        type: object
 *        properties: 
 *          id:
 *            type: integer
 *            example: 1
 *          name:
 *            type: string
 *            example: admin1
 *          email:
 *            type: string
 *            example: test@demo.com
 *          role:
 *            type: string
 *            example: EMPLOYEE
 *            enum: [EMPLOYEE, ADMIN]
 * 
 *      serverError:
 *        type: object
 *        properties: 
 *          errorCode:
 *            type: integer
 *            example: 99
 *          message:
 *            type: string
 *            example: Internal Server Error
 *      invalidInputError:
 *        type: object
 *        properties: 
 *          errorCode:
 *            type: integer
 *            example: 215
 *          message:
 *            type: string
 *            example: Invalid input!
 * 
 *      authenticationError:
 *        type: object
 *        properties: 
 *          errorCode:
 *            type: integer
 *            example: 216
 *          message:
 *            type: string
 *            example: Invalid username or password!
 */

