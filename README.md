# 05-dwbe-node-poo

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
- Atributo estático `contador` para rastrear quantos carros foram criados
- Atributos de instância: `marca`, `modelo` e `ano`
- Método `exibir()` que mostra as informações do carro e o contador total

**Desafio:** Permita que o usuário insira os dados de 3 carros via teclado (use `prompt-sync` ou solicite via console.log/prompt).

---

## 2: Classe Pessoa com ID Único (Atributo Privado Estático)
Crie uma classe `Pessoa` que:
- Possua um atributo privado estático `proximoId` iniciando em 1
- Cada instância receba um `id` único (incrementado automaticamente)
- Tenha atributos de instância: `nome` e `email`
- Possua um getter para acessar o ID

**Desafio:** Crie uma função que leia dados de 2 pessoas do usuário e exiba seus IDs únicos.

---

## 3: Classe Conversor com Métodos Estáticos
Crie uma classe `Conversor` com os seguintes métodos estáticos:
- `celsiusParaFahrenheit(celsius)` - converte temperatura
- `quilometrosParaMilhas(km)` - converte distância
- `quilosParaLibras(kg)` - converte peso

**Desafio:** Crie um menu interativo que permita o usuário escolher qual conversão fazer e inserir o valor a ser convertido.

---

## 4: Classe Retângulo com Perímetro
Crie uma classe `Retangulo` com:
- Atributo estático `totalRetangulos` que conta quantos retângulos foram criados
- Atributos de instância: `base` e `altura`
- Método getter `area` que calcula a área
- Método getter `perimetro` que calcula o perímetro
- Método `exibir()` que mostra todas as informações

**Desafio:** Permita que o usuário crie 4 retângulos com dados inseridos via teclado e exiba suas informações.

---

## 5: Classe Estudante com Controle de Matrículas
Crie uma classe `Estudante` com:
- Atributo privado estático `proximaMatricula` iniciando em 1001
- Cada instância receba uma matrícula única
- Atributos de instância: `nome`, `curso` e `nota`
- Método getter para retornar a matrícula
- Método `aprovado()` que retorna true se a nota >= 7.0

**Desafio:** Crie um programa que permita cadastrar 3 estudantes com dados do teclado, exiba todas as matrículas e mostre quem foi aprovado.

