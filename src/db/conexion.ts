import { DataSource } from "typeorm"
import { Estudiante } from "../models/estudianteModel"
import { Profesor } from "../models/profesoresModel"
import { Curso } from "../models/cursoModel"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "T43428014",
    database: "cursos",
    synchronize: false,
    logging: true,
    entities: [Estudiante, Profesor, Curso]
})

