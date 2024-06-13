
var valores = [true, false, 2, "hola", "mundo", 3, "char"];


const elementosTexto = valores.filter(elemento => typeof elemento === "string");
let textoMayor = "";
elementosTexto.forEach(texto => {
    if (texto.length > textoMayor.length) {
        textoMayor = texto;
    }
});
console.log("Imprime el texto que tiene mas cantidad de letras.")
console.log(textoMayor)

const textosOrdenados = elementosTexto.sort((a, b) => a.length - b.length);
console.log("Elementos de texto ordenados por la cantidad de letras:");
console.log(textosOrdenados);

const numeros = valores.filter(elemento => typeof elemento === "number");
const suma = numeros.reduce((acc, curr) => acc + curr, 0);
const resta = numeros.reduce((acc, curr) => acc - curr);
const multiplicacion = numeros.reduce((acc, curr) => acc * curr, 1);
const division = numeros.reduce((acc, curr) => acc / curr);

console.log("Resultado de las operaciones matemáticas básicas:");
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
