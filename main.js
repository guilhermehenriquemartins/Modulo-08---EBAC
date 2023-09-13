const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji decepcionado"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

let linhas = '';


form.addEventListener('submit', function(e){
  e.preventDefault();

  adicionaLinha();
  atualizaPagina();
  atualizaMediaFinal();
})


function adicionaLinha() {
  const NomeAtividade = document.getElementById('nome-atividade')
  const NotaAtividade = document.getElementById('nota-atividade')

  atividades.push(NomeAtividade.value)
  notas.push(parseFloat(NotaAtividade.value))

  let linha = `<tr>`
  linha += `<td>${NomeAtividade.value}</td>`
  linha += `<td>${NotaAtividade.value}</td>`
  linha += `<td>${NotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
  linha += '</tr>'

  linhas += linha

  NomeAtividade.value = ''
  NotaAtividade.value = ''
}


function atualizaPagina() {
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas
}


function atualizaMediaFinal() {
  const notaMedia = calculaMediaFinal()

  document.getElementById('nota-atividade-final').innerHTML = notaMedia;
  document.getElementById('resultado-atividade-final').innerHTML = notaMedia >= 7 ? spanAprovado : spanReprovado
}


function calculaMediaFinal() {
  let somaDasNotas = 0

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }
  
  return somaDasNotas/notas.length
}