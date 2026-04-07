const input = document.getElementById('nombreInput') as HTMLInputElement;
const boton = document.getElementById('btnSaludar');
const resultado = document.getElementById('resultado');

boton?.addEventListener('click', () => {
    if (input && resultado) {
        resultado.innerText = `Hola, ${input.value}`;
    }
});