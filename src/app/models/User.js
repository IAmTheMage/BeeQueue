import { Model } from 'objection';
import knex from '../../database/config';
import 'dotenv/config';
import bcrypt from 'bcryptjs';



Model.knex(knex);

class User extends Model {
    static get tableName() {
        return 'users';
    }

    async $beforeInsert(queryContext) {
        await super.$beforeInsert(queryContext);
        await this.hashPassword();
    }

    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 12);
    }
}

export default User;