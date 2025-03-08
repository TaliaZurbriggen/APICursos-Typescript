import { Request, Response } from "express";
import { Estudiante } from "../models/estudianteModel";
import { AppDataSource } from "../db/conexion";

class EstudiantesController {
    constructor(){

    }

    async consultar(req: Request, res: Response) {
        try {
            const data = await AppDataSource.getRepository(Estudiante).find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }

    async consultarDetalle(req: Request, res: Response){
        const {id} = req.params
        try{
            const registro = await AppDataSource.getRepository(Estudiante).findOneBy({id: Number(id)})
            res.status(200).json(registro);
            }catch (err){
                if(err instanceof Error)
                res.status(500).send(err.message)
            }
    }

    async ingresar(req: Request, res: Response){
        try{
            const registro = await AppDataSource.getRepository(Estudiante).save(req.body)
            res.status(201).json(registro);
            }catch (err){
                if(err instanceof Error)
                res.status(500).send(err.message)
            }
    }

    async actualizar(req: Request, res: Response){
        const {id} = req.params
        try{
            const registro = await AppDataSource.getRepository(Estudiante).findOneBy({id: Number(id)})
            if(!registro){
                throw new Error('Estudiante no encontrado')
            }
            await AppDataSource.getRepository(Estudiante).update({id: Number(id)}, req.body)
            const registroActualizado = await AppDataSource.getRepository(Estudiante).findOneBy({id: Number(id)})
            res.status(200).json(registroActualizado);
         }catch (err){
                if(err instanceof Error)                       
                    res.status(500).send(err.message)
        }
    }


    async borrar(req: Request, res: Response){
        const {id} = req.params
        try{
            const registro = await AppDataSource.getRepository(Estudiante).findOneBy({id: Number(id)})
            if(!registro){
                throw new Error('Estudiante no encontrado')
            }
            await AppDataSource.getRepository(Estudiante).delete({id: Number(id)})
            res.status(204).send('Registro borrado con exito')
        }catch (err){
            if(err instanceof Error)                       
                res.status(500).send(err.message)
    }
    }
}

export default new EstudiantesController()