class GeradorDeId {
    // Atributo estático e privado:
    static #id = 0;

    constructor() {
        // Acesso apenas internamente pela classe:
        GeradorDeId.#id++;
    }

    // Método estático público para ler o último valor de id gerado:
    static getId() {
        return GeradorDeId.#id;
    }
}

const item1 = new GeradorDeId();
let id1 = item1.constructor.getId(); // Retorna: 1

const item2 = new GeradorDeId();
let id2 = item2.constructor.getId(); // Retorna: 2

console.log(`ID1: ${id1}`); // Saída: 1
console.log(`ID2: ${id2}`); // Saída: 2

// Acesso via método estáticopúblico:
console.log(`Último ID gerado: ${GeradorDeId.getId()}`); // Saída: 2

// 2. Erro ao tentar acessar direto de fora:
// console.log(GeradorDeId.#ultimoId); // -> Erro: Private field '#ultimoId' must be declared in an enclosing class.
