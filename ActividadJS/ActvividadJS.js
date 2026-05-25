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

let persona1 = new Persona("Emiliano", "Martinez", 33);
let persona2 = new Persona("Lionel", "Messi", 35);

persona1.saludar();
persona2.saludar();

// Uso de prototipo con la clase persona
Persona.prototype.despedirse = function () {
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

// Desafio
class CuentaBancaria {
    constructor(saldoInicial = 0) {
        this.saldo = saldoInicial;
    }

    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Se depositaron $${monto}. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("El monto a depositar debe ser mayor a 0");
        }
    }

    retirar(monto) {
        if (monto > 0) {
            if (this.saldo >= monto) {
                this.saldo -= monto;
                console.log(`Se retiraron $${monto}. Nuevo saldo: $${this.saldo}`);
            } else {
                console.log("Fondos insuficientes");
            }
        } else {
            console.log("El monto a retirar debe ser mayor a 0");
        }
    }

    verSaldo() {
        console.log(`Saldo actual: $${this.saldo}`);
        return this.saldo;
    }
}

// Ejemplo de uso:
const miCuenta = new CuentaBancaria(1000);
miCuenta.verSaldo();
miCuenta.depositar(500);
miCuenta.retirar(300);
miCuenta.retirar(1500);
