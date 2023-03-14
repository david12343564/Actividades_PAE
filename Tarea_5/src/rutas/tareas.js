const express = require('express')
const router = express.Router()
const {
  listar,
  ver,
  crear,
  actualizar,
  eliminar
} = require('../controladores/tareas')

/**
 * @swagger
 * /tareas:
 *   post:
 *     description: Crear una nueva tarea 
 *     parameters:
 *       - in: body
 *         name: nuevaTarea
 *         description: Objeto de la tarea a crear
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *           titulo:
 *             type: string
 *           descripcion:
 *             type: string
 *           status:
 *             type: string
 *           fecha:
 *             type: Date
 *     responses:
 *       201:
 *         description: Se crea la tarea
 *       400:
 *         description: Error al crear la tarea
 */
router.post('', express.json(), crear)

/**
 * @swagger
 * /tareas/{id}:
 *   put:
 *     description: Actualizar la tarea que corresponda con el ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la tarea a actualizar
 *         required: true
 *         type: string
 *       - in: body
 *         name: tareaUpdate
 *         description: Objeto con la información a actualizar
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             titulo:
 *               type: string
 *             descripcion:
 *               type: string
 *             status:
 *               type: string
 *     responses:
 *       200:
 *         description: Se actualiza la tarea correctamente
 *       404:
 *         description: No se encuentra la tarea correspondiente al ID
 *       400:
 *         description: Error en la búsqueda de la tarea a actualizar
 *       500:
 *         description: Error al momento de actualizar la tarea
 */
router.put('/:id', express.json(), actualizar)

/**
 * @swagger
 * /tareas/{id}:
 *   delete:
 *     description: Elimina la tarea correspondiente al ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la tarea a eliminar
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: La tarea se elimina correctamente
 *       400:
 *         description: Error al eliminar la tarea 
 */
router.delete('/:id', eliminar)

/**
 * @swagger
 * /tareas:
 *   get:
 *     description: Mostrar todas las tareas creadas
 *     responses:
 *       200:
 *         description: Se obtienen todas las tareas
 *       400:
 *         description: Error al obtener las tareas
 */
router.get('/', listar)

/**
 * @swagger
 * /tareas/{id}:
 *   get:
 *     description: Obtiene una tarea por medio de su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la tarea a buscar
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Tarea correspondiente al id utilizado
 *       400:
 *         description: Error al encontrar la tarea deseada 
 */
router.get('/:id', ver)

module.exports = router