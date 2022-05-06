function agregarDigito(digito){
    let display = document.getElementById("idDisplay");
    display.value = display.value + digito;
}
function allClear(){
    document.getElementById("idDisplay").value="";    
}
function agregarOperador(operador){
    let display = document.getElementById("idDisplay"); 
    display.value = display.value + operador;
}
function calcularRes(){
    idDisplay.value = eval(idDisplay.value); // es con el id
}
function calcularPow(){
    let display     = document.getElementById("idDisplay");
    let base        = eval(idDisplay.value);
    let exponente   = document.getElementById("idElevarPow").value; 
    let resPow      = Math.pow(base,exponente);
    display.value = resPow;
}
function calcularRoot(){
    let display     = document.getElementById("idDisplay");
    let base        = eval(idDisplay.value);
    let resRoot      = Math.sqrt(base);
    display.value = resRoot;
}
function calcularFactorial(){
    let display = document.getElementById("idDisplay");
    var dato = eval(idDisplay.value);
    var resultado = dato;
    var i = 1;
    while(i < dato){
        resultado = resultado * i;
        i++;
    }
    display.value = resultado;
}
function calcularPorcentaje(){
    let display = document.getElementById("idDisplay");
    let base = eval(idDisplay.value);
    let porcentaje   = document.getElementById("idPorcentaje").value; 
    let resPorcentaje = base*(porcentaje/100);
    display.value = resPorcentaje;
}
function calcularLogNatural(){
    let display = document.getElementById("idDisplay");
    let base = eval(idDisplay.value);
    let resLogNatural = Math.log(base);
    display.value = resLogNatural;
}
function calcularLog10(){
    let display = document.getElementById("idDisplay");
    let base = eval(idDisplay.value);
    let resLog10 = Math.log10(base);
    display.value = resLog10;
}
