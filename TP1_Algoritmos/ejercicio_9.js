let i = 0
let notas = []
let suma = 0;

while (i < 5) {   
    let nota = parseInt(prompt("Ingrese la Nota N°" + i));
    if (nota >= 0 && nota < 11) { 
        notas[i] = nota;
        suma += notas[i];
        i++;
    } else { 
        alert ("Nota superior a 10, ingrese otro valor");
    }        
}    

document.write(suma + "</br>");
let promedio = (suma / notas.length)
document.write(promedio);

if (promedio <= 5) { 
    document.write("Reprobado");
} else if (promedio > 5 &&  promedio <= 8) { 
    document.write("Aprobado");
} else {
    document.write("Sobresaliente");     
}