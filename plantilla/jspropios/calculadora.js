function Suma(){
    //1. Referencia a los objetos del documento html
    let num1 = document.getElementById("idNum1").value;
    let num2 = document.getElementById("idNum2").value;
    let suma = Number(num1) + Number(num2);
    alert("La suma es: "+suma);
}
function Resta(){
    let num1 = document.getElementById("idNum1").value;
    let num2 = document.getElementById("idNum2").value;
    let resta = Number(num1) - Number(num2);
    alert("La resta es: "+resta);
}
function Multi(){
    let num1 = document.getElementById("idNum1").value;
    let num2 = document.getElementById("idNum2").value;
    let multi = Number(num1) * Number(num2);
    alert("La multiplicación es: "+multi);
}
function Div(){
    let num1 = document.getElementById("idNum1").value;
    let num2 = document.getElementById("idNum2").value;
    let div = Number(num1) / Number(num2);
    alert("La división es: "+div);
}