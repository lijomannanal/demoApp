import pool from '../config/database';
export class UserReposiory {
    /**
    * Function to fetch users from the database
    * @function getUsers
    * @param {Object} where - Where condition
    */
     static async getUsers (where)  {
        try {
            const db = await pool();
            let query = `SELECT id, name, email, role from users`;
            if (where) {
                query += ` WHERE`;
                let whereFields = Object.keys(where);
                for (const [key, value] of Object.entries(where)) {
                    query += whereFields[0] !== key ? ` AND ` : ` `;
                    query +=`${key} = "${value}"`;
                  }
            }
            const result = await  db.query(query);
            db.release();
            return result;
        } catch(error) {
            db.release();
            throw error;
        }
     } 
 }
 export default UserReposiory;