/*MATIAS FOURCADE*/

class Vehiculo {
    constructor(marca,modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio
    }
    toString() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo}`;
    }
    toShortString() {
        return `${this.marca} ${this.modelo}`;
    }
}
class Auto extends Vehiculo {
    constructor(marca,modelo,puertas,precio) {
        super(marca,modelo,precio)
        this.puertas = puertas;
    }
    toString() {
        return `${super.toString()} // Puertas: ${this.puertas} // Precio: $${this.precio}`
    }
}
class Moto extends Vehiculo {
    constructor(marca,modelo,cilindrada,precio) {
        super(marca,modelo,precio)
        this.cilindrada = cilindrada
    }
    toString() {
        return `${super.toString()} // Cilindrada: ${this.cilindrada} // Precio: $${this.precio}`;
    }
}
const vehiculos = [new Auto('Peugeout','206','4',200000.00),
                    new Auto('Peugeout','208','5',250000.00),
                    new Moto('Honda', 'Titan', '125c', 60000.00),
                    new Moto('Yamaha', 'YBR', '160c',  80500.50)];

class Concesionaria {
    constructor(vehiculos) {
        this.vehiculos = this.mayoraMenor(vehiculos);
    }

    masCaro() {
        return this.vehiculos[0];
    }

    masBarato(){
        return this.vehiculos[this.vehiculos.length-1];
    }

    vehiculoCon(letra) {
        return this.vehiculos.find((v) => v.modelo.includes(letra));
    }

    mayoraMenor(vehiculos){
        return vehiculos.sort((v1, v2) => v2.precio - v1.precio);
    }

    listadoFormal() {
        return vehiculos.map((v) => v.toShortString());
    }
}

vehiculos.forEach((v) => console.log(v.toString()));
console.log("=============================")
const concesionaria = new Concesionaria(vehiculos);
const masCaro = concesionaria.masCaro();
console.log("Vehículo más caro :  " + masCaro.marca  + " " +  masCaro.modelo);
const masBarato = concesionaria.masBarato();
console.log("Vehículo más barato : " + masBarato.marca + " " + masBarato.modelo);
const vehiculoConY = concesionaria.vehiculoCon('Y');
console.log("Vehículo que contiene en el modelo la letra ‘Y’ :  " + vehiculoConY.marca + " " + vehiculoConY.modelo);
console.log("=============================");
console.log("Vehículos ordenados por precio de mayor a menor:");
concesionaria.listadoFormal().forEach((entrada) => console.log(entrada));




