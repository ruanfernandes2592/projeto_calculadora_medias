const form = document.querySelector('form#form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emojo celebrando" />'
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emojo decepcionado" />'
const atividades = []
const notas = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})
function adicionaLinha (){
    const inputNomeAtividade = document.querySelector('input#nome-atividade')
    const inputNotaAtividade = document.querySelector('input#nota-atividade')

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>`

    linhas += linha

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
    }

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
    }
    
function atualizaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    console.log(somaDasNotas)
}
