const titulo = (div, toggleCarrito) => {
  const header = document.createElement('header');

  const buscadorContainer = document.createElement('div');
  buscadorContainer.style.display = 'flex';
  buscadorContainer.style.alignItems = 'center';

  const buscador = document.createElement('input');
  buscador.type = 'text';
  buscador.placeholder = 'Buscar productos...';
  buscador.style.flex = '1';
  buscador.style.maxWidth = '150px';

  const botonBuscar = document.createElement('button');
  botonBuscar.innerText = 'Buscar';
  botonBuscar.type = 'button';

  botonBuscar.onclick = () => {
    const query = buscador.value;
    console.log(`Buscar: ${query}`);
  };

  buscadorContainer.appendChild(buscador);
  buscadorContainer.appendChild(botonBuscar);

  const logoContainer = document.createElement('div');
  logoContainer.style.position = 'absolute'; 
  logoContainer.style.left = '50%'; 
  logoContainer.style.transform = 'translateX(-50%)'; 

  const logo = document.createElement('img');
  logo.src = './assets/melere.webp';
  logo.alt = 'Logo de la tienda';
  logo.height = 17;  
  logo.width = 100;

  logoContainer.appendChild(logo);

  const carritoButton = document.createElement('button');
  carritoButton.type = 'button';

  const carritoImage = document.createElement('img');
  carritoImage.src = './assets/3rayitas.webp';
  carritoImage.alt = 'Carrito';
  carritoImage.style.width = '17px';
  carritoImage.style.height = '17px';

  carritoButton.appendChild(carritoImage);

  carritoButton.onclick = () => {
    toggleCarrito();
  };

  header.appendChild(buscadorContainer);
  header.appendChild(logoContainer);
  header.appendChild(carritoButton);

  div.appendChild(header);
};

export default titulo;
