/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b);
}

const sumFlecha = (a: number, b: number) => {
    return a + b;
}


function multiplicar(numero: number, otroNumero?: number, base: number = 2) {
    return numero * base;
}

interface PersonajeLDR {
    nombre: string;
    pv: number;
    mostrarHP: (a: number, b: string, c: boolean) => void;
}

function curar(personaje: PersonajeLDR, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLDR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHP() {
        console.log(' Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 20)