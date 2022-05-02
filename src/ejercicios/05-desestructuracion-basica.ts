/*
    ===== Código de TypeScript =====
*/

export interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mes',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

/**
 * Desestructuración de Objetos
 */

// const { volumen: vol, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;
const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// console.log('El volumen actual de: ', vol);
// console.log('El segudno actual es : ', segundo);
// console.log('La cancion actual es: ', reproductor.cancion);
// console.log('El autor es: ', autor);


/**
 * Desestructuración de Arreglos
 * Importa el orden   
 */

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2 ] = dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', dbz[2]);
