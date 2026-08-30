# 05-dwbe-node-poo

---

# Atividade

## Passo 1: 

Iniciar um projeto Node.js com as configurações padrões:

```bash
npm init -y
```

## Passo 2: 

Abrir o arquivo `package.json` gerado e habilitar o suporte a módulos, adicionando a seguinte linha logo abaixo do campo `main`:

```javascript
"type": "module",
```

**OBS**: caso o arquivo `package.json` tenha a linha abaixo, ela deve ser substituída pela linha `"type": "module",`:
```javascript
  "type": "commonjs",
```

Arquivo `package.json`:
```javascript
{
  "name": "05-dwbe-node-poo",
  "version": "1.0.0",
  "description": "---",
  "main": "01-classe-com-atributo-estatico.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wdiasmaciel/05-dwbe-node-poo.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "bugs": {
    "url": "https://github.com/wdiasmaciel/05-dwbe-node-poo/issues"
  },
  "homepage": "https://github.com/wdiasmaciel/05-dwbe-node-poo#readme"
}
```

## Passo 3: 

Execute o comando abaixo no terminal:

```bash
npm install prompt-sync
```

Observe a inserção da dependência `prompt-sync` na chave `dependencies` do arquivo `package.json` :

```javascript
{
  "name": "05-dwbe-node-poo",
  "version": "1.0.0",
  "description": "---",
  "main": "01-classe-com-atributo-estatico.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wdiasmaciel/05-dwbe-node-poo.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "bugs": {
    "url": "https://github.com/wdiasmaciel/05-dwbe-node-poo/issues"
  },
  "homepage": "https://github.com/wdiasmaciel/05-dwbe-node-poo#readme",
  "dependencies": {
    "prompt-sync": "^4.2.0"
  }
}
```

Observer também a criação do arquivo `package-lock.json` e da pasta `./node_modules`.

---

## Passo 4:

Crie o arquivo `.gitignore` com o conteúdo abaixo:

```text
node_modules
```

## Passo 5: 

Execute o comando abaixo no terminal:

```bash
git add . && git commit -m "Exemplo" && git push
```

## Passo 6: 

Analise e execute os algoritmos da prática no terminal.

Exemplos para executar cada algoritmo rapidamente:

```bash
node 01-classe-com-atributo-estatico.js
```

```bash
node 02-classe-com-atributo-privado-estatico.js
```

Exemplos alternativos para executar cada algoritmo rapidamente:

```bash
node 01*
```

```bash
node 02*
```

---

# Exercícios

## 1: Classe Carro com Atributo Estático
Crie uma classe `Carro` que possua:
- Atributo estático `contador` para rastrear quantos carros foram criados.
- Atributos de instância: `marca`, `modelo` e `ano`.
- Método `exibir()` que mostra as informações do carro e o contador total.
- Permita que o usuário insira os dados de 3 carros via teclado (use `prompt-sync`).

---

## 2: Classe Pessoa com ID Único (Atributo Privado Estático)
Crie uma classe `Pessoa` que:
- Possua um atributo privado estático `proximoId` iniciando em 1.
- Cada instância receba um `id` único (incrementado automaticamente).
- Tenha atributos de instância: `nome` e `email`.
- Possua um getter para acessar o ID.
- Crie uma função que leia dados de uma quantidade indeterminada de pessoas a partir do teclado.
- Crie uma função que exiba os dados das pessoas.

---

## 3: Classe Conversor com Métodos Estáticos
Crie uma classe `Conversor` com os seguintes métodos estáticos:
- `celsiusParaFahrenheit(celsius)` - converte temperatura: `F = (C × 1.8) + 32`.
- `quilometrosParaMilhas(km)` - converte distância: `M = km × 0.621371`.
- `quilosParaLibras(kg)` - converte peso: `L = kg × 2.20462`.
- Crie um menu interativo que permita o usuário escolher qual conversão fazer e inserir o valor a ser convertido a partir do teclado.
- Permitir que o usuário execute as conversões um número indeterminado de vezes.

---

## 4: Classe Retângulo com Perímetro
Crie uma classe `Retangulo` com:
- Atributo estático `totalRetangulos` que conta quantos retângulos foram criados.
- Atributos de instância: `base` e `altura`.
- Método getter `area` que calcula a área.
- Método getter `perimetro` que calcula o perímetro.
- Método `exibir()` que mostra todas as informações.
- Permita que o usuário crie um número indeterminado de retângulos com dados inseridos a partir do teclado.
- Exiba os dados dos retângulos informados.

---

## 5: Classe Estudante com Controle de Matrículas
Crie uma classe `Estudante` com:
- Atributo privado estático `proximaMatricula` iniciando em 1001.
- Cada instância receba uma matrícula única.
- Atributos de instância: `nome`, `curso` e `nota`.
- Método getter para retornar a matrícula.
- Método `aprovado()` que retorna true se a nota >= 7.0.
- Permita cadastrar um número indeterminado de estudantes com dados informados a partir do teclado.
- Exiba todas as matrículas.
- Mostre quem foi aprovado.
