
var edad = prompt("Por favor, ingresa tu edad:");


edad = parseInt(edad);


if (edad >= 18) {
  alert("¡Bienvenido! Eres mayor de edad y puedes ingresar.");
 
} else {
  alert("Debes ser mayor de edad para ingresar.");
  
}
// Obtén una referencia a los botones "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Obtén una referencia al contador del carrito
const cartCount = document.getElementById('cart-count');

// Inicializa una variable para rastrear la cantidad de productos en el carrito
let itemCount = 0;

// Manejador de clic para los botones "Agregar al carrito"
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtén el nombre y el precio del producto desde los atributos personalizados
        const productName = button.getAttribute('data-product-name');
        const productPrice = parseFloat(button.getAttribute('data-product-price'));

        // Realiza la lógica para agregar el producto al carrito (puedes usar un array para mantener un registro)
        // En este ejemplo, simplemente incrementamos el contador
        itemCount++;

        // Actualiza el contador del carrito
        cartCount.textContent = itemCount + ' producto(s) en el carrito';
    });
});



