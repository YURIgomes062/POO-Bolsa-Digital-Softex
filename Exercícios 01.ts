// Crie uma classe que modele um aluno de academia:
// Atributos: Nome, data de nascimento, peso e altura.
// Métodos: Calcula idade.

class Aluno_Academia {
    nome: String;
    data_de_nascimento: String;
    peso: Number;
    altura: Number;

    constructor(nome: string, data_de_nascimento: String, peso: Number, altura: Number) {
        this.nome = nome;
        this.data_de_nascimento = data_de_nascimento;
        this.peso = peso;
        this.altura = altura;
    }

    calcular_idade(): Number {
        let data_atual = new Date();
        const dataNascimento = new Date(this.data_de_nascimento.toString());
        

        let idade = data_atual.getFullYear() - dataNascimento.getFullYear();

        const mesAtual = data_atual.getMonth();
        const mesNascimento = dataNascimento.getMonth();
        const diaAtual = data_atual.getDate();
        const diaNascimento = dataNascimento.getDate();

      
        if (mesAtual < mesNascimento || mesAtual === mesNascimento && diaAtual < diaNascimento) {
            
            idade--; 
        }

        return idade;
    }
}



const alunoExemplo = new Aluno_Academia("João da Silva", "1990-10-25", 90.0, 1.75);


const idadeAluno = alunoExemplo.calcular_idade();

console.log(`O aluno ${alunoExemplo.nome} nasceu em ${alunoExemplo.data_de_nascimento}.`);
console.log(`Idade calculada: ${idadeAluno} anos.`); 