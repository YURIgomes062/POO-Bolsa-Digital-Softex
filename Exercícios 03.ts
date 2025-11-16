/* Crie uma classe que modele uma conta corrente:

Atributos: número da conta, nome do correntista e saldo.

Métodos: alterar nome, depósito e saque. */


class Conta_corrente {
    private num_conta: number
    public nome_correntista: string
    public saldo: number
    constructor(num_conta: number, nome_correntista: string, saldo: number) {
        this.num_conta = num_conta
        this.nome_correntista = nome_correntista
        this.saldo = saldo
    }

    alterar_nome(novo_nome: string): void {
        this.nome_correntista = novo_nome
        console.log(`Troca de nome, seu novo nome é ${novo_nome}`)
    }

    saque(valor_saque: number): void {
        if (this.saldo > 0 && this.saldo >= valor_saque) {
            let valor_sacado = valor_saque
            console.log(`\nVocê sacou R$${valor_sacado} de R$${this.saldo}`)
            let saldo_atual = this.saldo - valor_saque
            console.log(`\nSeu saldo atual é R$${saldo_atual}\n`)
        }else {
            console.log(`\nO saque não está disponivel, [você não possui saldo].\n`)
        }
        
    }
    deposito(valor_deposito:number,nome_recebe:string,conta_deposito:number):void{
         if (this.saldo > 0 && this.saldo >= valor_deposito){
            let saldo_atual = this.saldo - valor_deposito
            console.log(`Muito bem, você realizou um deposito para ${nome_recebe} proprietário da conta ${conta_deposito}, no valor de ${valor_deposito}\n`)
            console.log(`Seu saldo atual é ${saldo_atual}\n`)
         
        }else 
            {
            console.log(`\nO deposito não está disponivel, [você não possui saldo].\n`)
        }
    }
}
const conta_yuri = new Conta_corrente (451236,`YURi`,500)
let name_conta = conta_yuri.nome_correntista
console.log(`\nOlá, ${name_conta}, seja bem vindo a sua conta corrente\n`)
conta_yuri.alterar_nome(`Yuri Gomes`);
conta_yuri.saque(50);
conta_yuri.deposito(20,`rafael`,2589463);