const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji decepcionado"/>'

let linhas = ''


form.addEventListener('submit', function(e){
  e.preventDefault();

  adicionaLinha();
  atualizaPagina();
})


function adicionaLinha() {
  const NomeAtividade = document.getElementById('nome-atividade')
  const NotaAtividade = document.getElementById('nota-atividade')

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