const argv = require('./config/yargs').argv;
const color = require('colors');
const create = require('./to-do/to-do');


let comando = argv._[0];

switch (comando) {
    case 'create':
        let tarea = create.create(argv.description);
        console.log(`La tarea '${tarea}' se creo satisfactoriamente`);
        break;

    case 'list':
        let listado = create.getToDo();
        for ( let tarea of listado) {
            console.log('*********** TO-DO*********');
            console.log('Titulo:', tarea.description);
            if (tarea.completed === "false") {
                console.log('Estado: PENDIENTE');
            } else {
                console.log('Estado: REALIZADA');
            }
            console.log('**************************');
        }
        break;

    case 'update':
        let actualizada = create.updateToDo(argv.description, argv.completed);
        if (actualizada === true) {
            console.log('Problemas al actualizar la tarea');
        } else {
            console.log('tarea actualizada correctamente');
        }
        break;

    case 'delete':
        let eliminar = create.deleteToDo(argv.description);
        if (eliminar === false){
            console.log('No se encontraron tareas para eliminar');
        } else {
            console.log('Tarea eliminada correctamente');
        }
    break;

    default:
        console.log('Comando invalido!');
        break;
}