window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button.btn');
  button.addEventListener('click', () => {
    alert('Feliz cumpleeeeeeeeeeeeeeeeeee');
  });
});
document.addEventListener("DOMContentLoaded", function() {

   
    const recuerdos = [
        {
            texto: "Descansandoooo",
            archivo: "pd1.jpeg" 
        },
        {
            texto: "Dia de practicaa ",
            archivo: "p2.jpeg"
        },
        {
            texto: "Modo alien vs depredador",
            archivo: "pd3.jpeg"

        },
        {
            texto: "Se hace wey en el salon",
            archivo:"pd4.jpeg"
        },
        {
            texto: "Modo indu",
            archivo:"pd5.jpeg"
        },
        {
            texto:"Saludo de la amistad",
            archivo:"pd6.jpeg"
        },
        {
            texto:"Salidita a bodega aurrera",
            archivo:"pi1.mp4"
        },
        {
            texto:"Dia de cineeeeeeeeeee",
            archivo:"pi2.mp4"
        },
        {
            texto:"Cambio de outfit",
            archivo:"pd7.jpeg"
        },
        {
            texto:"tuuuuuuuuuu",
            archivo:"pd8.jpeg"
        },
        {
            texto:"Cambio de peinado",
            archivo:"pd9.jpeg"
        },
        {
            texto:"La britini senñal",
            archivo:"pd10.jpeg"
        },
        {
            texto:"Se hace wey en clase",
            archivo:"pd11.jpeg"
        },
        {
            texto:"Se hace wey en clase  otra vez",
            archivo:"pd12.jpeg"
        }
    ];

    recuerdos.forEach((recuerdo) => {

        const estrella = document.createElement("div");
        estrella.classList.add("estrella");

        estrella.style.top = Math.random() * 90 + "%";
        estrella.style.left = Math.random() * 95 + "%";

        estrella.addEventListener("click", function(e) {
            mostrarRecuerdo(recuerdo, e.pageX, e.pageY);
        });

        document.body.appendChild(estrella);
    });
  
    const botonGlobos = document.getElementById("botonGlobos");

    if (botonGlobos) {
        botonGlobos.addEventListener("click", lanzarGlobos);
    }

});

function mostrarRecuerdo(recuerdo, x, y) {

    const anterior = document.querySelector(".popup");
    if (anterior) anterior.remove();

    const popup = document.createElement("div");
    popup.classList.add("popup");

    popup.style.left = x + "px";
    popup.style.top = y + "px";

    let contenidoMedia = "";
    if (recuerdo.archivo.endsWith(".mp4")) {

        contenidoMedia = `
            <video class="media-recuerdo" controls autoplay>
                <source src="${recuerdo.archivo}" type="video/mp4">
                Tu navegador no soporta video.
            </video>
        `;

    } else {

        contenidoMedia = `
            <img src="${recuerdo.archivo}" class="media-recuerdo">
        `;
    }

    popup.innerHTML = `
        ${contenidoMedia}
        <div class="texto-recuerdo">${recuerdo.texto}</div>
        <button class="boton-cerrar">Cerrar</button>
    `;

    document.body.appendChild(popup);

    popup.querySelector(".boton-cerrar").addEventListener("click", function() {
        popup.remove();
    });
}

function lanzarGlobos() {

    const colores = ["orange", "red", "yellow", "green", "pink", "purple", "orange"];

    for (let i = 0; i < 20; i++) {

        const globo = document.createElement("div");
        globo.classList.add("globo");

        globo.style.left = Math.random() * 100 + "vw";
        globo.style.background = colores[Math.floor(Math.random() * colores.length)];
        globo.style.animationDuration = (4 + Math.random() * 3) + "s";

        document.body.appendChild(globo);

        setTimeout(() => {
            globo.remove();
        }, 7000);
    }
}
document.addEventListener("DOMContentLoaded", function() {

    const botonFlor = document.getElementById("botonFlor");
    const contenedor = document.getElementById("contenedorFlor");

    botonFlor.addEventListener("click", function() {

        // Borra flor anterior si existe
        contenedor.innerHTML = "";

        const flor = document.createElement("div");
        flor.classList.add("flor");

        flor.innerHTML = `
            <div class="petalo p1"></div>
            <div class="petalo p2"></div>
            <div class="petalo p3"></div>
            <div class="petalo p4"></div>
            <div class="petalo p5"></div>
            <div class="petalo p6"></div>
            <div class="centro"></div>
            <div class="tallo"></div>
        `;

        contenedor.appendChild(flor);
    

    });

});
document.addEventListener("DOMContentLoaded", function() {
    const botonFinal = document.getElementById("mensajeFinal");
    const pantallaFinal = document.getElementById("pantallaFinal");
    const textoFinal = document.getElementById("textoFinal");
    const cerrarFinal = document.getElementById("cerrarFinal"); // Este es tu botón de cerrar
    const mensaje = "Feliz cumple doc, no soy mucho de demostrar afecto... pero espero que te la pases bien te quiero mucho ❤️";

    // 1. Abrir el mensaje
    botonFinal.addEventListener("click", function() {
        pantallaFinal.classList.add("activa");
        escribirTexto(mensaje, textoFinal);
    });

    // 2. CORRECCIÓN AQUÍ: Cerrar el mensaje
    if (cerrarFinal) {
        cerrarFinal.addEventListener("click", function() {
            pantallaFinal.classList.remove("activa");
            textoFinal.innerHTML = ""; // Limpiamos el texto para que pueda volver a escribirse si se abre de nuevo
        });
    }
});

function escribirTexto(texto, elemento) {
    elemento.innerHTML = "";
    let i = 0;

    const intervalo = setInterval(() => {
        elemento.innerHTML += texto[i];
        i++;
        if (i >= texto.length) clearInterval(intervalo);
    }, 50);
}

const canvas = document.getElementById("galaxia");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrellas = [];

for (let i = 0; i < 200; i++) {
    estrellas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
    });
}

function animarGalaxia() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    for (let i = 0; i < estrellas.length; i++) {
        let estrella = estrellas[i];

        ctx.beginPath();
        ctx.arc(estrella.x, estrella.y, estrella.size, 0, Math.PI * 2);
        ctx.fill();

        estrella.y += estrella.speed;

        if (estrella.y > canvas.height) {
            estrella.y = 0;
            estrella.x = Math.random() * canvas.width;
        }
    }

    requestAnimationFrame(animarGalaxia);
}

animarGalaxia();

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
