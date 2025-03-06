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
        const {id} = req.params
        try{
            const { dni, nombre, apellido, email } = req.body;
             db.query(`UPDATE estudiantes
             SET dni = ?, nombre = ?, apellido = ?, email = ?
             WHERE id = ?; `,
                 [dni, nombre, apellido, email, id], (err, rows) => {
                     if (err) {
                         res.status(400).send(err);
                     }
                     if(rows.affectedRows == 1)
                         res.status(200).json({ respuesta: 'Registro actualizado con exito' })
                     })
         }catch (err){
                if(err instanceof Error)                       
                    res.status(500).send(err.message)
        }
    }


    borrar(req: Request, res: Response){
        const {id} = req.params
        try{
            db.query(`DELETE FROM estudiantes WHERE id = ?`, [id],
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows == 1)
                        res.status(200).json({ respuesta: 'Registro eliminado con exito' })
                    })
        }catch (err){
            if(err instanceof Error)                       
                res.status(500).send(err.message)
    }
    }
}

module.exports = new EstudiantesController()