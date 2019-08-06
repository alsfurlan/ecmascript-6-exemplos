let frutas = ["maça", "laranja", "pêra"];
let maisFrutas = ["uva", "pêssego", "goiaba"];

let todasFrutas = [frutas, maisFrutas];
console.log(todasFrutas);

todasFrutas = [...frutas, ...maisFrutas];
console.log(todasFrutas);


