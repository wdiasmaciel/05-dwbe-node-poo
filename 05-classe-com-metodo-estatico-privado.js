import promptSync from 'prompt-sync';

class Retangulo {
    static #area(base, altura) { // Método estático privado, método estático privado da classe.
        let resp = parseFloat(base) * parseFloat(altura); 
        return resp.toFixed(2);
    }
    getArea(base, altura) { // Método de instância, método do objeto. Acesso ao método estático privado.
        return Retangulo.#area(base, altura);
    }
}

// Inicia a função de prompt:
const prompt = promptSync();

let base = prompt("Informe a base do retângulo: ");
let altura = prompt("Informe a altura do retângulo: ");

let ret = new Retangulo();
console.log("Área: " + ret.getArea(base, altura));
