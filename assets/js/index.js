import { Leon } from "./clases/Tipos.js"; // Importa las clases de animales desde el archivo Tipos.js
import { Lobo } from "./clases/Tipos.js"; // Importa las clases de animales desde el archivo Tipos.js
import { Oso } from "./clases/Tipos.js"; // Importa las clases de animales desde el archivo Tipos.js
import { Serpiente } from "./clases/Tipos.js"; // Importa las clases de animales desde el archivo Tipos.js
import { Aguila } from "./clases/Tipos.js"; // Importa las clases de animales desde el archivo Tipos.js
import animalesData from "./Animales.js"; // Importa el módulo de datos de animales desde el archivo Animales.js


let animales = []; // Arreglo para almacenar los objetos de animales registrados

// Función para recargar la tabla de animales en la interfaz de usuario
const reloadTable = () => {
    const animalesTemplate = document.getElementById("Animales"); // Obtiene el contenedor de la tabla de animales
    animalesTemplate.innerHTML = ""; // Limpia el contenido actual de la tabla
    //Iterando sobre el arreglo
    animales.forEach((p, i) => {
        //Creamos contenedores y clases para tarjetas
        //Se crea el contenedor principal de la tarjeta
        const mainContenedor = document.createElement("div");
        mainContenedor.classList.add("card", "m-1");

        //Se crea etiqueta img y se agrega al mainContenedor
        const imagenAnimal = document.createElement("img");
        imagenAnimal.src = p.Img;
        imagenAnimal.alt = p.Nombre;
        imagenAnimal.classList.add("card-img-top", "img-fluid");
        //Se agrega un event listener para abrir el modal
        imagenAnimal.addEventListener("click", () => {
            modalDetails(i);
            $('#exampleModal').modal('show'); //abrir el modal
        });
        mainContenedor.appendChild(imagenAnimal);

        //Se crea con nuevo contenedor para la cardBody (sonido)
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "custom-button");
        mainContenedor.appendChild(cardBody);

        //Se crea una etiqueta botón para el contenedor cardBody
        const botonSonido = document.createElement("button");
        botonSonido.classList.add("btn");
        botonSonido.textContent = "SONIDO";
        //Se agrega un event listener para llamar a la funcion playSound
        botonSonido.addEventListener("click", () => {
            playSound(p.Nombre);
        });
        cardBody.appendChild(botonSonido);

        //Se agrega la tarjeta al contenedor Animales
        animalesTemplate.appendChild(mainContenedor);
    });
};

// Función para reproducir el sonido del animal seleccionado
window.playSound = (nombre) => {
    const animal = animales.find((a) => a.getNombre() == nombre); // Encuentra el objeto de animal correspondiente al nombre
    console.log(animal); // Imprime el objeto animal en la consola
    // Selecciona el método de sonido según el tipo de animal y lo reproduce
    nombre == "Leon"
    ? animal.Rugir()
    : nombre == "Lobo"
    ? animal.Aullar()
    : nombre == "Oso"
    ? animal.Grunido()
    : nombre == "Serpiente"
    ? animal.Siseo()
    : nombre == "Aguila"
    ? animal.Chillar()
    : undefined;
};

// Función para mostrar los detalles de un animal en el modal
window.modalDetails = (i) => {
    const modalBody = document.getElementsByClassName("modal-body")[0]; // Obtiene el cuerpo del modal
    const animal = animales[i]; // Obtiene el objeto de animal correspondiente al índice
    modalBody.innerHTML = ""; // Agrega el HTML correspondiente al cuerpo del modal para mostrar los detalles del animal
    //Creando elementos para el modal-body
    const imagen = document.createElement("img");
    imagen.src = animal.Img;
    imagen.alt = animal.Nombre;
    imagen.classList.add("img-fluid");

    const nombre = document.createElement("h5");
    nombre.textContent = animal.Nombre;

    const edad = document.createElement("p");
    edad.textContent = `Edad: ${animal.Edad}`;

    const comentarios = document.createElement("p");
    comentarios.textContent = `Comentarios: ${animal.Comentarios}`;

    //Agregando los elementos al modal-body
    modalBody.appendChild(imagen);
    modalBody.appendChild(nombre);
    modalBody.appendChild(edad);
    modalBody.appendChild(comentarios);
};

// Variable para almacenar la ruta de la imagen del animal seleccionado
let imagenSrc ="";
// Variable para almacenar el sonido del animal seleccionado
let sonido = "";

// Evento de cambio en la selección del tipo de animal
document.getElementById("animal").addEventListener("change", async (e) => {
    const animalSelected = e.target.value; // Obtiene el valor seleccionado en el elemento de selección
    const animales = await animalesData.getData(); // Obtiene los datos de animales del módulo animalesData
    const animalObject = animales.find((a) => a.name == animalSelected); // Encuentra el objeto de animal correspondiente al nombre seleccionado
    imagenSrc = `/assets/imgs/${animalObject.imagen}`; // Establece la ruta de la imagen del animal
    sonido = animalObject.sonido; // Establece el sonido del animal
    const preview = document.getElementById("preview"); // Obtiene el elemento de vista previa de imagen
    preview.parentElement.classList.remove("p-5"); // Remueve una clase de estilo del contenedor de la vista previa
    preview.style.backgroundImage = `url(${imagenSrc})`; // Establece la imagen de fondo de la vista previa
});

// Evento de clic en el botón de registro de animal
document.getElementById("btnRegistrar").addEventListener("click", () => {

    //obtener valores del formulario 
    const nombreAnimal = document.getElementById("animal").value;
    const edad = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;

    //verificando llenado de formulario
    if(nombreAnimal && edad && comentarios){
        //si el formulario esta completo, procederemos a crear instancias
        //se utiliza switch para crear una opción para cada clase hija según el tipo de animal agregado
        let newAnimal;
        switch(nombreAnimal){
            case "Leon":
                newAnimal = new Leon(nombreAnimal, edad, imagenSrc, comentarios, sonido);
                break;
            case "Lobo":
                newAnimal = new Lobo(nombreAnimal, edad, imagenSrc, comentarios, sonido);
                break;
            case "Oso":
                newAnimal = new Oso(nombreAnimal, edad, imagenSrc, comentarios, sonido);
                break;
            case "Serpiente":
                newAnimal = new Serpiente(nombreAnimal, edad, imagenSrc, comentarios, sonido);
                break;
            case "Aguila":
                newAnimal = new Aguila(nombreAnimal, edad, imagenSrc, comentarios, sonido);
                break;
        }
        //Agregar el nuevo animal al arreglo animales
        animales.push(newAnimal);
        //limpiar formulario
        document.getElementById("animal").selectedIndex = 0;
        document.getElementById("edad").selectedIndex = 0;
        document.getElementById("comentarios").value = "";
        /* console.log(animales); */
        //Se llama a la función realodTable;
        reloadTable();
    }
    else{
        alert("Debe completar todos los datos del formulario.");
    }
});

