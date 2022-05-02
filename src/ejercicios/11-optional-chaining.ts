/*
    ===== Código de TypeScript: Encadenamiento opcional =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];

}

const pasajero1: Pasajero = {
    nombre: 'Daniela'
}

const pasajero2: Pasajero = {
    nombre: 'Ruth',
    hijos: ['Gabriela']
}

function imprimeHijos(pasajero: Pasajero): void  {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);