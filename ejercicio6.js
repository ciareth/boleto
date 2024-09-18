//Cine necesita dar descuentos segun las edades wiros <12 tiene 40% de descuento, estudiantes entre los 12 y 21 tienen un 30% de descuento, personas >60 tienen un 50% de descuento, el resto precio normal

let boleto = parseFloat(prompt("Defina el valor del boleto"));
let e = parseInt(prompt("Bienvenido estimada persona, por favor ingrese su edad para comprar el boleto"));

if (e <= 12){
    descuento = boleto*0.40;
    document.write("EL precio de su boleto es: ", boleto-descuento, "Lps.");
}
else if(e > 12 && e <=21){
    estudiante = prompt("Es estudiante? si o no:");
    if (estudiante === "si"){
        descuento = boleto*0.30;
        document.write("EL precio de su boleto es: ", boleto-descuento, "Lps.");
    }
    else if (estudiante === "no"){
        document.write("EL precio de su boleto es: ", boleto, "Lps.");
    }
}
else if(e >= 60){
    descuento = boleto*0.50;
    document.write("EL precio de su boleto es: ", boleto-descuento, "Lps.");
}
else if(e >=22 && e <=59){
    document.write("EL precio de su boleto es: ", boleto, "Lps.");
}
else{

}
