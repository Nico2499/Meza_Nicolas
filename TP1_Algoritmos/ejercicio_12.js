
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformacion() {
        return `Vehículo: ${this.marca} ${this.modelo} ${this.año}`;
    }
}


class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: ${this.precio}`;
    }
}


const vehiculoGenerico = new Vehiculo("MarcaGenérica", "ModeloGenérico", 2022);
const automovilEjemplo = new Automovil("Toyota", "Corolla", 2020, "Rojo", 25000);


console.log(vehiculoGenerico.obtenerInformacion());
console.log(automovilEjemplo.obtenerInformacion());

