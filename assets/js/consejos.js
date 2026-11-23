// Consejos financieros que se muestran al pulsar el botón "Otro consejo"
// Usamos el DOM para cambiar el texto del párrafo (Tema 3)

var consejos = [
  "Apunta todos tus gastos durante un mes, te sorprenderá en qué se va tu dinero.",
  "Ahorra nada más cobrar, no lo que te sobre a final de mes.",
  "Revisa tus suscripciones, seguro que pagas alguna que ya no usas.",
  "Antes de una compra grande, espera 48 horas. Si sigues queriéndolo, adelante.",
  "Ten tu fondo de emergencia en una cuenta separada de la del día a día.",
  "Cuando pidas un préstamo, compara siempre la TAE y no solo el TIN.",
  "Empieza a invertir pronto, aunque sea poco, el tiempo juega a tu favor.",
  "Programa una transferencia automática a tu cuenta de ahorro el día que cobras."
];

// Buscamos en el DOM el botón y el párrafo por su id
var botonConsejo = document.getElementById("boton-consejo");
var textoConsejo = document.getElementById("texto-consejo");

// Guardamos la posición del consejo que se está mostrando (al principio el 0)
var consejoActual = 0;

function mostrarOtroConsejo() {
  var nuevo = consejoActual;

  // Elegimos una posición al azar, distinta de la actual para que no se repita
  while (nuevo === consejoActual) {
    nuevo = Math.floor(Math.random() * consejos.length);
  }

  consejoActual = nuevo;
  textoConsejo.textContent = consejos[nuevo];
}

// Cuando se hace clic en el botón, se ejecuta la función
botonConsejo.addEventListener("click", mostrarOtroConsejo);
