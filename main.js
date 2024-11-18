import titulo from "./titulo.js";
import footer from "./footer.js";
import botones from "./botones.js";

const app = () => {
  const div = document.getElementById('root');

  // Crear el contenedor del carrito
  const carritoResumen = document.createElement('div');
  carritoResumen.classList.add('resumen-carrito');
  carritoResumen.style.display = 'none'; // Ocultar por defecto
  div.appendChild(carritoResumen);

  // Función para mostrar u ocultar el resumen del carrito
  const toggleCarrito = () => {
    carritoResumen.style.display = carritoResumen.style.display === 'none' ? 'block' : 'none';
  };

  // Datos del carrito
  const carrito = [
    { id: 1, nombre: 'Remera', precio: 20 },
    { id: 2, nombre: 'Abrigo', precio: 50 },
  ];

  // Crear el contenido del resumen del carrito
  const renderCarrito = () => {
    carritoResumen.innerHTML = ''; // Limpiar contenido previo

    const h2 = document.createElement('h2');
    h2.innerText = 'Resumen del Carrito';
    carritoResumen.appendChild(h2);

    const ul = document.createElement('ul');
    carrito.forEach(item => {
      const li = document.createElement('li');
      li.innerText = `${item.nombre} - $${item.precio}`;
      ul.appendChild(li);
    });
    carritoResumen.appendChild(ul);

    const total = carrito.reduce((total, item) => total + item.precio, 0);
    const totalP = document.createElement('p');
    totalP.innerText = `Total: $${total}`;
    carritoResumen.appendChild(totalP);

    const botonCerrar = document.createElement('button');
    botonCerrar.innerText = 'Cerrar carrito';
    botonCerrar.onclick = toggleCarrito;
    carritoResumen.appendChild(botonCerrar);
  };

  renderCarrito();

  titulo(div, toggleCarrito);
  footer(div);
  botones(div);
};

app();
