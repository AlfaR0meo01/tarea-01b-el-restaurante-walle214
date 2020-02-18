export default class Precio {
    /**
     * 
     * @param {Number} valor 
     */
    constructor(valor) {
        this.valor = valor;
    }
    getPrecio = _ => {
        const valorString = this.valor.toString();
        const enteros = valorString.includes('.') ? valorString.split('.')[0].split('') : valorString.split('');

        const enterosFormateados = enteros.length <= 3 ? enteros.join('') : enteros.reverse().map((e, i) => (i + 1) % 3 == 0 ? `,${e}` : e).reverse().join('');

        const decimales = valorString.includes('.') ? valorString.split('.')[1][0] + valorString.split('.')[1][1] : [0, 0];
        return `${enterosFormateados}.${decimales}`;
    }
}