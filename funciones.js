    // Obtener los elementos
    var modal = document.getElementById("miModal");
    var boton = document.getElementById("boton");
    var span = document.getElementsByClassName("close")[0];
    var texto = document.getElementById("texto").innerText;
    var textoModal = document.getElementById("textoModal");

    // Cuando se hace clic en el botón, se muestra el modal
    boton.onclick = function() {
        textoModal.innerText = texto; // Pasar el texto al modal
        modal.style.display = "block";
    }

    // Cuando se hace clic en la "x", se cierra el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando se hace clic fuera del modal, se cierra el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }