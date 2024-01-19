let numeroSecreto = Math.round(Math.random())
let erros = 0;
let segundos = 60;
let inicio = 0;

function selecaoDificuldade(){
    if(checkFacil.checked == true){
        numeroSecreto = Math.round(Math.random()*50);
        alert("Dificuldade selecionada ! Aperte o botão começar jogo para iniciar o jogo !")
        btnJogo.hidden = false;
    }
    else if(checkMedio.checked == true){
        numeroSecreto = Math.round(Math.random()*100);
        alert("Dificuldade selecionada ! Aperte o botão começar jogo para iniciar o jogo !")
        btnJogo.hidden = false;
    }
    else if (checkDificil.checked == true){
        numeroSecreto = Math.round(Math.random()*1000)
        alert("Dificuldade selecionada ! Aperte o botão começar jogo para iniciar o jogo !")
        btnJogo.hidden = false;
    }
    else if (checkExtremo.checked == true){
        numeroSecreto = Math.round(Math.random()*5000);
        alert("Dificuldade selecionada ! Aperte o botão começar jogo para iniciar o jogo !")
        btnJogo.hidden = false;
    }
    else {
        alert("Dificuldade inválida, tente novamente !")
    }
}

function botaoAcionado(){
    let numeroDigitado = entrada.value;
    console.log(numeroSecreto)

    if(numeroDigitado == numeroSecreto){
        impressao.innerHTML = "<strong>Parabéns, você acertou o número secreto ! O número secreto é </strong>" + numeroSecreto;
        btnVerificar.disabled = true;
        entrada.disabled = true;
        clearInterval(intervalo2);
        alert("Você precisou de " + (60-segundos) + " segundos para acertar o número secreto.");
        btnReiniciar.hidden = false;
    } else if (numeroDigitado < numeroSecreto){
        impressao.innerHTML = "<strong>O número secreto é maior do que o digitado !</strong>";
        erros++;
        setTimeout(limpaImpressao, 2000);

    } else if (numeroDigitado > numeroSecreto){
        impressao.innerHTML = "<strong>O número secreto é menor do que o digitado !</strong>";
        setTimeout(limpaImpressao, 2000);
        erros++;
    }
    
    blocoErros.innerHTML = "<strong>Erros: " + erros + "</strong>";

    valoresErrados.innerHTML += entrada.value + "<br/>";

}

function limpaImpressao(){
    impressao.textContent = "";
}

function verificaErros(){
    
    if(checkErros.checked == true){
        valoresErrados.hidden = true;
    } else if(checkErros.checked == false){
        valoresErrados.hidden = false;
    }
}

function bloqueioInputs(){
    btnVerificar.disabled = true;
    entrada.disabled = true;
}

function Contador(){
    segundos--;
    contador.innerHTML = "00:00:" + segundos;

    if (segundos == 0){
        alert("O Tempo acabou, o número secreto era o " + numeroSecreto);
        clearInterval(intervalo2);
        btnReiniciar.hidden = false;
    }
    else{

    }
}

function Timer(){
    intervalo1 = setTimeout(bloqueioInputs, 60000);
    intervalo2 = setInterval(Contador, 1000);
    container.hidden = false;
    timer.hidden = false;
    btnJogo.hidden = true;
    menu.hidden = true;
}

function Reiniciar(){
    container.hidden = true;
    timer.hidden = true;
    menu.hidden = false;
    btnReiniciar.hidden = true;
    btnVerificar.disabled = false;
    entrada.disabled = false;
    
    entrada.value = "";
    impressao.innerHTML = "";
    blocoErros.innerHTML = "";
    erros = 0;
    valoresErrados.innerHTML = "";
    
    segundos = 60;
    contador.innerHTML = "00:00:" + segundos;
}