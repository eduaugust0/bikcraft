function livro (nome, ano, autor) {
  nome = nome.toUpperCase();
  lancamento = 2026 - ano;
  frase = nome + " por " + autor;
  return carcateristicas = {
    nome: nome, lancado: lancamento + " anos", frase: frase
  }
}

let resultado = livro('O senhor dos aneis', 1954, 'j r r tolkien')

console.log(resultado)

function book(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totalAnos = 2026 - ano;
  const frase = nome + ' por ' + autor;
  const objeto = {
    nome: nomeMaior,
    totalAnos,
    frase,
  };
  return objeto
}

const livroRetorno = book("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno.frase)