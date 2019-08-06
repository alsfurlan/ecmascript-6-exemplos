// ES 5
var helloWorld1 = function() {
    return "Hello World!";
}

function helloWorld2() {
    return "Hello World!";
}

// ES 6
var helloWorld3 = () => {
    return "Hello World!";
}

var helloWorld4 = () => "Hello World!";

console.log(helloWorld1());
console.log(helloWorld2());
console.log(helloWorld3());
console.log(helloWorld4());
