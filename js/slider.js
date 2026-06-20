const slides = [
    { img:"img/slide1.jpg", titulo:"Centollo" },
    { img:"img/slide2.jpg",  },
    { img:"img/slide3.jpg",  },
    { img:"img/slide4.jpg",  },
    { img:"img/slide5.jpg", }
];

const textoCentollo = "El centollo es un crustáceo marino que vive en fondos rocosos del océano, generalmente en aguas frías. Es muy apreciado en la gastronomía por su carne suave, dulce y delicada, especialmente en las patas y el interior del caparazón. Se suele cocinar hervido o al vapor para conservar su sabor natural.";

let i = 0;

function mostrarSlide(){
    const img = document.getElementById("slide");
    const titulo = document.getElementById("titulo");
    const texto = document.getElementById("texto");

    if (!img || !titulo || !texto) return;

    img.src = slides[i].img;
    titulo.textContent = slides[i].titulo;
    texto.textContent = textoCentollo;
}

function cambiar(){
    i++;
    if(i >= slides.length) i = 0;
    mostrarSlide();
}

mostrarSlide();
setInterval(cambiar, 3000);