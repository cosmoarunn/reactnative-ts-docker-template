// backend/src/config/db.ts
import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    logging: false,
});

export const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync(); // This will create the tables if they don't exist
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}