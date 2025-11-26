/* Crie uma classe que modele uma bomba de combustível:
Atributos: tipo de combustível, valor do litro, quantidade do combustível.
Métodos:
Abastecer por valor: método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo.
Abastecer por litro: método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
Alterar o valor do litro do combustível: altera o valor do litro do combustível.
Alterar quantidade de combustível: altera a quantidade de combustível restante na bomba.
Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. A bomba inicia com 100 L de combustível. */

// Gasolina Comum: R\(6,34(Janeiro2025)aR\) 6,47 (Maio 2025) 
// Etanol: R\(4,545(Janeiro2025)aR\) 4,502 (Maio 2025)
// Gasolina Aditivada: R$ 6,52 (Janeiro 2025)
// Diesel S10: R\(5,98(Janeiro2025)aR\) 6,38 (Maio 2025) 
// https://frotas.localiza.com/blog/preco-da-gasolina-no-brasil 16/11/2025

class Bomba_combustivel {
    type_fuel: string
    value_liter: number
    rest_fuel?: number
    constructor(type_fuel: string, value_liter: number, rest_fuel: number) {
        this.type_fuel = type_fuel
        this.value_liter = value_liter
        this.rest_fuel = rest_fuel
    }
    fuel_value(valor: number) { // tradução ptg -> Abastecer por valor
        let typefuel: string = this.type_fuel.toLocaleLowerCase() // variavel do combustivel, só que em caixa baixa
        if (this.rest_fuel > 0) {
            if (typefuel == "gasolina comum") {

                this.value_liter = 6.47
                let litros: number = valor / this.value_liter
                console.log(`\nMuito Bem, você abasteceu ${litros} litros \n`)
                this.rest_fuel = this.rest_fuel - litros
                console.log(`\nA quantidade de litros restante na bomba é de ${this.rest_fuel}l\n`)

            } else if (typefuel == "etanol") {

                this.value_liter = 4.502
                let litros: number = valor / this.value_liter
                console.log(`\nMuito Bem, você abasteceu ${litros} litros \n`)
                this.rest_fuel = this.rest_fuel - litros
                console.log(`\nA quantidade de litros restante na bomba é de ${this.rest_fuel}l\n`)

            } else if (typefuel == "gasolina aditivada") {

                this.value_liter = 6.52
                let litros: number = valor / this.value_liter
                console.log(`\nMuito Bem, você abasteceu ${litros} litros \n`)
                this.rest_fuel = this.rest_fuel - litros
                console.log(`\nA quantidade de litros restante na bomba é de ${this.rest_fuel}l\n`)

            } else if (typefuel == "diesel" ) { 

                this.value_liter = 6.38
                let litros: number = valor / this.value_liter
                console.log(`\nMuito Bem, você abasteceu ${litros} litros \n`)
                this.rest_fuel = this.rest_fuel - litros
                console.log(`\nA quantidade de litros restante na bomba é de ${this.rest_fuel}l\n`)
            }
        }else{
             console.log(`\n---------------------------------------------------------------`)
            console.log(` O combustível da bomba acabou, volte novamente em outra hora!!`)
            console.log(`----------------------------------------------------------------\n`)
        }
    }
    fuel_liter(liter: number) { // tradução ptg -> Abastecer por litro
        let typefuel: string = this.type_fuel.toLocaleLowerCase() // variavel do combustivel, só que em caixa baixa
        if (this.rest_fuel > 0) {
            if (typefuel == "gasolina comum") {

                this.value_liter = 6.47
                let value: number = liter * this.value_liter
                console.log(`\nMuito Bem, você abasteceu ${liter} litros \n`)
                this.rest_fuel = this.rest_fuel - value
                console.log(`\nA quantidade de litros restante na bomba é de ${this.rest_fuel}l\n`)

            } else if (typefuel == "etanol") {

                this.value_liter = 4.502
                let value: number = liter * this.value_liter
                console.log(`\nMuito Bem, você abasteceu ${liter} litros \n`)
                this.rest_fuel = this.rest_fuel - value
                console.log(`\nA quantidade de litros restante na bomba é de ${this.rest_fuel}l\n`)

            } else if (typefuel == "gasolina aditivada") {

                this.value_liter = 6.52
                let value: number = liter * this.value_liter
                console.log(`\nMuito Bem, você abasteceu ${liter} litros \n`)
                this.rest_fuel = this.rest_fuel - value
                console.log(`\nA quantidade de litros restante na bomba é de ${this.rest_fuel}l\n`)

            } else if (typefuel == "diesel") {

                this.value_liter = 6.38
                let value: number = liter * this.value_liter
                console.log(`\nMuito Bem, você abasteceu ${liter} litros \n`)
                this.rest_fuel = this.rest_fuel - value
                console.log(`\nA quantidade de litros restante na bomba é de ${this.rest_fuel}l\n`)
            }
        } else{
             console.log(`\n---------------------------------------------------------------`)
            console.log(` O combustível da bomba acabou, volte novamente em outra hora!!`)
            console.log(`----------------------------------------------------------------\n`)
        }
    }
    change_value(fuel: number) { // tradução ptg -> alterar Valor do Litro
        this.value_liter = fuel
        console.log(`\nVocê aumentou o valor em R$${fuel}`)
    }
    change_amountLtr(num: number) { // tradução ptg -> alterar quantidade de litro restante
        this.rest_fuel = this.rest_fuel + num
        console.log(`Você aumentou em ${num}L a quantidade de combustível na bomba\n`)
    }

}
const bomba_yuri = new Bomba_combustivel("etanol", 5, 100) // formato -> tipo de combustivel / preço do combustivel e quantidade de litro na bomba
bomba_yuri.fuel_value(50) // 50 reais
bomba_yuri.fuel_liter(20) // 20 litros
bomba_yuri.change_value(7.0) // 07 reais
bomba_yuri.change_amountLtr(100) // aumentei em mais 100L a quantidade de combustivel na bomba.