import "reflect-metadata";
import { DataSource } from "typeorm";
import { Estudiante } from "../models/estudianteModel";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "cursos",
    entities: [Estudiante],
    synchronize: true,
});
