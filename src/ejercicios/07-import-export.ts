/*
    ===== Código de TypeScript =====
*/
// Esta exportado desde el archivo 05.
import { Producto, calculaISV } from "./06-desestruracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 150
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);