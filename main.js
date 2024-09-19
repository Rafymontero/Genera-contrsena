let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar'); // Botón de limpiar
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje'); // Mensaje para mostrar la fuerza de la contraseña

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
  let numeroDigitado = parseInt(cantidad.value);
  if (numeroDigitado < 8) {
    alert("La cantidad de caracteres tiene que ser mayor o igual a 8");
  } else {
    contrasena.value = '';  // Limpiar el campo antes de generar una nueva contraseña
    let nuevaContrasena = '';
    for (let i = 0; i < numeroDigitado; i++) {
      const indiceAleatorio = Math.floor(Math.random() * cadenaCaracteres.length);
      nuevaContrasena += cadenaCaracteres[indiceAleatorio];
    }
    contrasena.value = nuevaContrasena;
    validarContrasena(nuevaContrasena); // Validar la contraseña generada
  }
}

function limpiar() {
  contrasena.value = '';  // Limpiar el campo de la contraseña
  cantidad.value = '';    // Limpiar el campo de la cantidad
  mensaje.textContent = '';  // Limpiar el mensaje
}

function validarContrasena(password) {
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneNumero = /\d/.test(password);
  const tieneSimbolo = /[!@#$%^&*()]/.test(password);

  if (tieneMayuscula && tieneNumero && tieneSimbolo) {
    mensaje.textContent = "La contraseña es fuerte.";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "La contraseña es débil. Debe incluir al menos una mayúscula, un número y un símbolo especial.";
    mensaje.style.color = "red";
  }
}

boton.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar); 









