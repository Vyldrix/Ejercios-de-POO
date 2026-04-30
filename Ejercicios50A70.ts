// Ejercicio 50 y 52: Igualdad o el mayor de dos números
function compararNumeros(a: number, b: number): void {
    if (a === b) {
        console.log("Los números son iguales.");
    } else if (a > b) {
        console.log("El mayor es: " + a);
    } else {
        console.log("El mayor es: " + b);
    }
}

// EJEMPLOS DE USO:
// compararNumeros(10, 5); // Imprime: El mayor es: 10
// compararNumeros(3, 3);  // Imprime: Los números son iguales.

// Ejercicio 53: Evaluación de positivos
function evaluarPositivos(a: number, b: number): void {
    // && significa "Y" (ambas condiciones deben cumplirse)
    if (a > 0 && b > 0) {
        console.log("Los dos números son positivos.");
    } 
    // || significa "O" (al menos una condición debe cumplirse)
    else if (a > 0 || b > 0) {
        console.log("Solo uno de los números es positivo.");
    } 
    else {
        console.log("Ningún número es positivo.");
    }
}

// EJEMPLOS DE USO:
// evaluarPositivos(5, 8);   // Imprime: Los dos números son positivos.
// evaluarPositivos(-2, 4);  // Imprime: Solo uno de los números es positivo.

// Ejercicio 54: El mayor de tres números
function mayorDeTres(a: number, b: number, c: number): void {
    if (a >= b && a >= c) {
        console.log("El mayor es: " + a);
    } else if (b >= a && b >= c) {
        console.log("El mayor es: " + b);
    } else {
        console.log("El mayor es: " + c);
    }
}

// EJEMPLOS DE USO:
// mayorDeTres(10, 25, 5); // Imprime: El mayor es: 25

// Ejercicio 55: Valor absoluto
function mostrarValorAbsoluto(numero: number): void {
    // El operador condicional funciona así: (condicion) ? valor_si_es_verdad : valor_si_es_falso
    let absoluto = (numero >= 0) ? numero : -numero;
    console.log("El valor absoluto es: " + absoluto);
}

// EJEMPLOS DE USO:
// mostrarValorAbsoluto(-15); // Imprime: El valor absoluto es: 15
// mostrarValorAbsoluto(8);   // Imprime: El valor absoluto es: 8

// Ejercicio 56: El menor de dos números con operador condicional
function menorDeDos(a: number, b: number): number {
    let menor = (a < b) ? a : b;
    return menor;
}

// EJEMPLOS DE USO:
// let resultado = menorDeDos(10, 4);
// console.log(resultado); // Imprime: 4

// Ejercicio 57: Switch para nombrar números del 1 al 5
function nombrarNumero(numero: number): void {
    switch (numero) {
        case 1:
            console.log("uno");
            break; // El break es importante para que no siga ejecutando los de abajo
        case 2:
            console.log("dos");
            break;
        case 3:
            console.log("tres");
            break;
        case 4:
            console.log("cuatro");
            break;
        case 5:
            console.log("cinco");
            break;
        default:
            console.log("El número no está entre 1 y 5");
            break;
    }
}

// EJEMPLOS DE USO:
// nombrarNumero(3); // Imprime: tres
// nombrarNumero(9); // Imprime: El número no está entre 1 y 5

// Ejercicio 58: Clasificar puntuación o cifra
function clasificarCaracter(letra: string): void {
    switch (letra) {
        // Podemos agrupar varios "cases" si todos hacen lo mismo
        case '.': case ',': case ';': case ':':
            console.log("Es un signo de puntuación");
            break;
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            console.log("Es una cifra numérica");
            break;
        default:
            console.log("Es algún otro carácter");
            break;
    }
}

// EJEMPLOS DE USO:
// clasificarCaracter(","); // Imprime: Es un signo de puntuación
// clasificarCaracter("7"); // Imprime: Es una cifra numérica

// Ejercicio 59: Vocales, cifras o consonantes usando switch
function clasificarLetra(letra: string): void {
    let minuscula = letra.toLowerCase(); // Convertimos a minúscula para facilitar
    
    // Un truco en TypeScript/JavaScript para usar condiciones lógicas dentro de un switch
    switch (true) {
        case (minuscula === 'a' || minuscula === 'e' || minuscula === 'i' || minuscula === 'o' || minuscula === 'u'):
            console.log("Es una vocal");
            break;
        case (minuscula >= '0' && minuscula <= '9'):
            console.log("Es una cifra numérica");
            break;
        case (minuscula >= 'a' && minuscula <= 'z'):
            console.log("Es una consonante");
            break;
        default:
            console.log("Es otro carácter distinto");
            break;
    }
}

// EJEMPLOS DE USO:
// clasificarLetra("E"); // Imprime: Es una vocal
// clasificarLetra("Z"); // Imprime: Es una consonante

// Ejercicio 63: Contraseña con While
function pedirContrasena(): void {
    let password = 0;
    
    // Mientras la contraseña sea DISTINTA (!=) de 1111, seguimos preguntando
    while (password !== 1111) {
        let entrada = prompt("Introduce tu contraseña numérica:") || "0";
        password = parseInt(entrada); // Convertimos el texto a número
    }
    
    console.log("¡Contraseña correcta! Ingresaste.");
}

// EJEMPLO DE USO:
// pedirContrasena(); // Abrirá ventanitas hasta que el usuario escriba 1111

// Ejercicio 64: Calculador de cuadrados
function calculadorCuadrados(): void {
    let numero = -1; // Le damos un valor inicial que no sea 0 para que entre al bucle
    
    while (numero !== 0) {
        let entrada = prompt("Introduce un número (0 para salir):") || "0";
        numero = parseInt(entrada);
        
        if (numero !== 0) {
            let cuadrado = numero * numero;
            console.log("El cuadrado de " + numero + " es " + cuadrado);
        }
    }
}

// EJEMPLO DE USO:
// calculadorCuadrados(); // Pide números y muestra su cuadrado hasta que ingreses 0

// Ejercicios 65 y 66: Múltiplos
function verificarMultiplos(num1: number, num2: number): void {
    // El operador % (módulo) saca el resto de una división. 
    // Si el resto es 0, significa que es múltiplo.
    if (num1 % num2 === 0) {
        console.log(num1 + " es múltiplo de " + num2);
    } else if (num2 % num1 === 0) {
        console.log(num2 + " es múltiplo de " + num1);
    } else {
        console.log("Ninguno es múltiplo del otro");
    }
}

// EJEMPLOS DE USO:
// verificarMultiplos(10, 5); // Imprime: 10 es múltiplo de 5
// verificarMultiplos(3, 9);  // Imprime: 9 es múltiplo de 3
// verificarMultiplos(7, 4);  // Imprime: Ninguno es múltiplo del otro

// Ejercicio 67: Números del 1 al 10 con While
function contarHastaDiez(): void {
    let numero = 1;
    
    while (numero <= 10) {
        console.log(numero);
        numero = numero + 1; // Le sumamos 1 para la siguiente vuelta
    }
}

// EJEMPLO DE USO:
// contarHastaDiez(); // Imprime: 1, 2, 3... hasta 10

// Ejercicio 68: Números pares descendentes del 26 al 10
function paresDescendientes(): void {
    let numero = 26;
    
    while (numero >= 10) {
        console.log(numero);
        numero = numero - 2; // Le restamos 2 para que vaya de par en par hacia atrás
    }
}

// EJEMPLO DE USO:
// paresDescendientes(); // Imprime: 26, 24, 22... hasta 10

// Ejercicio 69: Calcular cantidad de cifras (dividiendo entre 10)
function contarCifras(numero: number): number {
    let contador = 0;
    
    // Si es 0, tiene 1 cifra directamente
    if (numero === 0) {
        return 1;
    }

    // Mientras el número sea mayor a 0, lo vamos "achicando"
    while (numero >= 1) {
        numero = Math.trunc(numero / 10); // Math.trunc le quita los decimales
        contador = contador + 1;
    }
    
    return contador;
}

// EJEMPLOS DE USO:
// let cantidad = contarCifras(4500);
// console.log("Tiene " + cantidad + " cifras."); // Imprime: Tiene 4 cifras.

// Ejercicio 70: Adivinar número
function juegoAdivinarNumero(): void {
    // Genera un número del 1 al 10
    let numeroSecreto = Math.floor(Math.random() * 10) + 1; 
    let intentos = 3;
    let ganaste = false;

    console.log("¡Tienes 3 intentos para adivinar un número del 1 al 10!");

    while (intentos > 0 && ganaste === false) {
        let entrada = prompt("Adivina el número:") || "0";
        let intentoUsuario = parseInt(entrada);

        if (intentoUsuario === numeroSecreto) {
            console.log("¡Adivinaste!");
            ganaste = true; // Cambiamos a true para que salga del while
        } else {
            intentos = intentos - 1; // Restamos un intento
            console.log("Incorrecto. Te quedan " + intentos + " intentos.");
        }
    }

    if (ganaste === false) {
        console.log("Perdiste. El número era el " + numeroSecreto);
    }
}

// EJEMPLO DE USO:
// juegoAdivinarNumero(); // Arranca el mini juego en consola