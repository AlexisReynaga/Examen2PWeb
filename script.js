let tareaAEliminar = null; 

function agregarTarea() {
    const entradaTarea = document.getElementById('entradaTarea');
    const selectPrioridad = document.getElementById('selectPrioridad');
    const listaTareas = document.getElementById('listaTareas');

    if (entradaTarea.value.trim() === '') return;

    const itemTarea = document.createElement('li');
    itemTarea.className = `item-tarea ${selectPrioridad.value}`;
    itemTarea.innerHTML = `
        ${entradaTarea.value}
        <button onclick="eliminarTarea(this)">Eliminar</button>
    `;

    listaTareas.appendChild(itemTarea);
    entradaTarea.value = '';
}

function eliminarTarea(boton) {
    const itemTarea = boton.parentElement;
    
    if (itemTarea.classList.contains('alta')) {
        tareaAEliminar = itemTarea;
        document.getElementById('modalConfirmacion').style.display = 'flex';
    } else {
        // Si no es de alta sw borra 
        itemTarea.remove();
    }
}

function confirmarEliminacion() {
    // Elimina las de alta 
    if (tareaAEliminar) {
        tareaAEliminar.remove();
        tareaAEliminar = null;
    }
    document.getElementById('modalConfirmacion').style.display = 'none';
}

function cancelarEliminacion() {
    tareaAEliminar = null;
    document.getElementById('modalConfirmacion').style.display = 'none';
}
