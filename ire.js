function calcular() {
    let cat = document.getElementById("categoria").value;
    let horas = document.getElementById("horas").value;
    let salario = cat * horas;
    if (horas > 40) { //D1
        let horasExtras = horas - 40;
        salario += (cat * horasExtras * 0.25);
    } 
    document.getElementById("salario").innerHTML = ` ${salario.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}`;
}

