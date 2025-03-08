import { Request, Response } from "express";
import { AppDataSource } from "../db/conexion";
import { Profesor } from "../models/profesoresModel";

class ProfesoresController {
    constructor(){

    }

    async consultar(req: Request, res: Response){
        try{
            const data = await AppDataSource.getRepository(Profesor).find();
            res.status(200).json(data)
        }catch (err){
            if(err instanceof Error)
            res.status(500).send(err.message)
        }
    }

    async consultarDetalle(req: Request, res: Response){
        const {id} = req.params
        try{
            const registro = await AppDataSource.getRepository(Profesor).findOneBy({id: Number(id)})
            res.status(200).json(registro)
            }catch (err){
                if(err instanceof Error)
                res.status(500).send(err.message)
            }
    }

    async ingresar(req: Request, res: Response){
        try{
            const registro = await AppDataSource.getRepository(Profesor).save(req.body)
            res.status(201).json(registro)
            }catch (err){
                if(err instanceof Error)
                res.status(500).send(err.message)
            }
    }

    async actualizar(req: Request, res: Response){
        const {id} = req.params
        try{
            const registro = await AppDataSource.getRepository(Profesor).findOneBy({id: Number(id)})
            if(!registro){
                throw new Error('Profesor no encontrado')
            }
            await AppDataSource.getRepository(Profesor).update({id: Number(id)}, req.body)
            const registroActualizado = await AppDataSource.getRepository(Profesor).findOneBy({id: Number(id)})
            res.status(200).json(registroActualizado)
         }catch (err){
                if(err instanceof Error)                       
                    res.status(500).send(err.message)
        }
    }


    async borrar(req: Request, res: Response){
        const {id} = req.params
        try{
            const registro = await AppDataSource.getRepository(Profesor).findOneBy({id: Number(id)})
            if(!registro){
                throw new Error('Profesor no encontrado')
            }
            await AppDataSource.getRepository(Profesor).delete({id: Number(id)})
            res.status(204).send('Registro borrado con exito')
        }catch (err){
            if(err instanceof Error)                       
                res.status(500).send(err.message)
    }
    }
}

export default new ProfesoresController()