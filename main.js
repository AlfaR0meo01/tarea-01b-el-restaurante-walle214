import Tiempo from './modulos/Tiempo.js'
import Precio from './modulos/Precio.js';
import Fecha from './modulos/Fecha.js';
import Direccion from './modulos/Direccion.js';
import Cliente from './modulos/Cliente.js';
import Producto from './modulos/Producto.js';

const tiempo = new Tiempo(9, 35, 'pm');
const precio = new Precio(256.1);
const ulisesFechaNacimiento = new Fecha(24, 9, 2000);
const ulisesDireccion = new Direccion('Belisario Dominguez', '39A', undefined, 'Obrera', 28510, 'Queseria', 'Cuahutemoc');
const ulisesCliente = new Cliente('Ulises Ramirez', ulisesDireccion, 3123398831);
const producto1 = new Producto('Pizza grande mexicana', precio);
const producto2 = new Producto('Orden grande de sopes', new Precio(65.20));

const probarTiempo = _ =>
    console.log(
        tiempo.getFormato12(),
        tiempo.getFormato24()
    );

probarTiempo();

const probarFecha = _ =>
    console.log(
        ulisesFechaNacimiento.getAnnios(),
        ulisesFechaNacimiento.getDiaFecha(),
        ulisesFechaNacimiento.getDias(),
        ulisesFechaNacimiento.getFecha(),
        ulisesFechaNacimiento.getMeses(),
        ulisesFechaNacimiento.getSemanas()
    );

probarFecha();

const probarDireccion = _ =>
    console.log(
        ulisesDireccion.getFormatoCorto(),
        '\n',
        ulisesDireccion.getFormatoLargo()
    );
probarDireccion();

const probarCliente = _ => console.log(ulisesCliente.getPerfil());
probarCliente();

const probarPrecio = _ => console.log(precio.getPrecio());
probarPrecio();

const probarProducto = _ => console.log(producto1.getDescripcion());
probarProducto();