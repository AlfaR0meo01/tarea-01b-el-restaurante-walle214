import Tiempo from './modulos/Tiempo.js'
const tiempo = new Tiempo(9, 35, 'pm');

const probarTiempo = _ => {
    console.log(
        tiempo.getFormato12(),
        tiempo.getFormato24());
}
probarTiempo();