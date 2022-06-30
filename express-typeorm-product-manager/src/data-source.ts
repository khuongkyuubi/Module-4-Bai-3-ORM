import "reflect-metadata"
import { DataSource } from "typeorm"

// connect to database
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mysql123456",
    database: "dbTest",
    synchronize: true,
    logging: false,
    entities: ["dist/src/entity/*.js"],
    migrations: ["dist/src/migrations/*.js"],
})

// entities : đường dẫn lưu các entities - *.js === mọi file .js
// migrations: đường dẫn lưu các migrations - *.js === mội file.js