type Eleccion = 'Piedra' | 'Papel' | 'Tijera';

const elecciones: Eleccion[] = ['Piedra', 'Papel', 'Tijera'];

let puntajeJugador = 0;
let puntajeMaquina = 0;

function obtenerEleccionMaquina(): Eleccion {
    const indiceAleatorio = Math.floor(Math.random() * elecciones.length);
    return elecciones[indiceAleatorio];
}

function determinarGanador(eleccionJugador: Eleccion, eleccionMaquina: Eleccion): string {
    if (eleccionJugador === eleccionMaquina) {
        return 'Empate';
    }

    if (
        (eleccionJugador === 'Piedra' && eleccionMaquina === 'Tijera') ||
        (eleccionJugador === 'Papel' && eleccionMaquina === 'Piedra') ||
        (eleccionJugador === 'Tijera' && eleccionMaquina === 'Papel')
    ) {
        puntajeJugador++;
        actualizarPuntajes();
        return '¡Ganaste!';
    }

    puntajeMaquina++;
    actualizarPuntajes();
    return 'Perdiste';
}

function actualizarPuntajes(): void {
    const elementoPuntajeJugador = document.getElementById('puntaje-jugador');
    const elementoPuntajeMaquina = document.getElementById('puntaje-maquina');

    if (elementoPuntajeJugador) {
        elementoPuntajeJugador.textContent = puntajeJugador.toString();
    }

    if (elementoPuntajeMaquina) {
        elementoPuntajeMaquina.textContent = puntajeMaquina.toString();
    }
}

function jugar(eleccionJugador: Eleccion): void {
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

//eventos
document.getElementById('piedra')?.addEventListener('click', () => jugar('Piedra'));
document.getElementById('papel')?.addEventListener('click', () => jugar('Papel'));
document.getElementById('tijera')?.addEventListener('click', () => jugar('Tijera'));