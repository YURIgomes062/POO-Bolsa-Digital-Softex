/* Crie uma hierarquia de classes com Animal sendo a classe base e Gato e Pássaro como subclasses
Implemente métodos específicos para cada animal.
Faça o commit para o github
Poste o link do repositório */

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log(`${this.nome} faz um som indefinido.`);
    }
}


class Gato extends Animal {

    emitirSom() {
        console.log(`${this.nome} faz: Miau!`);
    }
}


class Pássaro extends Animal {

    emitirSom() {
        console.log(`${this.nome} faz: Piu piu!`);
    }
}

const meuGato = new Gato('Frajola');
const meuPassaro = new Pássaro('Pássaro');



meuGato.emitirSom();
meuPassaro.emitirSom();
