import { Request, Response } from "express";


class ProfesoresController {
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
            res.send('consultar detalle de profesor')
            }catch (err){
                if(err instanceof Error)
                res.status(500).send(err.message)
            }
    }

    ingresar(req: Request, res: Response){
        try{
            res.send('Ingresar profesor')
            }catch (err){
                if(err instanceof Error)
                res.status(500).send(err.message)
            }
    }

    actualizar(req: Request, res: Response){
        try{
            res.send('Actualizar profesor')
         }catch (err){
                if(err instanceof Error)                       
                    res.status(500).send(err.message)
        }
    }


    borrar(req: Request, res: Response){
        try{
            res.send('Borrar profesor')
        }catch (err){
            if(err instanceof Error)                       
                res.status(500).send(err.message)
    }
    }
}

export default new ProfesoresController()