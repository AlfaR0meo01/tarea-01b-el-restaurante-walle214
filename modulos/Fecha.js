export default class Fecha {
    /**
     * 
     * @param {String} dia Dia del mes
     * @param {String} mes Mes del año, comienza en 0(Enero)
     * @param {String} annio Año de la fecha
     */
    constructor(dia, mes, annio) {
        this.fecha = new Date(annio, mes, dia);
    }
    getMsecTrascurridos = _ => Date.now() - this.fecha;

    getAnnios = _ => Math.trunc(this.getMsecTrascurridos() / 31557600000);

    getMeses = _ => Math.trunc(this.getMsecTrascurridos() / 2629800000);

    getSemanas = _ => Math.trunc(this.getMsecTrascurridos() / 604800000);

    getDias = _ => Math.trunc(this.getMsecTrascurridos() / 86400000);

    getFecha = _ => {
        const meses = ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agto', 'Sept', 'Oct', 'Nov', 'Dic'];
        return `${this.fecha.getDate()}/${meses[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`;
    }
    getDiaFecha = _ => {
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return dias[this.fecha.getDay()];
    }
}