const fs = require('fs');

let tasksToDo = [];

//fUNCION QUE ALMACENA LAS TAREAS (data.json)
const saveDB = () => {
    let data = JSON.stringify(tasksToDo);
    fs.writeFile('db/data.json', data,(err) =>{
        if (err) throw new err('No se puedo guardar el archivo', err);
    });
}

// FUNCION QUE CARGA LA DATA EN LA VARIABLE taksToDo PARA PERSISTIR LA INFORMACION
const loadDB = () => {
    try {
        tasksToDo = require('../db/data.json');
    } catch (error) {
        tasksToDo = [];
    }
}

// FUNCION QUE ME PERMITE CREAR UNA NUEVA TAREA
const create = (description) => {

    loadDB();
    let task = {
        description,
        completed: false
    };

    tasksToDo.push( task );
    //console.log(tasksToDo); // verificar por consola que se almaceno la tarea
    saveDB();
    return task.description;
}

// FUNCION QUE PERMITE VER UN LISTADO TOTAL DE LAS TAREAS ALMACENADAS
const getToDo = () => {
    loadDB();
    return tasksToDo;
}

// FUNCION QUE PERMITE ACTUALIZAR EL ESTADO DE UNA TAREA
const updateToDo = (description, completed = true) =>{
    loadDB();
    let index = tasksToDo.findIndex(tarea => tarea.description === description);

    if (index >= 0) {
        tasksToDo[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

//FUNCION QUE PERMITE ELIMINAR UNA TAREA
const deleteToDo = (descripcion) => {
    loadDB();
     let newTaskToDo = tasksToDo.filter(tarea => {
         return tarea.description !== descripcion
     });

     if (newTaskToDo.length === tasksToDo.length) {
         return false;
     } else {
         tasksToDo = newTaskToDo;
         saveDB();
         return true;
     }
}

module.exports ={
    create,
    getToDo,
    updateToDo,
    deleteToDo
}