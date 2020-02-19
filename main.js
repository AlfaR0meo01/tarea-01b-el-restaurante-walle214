import Tiempo from './modulos/Tiempo.js'
import Precio from './modulos/Precio.js';
import Fecha from './modulos/Fecha.js';
import Direccion from './modulos/Direccion.js';

const tiempo = new Tiempo(9, 35, 'pm');
const precio = new Precio(62562543.016);
const ulisesFechaNacimiento = new Fecha(24, 9, 2000);
const ulisesDireccion = new Direccion('Belisario Dominguez', '39A', undefined, 'Obrera', 28510, 'Queseria', 'Cuahutemoc');

const probarTiempo = _ => {
    console.log(
        tiempo.getFormato12(),
        tiempo.getFormato24());
}
probarTiempo();
const probarPrecio = _ => {
    console.log(precio.getPrecio());
}
probarPrecio();

const probarFecha = _ => {
    console.log(
        ulisesFechaNacimiento.getAnnios(),
        ulisesFechaNacimiento.getDiaFecha(),
        ulisesFechaNacimiento.getDias(),
        ulisesFechaNacimiento.getFecha(),
        ulisesFechaNacimiento.getMeses(),
        ulisesFechaNacimiento.getSemanas()
    );
}
probarFecha();

const probarDireccion = _ => {
    console.log(ulisesDireccion.getFormatoCorto(), '\n',ulisesDireccion.getFormatoLargo());
}
probarDireccion();