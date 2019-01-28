let argv = require('./config/yargs').argv;
let colors = require('colors');
let porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

switch (argv._[0]) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('========= Por Hacer ========='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
        }
        console.log('============================='.green);
        break;
    case 'actualizar':
        let ok = porHacer.actualizar(argv.descripcion, argv.completado);
        if (ok)
            console.log('Tarea actualizada correctamente.'.green);
        else
            console.log('Error al actualizar la tarea.'.red);
        break;
    case 'borrar':
        let ok2 = porHacer.borrar(argv.descripcion);
        if (ok2)
            console.log('Tarea eliminada correctamente.'.green);
        else
            console.log('Error al eliminar la tarea.'.red);
        break;
    default:
        console.log('Error: comando no reconocido');
        break;
}