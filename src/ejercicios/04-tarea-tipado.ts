/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number,
    direccion: {
        calle: string;
        pais: string;
        ciudad: string;
    };
    mostrarDireccion: () => string;

}


const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Mian St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

interface Direccion {
    calle: string;
    pais: string,
    ciudad: string;
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion)
