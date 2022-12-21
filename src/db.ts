import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

import { User } from './entities/User';

dotenv.config();

const {
    HOST_DB,
    PORT_DB,
    USERNAME_DB,
    PASSWORD_DB,
    DATABASE
} = process.env;

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: HOST_DB,
    port: Number(PORT_DB),
    username: USERNAME_DB,
    password: PASSWORD_DB,
    database: DATABASE,
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
});