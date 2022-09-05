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


function ej1() {
    let num = parseInt(document.querySelector("#valor1").value);
    let p = document.querySelector("#p1");
    if (num >= 0) {
        p.innerHTML = `El numero ${num} es positivo`;
    }
    else {
        p.innerHTML = `El numero ${num} es negativo`;
    }
}

function ej2() {
    let num = parseInt(document.querySelector("#valor2").value);
    let p = document.querySelector("#p2");
    if (num > 10) {
        p.innerHTML = `El numero ${num} es mayor a 10`;
    }
    else {
        p.innerHTML = "";
    }

}

function ej3() {
    let num = parseInt(document.querySelector("#valor3").value);
    let p = document.querySelector("#p3");
    if (num > 20) {
        p.innerHTML = `El numero ${num} es mayor a 20`;
    }
    else {
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
    }
    else {
        p.innerHTML = `El Numero ${num} es menor a 10 o mayor a 20`
    }
}

function ej6() {
    let num = parseInt(document.querySelector("#valor6").value);
    let p = document.querySelector("#p6");
    if (num % 7 === 0 && num % 3 === 0) {
        p.innerHTML = `El Numero ${num} es multiplo de 7 y 3`;
    }
    else {
        p.innerHTML = "";
    }
}

function ej7() {
    let num = parseInt(document.querySelector("#valor7").value);
    let p = document.querySelector("#p7");
    if (num < -20 || num > 20) {
        p.innerHTML = `El Numero ${num} Cumple`;
    }
    else {
        p.innerHTML = `El numero ${num} NO Cumple`;
    }
}

function ej8() {
    let num = parseInt(document.querySelector("#valor8").value);
    let p = document.querySelector("#p8");
    if (num > 30) {
        p.innerHTML = `El Numero ${num} es Mayor que 30`;
    }
    else if (num < 10) {
        p.innerHTML = `El Numero ${num} es Menor que 10`;
    } 
    else {
        p.innerHTML = `El numero ${num} esta entre 10 y 30`;
    }
}

function ej9() {
    let dia = document.querySelector("#valor9").value;
    let temp=parseInt(document.querySelector("#valor10").value);
    let p3=document.querySelector("#p11");
    let p1 = document.querySelector("#p9");
    let p2 = document.querySelector("#p10");
    p3.innerHTML="Levantarse";
    if (dia==="domingo"){
        p1.innerHTML = "Hoy NO se trabaja";
    }
    else if (dia!=="domingo"){
         p1.innerHTML = "Hoy SI se trabaja";
    }
    if (temp<10){ 
        p2.innerHTML = "Abrigate";
    }
    else if (temp>20){
         p2.innerHTML = "Hace Calor";
        }
    else if (temp>10&&temp<20){ p2.innerHTML = "Esta intermedio";
    }
}

function ej10() {
    let num1 = parseInt(document.querySelector("#valor11").value);
    let num2 = parseInt(document.querySelector("#valor12").value);
    let p = document.querySelector("#p12");
    if(num1>num2){
        p.innerHTML=num1-num2;
    }
    else if(num1<num2){
        p.innerHTML=num2-num1;
    }

}

function ej11() {
    let num1 = parseInt(document.querySelector("#valor13").value);
    let num2 = parseInt(document.querySelector("#valor14").value);
    let operacion=document.querySelector("#valor15").value;
    let p = document.querySelector("#p13");
  
    if(operacion==="S"){
        p.innerHTML=num2+num1;
    }
    else if(operacion==="R"){
        p.innerHTML=num2-num1;
    }
    else if(operacion==="M"){
        p.innerHTML=num2*num1;
    }
    else if(operacion==="D"){
        p.innerHTML=num2/num1;
    }

}

function ej12() {
    let str = document.querySelector("#valor16").value;
    let p = document.querySelector("#p14");
    if(str === "a" || str === "e" || str === "i" || str === "o" || str === "u"){
        p.innerHTML="Es vocal";
    }
    else{
        p.innerHTML="";
    }

}

function ej13() {
    let num1 = parseInt(document.querySelector("#valor17").value);
    let num2 = parseInt(document.querySelector("#valor18").value);
    let p = document.querySelector("#p15");
    if(num2%num1===0){
        p.innerHTML=`${num1} es multiplo de ${num2}`;
    }
    else{
        p.innerHTML="";
    }

}
let cont=0
let condicion1=0
let condicion2=0
let condicion3=0

function ej19() {
    let nums = parseInt(document.querySelector("#valor19").value);
    let p = document.querySelector("#p16");
if(cont===4){
    if(nums%5===0&&nums>20){
        condicion1++
    }
    else if(nums%5===0){
        condicion2++
    }
    else if(nums>20){
        condicion3++
    }
    p.innerHTML=`Cantidad de numeros que son multiplo de "5" y mayores que "20": ${condicion1} / Cantidad de numeros que son solo multiplo de "5": ${condicion2} / Cantidad de numeros que son solo mayores a "20": ${condicion3}`
    cont++
}
if(cont===3){
    if(nums%5===0&&nums>20){
        condicion1++
    }
    else if(nums%5===0){
        condicion2++
    }
    else if(nums>20){
        condicion3++
    }
cont++
}
if(cont===2){
    if(nums%5===0&&nums>20){
        condicion1++
    }
    else if(nums%5===0){
        condicion2++
    }
    else if(nums>20){
        condicion3++
    }
cont++
}
if(cont===1){
    if(nums%5===0&&nums>20){
        condicion1++
    }
    else if(nums%5===0){
        condicion2++
    }
    else if(nums>20){
        condicion3++
    }
cont++
}
if(cont===0){
    if(nums%5===0&&nums>20){
        condicion1++
    }
    else if(nums%5===0){
        condicion2++
    }
    else if(nums>20){
        condicion3++
    }
     
cont++

}
    
}

function ej20() {
    let num1 = parseInt(document.querySelector("#valor20").value);
    let num2 = parseInt(document.querySelector("#valor21").value);
    let num3 = parseInt(document.querySelector("#valor22").value);
    let p = document.querySelector("#p17");
    let menorCant=num1/100;
    if(menorCant>num2){
        menorCant=num2;
    }
    else if(menorCant>num2){
        menorCant=num3;
    }
    p.innerHTML=`Podes hacer ${Math.floor(menorCant)} de recetas.`
    
}

function ej21() {
    let ingresos = parseInt(document.querySelector("#valor23").value);
    let casa = parseInt(document.querySelector("#valor24").value);
    let p = document.querySelector("#p18"); 
    if(ingresos<20000){
        ingresos*=0.13;
        casa/=(7*12);
        p.innerHTML=`El comprador debe pagar inicialmente ${Math.round(ingresos)} y los pagos mensuales son ${Math.round(casa)}`
    }   
    else if(ingresos>20000){
        ingresos*=0.30;
        casa/=12;
        p.innerHTML=`El comprador debe pagar inicialmente ${Math.round(ingresos)} y los pagos mensuales son ${Math.round(casa)}`
    }   
}




