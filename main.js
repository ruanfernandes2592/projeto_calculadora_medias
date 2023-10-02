const form = document.querySelector('form#form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emojo celebrando" />'
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emojo decepcionado" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("digita a nota mínima"))

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

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>`

    linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
    }
    
function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.querySelector('td#media-final-valor').innerHTML = mediaFinal
    document.querySelector('td#media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}
