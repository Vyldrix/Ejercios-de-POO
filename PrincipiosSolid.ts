// PRINCIPIOS SOLID EN TYPESCRIPT


// 1. SRP - Single Responsibility Principle
// (Principio de Responsabilidad Única)

// "Una clase debe tener una sola razón para cambiar."

namespace SRP_Violacion {
    // VIOLACIÓN: Esta clase tiene múltiples responsabilidades:
    // 1. Contener los datos del usuario.
    // 2. Gestionar la base de datos (guardarUsuario).
    // 3. Enviar correos electrónicos (enviarEmail).
    // 4. Validar el formato del correo (validarEmail).
    export class Usuario {
        constructor(public nombre: string, public email: string) { }

        guardarUsuario(): void {
            console.log(`Guardando ${this.nombre} en la base de datos...`);
        }

        enviarEmail(mensaje: string): void {
            console.log(`Enviando email a ${this.email}: ${mensaje}`);
        }

        validarEmail(): boolean {
            return this.email.includes("@");
        }
    }
}

namespace SRP_Solucion {
    // SOLUCIÓN: Separamos las responsabilidades en clases distintas.

    // Responsabilidad: Representar la entidad Usuario y sus validaciones básicas inherentes.
    export class Usuario {
        constructor(public nombre: string, public email: string) { }

        validarEmail(): boolean {
            return this.email.includes("@");
        }
    }

    // Responsabilidad: Persistencia de datos del usuario en la base de datos.
    export class UsuarioRepositorio {
        guardar(usuario: Usuario): void {
            console.log(`Guardando a ${usuario.nombre} en la base de datos...`);
        }
    }

    // Responsabilidad: Manejo y envío de comunicaciones por correo electrónico.
    export class EmailService {
        enviarEmail(usuario: Usuario, mensaje: string): void {
            console.log(`Enviando email a ${usuario.email}: ${mensaje}`);
        }
    }

    // Uso correcto de las clases separadas
    export function ejecutar(): void {
        const usuario = new Usuario("Juan", "juan@email.com");
        const repositorio = new UsuarioRepositorio();
        const emailService = new EmailService();

        if (usuario.validarEmail()) {
            repositorio.guardar(usuario);
            emailService.enviarEmail(usuario, "¡Bienvenido a la plataforma!");
        }
    }
}

// 2. OCP - Open/Closed Principle
// (Principio de Abierto/Cerrado)

// "Las entidades de software deben estar abiertas para su extensión, pero cerradas para su modificación."

namespace OCP_Violacion {
    // VIOLACIÓN: Si queremos agregar una nueva forma (ej. Pentágono),
    // tenemos que modificar la clase CalculadoraArea agregando un nuevo 'else if'.
    export class CalculadoraArea {
        calcularArea(forma: string, datos: any): number {
            if (forma === "circulo") {
                return 3.1416 * Math.pow(datos.radio, 2);
            } else if (forma === "rectangulo") {
                return datos.ancho * datos.alto;
            } else if (forma === "triangulo") {
                return (datos.base * datos.altura) / 2;
            }
            return 0;
        }
    }
}

namespace OCP_Solucion {
    // SOLUCIÓN: Definimos una interfaz común y dejamos que cada forma implemente su lógica.
    // Si queremos una nueva forma, creamos una nueva clase sin tocar el código existente.

    export interface Forma {
        calcularArea(): number;
    }

    export class Circulo implements Forma {
        constructor(public radio: number) { }

        calcularArea(): number {
            return Math.PI * Math.pow(this.radio, 2);
        }
    }

    export class Rectangulo implements Forma {
        constructor(public ancho: number, public alto: number) { }

        calcularArea(): number {
            return this.ancho * this.alto;
        }
    }

    export class Triangulo implements Forma {
        constructor(public base: number, public altura: number) { }

        calcularArea(): number {
            return (this.base * this.altura) / 2;
        }
    }

    // Ahora esta clase está cerrada a la modificación pero abierta a la extensión.
    // Funcionará con cualquier nueva clase que implemente la interfaz Forma.
    export class CalculadoraArea {
        calcularAreaTotal(formas: Forma[]): number {
            return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
        }
    }

    export function ejecutar(): void {
        const formas: Forma[] = [
            new Circulo(5),
            new Rectangulo(4, 6),
            new Triangulo(3, 8)
        ];

        const calculadora = new CalculadoraArea();
        const areaTotal = calculadora.calcularAreaTotal(formas);
        console.log(`Área total calculada (OCP): ${areaTotal.toFixed(2)}`);
    }
}



// 3. LSP - Liskov Substitution Principle
// (Principio de Sustitución de Liskov)

// "Los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar el correcto funcionamiento del programa."

namespace LSP_Violacion {
    export class Rectangulo {
        constructor(protected ancho: number, protected alto: number) { }

        setAncho(ancho: number): void {
            this.ancho = ancho;
        }

        setAlto(alto: number): void {
            this.alto = alto;
        }

        calcularArea(): number {
            return this.ancho * this.alto;
        }
    }

    // VIOLACIÓN: Cuadrado hereda de Rectangulo, pero fuerza a que alto y ancho sean iguales.
    // Esto viola LSP porque un Cuadrado no se comporta de forma intercambiable con un Rectángulo
    // según el contrato implícito de que modificar el ancho no altera el alto.
    export class Cuadrado extends Rectangulo {
        constructor(lado: number) {
            super(lado, lado);
        }

        override setAncho(ancho: number): void {
            this.ancho = ancho;
            this.alto = ancho; // Altera el alto de forma inesperada para un cliente de Rectangulo
        }

        override setAlto(alto: number): void {
            this.alto = alto;
            this.ancho = alto; // Altera el ancho de forma inesperada para un cliente de Rectangulo
        }
    }

    export function probarLSP(): void {
        const rect: Rectangulo = new Cuadrado(5);
        rect.setAncho(10);
        rect.setAlto(5);

        // Si fuera un rectángulo real, el área debería ser 10 * 5 = 50.
        // Pero al ser un Cuadrado camuflado, el área será 5 * 5 = 25.
        console.log(`Área esperada: 50. Área real obtenida: ${rect.calcularArea()}`);
    }
}

namespace LSP_Solucion {
    // SOLUCIÓN: En lugar de forzar una herencia inadecuada, usamos una abstracción más general.
    // Un cuadrado no es simplemente un rectángulo en términos de comportamiento/estado mutable.

    export interface Forma {
        calcularArea(): number;
    }

    export class Rectangulo implements Forma {
        constructor(public ancho: number, public alto: number) { }

        calcularArea(): number {
            return this.ancho * this.alto;
        }
    }

    export class Cuadrado implements Forma {
        constructor(public lado: number) { }

        calcularArea(): number {
            return Math.pow(this.lado, 2);
        }
    }

    // Cualquier objeto que implemente Forma puede ser sustituido aquí de manera segura.
    export function imprimirArea(forma: Forma): void {
        console.log(`Área de la forma: ${forma.calcularArea()}`);
    }

    export function ejecutar(): void {
        const rect = new Rectangulo(10, 5);
        const cuad = new Cuadrado(5);
        imprimirArea(rect); // 50
        imprimirArea(cuad); // 25
    }
}

