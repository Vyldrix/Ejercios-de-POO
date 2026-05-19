// 1. SRP - Principio de Responsabilidad Única

// Código que viola el principio 

class Usuario {
    nombre: string;
    email: string;

    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }

    guardarUsuario(): void {
        // Lógica para guardar en base de datos
        console.log(`Guardando ${this.nombre} en BD`);
    }

    enviarEmail(mensaje: string): void {
        // Lógica para enviar email
        console.log(`Enviando email a ${this.email}: ${mensaje}`);
    }

    validarEmail(): boolean {
        // Lógica de validación
        return this.email.includes("@");
    }
}

// Código que no viola el principio

class Usuario {
        constructor(public nombre: string, public email: string) {} 

        validarEmail(): boolean {
            return this.email.includes("@");
        }
    } 

    class UsuarioRepositorio {
        guardar(usuario: Usuario): void {
            console.log(`Guardando ${usuario.nombre} en BD`);
        } 

        cargar(id: number): void {
            // Lógica para cargar usuario
        }
    } 

    class EmailService {
        enviarEmail(usuario: Usuario, mensaje: string): void {
            console.log(`Enviando email a ${usuario.email}: ${mensaje}`);
        }
    } 

    // Uso
    const usuario = new Usuario("Juan", "juan@email.com");
    const repositorio = new UsuarioRepositorio();
    const emailService = new EmailService(); 

    repositorio.guardar(usuario);
    emailService.enviarEmail(usuario, "Bienvenido!");
}

// 2. OCP - Principio Abierto/Cerrado

// Código que viola el principio 

class CalculadoraArea {
        calcularArea(forma: string, datos: any): number {
            if (forma === "circulo") {
                return 3.1416 * Math.pow(datos.radio, 2);
            } else if (forma === "rectangulo") {
                return datos.ancho * datos.alto;
            } else if (forma === "triangulo") {
                return (datos.base * datos.altura) / 2;
            }
            return 0; // Cada nueva forma requiere modificar esta clase
        }
}

// Código que no viola el principio 

// Usamos una interfaz en lugar de una clase abstracta para mayor limpieza en TS
interface Forma {
    calcularArea(): number;
} 

class Circulo implements Forma {
    constructor(public radio: number) {} 

    calcularArea(): number {
        return 3.1416 * Math.pow(this.radio, 2);
    }
} 

class Rectangulo implements Forma {
    constructor(public ancho: number, public alto: number) {} 

    calcularArea(): number {
        return this.ancho * this.alto;
    }
} 

class Triangulo implements Forma {
    constructor(public base: number, public altura: number) {} 

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
} 

class CalculadoraArea {
    calcularAreaTotal(formas: Forma[]): number {
        return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
    }
} 

// Uso - Ahora podemos agregar nuevas formas sin modificar CalculadoraArea
const formas: Forma[] = [
    new Circulo(5),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
]; 

const calculadora = new CalculadoraArea();
const areaTotal = calculadora.calcularAreaTotal(formas);
console.log(`Área total: ${areaTotal}`);

// 3. LSP - Principio de Sustitución de Liskov

// Código que viola el principio

class Rectangulo {
        constructor(protected ancho: number, protected alto: number) {} 

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

    class Cuadrado extends Rectangulo {
        constructor(lado: number) {
            super(lado, lado);
        } 

        setAncho(ancho: number): void {
            this.ancho = ancho;
            this.alto = ancho;  // Viola LSP - comportamiento inesperado
        } 

        setAlto(alto: number): void {
            this.alto = alto;
            this.ancho = alto;  // Viola LSP - comportamiento inesperado
        }
    } 

    // Este código falla porque Cuadrado no se comporta como Rectangulo
    function probarRectangulo(rectangulo: Rectangulo): void {
        rectangulo.setAncho(5);
        rectangulo.setAlto(4);
        
        if (rectangulo.calcularArea() !== 20) {
            throw new Error("Violación de LSP detectada: el área no es 20"); // Fallará con Cuadrado
        }
}

// Código que no viola los principios 

interface Forma {
        calcularArea(): number;
    } 

    class Rectangulo implements Forma {
        constructor(public ancho: number, public alto: number) {} 

        calcularArea(): number {
            return this.ancho * this.alto;
        }
    } 

    class Cuadrado implements Forma {
        constructor(public lado: number) {} 

        calcularArea(): number {
            return Math.pow(this.lado, 2);
        }
    } 

    // Ahora ambas clases son sustituibles sin comportamientos ocultos
    function calcularAreaTotal(formas: Forma[]): number {
        return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
    } 

    // Uso
    const formasParaMedir: Forma[] = [new Rectangulo(5, 4), new Cuadrado(3)];
    const totalArea = calcularAreaTotal(formasParaMedir);
    console.log(`Área total: ${totalArea}`);
