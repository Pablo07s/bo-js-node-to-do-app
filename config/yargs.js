const { help } = require('yargs')
const description= {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
    };

const completed = {
    default: true,
    alias: 'c',
    desc: 'Marca una tarea como realizada'
};


const argv = require('yargs')
    .command('create', 'Crea una nueva tarea', {description})
    .command('update', 'Actualizar el estado de un tarea', {description, completed})
    .command('delete', 'Elimina una tarea', {description})
    .help()
    .argv

    module.exports ={
        argv
    }