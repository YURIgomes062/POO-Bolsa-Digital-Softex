
class Avaliacao_fisica {
    // Tipos de Atributos (Propriedades)
    private id_matricula: number;
    private data_de_matricula: string;
    public aluno: string;
    public avaliacoes_qualquer: string;

    constructor(id_matricula: number, data_de_matricula: string, aluno: string, avaliacoes_qualquer: string) {
        this.id_matricula = id_matricula;
        this.data_de_matricula = data_de_matricula;
        this.aluno = aluno;
        this.avaliacoes_qualquer = avaliacoes_qualquer;
    }

    conhecer(): void {
        let aluno1 = prompt(`Qual seu nome? `);

        while (aluno1.trim() != "")
            aluno1 = prompt(`Por favor, forneça um nome válido:`)

        if (aluno1 != null && aluno1.trim() !== "") {
            this.aluno = aluno1;
            console.log(`\nSeja Bem-vindo ${this.aluno}, Iremos te avaliar.\n`);
        }
    }


    avaliar(): void {

        const pergunta1 = (prompt(`\nVocê pratica alguma atividade física? (Sim/Não) `) ?? "").toLowerCase();

        if (pergunta1 === "sim") {
            const pergunta2 = prompt(`Com que frequência? -> Exemplo(Corro 3 vezes na semana)\n`) ?? "";

            if (typeof pergunta2 == "string") {
                this.avaliacoes_qualquer = `Sim, com a frequência: ${pergunta2}`;
                console.log(`[Ok! Obrigado, estou preparando sua ficha, Aguarde um momento...]`);
            }

        } else if (pergunta1 == "não" || pergunta1 == "nao") {

            this.avaliacoes_qualquer = `Não, é Sedentário.`;
            console.log(`[Registrado como Sedentário.]`);

        } else {
            // Caso a resposta não seja Sim ou Não
            this.avaliacoes_qualquer = `Resposta inválida: "${pergunta1}"`;
        }
    }
}

const yuri_aluno_novo = new Avaliacao_fisica(1, "27/10/2025", "Yuri (Inicial)", "Sou sedentário");

const nome_aluno_inicial = yuri_aluno_novo.aluno;

yuri_aluno_novo.conhecer();
yuri_aluno_novo.avaliar();

console.log(`Nome Inicial: ${nome_aluno_inicial}`);
console.log(`Nome Atual (após conhecer): ${yuri_aluno_novo.aluno}`);
console.log(`Status de Atividade: ${yuri_aluno_novo.avaliacoes_qualquer}`);
