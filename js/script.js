const hoteles = [{
        hotel: 'Hotel Punta Cana',
        habitacion1: 'suite',
        habitacion2: 'doble',
        habitacion3: 'triple',
        servicio1: 'all inclusive',
        servicio2: 'media pension',
        servicio3: 'desayuno'
    },
    {
        hotel: 'Hotel Dominica',
        habitacion1: 'suite',
        habitacion2: 'doible',
        habitacion3: 'triple',
        servicio1: 'all inclusive',
        servicio2: 'media pension',
        servicio3: 'desayuno'
    },
    {
        hotel: 'Hotel Grand Bavaro',
        habitacion1: 'suite',
        habitacion2: 'doible',
        habitacion3: 'triple',
        servicio1: 'all inclusive',
        servicio2: 'media pension',
        servicio3: 'desayuno'
    },
];

console.log(hoteles.toString());

// const numeros = [1, 2, 3, 4, 5];
// for (let i = 0; i < 6; i++) {
//     console.log(numeros[i]);
// }

// console.log(typeof(numeros.toString()));

// numeros.push(true);

// console.log(numeros);

// numeros.push(10);

// console.log(numeros);

// numeros.push([0], 11);

// console.log(numeros);

// console.log(numeros[7]);

// console.log(numeros.join('y'));

// const numerosHoteles = hoteles.concat(numeros);

// console.log(numerosHoteles);

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let submit = document.getElementById('submit');

const listaNombre = []
let cantidad = 5;

for (const hotel of hoteles) {
    console.log(hotel.hotel);
}

// const productos = [
//     { id: 1, producto: 'Arroz' },
//     { id: 2, producto: 'Fideo' },
//     { id: 3, producto: 'Pan' }
// ];

// for (const x of productos) {
//     console.log(x.id);
//     console.log(x.producto);
// }

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto('arroz', '125'));
productos.push(new Producto('pilas', '100'));
productos.push(new Producto('zapatillas', '3200'));

for (const producto of productos) {
    producto.sumarIva()
    console.log(producto.precio);
}

const numeros