const entrada = document.querySelector("#entrada");
const btnVerificar = document.querySelector("#btnVerificar");
const impressao = document.querySelector("#impressao");
const blocoErros = document.querySelector("#erros");
const valoresErrados = document.querySelector("#valoresErrados");
const checkErros = document.querySelector("#checkErros");
const btnReiniciar = document.querySelector("#btnReiniciar");
const btnJogo = document.querySelector("#btnJogo");
const timer = document.querySelector("#timer");
const contador = document.querySelector("#contador");
const container = document.querySelector("#container");
const menu = document.querySelector("#menu");
const checkFacil = document.querySelector("#facil");
const checkMedio = document.querySelector("#normal");
const checkDificil = document.querySelector("#dificil");
const checkExtremo = document.querySelector("#extremo");
const btnDificuldade = document.querySelector("#btnDificuldade");

container.hidden = true;
timer.hidden = true;
btnJogo.hidden = true;
btnReiniciar.hidden = true;

btnVerificar.addEventListener("click", botaoAcionado);
checkErros.addEventListener("click", verificaErros);
btnJogo.addEventListener("click", Timer)
btnDificuldade.addEventListener("click", selecaoDificuldade)
btnReiniciar.addEventListener("click", Reiniciar)

