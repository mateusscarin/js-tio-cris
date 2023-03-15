/* function Cilindro(r, h) {
    this.raioBase = r;
    this.altura = h;
    this.calcularAreaBase = function () {
        return (Math.PI * (this.raioBase * this.raioBase)).toFixed(2);
    };
    this.calcularVolume = function () {
        return (this.calcularAreaBase() * this.altura).toFixed(2);
    };
    this.calcularAreaLateral = function (){
        return (2 * Math.PI * this.raioBase * this.altura).toFixed(2);
    };
} */

class Cilindro{
    constructor (paramRaio, paramAltura){
        this.raio = paramRaio;
        this.altura = paramAltura;
    }
    calcularAreaBase = function () {
        return (Math.PI * (this.raio * this.raio)).toFixed(2);
    };
    
    calcularVolume = function () {
        return (this.calcularAreaBase() * this.altura).toFixed(2);
    };
    
    calcularAreaLateral = function (){
        return (2 * Math.PI * this.raio * this.altura).toFixed(2);
    };
}

let cilindroUm = new Cilindro(2, 5);
let cilindroDois = new Cilindro(20, 10);

console.log(cilindroUm.calcularAreaBase());
console.log(cilindroUm.calcularVolume());
console.log(cilindroUm.calcularAreaLateral());

console.log(cilindroDois.calcularAreaBase());
console.log(cilindroDois.calcularVolume());
console.log(cilindroDois.calcularAreaLateral());