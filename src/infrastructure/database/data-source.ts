import "reflect-metadata";
import { DataSource } from "typeorm";

import "dotenv/config";
import { User } from "./entities/User";
import { Routes } from "./entities/Routes";

const port:number = parseInt(process.env.DB_PORT); 

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: port,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User,Routes],
  migrations: [`src/infrastructure/database/migrations/*.{ts,js}`],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })