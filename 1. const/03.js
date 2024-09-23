const pessoa = {
    nome: 'João',
    sobrenome: 'Alves'
};

console.log(pessoa);

pessoa.nome = 'José';

console.log(pessoa);

// pessoa = {
//     genero: 'M',
//     dataNascimento: new Date()
// }

pessoa.genero = 'F';

console.log(pessoa);

delete pessoa.genero;

console.log(pessoa);
