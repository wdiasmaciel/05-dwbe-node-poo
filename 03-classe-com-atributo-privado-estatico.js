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

const item1 = new GeradorDeId().getId(); // Retorna: 1
const item2 = new GeradorDeId().getId(); // Retorna: 2

cosole.log(`item1 ID: ${item1}`); // Saída: 1
console.log(`item2 ID: ${item2}`); // Saída: 2

// Acesso correto via método público:
console.log(GeradorDeId.getId()); // Saída: 2

// 2. Erro ao tentar acessar direto de fora:
// console.log(GeradorDeId.#ultimoId); // -> Erro: Private field '#ultimoId' must be declared in an enclosing class.
