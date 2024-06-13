function EncontrarPrimerVocal(texto) {
    const vocales = "aeiouáéíóú";
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i].toLowerCase())) {
            return { vocal: texto[i], posicion: i + 1 };
        }
    }
    return { vocal: null, posicion: -1 };
}

const texto = prompt("Introduce un texto:");
const { vocal, posicion } = encontrarPrimerVocal(texto);

if (vocal) {
    alert(`La primera vocal en el texto es '${vocal}' en la posición ${posicion}.`);
} else {
    alert("No se encontraron vocales en el texto.");
}

    