const descripcion = {
    alias: 'd',
    demand: true,
    descripcion: 'Descripción de la tarea pendiente a agregar.'
};

const completado = {
    alias: 'c',
    default: true,
    descripcion: 'Estado de la tarea. True si completado, false si pendiente.'
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea pendiente.', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea existente y su estado.', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar una tarea pendiente.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}