import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "T43428014",
    database: "cursos",
    synchronize: true,
    logging: true,
    entities: []
})

