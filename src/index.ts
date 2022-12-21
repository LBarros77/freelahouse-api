import 'reflect-metadata';
import * as dotenv from 'dotenv';

import app from './app';
import { AppDataSource } from './db';

dotenv.config();

const port = process.env.PORT;

async function main() {
	try {
		await AppDataSource.initialize();

    app.listen(port, () => console.log('It is Api Feelahouse🚀'));
	} catch(error) {
		console.error(error)
	}
}


main();