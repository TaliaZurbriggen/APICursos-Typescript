const db = require('../database/conexion')

class CursosController
 {
    constructor(){

    }

    consultar(req, res){
        try{
            db.query(`SELECT * FROM cursos`,
                (err, rows) =>{
                    if (err) {
                        res.status(400).send(err)
                    }
                    res.status(200).json(rows)
                }
            )
        }catch{
            res.status(500).send(err.message)
        }
    }

    consultarDetalle(req, res){
        const { id } = req.params;
        try {
            db.query(`SELECT * FROM cursos WHERE id = ?`, [id],
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    ingresar(req, res){
        try{
            const{nombre, descripcion, profesor_id} = req.body
            db.query(`INSERT INTO cursos
                        (id, nombre, descripcion, profesor_id)
                        VALUES (NULL, ?, ?, ?)`,
                        [nombre, descripcion,profesor_id],
                        (err, rows) => {
                            if(err){
                                res.status(400).send(err.message)
                            }
                            res.status(201).json({id: rows.insertId})
                        })
        }catch{
            res.status(500).send(err.message)
        }
    }

    actualizar(req, res){
        const {id} = req.params
        try{
            const {nombre, descripcion, profesor_id} = req.body
            db.query(`UPDATE cursos
                    SET nombre = ?, descripcion = ?, profesor_id = ?
                    WHERE id = ?`, 
                    [nombre, descripcion, profesor_id, id],
                    (err, rows) =>{
                        if (err){
                            res.status(400).send(err.message)
                        }if(rows.affectedRows == 1){
                            res.status(200).json({respuesta: 'registro actualizado con exito'})
                        }
                })
        }catch{
            res.status(500).send(err.message)
        }
    }

    borrar(req, res){
        const {id} = req.params
        try{
            db.query(`DELETE FROM cursos WHERE id = ?`, [id],
                (err, rows) =>{
                    if(err){
                        res.status(400).send(err.message)
                    }if(rows.affectedRows == 1){
                        res.status(200).json({respuesta: 'registro eliminado con exito'})
                    }
                }
            )
        }catch{
            res.status(500).send(err.message)
        }
    }

    asociarEstudiante(req, res) {
        try {
            const { curso_id, estudiante_id } = req.body;
            db.query(`INSERT INTO cursos_estudiantes
                        (curso_id, estudiante_id)
                        VALUES(?, ?);`,
                [curso_id, estudiante_id], (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
                    } else {
                        res.status(201).json({ respuesta: 'Estudiante registrado con éxito' });
                    }

                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new CursosController()