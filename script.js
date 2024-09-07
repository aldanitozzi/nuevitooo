document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const modal = document.getElementById('modal');
    const messageDiv = document.getElementById('message');
    const initialMessage = document.querySelector('.initial-message');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const music = document.getElementById('background-music');
    const progressBar = document.getElementById('progress-bar');
    
    // Mensajes de las estrellas
    const messages = [


        "EN CADA RINCÓN DE MI SER HAY UN VACÍO QUE SOLO TÚ PUEDES LLENAR.",
        
        "LA DISTANCIA ENTRE NOSOTROS SOLO ACENTÚA LA PROFUNDIDAD DE MI AMOR Y MI ANHELO POR TI.",
        
        "CADA LATIDO DE MI CORAZÓN SUSURRA TU NOMBRE EN CADA MOMENTO QUE ESTAMOS SEPARADOS.",
        
        "TE EXTRAÑO CON UNA INTENSIDAD QUE DESAFÍA CUALQUIER LÓGICA, PUES MI ALMA ANHELA TU CERCANÍA.",
        
        "LA SOLEDAD SE VUELVE UNA SOMBRA CONSTANTE EN MI VIDA CUANDO NO ESTÁS A MI LADO.",
        
        "EL ECO DE TUS RISAS Y CARICIAS ME PERSIGUEN EN CADA PENSAMIENTO, Y MI CORAZÓN ANHELA SU REGRESO.",
        
        "LA AUSENCIA DE TU PRESENCIA TRANSFORMA LO COTIDIANO EN UN DESIERTO ÁRIDO, DESEANDO TU OASIS.",
        
        "SIN TI, EL TIEMPO PARECE ARRASTRARSE Y CADA DÍA SE SIENTE COMO UN INTERMINABLE SUSPIRO DE ANHELO.",
        
        "SIN TI LOS MINUTOS SE VUELVEN HORAS Y CONTIGO LAS HORAS SE VUELVEN MINUTOS.",
        
        "CADA INSTANTE SIN TI ES UNA PRUEBA DE CUÁNTO SIGNIFICAS PARA MÍ, Y CUÁNTO MI VIDA SE ENRIQUECE CON TU PRESENCIA.",
    ];

    // Manejo del click en estrellas
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            messageDiv.textContent = messages[index];
            modal.classList.add('show');
            initialMessage.classList.add('hidden');
        });
    });

    // Manejo del click fuera del modal para cerrarlo
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            initialMessage.classList.remove('hidden');
        }
    });

    // Controles de música
    playBtn.addEventListener('click', () => {
        music.play();
    });

    pauseBtn.addEventListener('click', () => {
        music.pause();
    });

    // Actualizar la barra de progreso
    music.addEventListener('timeupdate', () => {
        const progress = (music.currentTime / music.duration) * 100;
        progressBar.style.width = progress + '%';
    });
});
