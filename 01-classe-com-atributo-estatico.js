import promptSync from 'prompt-sync';

class Retangulo {
    static contador = 0; // Atributo estático, ou atributo de classe.
    constructor(base, altura) { 
        Retangulo.contador++; 
        this.base = base; // Atributo de instância, de cada objeto.
        this.altura = altura; // Atributo de instância, de cada objeto.
    }
    get getContador() { return Retangulo.contador; }
    get area() {
        let resp = parseFloat(this.base) * parseFloat(this.altura); 
        return resp.toFixed(2);
    }
}

// Inicia a função de prompt:
const prompt = promptSync();

let base = prompt("Informe a base do retângulo: ");
let altura = prompt("Informe a altura do retângulo: ");

let ret1 = new Retangulo(base, altura);
console.log("Contador: " + ret1.getContador);
console.log("Área: " + ret1.area);

base = prompt("Informe a base do retângulo: ");
altura = prompt("Informe a altura do retângulo: ");

let ret2 = new Retangulo(base, altura);
console.log("Contador: " + ret2.getContador);
console.log("Área: " + ret2.area);

base = prompt("Informe a base do retângulo: ");
altura = prompt("Informe a altura do retângulo: ");

let ret3 = new Retangulo(base, altura);
console.log("Contador: " + ret3.getContador);
console.log("Área: " + ret3.area);
