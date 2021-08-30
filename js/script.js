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

// let nombre = document.getElementById('nombre');
// let apellido = document.getElementById('apellido');
// let submit = document.getElementById('submit');

// const listaNombre = []
// let cantidad = 5;

// for (const hotel of hoteles) {
//     console.log(hotel.hotel);
// }

// const productos = [
//     { id: 1, producto: 'Arroz' },
//     { id: 2, producto: 'Fideo' },
//     { id: 3, producto: 'Pan' }
// ];

// for (const x of productos) {
//     console.log(x.id);
//     console.log(x.producto);
// }

// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumarIva() {
//         this.precio = this.precio * 1.21;
//     }
// }

// const productos = [];
// productos.push(new Producto('arroz', '125'));
// productos.push(new Producto('pilas', '100'));
// productos.push(new Producto('zapatillas', '3200'));

// for (const producto of productos) {
//     producto.sumarIva()
//     console.log(producto.precio);
// }

// const numeros = [1, 2, 3, 4, 5];

// const encontrado = numeros.find(elemento => elemento > 3);

// console.log(encontrado);

// hoteles.forEach(x => console.log(x));

// hoteles.forEach(x => console.log(x.hotel))

// console.log(hoteles[0].hotel.length);

const datosHoteles = [{
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
        habitacion2: 'doble',
        habitacion3: 'triple',
        servicio1: 'all inclusive',
        servicio2: 'media pension',
        servicio3: 'desayuno'
    },
    {
        hotel: 'Hotel Grand Bavaro',
        habitacion1: 'suite',
        habitacion2: 'doble',
        habitacion3: 'triple',
        servicio1: 'all inclusive',
        servicio2: 'media pension',
        servicio3: 'desayuno'
    },
];

let numero = [1, 2, 3, 4, 5]
console.log(numero[0]);


// for (const hotel of hoteles) {
//     console.log(hotel.hotel);

// }


let submit = document.getElementById('submit')
let hoteles = document.getElementById('hoteles')


// function mostrarHoteles() {
//     datosHoteles.forEach(hotel => {

//         let tarjetas = document.createElement('div');
//         tarjetas.className = 'tarjetas'
//         tarjetas.innerHTML = `
//         <h4>${hotel.hotel}</h4>
//         <div>
//             <h5>Tipo de habitacion</h5>
//             <ul>
//                 <li>${hotel.habitacion1}</li>
//                 <li>${hotel.habitacion2}</li>
//                 <li>${hotel.habitacion3}</li>
//             </ul>

//         </div>
//         <div>
//             <h5>Servicios</h5>
//             <ul>
//                 <li>${hotel.servicio1}</li>
//                 <li>${hotel.servicio2}</li>
//                 <li>${hotel.servicio3}</li>
//                 </ul>
//         </div>
//         `
//         hoteles.appendChild(tarjetas)

//     })
// }

// submit.onclick = () => (mostrarHoteles(), submit.onclick = null)

// PRUEBA DOS


// let botonSeleccion = document.getElementById('btnSelection');
// botonSeleccion.className = 'tarjetaBtn'
// botonSeleccion.onclick = () => alert('Elegiste la mejor opcion!')


function mostrarHotelPuntaCana() {
    let tarjetas = document.createElement('div');
    tarjetas.className = 'tarjetas';
    tarjetas.innerHTML = `<h4>${datosHoteles[0].hotel}</h4>
    <div>
    <h5>Tipo de habitacion</h5>
    <ul>
    <li>${datosHoteles[0].habitacion1}</li>
    <li>${datosHoteles[0].habitacion2}</li>
    <li>${datosHoteles[0].habitacion3}</li>
    </ul>
    
    </div>
    <div>
    <h5>Servicios</h5>
    <ul>
    <li>${datosHoteles[0].servicio1}</li>
    <li>${datosHoteles[0].servicio2}</li>
    <li>${datosHoteles[0].servicio3}</li>
    </ul>
    </div>
    
    <button id='btnSelection1'>seleccionar</button>`


    hoteles.appendChild(tarjetas)
    let botonSeleccion1 = document.getElementById('btnSelection1');
    botonSeleccion1.className = 'tarjetaBtn';
    botonSeleccion1.onclick = () => alert('Elegiste Hotel Punta Cana! La mejor opcion!');
}

function mostrarHotelDominica() {
    let tarjetas = document.createElement('div');
    tarjetas.className = 'tarjetas';
    tarjetas.innerHTML = `<h4>${datosHoteles[1].hotel}</h4>
            <div>
            <h5>Tipo de habitacion</h5>
                <ul>
                <li>${datosHoteles[1].habitacion1}</li>
                <li>${datosHoteles[1].habitacion2}</li>
                <li>${datosHoteles[1].habitacion3}</li>
            </ul>
    
            </div>
            <div>
                <h5>Servicios</h5>
                <ul>
                    <li>${datosHoteles[1].servicio1}</li>
                    <li>${datosHoteles[1].servicio2}</li>
                    <li>${datosHoteles[1].servicio3}</li>
                    </ul>
                    </div>
                    
                    <button id='btnSelection2'>seleccionar</button>`


    hoteles.appendChild(tarjetas)
    let botonSeleccion2 = document.getElementById('btnSelection2');
    botonSeleccion2.className = 'tarjetaBtn';
    botonSeleccion2.onclick = () => alert('Elegiste Hotel Dominica! La mejor opcion!');
}

function mostrarHotelGrandBavaro() {
    let tarjetas = document.createElement('div');
    tarjetas.className = 'tarjetas';
    tarjetas.innerHTML = `<h4>${datosHoteles[1].hotel}</h4>
            <div>
            <h5>Tipo de habitacion</h5>
                <ul>
                <li>${datosHoteles[2].habitacion1}</li>
                <li>${datosHoteles[2].habitacion2}</li>
                <li>${datosHoteles[2].habitacion3}</li>
            </ul>
    
            </div>
            <div>
                <h5>Servicios</h5>
                <ul>
                    <li>${datosHoteles[2].servicio1}</li>
                    <li>${datosHoteles[2].servicio2}</li>
                    <li>${datosHoteles[2].servicio3}</li>
                    </ul>
            </div>

<button id='btnSelection3'>seleccionar</button>`


    hoteles.appendChild(tarjetas)
    let botonSeleccion3 = document.getElementById('btnSelection3');
    botonSeleccion3.className = 'tarjetaBtn';
    botonSeleccion3.onclick = () => alert('Elegiste Hotel Grand Bavaro! La mejor opcion!');
}

// mostrarHotelPuntaCana();
// mostrarHotelDominica();
// mostrarHotelGrandBavaro()
submit.onclick = () => (mostrarHotelPuntaCana(), mostrarHotelDominica(), mostrarHotelGrandBavaro(), submit.onclick = null); //El evento solo puede ser clickeado 1 SOLA VEZ