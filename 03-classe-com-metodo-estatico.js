import promptSync from 'prompt-sync';

class Retangulo {
    static area(base, altura) { // Método estático, método estático da classe.
        let resp = parseFloat(base) * parseFloat(altura); 
        return resp.toFixed(2);
    }
}

// Inicia a função de prompt:
const prompt = promptSync();

let base = prompt("Informe a base do retângulo: ");
let altura = prompt("Informe a altura do retângulo: ");

console.log("Área: " + Retangulo.area(base, altura));
