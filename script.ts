document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asistencia = document.getElementById('asistencia').value;

    fetch('TU_URL_DEL_SCRIPT_WEBAPP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, asistencia }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert("¡Gracias por confirmar tu asistencia!");
        } else {
            alert("Hubo un error. Por favor, inténtalo de nuevo.");
        }
    });
});
