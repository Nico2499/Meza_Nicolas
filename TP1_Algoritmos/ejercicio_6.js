let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


let mes = parseInt(prompt("Ingrese un número del 1 al 12 refiriendose a algun mes"));
if (mes >= 0 && mes <= 12) {
    alert(meses[mes - 1])
} else {
    alert("Número equivocado, vuelva a introducir un número")
} 