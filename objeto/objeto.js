const pessoa = {
    nome: "Henrique",
    sobrenome: "Góes",
    idade: 16,
    time: "Palmeiras",
    nomeCompleto: function () { return this.nome + " " + this.sobrenome},
    meuObjeto: function() {return this}//retorna o próprio objeto
};

console.log(pessoa.nomeCompleto() + " tem " +
    pessoa.idade + " anos e torce para o " + pessoa.time
)


const pessoaStringificada = JSON.stringify(pessoa);
console.log(pessoaStringificada)

const pessoaParseada = JSON.parse(pessoaStringificada);