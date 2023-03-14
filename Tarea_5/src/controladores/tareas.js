const {
  response
} = require('express')
const Tarea = require('./../modelos/tarea')

const tareaController = {

  listar: (req, res) => {
    Tarea.find({}).then(tareas => {
      res.status(200).send(tareas)
    }).catch(error => {
      res.status(400).send('Error al obtener tareas: ' + error)
    })

  },

  ver: (req, res) => {
    Tarea.findById(req.params.id).then(tarea => {
      res.status(200).send(tarea)
    }).catch(error => {
      res.status(400).send('No fue posible encontrar la tarea con id ' + req.params.id)
    })

  },

  crear: (req, res) => {
    let nuevaTarea = new Tarea({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      status: req.body.status,
      fecha: Date.now()
    })

    nuevaTarea.save().then(() => {
      res.status(201).send('Tarea creada de manera exitosa')
    }).catch(error => {
      res.status(400).send('Error al crear la tarea: ' + error)
    })

  },

  actualizar: (req, res) => {
    Tarea.findById(req.params.id).then(tarea => {
      if (!tarea) {
        res.status(404).send('No se encontró la tarea a actualizar')
      }
      tarea.titulo = req.body.titulo || tarea.titulo
      tarea.descripcion = req.body.descripcion || tarea.descripcion
      tarea.status = req.body.status || tarea.status

      tarea.save().then(() => {
        res.status(200).send('Tarea Actualizada!!')
      }).catch(error => {
        res.status(500).send('Error al actualizar la tarea: ' + error)
      })


    }).catch(error => {
      res.status(400).send('Algo salió mal')
    })

  },

  eliminar: (req, res) => {
    Tarea.findByIdAndDelete(req.params.id).then(() => {
      res.status(200).send('Tarea eliminada correctamente')
    }).catch(error => {
      res.status(400).send('Error al borrar la tarea: ' + error)
    })


  }

}

module.exports = tareaController