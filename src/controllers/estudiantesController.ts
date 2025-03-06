import { Request, Response } from "express";


class EstudiantesController {
    constructor(){

    }

    consultar(req: Request, res: Response){
        try{
            res.send('consultar detalle')
        }catch (err){
            if(err instanceof Error)
            res.status(500).send(err.message)
        }
    }

    consultarDetalle(req: Request, res: Response){
        const {id} = req.params
        try{
            res.send('consultar detalle de estudiante')
            }catch (err){
                if(err instanceof Error)
                res.status(500).send(err.message)
            }
    }

    ingresar(req: Request, res: Response){
        try{
            res.send('Ingresar estudiante')
            }catch (err){
                if(err instanceof Error)
                res.status(500).send(err.message)
            }
    }

    actualizar(req: Request, res: Response){
        try{
            res.send('Actualizar estudiante')
         }catch (err){
                if(err instanceof Error)                       
                    res.status(500).send(err.message)
        }
    }


    borrar(req: Request, res: Response){
        try{
            res.send('Borrar estudiante')
        }catch (err){
            if(err instanceof Error)                       
                res.status(500).send(err.message)
    }
    }
}

export default new EstudiantesController()