Repositorio para tarea de la clase Programación de Aplicaciones de Escritorio

CRUD TAREAS
Esta tarea consiste en el desarrollo de una API mediante Node + Express que permita al usuario administrar tareas a través de una base de datos en MongoDB.

Acciones del usuario: Obtener tareas, obtener tarea por id, crear tarea, actualizar tarea, borrar tarea

Las tareas cuentan con: titulo, descripcion, status, fecha

Comandos a ejecutar antes de utilizar:
npm install
npm run start - "node ."
npm run dev - "nodemon ."

Se documentaron los endpoints utilizando swagger, para acceder a ellos una vez que se ejecuten los comandos se deberá acceder a localhost:3000/swagger para verlos

Hay un archivo llamado ejemplo.env en este se especifica que campos se deben cambiar para conectarse a la base de datos, si se conecta a su base adicionalmente hay que cambiar el nombre de la colección, en el ejemplo el nombre de la colección es Tareas
