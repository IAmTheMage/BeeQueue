import Knex from 'knex';
import {resolve} from 'path';
import 'dotenv/config';
const knex = Knex({
    client: process.env.DATABASE_CLIENT,
    useNullAsDefault: true,
    connection: {
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
    },
    migrations: {
        directory: resolve(__dirname, 'migrations')
    }
})

export default knex;