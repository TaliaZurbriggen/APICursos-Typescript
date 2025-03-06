import express from 'express';
import EstudiantesController from'../controllers/estudiantesController'
const router = express.Router()

router.get('/', EstudiantesController.consultar)

router.post('/', EstudiantesController.ingresar)

router.route("/:id")
    .get(EstudiantesController.consultarDetalle)
    .put(EstudiantesController.actualizar)
    .delete(EstudiantesController.borrar)



export default router;