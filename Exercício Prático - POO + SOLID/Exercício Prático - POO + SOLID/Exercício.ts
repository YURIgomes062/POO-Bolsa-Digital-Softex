/*  Você é um desenvolvedor em uma plataforma de streaming de jogos online. Uma
    funcionalidade central do sistema é a capacidade de um jogador entrar em diferentes estados de jogo. Os estados possíveis são: Offline, Online, Em Jogo, Pausado, Desconectado conforme as seguintes regras de negócio:
    Todo jogador começa no estado "Offline".

    O jogador "Offline" pode mudar para "Online".
    Um jogador "Online" pode entrar em "Em Jogo" ou ir para "Offline".
    Um jogador "Em Jogo" pode ir para "Pausado" ou "Desconectado".
    Um jogador "Pausado" pode voltar para "Em Jogo" ou ir para "Desconectado".
    Um jogador "Desconectado" volta para "Offline".
    No entanto, a classe Jogador atual está tentando lidar com a lógica de todos os estados possíveis. O código da classe Jogador está a seguir
*/
class Jogador{
    private estado: string;

    constructor() {
        this.estado = "Offline";
    }

    ficarOnline(): void {
        if (this.estado === "Offline") {
            this.estado = "Online";
            console.log("Jogador agora está online.");
        } else {
            // Em TypeScript, a string de falha longa é comum para cobrir todos os casos.
            console.log("Falha: não pode ficar online se já estiver online, em jogo, pausado ou desconectado.");
        }
    }

    iniciarJogo(): void {
        if (this.estado === "Online") {
            this.estado = "Em Jogo";
            console.log("Jogador agora está em jogo.");
        } else {
            console.log("Falha: não pode iniciar jogo se estiver offline, em jogo, pausado ou desconectado.");
        }
    }

   
}