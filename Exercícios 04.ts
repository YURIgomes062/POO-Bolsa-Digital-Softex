/* Faça um programa que simule um televisor criando-o como um objeto:
    O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume.
    Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas. */

class TV{
    num_canal:number
    volume:number
        constructor(num_canal:number, volume:number){
            this.num_canal = num_canal
            this.volume = volume
        }
    aumentar_volume(vol:number){
        console.log(`\n------------------------------------------------------------------------`)
        console.log(`Para baixar ou diminuir o volume escreva no seguinte formato -> -5 ou +5`)
        console.log(`------------------------------------------------------------------------\n`)
        this.volume = this.volume + vol
        console.log(`OK,o volume foi aumentado para ${this.volume}`)
    }
    informar_canal(): void{
        console.log(`O canal atual é o de número ${this.num_canal}`)
    }
    trocar_canal(num_canal:number){
        this.num_canal = num_canal
        console.log(`\nO canal foi trocado, o canal atual é o de número ${this.num_canal}`)
    }
}
const tv_yuri = new TV(4,65) // canal 4 e volume 65
tv_yuri.aumentar_volume(5)
tv_yuri.informar_canal()
tv_yuri.trocar_canal(9)
