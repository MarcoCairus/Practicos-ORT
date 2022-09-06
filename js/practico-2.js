"use strict";

document.querySelector("#btn1").addEventListener("click", ej1);
document.querySelector("#btn2").addEventListener("click", ej2);
document.querySelector("#btn3").addEventListener("click", ej3);
document.querySelector("#btn4").addEventListener("click", ej4);
document.querySelector("#btn5").addEventListener("click", ej5);
document.querySelector("#btn6").addEventListener("click", ej6);
document.querySelector("#btn7").addEventListener("click", ej7);
document.querySelector("#btn8").addEventListener("click", ej8);
document.querySelector("#btn9").addEventListener("click", ej9);
document.querySelector("#btn10").addEventListener("click", ej10);
document.querySelector("#btn11").addEventListener("click", ej11);
document.querySelector("#btn12").addEventListener("click", ej12);
document.querySelector("#btn13").addEventListener("click", ej13);
document.querySelector("#btn14").addEventListener("click", ej19);
document.querySelector("#btn15").addEventListener("click", ej20);
document.querySelector("#btn16").addEventListener("click", ej21);
document.querySelector("#btn17").addEventListener("click", ej22);
document.querySelector("#btn18").addEventListener("click", ej23);
document.querySelector("#btn19").addEventListener("click", ej24);
document.querySelector("#btn20").addEventListener("click", ej25);
document.querySelector("#btn21").addEventListener("click", ej26);
document.querySelector("#btn22").addEventListener("click", ej27);
document.querySelector("#btn23").addEventListener("click", ej28);
document.querySelector("#a1").addEventListener("click", ej29A1);
document.querySelector("#a2").addEventListener("click", ej29A2);
document.querySelector("#a3").addEventListener("click", ej29A3);
document.querySelector("#b1").addEventListener("click", ej29B1);
document.querySelector("#b2").addEventListener("click", ej29B2);
document.querySelector("#b3").addEventListener("click", ej29B3);
document.querySelector("#c1").addEventListener("click", ej29C1);
document.querySelector("#c2").addEventListener("click", ej29C2);
document.querySelector("#c3").addEventListener("click", ej29C3);
document.querySelector("#btn24").addEventListener("click", piezas);
document.querySelector("#a1-30").addEventListener("click", ej30A1);
document.querySelector("#a2-30").addEventListener("click", ej30A2);
document.querySelector("#a3-30").addEventListener("click", ej30A3);
document.querySelector("#b1-30").addEventListener("click", ej30B1);
document.querySelector("#b2-30").addEventListener("click", ej30B2);
document.querySelector("#b3-30").addEventListener("click", ej30B3);
document.querySelector("#c1-30").addEventListener("click", ej30C1);
document.querySelector("#c2-30").addEventListener("click", ej30C2);
document.querySelector("#c3-30").addEventListener("click", ej30C3);

function ej1() {
  let num = parseInt(document.querySelector("#valor1").value);
  let p = document.querySelector("#p1");
  if (num >= 0) {
    p.innerHTML = `El numero ${num} es positivo`;
  } else {
    p.innerHTML = `El numero ${num} es negativo`;
  }
}

function ej2() {
  let num = parseInt(document.querySelector("#valor2").value);
  let p = document.querySelector("#p2");
  if (num > 10) {
    p.innerHTML = `El numero ${num} es mayor a 10`;
  } else {
    p.innerHTML = "";
  }
}

function ej3() {
  let num = parseInt(document.querySelector("#valor3").value);
  let p = document.querySelector("#p3");
  if (num > 20) {
    p.innerHTML = `El numero ${num} es mayor a 20`;
  } else {
    p.innerHTML = `El numero ${num} es menor o igual a 20`;
  }
}

function ej4() {
  let num = parseInt(document.querySelector("#valor4").value);
  let p = document.querySelector("#p4");
  if (num < 0) {
    p.innerHTML = `${num - num * 2}`;
  }
}

function ej5() {
  let num = parseInt(document.querySelector("#valor5").value);
  let p = document.querySelector("#p5");
  if (num > 10 && num < 20) {
    p.innerHTML = `El Numero ${num} es mayor a 10 y menor a 20`;
  } else {
    p.innerHTML = `El Numero ${num} es menor a 10 o mayor a 20`;
  }
}

function ej6() {
  let num = parseInt(document.querySelector("#valor6").value);
  let p = document.querySelector("#p6");
  if (num % 7 === 0 && num % 3 === 0) {
    p.innerHTML = `El Numero ${num} es multiplo de 7 y 3`;
  } else {
    p.innerHTML = "";
  }
}

function ej7() {
  let num = parseInt(document.querySelector("#valor7").value);
  let p = document.querySelector("#p7");
  if (num < -20 || num > 20) {
    p.innerHTML = `El Numero ${num} Cumple`;
  } else {
    p.innerHTML = `El numero ${num} NO Cumple`;
  }
}

function ej8() {
  let num = parseInt(document.querySelector("#valor8").value);
  let p = document.querySelector("#p8");
  if (num > 30) {
    p.innerHTML = `El Numero ${num} es Mayor que 30`;
  } else if (num < 10) {
    p.innerHTML = `El Numero ${num} es Menor que 10`;
  } else {
    p.innerHTML = `El numero ${num} esta entre 10 y 30`;
  }
}

function ej9() {
  let dia = document.querySelector("#valor9").value;
  let temp = parseInt(document.querySelector("#valor10").value);
  let p3 = document.querySelector("#p11");
  let p1 = document.querySelector("#p9");
  let p2 = document.querySelector("#p10");
  p3.innerHTML = "Levantarse";
  if (dia === "domingo") {
    p1.innerHTML = "Hoy NO se trabaja";
  } else if (dia !== "domingo") {
    p1.innerHTML = "Hoy SI se trabaja";
  }
  if (temp < 10) {
    p2.innerHTML = "Abrigate";
  } else if (temp > 20) {
    p2.innerHTML = "Hace Calor";
  } else if (temp > 10 && temp < 20) {
    p2.innerHTML = "Esta intermedio";
  }
}

function ej10() {
  let num1 = parseInt(document.querySelector("#valor11").value);
  let num2 = parseInt(document.querySelector("#valor12").value);
  let p = document.querySelector("#p12");
  if (num1 > num2) {
    p.innerHTML = num1 - num2;
  } else if (num1 < num2) {
    p.innerHTML = num2 - num1;
  }
}

function ej11() {
  let num1 = parseInt(document.querySelector("#valor13").value);
  let num2 = parseInt(document.querySelector("#valor14").value);
  let operacion = document.querySelector("#valor15").value;
  let p = document.querySelector("#p13");

  if (operacion === "S") {
    p.innerHTML = num2 + num1;
  } else if (operacion === "R") {
    p.innerHTML = num2 - num1;
  } else if (operacion === "M") {
    p.innerHTML = num2 * num1;
  } else if (operacion === "D") {
    p.innerHTML = num2 / num1;
  }
}

function ej12() {
  let str = document.querySelector("#valor16").value;
  let p = document.querySelector("#p14");
  if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
    p.innerHTML = "Es vocal";
  } else {
    p.innerHTML = "";
  }
}

function ej13() {
  let num1 = parseInt(document.querySelector("#valor17").value);
  let num2 = parseInt(document.querySelector("#valor18").value);
  let p = document.querySelector("#p15");
  if (num2 % num1 === 0) {
    p.innerHTML = `${num1} es multiplo de ${num2}`;
  } else {
    p.innerHTML = "";
  }
}
let cont = 0;
let condicion1 = 0;
let condicion2 = 0;
let condicion3 = 0;

function ej19() {
  let nums = parseInt(document.querySelector("#valor19").value);
  let p = document.querySelector("#p16");
  if (cont === 4) {
    if (nums % 5 === 0 && nums > 20) {
      condicion1++;
    } else if (nums % 5 === 0) {
      condicion2++;
    } else if (nums > 20) {
      condicion3++;
    }
    p.innerHTML = `Cantidad de numeros que son multiplo de "5" y mayores que "20": ${condicion1} / Cantidad de numeros que son solo multiplo de "5": ${condicion2} / Cantidad de numeros que son solo mayores a "20": ${condicion3}`;
    cont++;
  }
  if (cont === 3) {
    if (nums % 5 === 0 && nums > 20) {
      condicion1++;
    } else if (nums % 5 === 0) {
      condicion2++;
    } else if (nums > 20) {
      condicion3++;
    }
    cont++;
  }
  if (cont === 2) {
    if (nums % 5 === 0 && nums > 20) {
      condicion1++;
    } else if (nums % 5 === 0) {
      condicion2++;
    } else if (nums > 20) {
      condicion3++;
    }
    cont++;
  }
  if (cont === 1) {
    if (nums % 5 === 0 && nums > 20) {
      condicion1++;
    } else if (nums % 5 === 0) {
      condicion2++;
    } else if (nums > 20) {
      condicion3++;
    }
    cont++;
  }
  if (cont === 0) {
    if (nums % 5 === 0 && nums > 20) {
      condicion1++;
    } else if (nums % 5 === 0) {
      condicion2++;
    } else if (nums > 20) {
      condicion3++;
    }

    cont++;
  }
}

function ej20() {
  let num1 = parseInt(document.querySelector("#valor20").value);
  let num2 = parseInt(document.querySelector("#valor21").value);
  let num3 = parseInt(document.querySelector("#valor22").value);
  let p = document.querySelector("#p17");
  let menorCant = num1 / 100;
  if (menorCant > num2) {
    menorCant = num2;
  } else if (menorCant > num2) {
    menorCant = num3;
  }
  p.innerHTML = `Podes hacer ${Math.floor(menorCant)} de recetas.`;
}

function ej21() {
  let ingresos = parseInt(document.querySelector("#valor23").value);
  let casa = parseInt(document.querySelector("#valor24").value);
  let p = document.querySelector("#p18");
  if (ingresos < 20000) {
    ingresos *= 0.13;
    casa /= 7 * 12;
    p.innerHTML = `El comprador debe pagar inicialmente ${Math.round(
      ingresos
    )} y los pagos mensuales son ${Math.round(casa)}`;
  } else if (ingresos > 20000) {
    ingresos *= 0.3;
    casa /= 12;
    p.innerHTML = `El comprador debe pagar inicialmente ${Math.round(
      ingresos
    )} y los pagos mensuales son ${Math.round(casa)}`;
  }
}

function ej22() {
  let pago = parseInt(document.querySelector("#valor25").value);
  let tarjeta = document.querySelector("#valor26").value;
  let p = document.querySelector("#p19");
  if (pago < 10000 && tarjeta === "si") {
    pago = pago * 0.04 - pago;
    p.innerHTML = `Total final: ${Math.abs(pago)}`;
  } else if (tarjeta === "no") {
    p.innerHTML = `Total final: ${pago}`;
  }
}
let perdieron = 0;
let salvaron = 0;
let buenaNota = 0;

function ej23() {
  let notas = parseInt(document.querySelector("#valor27").value);
  let p = document.querySelector("#p20");
  if (notas < 70) {
    perdieron++;
  } else if (notas > 70 && notas < 90) {
    salvaron++;
  } else if (notas > 90) {
    buenaNota++;
  }
  p.innerHTML = `Perdieron: ${perdieron}, salvaron: ${salvaron}, Buena nota: ${buenaNota}`;
  console.log(`${perdieron}${salvaron}${buenaNota}`);
}
let cont3 = 0;
let totalSueldos = 0;
let cantSueldos = 0;
let sueldoBajo = 0;

function ej24() {
  let sueldo = parseInt(document.querySelector("#valor28").value);
  let p = document.querySelector("#p21");
  if (cont3 === 0) {
    sueldoBajo = sueldo;
  } else if (sueldoBajo >= sueldo) {
    sueldoBajo = sueldo;
  }

  totalSueldos += sueldo;
  cantSueldos += 1;
  p.innerHTML = `Total a pagar:${totalSueldos}, cantidad de sueldos: ${cantSueldos}, sueldo mas bajo: ${sueldoBajo}`;
  cont3++;
}
let cont4 = 0;
let contClientes = 0;
let camaras = 0;
let totalCompras = 0;
let totalStock = 0;
let cliente = "";

function ej25() {
  let nombre = document.querySelector("#valor29").value;
  let compras = parseInt(document.querySelector("#valor30").value);
  let stock = parseInt(document.querySelector("#valor31").value);
  let p = document.querySelector("#p22");
  let btn = document.querySelector("#btn20");
  if (nombre) {
    totalCompras += compras;
    if (cont4 === 0 && compras < stock) {
      camaras = compras;
    }
    if (totalCompras <= stock) {
      totalStock = stock;
      totalStock -= totalCompras;
      p.innerHTML = `${nombre}, su compra de ${compras} camaras fue un exito`;
      if (camaras <= compras) {
        camaras = compras;
        cliente = nombre;
      }
    } else if (cont4 === 0) {
      totalStock = stock;
      totalCompras -= compras;
      p.innerHTML = `${nombre}, SU compra de ${compras} camaras excedio nuestro stock: ${totalStock}`;
    } else if (totalCompras > totalStock && totalStock != 0) {
      totalCompras -= compras;
      p.innerHTML = `${nombre}, TU compra de ${compras} camaras excedio nuestro stock: ${totalStock}`;
    } else if (totalStock === 0) {
      btn.disabled = true;
      p.innerHTML = `Se acabo el stock! total de procesos de compras: ${contClientes}, Cliente que compro mas camaras: ${cliente}, cantidad de camaras: ${camaras}`;
    }
    cont4++;
    contClientes++;
  } else if (!nombre) {
    p.innerHTML = "Por favor introduzca su nombre";
  }
}

function ej26() {
  let noches = parseInt(document.querySelector("#valor32").value);
  let pago = document.querySelector("#valor33").value;
  let p = document.querySelector("#p23");
  let regalo = 0;
  let totalPago = 0;
  if (noches < 3) {
    totalPago = noches * 40;
  } else if (noches >= 3 && noches < 7) {
    regalo++;
    totalPago = noches * 40;
  } else if (noches >= 7 && pago === "tarjeta") {
    regalo += 3;
    totalPago = noches * 40;
  } else if (noches >= 7 && pago === "efectivo") {
    regalo += 2;
    totalPago = noches * 40;
  }
  p.innerHTML = `Hay ${regalo} noches de regalo, se hospedara por ${
    noches + regalo
  } noches, el costo total son $ ${totalPago}`;
}
let cont5 = 0;
let numPc = Math.round(Math.random() * 100);

function ej27() {
  let num1 = parseInt(document.querySelector("#valor34").value);
  let p = document.querySelector("#p24");
  if (num1 + 15 < numPc || num1 - 15 > numPc) {
    p.innerHTML = "Estas lejos";
  } else if (num1 + 9 < numPc || num1 - 9 > numPc) {
    p.innerHTML = "Te estás acercando";
  } else if (num1 + 4 < numPc || num1 - 4 > numPc) {
    p.innerHTML = "Cada vez más cerca";
  } else if (num1 + 1 < numPc + 1 || num1 - 1 > numPc - 1) {
    p.innerHTML = "Muy pero muy cerca";
  } else if (num1 == numPc || num1 === numPc) {
    p.innerHTML = `Felicitaciones es el numero correcto, te tomaron ${cont5} intentos`;
    numPc = Math.round(Math.random() * 100);
  }
  cont5++;
}
let punt1 = 0;
let punt2 = 0;

function ej28() {
  let num1 = parseInt(document.querySelector("#valor35").value);
  let num2 = parseInt(document.querySelector("#valor36").value);
  let btn = document.querySelector("#btn23");
  let p = document.querySelector("#p25");
  if (num1 && num2) {
    punt1 += num1;
    punt2 += num2;
    if (punt1 < 30 && punt2 < 30) {
      p.innerHTML = `Puntaje Equipo 1: ${punt1}, Puntaje Equipo 2: ${punt2}`;
    } else if (punt1 >= 30 || punt2 >= 30) {
      btn.disabled = true;
      p.innerHTML = `Puntaje Total Equipo 1: ${punt1}, Puntaje Total Equipo 2: ${punt2}`;
    }
  } else if (!num1 && !num2) {
    p.innerHTML = "Por favor introduzca ambos puntajes";
  }
}

let circulo = "O";
let cruz = "X";
let cont6 = 1;

function ej29A1() {
  let a1 = document.querySelector("#a1");
  if (cont6 === 1) {
    a1.textContent = cruz;
  }
  if (cont6 === 3) {
    a1.textContent = cruz;
  }
  if (cont6 === 5) {
    a1.textContent = cruz;
  }
  if (cont6 === 7) {
    a1.textContent = cruz;
  }
  if (cont6 === 9) {
    c3.textContent = cruz;
  }
  if (cont6 === 2) {
    a1.textContent = circulo;
  }
  if (cont6 === 4) {
    a1.textContent = circulo;
  }
  if (cont6 === 6) {
    a1.textContent = circulo;
  }
  if (cont6 === 8) {
    a1.textContent = circulo;
  }
  a1.style.pointerEvents="none"
  cont6++;
}

function ej29A2() {
  let a2 = document.querySelector("#a2");
  if (cont6 === 1) {
    a2.textContent = cruz;
  }
  if (cont6 === 3) {
    a2.textContent = cruz;
  }
  if (cont6 === 5) {
    a2.innerHTML = cruz;
  }
  if (cont6 === 7) {
    a2.innerHTML = cruz;
  }
  if (cont6 === 9) {
    a2.innerHTML = cruz;
  }
  if (cont6 === 2) {
    a2.innerHTML = circulo;
  }
  if (cont6 === 4) {
    a2.innerHTML = circulo;
  }
  if (cont6 === 6) {
    a2.innerHTML = circulo;
  }
  if (cont6 === 8) {
    a2.innerHTML = circulo;
  }
  a2.style.pointerEvents="none"

  cont6++;
}

function ej29A3() {
  let a3 = document.querySelector("#a3");
  if (cont6 === 1) {
    a2.innerHTML = cruz;
  }
  if (cont6 === 3) {
    a3.innerHTML = cruz;
  }
  if (cont6 === 5) {
    a3.innerHTML = cruz;
  }
  if (cont6 === 7) {
    a3.innerHTML = cruz;
  }
  if (cont6 === 9) {
    a3.innerHTML = cruz;
  }
  if (cont6 === 2) {
    a3.innerHTML = circulo;
  }
  if (cont6 === 4) {
    a3.innerHTML = circulo;
  }
  if (cont6 === 6) {
    a3.innerHTML = circulo;
  }
  if (cont6 === 8) {
    a3.innerHTML = circulo;
  }
  a3.style.pointerEvents="none"
  cont6++;
}

function ej29B1() {
  let b1 = document.querySelector("#b1");
  if (cont6 === 1) {
    b1.innerHTML = cruz;
  }
  if (cont6 === 3) {
    b1.innerHTML = cruz;
  }
  if (cont6 === 5) {
    b1.innerHTML = cruz;
  }
  if (cont6 === 7) {
    b1.innerHTML = cruz;
  }
  if (cont6 === 9) {
    b1.innerHTML = cruz;
  }
  if (cont6 === 2) {
    b1.innerHTML = circulo;
  }
  if (cont6 === 4) {
    b1.innerHTML = circulo;
  }
  if (cont6 === 6) {
    b1.innerHTML = circulo;
  }
  if (cont6 === 8) {
    b1.innerHTML = circulo;
  }
  b1.style.pointerEvents="none"
  cont6++;
}
function ej29B2() {
  let b2 = document.querySelector("#b2");
  if (cont6 === 1) {
    b2.innerHTML = cruz;
  }
  if (cont6 === 3) {
    b2.innerHTML = cruz;
  }
  if (cont6 === 5) {
    b2.innerHTML = cruz;
  }
  if (cont6 === 7) {
    b2.innerHTML = cruz;
  }
  if (cont6 === 9) {
    b2.innerHTML = cruz;
  }
  if (cont6 === 2) {
    b2.innerHTML = circulo;
  }
  if (cont6 === 4) {
    b2.innerHTML = circulo;
  }
  if (cont6 === 6) {
    b2.innerHTML = circulo;
  }
  if (cont6 === 8) {
    b2.innerHTML = circulo;
  }
  b2.style.pointerEvents="none"
  cont6++;
}
function ej29B3() {
  let b3 = document.querySelector("#b3");
  if (cont6 === 1) {
    b3.innerHTML = cruz;
  }
  if (cont6 === 3) {
    b3.innerHTML = cruz;
  }
  if (cont6 === 5) {
    b3.innerHTML = cruz;
  }
  if (cont6 === 7) {
    b3.innerHTML = cruz;
  }
  if (cont6 === 9) {
    b3.innerHTML = cruz;
  }
  if (cont6 === 2) {
    b3.innerHTML = circulo;
  }
  if (cont6 === 4) {
    b3.innerHTML = circulo;
  }
  if (cont6 === 6) {
    b3.innerHTML = circulo;
  }
  if (cont6 === 8) {
    b3.innerHTML = circulo;
  }
  b3.style.pointerEvents="none"
  cont6++;
}
function ej29C1() {
  let c1 = document.querySelector("#c1");
  if (cont6 === 1) {
    c1.innerHTML = cruz;
  }
  if (cont6 === 3) {
    c1.innerHTML = cruz;
  }
  if (cont6 === 5) {
    c1.innerHTML = cruz;
  }
  if (cont6 === 7) {
    c1.innerHTML = cruz;
  }
  if (cont6 === 9) {
    c1.innerHTML = cruz;
  }
  if (cont6 === 2) {
    c1.innerHTML = circulo;
  }
  if (cont6 === 4) {
    c1.innerHTML = circulo;
  }
  if (cont6 === 6) {
    c1.innerHTML = circulo;
  }
  if (cont6 === 8) {
    c1.innerHTML = circulo;
  }
  c1.style.pointerEvents="none"
  cont6++;
}

function ej29C2() {
  let c2 = document.querySelector("#c2");
  if (cont6 === 1) {
    c2.innerHTML = cruz;
  }
  if (cont6 === 3) {
    c2.innerHTML = cruz;
  }
  if (cont6 === 5) {
    c2.innerHTML = cruz;
  }
  if (cont6 === 7) {
    c2.innerHTML = cruz;
  }
  if (cont6 === 9) {
    c2.innerHTML = cruz;
  }
  if (cont6 === 2) {
    c2.innerHTML = circulo;
  }
  if (cont6 === 4) {
    c2.innerHTML = circulo;
  }
  if (cont6 === 6) {
    c2.innerHTML = circulo;
  }
  if (cont6 === 8) {
    c2.innerHTML = circulo;
  }
  c2.style.pointerEvents="none"
  cont6++;
}
function ej29C3() {
  let c3 = document.querySelector("#c3");
  if (cont6 === 1) {
    c3.innerHTML = cruz;
  }
  if (cont6 === 3) {
    c3.innerHTML = cruz;
  }
  if (cont6 === 5) {
    c3.innerHTML = cruz;
  }
  if (cont6 === 7) {
    c3.innerHTML = cruz;
  }
  if (cont6 === 9) {
    c3.innerHTML = cruz;
  }
  if (cont6 === 2) {
    c3.innerHTML = circulo;
  }
  if (cont6 === 4) {
    c3.innerHTML = circulo;
  }
  if (cont6 === 6) {
    c3.innerHTML = circulo;
  }
  if (cont6 === 8) {
    c3.innerHTML = circulo;
  }
  textContent
  cont6++;
}


let jugador1 = "";
let jugador2 = "";

function piezas() {
  let j1 = document.querySelector("#valor37").value;
  let j2 = document.querySelector("#valor38").value;
  jugador1 = j1;
  jugador2 = j2;
}

function ej30A1() {
  let a1 = document.querySelector("#a1-30");
  if (cont6 === 1) {
    a1.innerHTML = jugador1;
  }
  if (cont6 === 3) {
    a1.innerHTML = jugador1;
  }
  if (cont6 === 5) {
    a1.innerHTML = jugador1;
  }
  if (cont6 === 7) {
    a1.innerHTML = jugador1;
  }
  if (cont6 === 9) {
    c3.innerHTML = jugador1;
  }
  if (cont6 === 2) {
    a1.innerHTML = jugador2;
  }
  if (cont6 === 4) {
    a1.innerHTML = jugador2;
  }
  if (cont6 === 6) {
    a1.innerHTML = jugador2;
  }
  if (cont6 === 8) {
    a1.innerHTML = jugador2;
  }
  cont6++;
  a1.style.pointerEvents="none"
}

function ej30A2() {
  let a2 = document.querySelector("#a2-30");
  if (cont6 === 1) {
    a2.innerHTML = jugador1;
  }
  if (cont6 === 3) {
    a2.innerHTML = jugador1;
  }
  if (cont6 === 5) {
    a2.innerHTML = jugador1;
  }
  if (cont6 === 7) {
    a2.innerHTML = jugador1;
  }
  if (cont6 === 9) {
    a2.innerHTML = jugador1;
  }
  if (cont6 === 2) {
    a2.innerHTML = jugador2;
  }
  if (cont6 === 4) {
    a2.innerHTML = jugador2;
  }
  if (cont6 === 6) {
    a2.innerHTML = jugador2;
  }
  if (cont6 === 8) {
    a2.innerHTML = jugador2;
  }
  a2.style.pointerEvents="none"
  cont6++;
}

function ej30A3() {
  let a3 = document.querySelector("#a3-30");
  if (cont6 === 1) {
    a2.innerHTML = jugador1;
  }
  if (cont6 === 3) {
    a3.innerHTML = jugador1;
  }
  if (cont6 === 5) {
    a3.innerHTML = jugador1;
  }
  if (cont6 === 7) {
    a3.innerHTML = jugador1;
  }
  if (cont6 === 9) {
    a3.innerHTML = jugador1;
  }
  if (cont6 === 2) {
    a3.innerHTML = jugador2;
  }
  if (cont6 === 4) {
    a3.innerHTML = jugador2;
  }
  if (cont6 === 6) {
    a3.innerHTML = jugador2;
  }
  if (cont6 === 8) {
    a3.innerHTML = jugador2;
  }
  a3.style.pointerEvents="none"
  cont6++;
}

function ej30B1() {
  let b1 = document.querySelector("#b1-30");
  if (cont6 === 1) {
    b1.innerHTML = jugador1;
  }
  if (cont6 === 3) {
    b1.innerHTML = jugador1;
  }
  if (cont6 === 5) {
    b1.innerHTML = jugador1;
  }
  if (cont6 === 7) {
    b1.innerHTML = jugador1;
  }
  if (cont6 === 9) {
    b1.innerHTML = jugador1;
  }
  if (cont6 === 2) {
    b1.innerHTML = jugador2;
  }
  if (cont6 === 4) {
    b1.innerHTML = jugador2;
  }
  if (cont6 === 6) {
    b1.innerHTML = jugador2;
  }
  if (cont6 === 8) {
    b1.innerHTML = jugador2;
  }
  b1.style.pointerEvents="none"
  cont6++;
}
function ej30B2() {
  let b2 = document.querySelector("#b2-30");
  if (cont6 === 1) {
    b2.innerHTML = jugador1;
  }
  if (cont6 === 3) {
    b2.innerHTML = jugador1;
  }
  if (cont6 === 5) {
    b2.innerHTML = jugador1;
  }
  if (cont6 === 7) {
    b2.innerHTML = jugador1;
  }
  if (cont6 === 9) {
    b2.innerHTML = jugador1;
  }
  if (cont6 === 2) {
    b2.innerHTML = jugador2;
  }
  if (cont6 === 4) {
    b2.innerHTML = jugador2;
  }
  if (cont6 === 6) {
    b2.innerHTML = jugador2;
  }
  if (cont6 === 8) {
    b2.innerHTML = jugador2;
  }
  b2.style.pointerEvents="none"
  cont6++;
}
function ej30B3() {
  let b3 = document.querySelector("#b3-30");
  if (cont6 === 1) {
    b3.innerHTML = jugador1;
  }
  if (cont6 === 3) {
    b3.innerHTML = jugador1;
  }
  if (cont6 === 5) {
    b3.innerHTML = jugador1;
  }
  if (cont6 === 7) {
    b3.innerHTML = jugador1;
  }
  if (cont6 === 9) {
    b3.innerHTML = jugador1;
  }
  if (cont6 === 2) {
    b3.innerHTML = jugador2;
  }
  if (cont6 === 4) {
    b3.innerHTML = jugador2;
  }
  if (cont6 === 6) {
    b3.innerHTML = jugador2;
  }
  if (cont6 === 8) {
    b3.innerHTML = jugador2;
  }
  b3.style.pointerEvents="none"
  cont6++;
}
function ej30C1() {
  let c1 = document.querySelector("#c1-30");
  if (cont6 === 1) {
    c1.innerHTML = jugador1;
  }
  if (cont6 === 3) {
    c1.innerHTML = jugador1;
  }
  if (cont6 === 5) {
    c1.innerHTML = jugador1;
  }
  if (cont6 === 7) {
    c1.innerHTML = jugador1;
  }
  if (cont6 === 9) {
    c1.innerHTML = jugador1;
  }
  if (cont6 === 2) {
    c1.innerHTML = jugador2;
  }
  if (cont6 === 4) {
    c1.innerHTML = jugador2;
  }
  if (cont6 === 6) {
    c1.innerHTML = jugador2;
  }
  if (cont6 === 8) {
    c1.innerHTML = jugador2;
  }
  c1.style.pointerEvents="none"
  cont6++;
}

function ej30C2() {
  let c2 = document.querySelector("#c2-30");
  if (cont6 === 1) {
    c2.innerHTML = jugador1;
  }
  if (cont6 === 3) {
    c2.innerHTML = jugador1;
  }
  if (cont6 === 5) {
    c2.innerHTML = jugador1;
  }
  if (cont6 === 7) {
    c2.innerHTML = jugador1;
  }
  if (cont6 === 9) {
    c2.innerHTML = jugador1;
  }
  if (cont6 === 2) {
    c2.innerHTML = jugador2;
  }
  if (cont6 === 4) {
    c2.innerHTML = jugador2;
  }
  if (cont6 === 6) {
    c2.innerHTML = jugador2;
  }
  if (cont6 === 8) {
    c2.innerHTML = jugador2;
  }
  c2.style.pointerEvents="none"
  cont6++;
}
function ej30C3() {
  let c3 = document.querySelector("#c3-30");
  if (cont6 === 1) {
    c3.innerHTML = jugador1;
  }
  if (cont6 === 3) {
    c3.innerHTML = jugador1;
  }
  if (cont6 === 5) {
    c3.innerHTML = jugador1;
  }
  if (cont6 === 7) {
    c3.innerHTML = jugador1;
  }
  if (cont6 === 9) {
    c3.innerHTML = jugador1;
  }
  if (cont6 === 2) {
    c3.innerHTML = jugador2;
  }
  if (cont6 === 4) {
    c3.innerHTML = jugador2;
  }
  if (cont6 === 6) {
    c3.innerHTML = jugador2;
  }
  if (cont6 === 8) {
    c3.innerHTML = jugador2;
  }
  c3.style.pointerEvents="none"
  cont6++;
}
