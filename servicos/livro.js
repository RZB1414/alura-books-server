const fs = require('fs')

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
    const livros = getTodosLivros()
    return livros.filter(livro => livro.id === id)
}

function insereLivro(livroNovo) {
    const livros = getTodosLivros()
    const novaListaDeLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = getTodosLivros()
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoModificado = {...livrosAtuais[indiceModificado], ...modificacoes}
    livrosAtuais[indiceModificado] = conteudoModificado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivro(id){
    const livros = getTodosLivros()
    const listaFiltrada = livros.filter(livro => livro.id !== id)
    fs.writeFileSync('livros.json', JSON.stringify(listaFiltrada))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}