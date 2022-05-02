/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) { }

}

class Heroe extends PersonaNormal {
    
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'New Yorsk, Usa');
    }
}

const ironman = new Heroe('Ironman', 10, 'Tony');
console.log(ironman);