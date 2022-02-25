//solicitiar al usuario que ingrese el valor del producto al cual se le aplicara el IVA.
const precioCosto = parseFloat(
  prompt("Ingrese el precio de costo del producto")
);

while (true) {
  if (!isNaN(precioCosto) && precioCosto != null && precioCosto != "") {
    break;
  } else {
    alert("por favor debes de ingresar un numero para poder continuar con la operacion");
    continue;
  }
}

//calcular Iva al producto
function calcularIva(precioCosto) {
  return precioCosto * 0.21;
}

let iva = calcularIva(precioCosto);
iva = iva.toFixed(2);

alert(`El IVA del producto ingresado es ${iva}`);

//sumar IVA  al precio del producto con IVA
function sumarIva(precioCosto) {
  return precioCosto + precioCosto * 0.21;
}

let precioConIva = sumarIva(precioCosto);
precioConIva = precioConIva.toFixed(2);

alert(`El precio con IVA incluido es: ${precioConIva}`);
