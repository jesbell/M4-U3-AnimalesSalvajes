import Animal from "./Animal.js"; // Importa la clase Animal desde el archivo Animal.js


// Clase para representar un León, que extiende la clase Animal.
export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
}

    Rugir() {
        this.reproducirSonido();
    }
}

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
}

    Aullar() {
        this.reproducirSonido();
    }
}

export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
}

    Grunido() {
        this.reproducirSonido();
    }
}

export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
}

    Siseo() {
        this.reproducirSonido();
    }
}

export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
}

    Chillar() {
        this.reproducirSonido();
    }
}