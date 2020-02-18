import Tiempo from './modulos/Tiempo.js'
import Precio from './modulos/Precio.js';
const tiempo = new Tiempo(9, 35, 'pm');
const precio = new Precio(62562543.016);
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

