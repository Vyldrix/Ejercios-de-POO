// Objeto Auto
let auto = {
    marca: "Audi",
    modelo: "R8",
    arrancar: function () {
        console.log("El auto esta arrancando");
    }
};

auto.arrancar();

// Clase Persona
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.edad = edad;
    }
    saludar() {
        console.log("Hola me llamo" + this.nombre + this.apellido + "y tengo " + this.edad + "años")
    }
};

let persona1 = new persona1("Emiliano", "Martinez", 33);
let persona2 = new persona2("Lionel", "Messi", 35);

persona1.saludar();
persona2.saludar();

// Uso de prototipo con la clase persona
persona1.prototype.despedirse = function () {
    console.log("Chau me voy, nos vemos! ")
};

persona1.despedirse();
persona2.despedirse();

// Herencia:
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log("Hace un sonido");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("Guau");
    }
}

const perro = new Perro("Firulais");
perro.hacerSonido();