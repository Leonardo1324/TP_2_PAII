"use strict";
var _a, _b, _c;
const elecciones = ['Piedra', 'Papel', 'Tijera'];
let puntajeJugador = 0;
let puntajeMaquina = 0;
function obtenerEleccionMaquina() {
    const indiceAleatorio = Math.floor(Math.random() * elecciones.length);
    return elecciones[indiceAleatorio];
}
function determinarGanador(eleccionJugador, eleccionMaquina) {
    if (eleccionJugador === eleccionMaquina) {
        return 'Empate';
    }
    if ((eleccionJugador === 'Piedra' && eleccionMaquina === 'Tijera') ||
        (eleccionJugador === 'Papel' && eleccionMaquina === 'Piedra') ||
        (eleccionJugador === 'Tijera' && eleccionMaquina === 'Papel')) {
        puntajeJugador++;
        actualizarPuntajes();
        return '¡Ganaste!';
    }
    puntajeMaquina++;
    actualizarPuntajes();
    return 'Perdiste';
}
function actualizarPuntajes() {
    const elementoPuntajeJugador = document.getElementById('puntaje-jugador');
    const elementoPuntajeMaquina = document.getElementById('puntaje-maquina');
    if (elementoPuntajeJugador) {
        elementoPuntajeJugador.textContent = puntajeJugador.toString();
    }
    if (elementoPuntajeMaquina) {
        elementoPuntajeMaquina.textContent = puntajeMaquina.toString();
    }
}
function jugar(eleccionJugador) {
    const eleccionMaquina = obtenerEleccionMaquina();
    const resultado = determinarGanador(eleccionJugador, eleccionMaquina);
    const elementoResultado = document.getElementById('resultado');
    if (elementoResultado) {
        elementoResultado.innerHTML = `
            Tú elegiste: ${eleccionJugador}<br>
            La máquina eligió: ${eleccionMaquina}<br>
            Resultado: ${resultado}
        `;
    }
}
// Escuchadores de eventos
(_a = document.getElementById('piedra')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => jugar('Piedra'));
(_b = document.getElementById('papel')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => jugar('Papel'));
(_c = document.getElementById('tijera')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => jugar('Tijera'));
