class Helice {
    private numHelices: number = 0;
    public constructor(n: number) {
        this.numHelices = n;
    }
    public ToString() {
        return this.numHelices + " hélice/s";
    }

}

class TrendeAterrizaje {
    private numNeumaticos: number = 0;
    private numAmortiguadores: number = 0;
    private fijoRetractil: boolean = false;
    public constructor(a: number, b: number, c: boolean) {
        this.numNeumaticos = a;
        this.numAmortiguadores = b;
        this.fijoRetractil = c;
    }
    public ToString() {
        let mensaje: string = "Tren de Aterrizaje compuesto por: ";
        if (this.fijoRetractil) {
            mensaje += " con Retractil fijo, ";
        }
        mensaje += this.numNeumaticos + " neumáticos, " + this.numAmortiguadores + " amoriguadores ";
        return mensaje;
    }
}

class Cubierta {
    private cabinaTripulacion: boolean = false;
    private cabinaVuelo: boolean = false;
    private sistemaEmergencia: boolean = false;
    private numTanquesCombustible: number = 0;
    private numPuertasSalidas: number = 0;
    public constructor(pCabinaTripulacion: boolean, pCabinaVuelo: boolean, pSistemaEmergencia: boolean, pTanquesCombustible: number, pPuertasSalida: number) {
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }

    public ToString() {
        let mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo) {
            mensaje += " Cubierta de Vuelo, ";
        }
        if (this.cabinaTripulacion) {
            mensaje += " Cubierta de Tripulación, ";
        }
        if (this.sistemaEmergencia) {
            mensaje += " Sistema de Emergencia, ";
        }
        mensaje += this.numTanquesCombustible + " Tanques de Combustible, ";
        mensaje += this.numPuertasSalidas + " Puertas de Salida.";
        return mensaje;
    }
}

class Alas {
    private numAlasFrente: number = 0;
    private numAlasCola: number = 0;
    public constructor(mAlasFrente: number, nAlasCola: number) {
        this.numAlasFrente = mAlasFrente;
        this.numAlasCola = nAlasCola;
    }

    public ToString() {
        return "Alas Frontales: " + this.numAlasFrente + " Alas Posteriore: " + this.numAlasCola;
    }

}

class Aeroplano {
    private helice: Helice;
    private trenAterrizaje: TrendeAterrizaje;
    private alas: Alas;
    private cubierta: Cubierta;

    constructor(phelice: Helice, pTrenAterrizaje: TrendeAterrizaje, pAlas: Alas, pCubierta: Cubierta) {
        this.helice = phelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }
    public ToString() {
        let mensaje = "Aeroplano compuesto por: ";
        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;

    }
}

let helice: Helice = new Helice(3);
let trenAterrizaje: TrendeAterrizaje = new TrendeAterrizaje(2, 3, true);
let alas: Alas = new Alas(2, 3);
let cubierta: Cubierta = new Cubierta(true, true, true, 4, 4);

let aeroplano = new Aeroplano(helice, trenAterrizaje, alas, cubierta);
console.log(aeroplano.ToString());

// Respuestas: 

// 1. Relaciones de Jerarquía
// Aeroplano tiene una relación de composición con Helice, TrenAterrizaje, Alas y Cubierta.
// Helice tiene una relación de composición con Turbina.
// TrenAterrizaje tiene una relación de composición con Neumatico y Amortiguador.
// Cubierta tiene una relación de composición con TanqueCombustible y PuertaSalida.
// Alas tiene una relación de composición con Ala.

// 2. Implementación de las Formas de Asociación

// A. Agregación (Vínculo Débil)
// Es lo que tienes en tu código original. 
// Las partes se crean fuera del aeroplano y se le pasan (inyectan). 
// Si el aeroplano "muere", las partes pueden seguir existiendo en el programa.

// Las partes existen independientemente
let miHelice = new Helice(3); 

// Se agregan al aeroplano
let aeroplano = new Aeroplano(miHelice, tren, alas, cubierta);

// B. Composición (Vínculo Fuerte)
// Aquí, el Aeroplano es responsable de crear sus propias partes.
// Las partes no tienen sentido ni existencia fuera del objeto padre. 
// Si el aeroplano se destruye, sus partes también.

class AeroplanoComposicion {
    private helice: Helice;
    private alas: Alas;

    constructor() {
        // La composición ocurre AQUÍ: el objeto padre instancia a sus hijos
        this.helice = new Helice(4);
        this.alas = new Alas(2, 1);
    }
}

// 3. Diferencia en Tiempo de Ejecución


// 1. La Agregación (Vínculo débiL)
// El Aeroplano es un garaje y la Hélice es un coche.
// En ejecución:Primero creas el coche y luego lo metes al garaje. 
// Vida propia: Si decides "demoler" el garaje (borrar el objeto Aeroplano),
// el coche (la Hélice) sigue existiendo afuera porque fue creado de forma independiente. 
// Memoria: El programa mantiene la Hélice en la memoria aunque el Aeroplano ya no exista.

// 2. La Composición (Vínculo fuerte)
// El Aeroplano es un cuerpo humano y la Hélice es el corazón.
// En ejecución:Uno no crea el corazón por un lado y el cuerpo por otro para luego juntarlos.
// Cuando creas el cuerpo, el corazón nace dentro de él automáticamente.
// Vida dependiente:Si el cuerpo muere (borras el objeto Aeroplano),
// el corazón muere al mismo tiempo.
// No tiene sentido que el corazón siga "vivo" en el programa si no hay un cuerpo que lo contenga.
// Memoria: El programa limpia todo de una sola vez.
// Si el Aeroplano desaparece, sus partes desaparecen instantáneamente de la memoria.

