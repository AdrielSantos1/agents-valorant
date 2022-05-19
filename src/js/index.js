/* 
    Objetivo 1 - quando passar o mouse em cima do agente temos que: 

        - colocar a classe selecionado no agente que passamos o mouse em cima para adicionar a animação nele.

        - retirar a classe selecionado do agente que já está selecionado.

    Objetivo 2 - quando passar o mouse em cima do agente, trocar a imagem e nome do agente grande:

        - alterar a imagem do agente grande
        - alterar nome do agente grande

*/

const agentes = document.querySelectorAll('.agente')

agentes.forEach((agente) => {
    agente.addEventListener('mouseenter', () => {
        const agenteSelecionado = document.querySelector('.selecionado', '.ef-glow')
        agenteSelecionado.classList.remove('selecionado', 'ef-glow')

        agente.classList.add('selecionado', 'ef-glow')

        const idSelecionado = agente.attributes.id.value;

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1')
        const nomeSelecionado = agente.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;



    });
});

