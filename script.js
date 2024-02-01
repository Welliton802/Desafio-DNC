const perg = [
    {
        question: "Em qual aspecto da programação você se sente mais atraído?",
        a: " Desenvolvimento de software para aplicações web",
        b: "Programação de sistemas embarcados e dispositivos de baixo nível",
        c: "Análise de dados e desenvolvimento de algoritmos para inteligência artificial"
    },
    {
        question: "Qual tipo de projeto você gostaria de trabalhar?",
        a: "Desenvolvimento de jogos e aplicativos interativos",
        b: "Construção de sistemas de controle e automação",
        c: "Desenvolvimento de soluções para processamento de grandes volumes de dados"
    },
    {
        question: "Qual ambiente de trabalho você prefere?",
        a: "Trabalhar em equipes ágeis, desenvolvendo projetos de software iterativos",
        b: "Colaborar em projetos de hardware, integrando software e eletrônica",
        c: "Envolvimento em projetos de pesquisa e inovação, explorando novas tecnologias"
    },
    {
        question: "Em qual plataforma ou dispositivo você gostaria de concentrar seus esforços?",
        a: " Desenvolvimento de aplicativos móveis para iOS e Android",
        b: "Programação de sistemas embarcados para IoT (Internet das Coisas)",
        c: "Construção de soluções escaláveis para a nuvem (cloud computing)"
    }
]





var perguntasIndex = 0;  // Inicia com a primeira pergunta

var buttonAlternativas = document.getElementById('button-alternativas');
buttonAlternativas.style.display = 'none';

var prox = document.getElementById('prox');
prox.style.display = 'none';

function cmc() {
    buttonAlternativas.style.display = 'flex';
    prox.style.display = 'flex';
    var cmc = document.getElementById('cmc');
    cmc.style.display = 'none';

    mostrarPergunta();
    
}

function mostrarPergunta() {
    var quest = document.getElementById('quest');
    var op1 = document.getElementById('op1');
    var op2 = document.getElementById('op2');
    var op3 = document.getElementById('op3');

    quest.innerHTML = perg[perguntasIndex].question;
    op1.innerHTML = perg[perguntasIndex].a;
    op2.innerHTML = perg[perguntasIndex].b;
    op3.innerHTML = perg[perguntasIndex].c;

    op1.classList.remove('selecionado')
    op2.classList.remove('selecionado')
    op3.classList.remove('selecionado')
}
function selecionarBotao(id){
    var op1 = document.getElementById('op1')
    var op2 = document.getElementById('op2')
    var op3 = document.getElementById('op3')
   if (id === 'op2' || op2 != op1 || op2 != op3) {
    op2.style.backgroundColor = 'blue'
   }
   else if (id === 'op1' || op1 != op2 || op1!= op3){
    
    op1.style.backgroundColor = 'blue'
   }
   else if (id === 'op3' || op3 != op1 || op3 != op2){
    op3.style.backgroundColor ='blue'
}
}
function selecionarBotao(id) {
    var op1 = document.getElementById('op1');
    var op2 = document.getElementById('op2');
    var op3 = document.getElementById('op3');

    // Desmarca todas as alternativas
    op1.checked = false;
    op2.checked = false;
    op3.checked = false;

    // Marca a alternativa clicada
    document.getElementById(id).checked = true;

    // Altera a cor de fundo da alternativa clicada
    if (id === 'op2') {
        op2.style.backgroundColor = 'blue';
        op1.style.backgroundColor = ''; // Limpa a cor de fundo das outras
        op3.style.backgroundColor = '';
    } else if (id === 'op1') {
        op1.style.backgroundColor = 'blue';
        op2.style.backgroundColor = '';
        op3.style.backgroundColor = '';
    } else if (id === 'op3') {
        op3.style.backgroundColor = 'blue';
        op1.style.backgroundColor = '';
        op2.style.backgroundColor = '';
    }
}

function limparSelecoes() {
    var op1 = document.getElementById('op1');
    var op2 = document.getElementById('op2');
    var op3 = document.getElementById('op3');

    // Limpa as seleções e a cor de fundo
    op1.checked = false;
    op2.checked = false;
    op3.checked = false;

    op1.style.backgroundColor = '';
    op2.style.backgroundColor = '';
    op3.style.backgroundColor = '';
}

var respostasUsuario = []

var btn = document.getElementById('prox');
btn.addEventListener("click", function clickou() {

    var op1 = document.getElementById('op1');
    var op2 = document.getElementById('op2');
    var op3 = document.getElementById('op3');
 
        // Verifica se alguma alternativa foi selecionada
        if (!(op1.checked || op2.checked || op3.checked)) {
            // Se nenhuma opção foi selecionada, você pode adicionar um alerta ou outra mensagem para informar o usuário.
            alert("Por favor, selecione uma opção antes de prosseguir.");
            return;
        }
    

    // Verifica qual alternativa foi selecionada
    if (op1.checked) {
        respostasUsuario.push('a');
    } else if (op2.checked) {
        respostasUsuario.push('b');
    } else if (op3.checked) {
        respostasUsuario.push('c');
    }

    if (perguntasIndex < perg.length - 1) {
        perguntasIndex++;
        mostrarPergunta(); 
        limparSelecoes();
    } else {
        // O usuário atingiu a última pergunta, pode adicionar um comportamento diferente aqui, como exibir um resultado.
        btn.style.display = 'none'; 
        buttonAlternativas.style.display = 'none';
        var outro = document.getElementById('outro')
        outro.style.marginTop = '100px'
        outro.innerHTML = `total de questões:  ${perguntasIndex + 1}`

        orientarNaTecnologia(respostasUsuario)
    
    }
});

function orientarNaTecnologia(respostas) {
    const pontuacao = {
        a: 0,
        b: 0,
        c: 0,
    };

    // Analisar respostas e atribuir pontuações
    respostas.forEach((resposta, indice) => {
        pontuacao[resposta] += perg[indice][resposta];
    });

    // Identificar a opção com maior pontuação
    const opcaoSelecionada = Object.keys(pontuacao).reduce((opcaoMax, opcao) => {
        return pontuacao[opcao] > pontuacao[opcaoMax] ? opcao : opcaoMax;
    }, 'a');

    // Fornecer orientação com base na opção selecionada
    var fim = document.getElementById('final')
    
    switch (opcaoSelecionada) {
        case 'a':
            fim.innerHTML = "Recomendamos que você explore o Desenvolvimento de Software para aplicações web."
            break;
        case 'b':
            fim.innerHTML = "Sugerimos que você direcione seus esforços para a Programação de Sistemas Embarcados e Dispositivos de Baixo Nível."
            break;
        case 'c':
            fim.innerHTML = "É possível que seu perfil se encaixe bem na Análise de Dados e Desenvolvimento de Algoritmos para Inteligência Artificial."
            break;
        default:
            fim.innerHTML = "Não foi possível determinar uma recomendação clara. Considere revisar suas respostas."
            break;
    }
    fim.style.marginTop = '-70%'
}

