// Obtener el modal y el contenido
var modal = document.getElementById('modal');
var messageDiv = document.getElementById('message');
var initialMessage = document.querySelector('.initial-message');
var modalContent = document.querySelector('.modal-content');

// Mensajes para cada estrella
var messages = [
     "EN CADA RINCÓN DE MI SER HAY UN VACÍO QUE SOLO TÚ PUEDES LLENAR.",
     "LA DISTANCIA ENTRE NOSOTROS SOLO ACENTÚA LA PROFUNDIDAD DE MI AMOR Y MI ANHELO POR TI.",
     "CADA LATIDO DE MI CORAZÓN SUSURRA TU NOMBRE EN CADA MOMENTO QUE ESTAMOS SEPARADOS.",
     "TE EXTRAÑO CON UNA INTENSIDAD QUE DESAFÍA CUALQUIER LÓGICA, PUES MI ALMA ANHELA TU CERCANÍA.",
     "LA SOLEDAD SE VUELVE UNA SOMBRA CONSTANTE EN MI VIDA CUANDO NO ESTÁS A MI LADO.",
     "EL ECO DE TUS RISAS  ME PERSIGUEN EN CADA PENSAMIENTO, Y MI CORAZÓN ANHELA SU REGRESO.",
     "LA AUSENCIA DE TU PRESENCIA TRANSFORMA LO COTIDIANO EN UN DESIERTO ÁRIDO, DESEANDO TU OASIS.",
     "SIN TI, EL TIEMPO PARECE ARRASTRARSE Y CADA DÍA SE SIENTE COMO UN INTERMINABLE SUSPIRO DE ANHELO.",
     "SIN TI LOS MINUTOS SE VUELVEN HORAS Y CONTIGO LAS HORAS SE VUELVEN MINUTOS.",
     "CADA INSTANTE SIN TI ES UNA PRUEBA DE CUÁNTO SIGNIFICAS PARA MÍ, Y CUÁNTO MI VIDA SE ENRIQUECE CON TU PRESENCIA.",

 
];

// Obtener todas las estrellas
var stars = document.querySelectorAll('.star');

// Función para mostrar el mensaje en el modal
function showModal(message) {
    messageDiv.textContent = message;
    modal.classList.add('show'); // Mostrar el modal
    initialMessage.classList.add('hidden'); // Ocultar el mensaje inicial
    
    // Ajustar la posición del contenido del modal
    modalContent.style.marginTop = '20px'; // Ajusta este valor según lo necesites
}

// Función para ocultar el modal
function hideModal() {
    modal.classList.remove('show'); // Ocultar el modal
    initialMessage.classList.remove('hidden'); // Mostrar el mensaje inicial
    
    // Restablecer la posición del contenido del modal
    modalContent.style.marginTop = '0'; // Restablecer el valor original
}

// Agregar eventos a las estrellas
stars.forEach(function(star, index) {
    star.addEventListener('click', function() {
        showModal(messages[index]); // Cambiar el mensaje según la estrella
    });
});

// Cerrar el modal cuando se haga clic en cualquier parte del modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        hideModal(); // Ocultar el modal y mostrar el mensaje inicial
    }
});
