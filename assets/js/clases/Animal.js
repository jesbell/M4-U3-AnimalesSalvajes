const audioPlayer = document.getElementById("player"); // Obtiene el elemento de audio del documento HTML

// Definición de la clase Animal para representar objetos de animales.
class Animal {
  // Constructor de la clase Animal.
    constructor(nombre, edad, img, comentarios, sonido) {
    // Propiedades privadas utilizando let y métodos de acceso.
        let Nombre = nombre;
        let Edad = edad;
        let Img = img;
        let Comentarios = comentarios;
        let Sonido = sonido;

        this.getNombre = () => Nombre;
        this.getEdad = () => Edad;
        this.getImg = () => Img;
        this.getComentarios = () => Comentarios;
        this.getSonido = () => Sonido;
    }

  // Métodos de acceso para las propiedades privadas.

  // Método para obtener el nombre del animal.
    get Nombre() {
        return this.getNombre();
    }

    get Edad() {
        return this.getEdad();
    }

    get Img() {
        return this.getImg();
    }

    get Comentarios() {
        return this.getComentarios();
    }

    get Sonido() {
        return this.getSonido();
    }

    reproducirSonido() {
        console.log(this.Sonido);
        audioPlayer.src = `assets/sounds/${this.Sonido}`;
        audioPlayer.play();
    }

}

export default Animal; // Exporta la clase Animal para que pueda ser utilizada en otros módulos.