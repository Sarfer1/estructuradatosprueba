let edad = 18;

if (edad >= 18) {
    document.write("IF: Eres mayor de edad.<br>");
}

let temperatura = 25;

if (temperatura > 30) {
    document.write("Hace calor.<br>");
} else {
    document.write("No hace calor.<br>");
}

let nota = 85;

if (nota >= 90) {
    document.write("Excelente.<br>");
} else if (nota >= 70) {
    document.write("Aprobado.<br>");
} else {
    document.write("Reprobado.<br>");
}

let opcion = 2;

switch (opcion) {
    case 1:
        document.write("Opción 1.<br>");
        break;

    case 2:
        document.write("Opción 2.<br>");
        break;

    case 3:
        document.write("Opción 3.<br>");
        break;

    default:
        document.write("Opción no válida.<br>");
}

// == (igual)
if (5 == "5") {
    document.write("5 == '5' es TRUE.<br>");
}

// === (estrictamente igual)
if (5 === "5") {
    document.write("5 === '5' es TRUE.<br>");
} else {
    document.write("5 === '5' es FALSE.<br>");
}

// != (diferente)
if (5 != 3) {
    document.write("5 != 3 es TRUE.<br>");
}

// !== (estrictamente diferente)
if (5 !== "5") {
    document.write("5 !== '5' es TRUE.<br>");
}

// && (AND)
if (edad >= 18 && nota >= 70) {
    document.write("Mayor de edad y aprobado.<br>");
}

// || (OR)
if (edad < 18 || nota >= 70) {
    document.write("Se cumple al menos una condición.<br>");
}

// ! (NOT)
let llueve = false;

if (!llueve) {
    document.write("No está lloviendo.<br>");
}