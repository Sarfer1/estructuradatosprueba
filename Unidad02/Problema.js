class Cliente {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}

let cola = [];

// Agregar clientes a la cola
cola.push(new Cliente("Fernando", 110521));
cola.push(new Cliente("María", 120122));
cola.push(new Cliente("Carlos", 12912));

console.log("--- ATENDIENDO CLIENTES ---");

// Atender clientes en orden FIFO
while (cola.length > 0) {

    let cliente = cola.shift();

    console.log(`Atendiendo a: ${cliente.nombre}`);

    if (cliente.id === 110521) {
        console.log("Pedido entregado: Carne");
    } else if (cliente.id === 120122) {
        console.log("Pedido entregado: Arroz");
    } else if (cliente.id === 12912) {
        console.log("Pedido entregado: Pollo");
    } else {
        console.log("Pedido no encontrado");
    }

    console.log("-------------------");
}

console.log("No quedan clientes en espera.");