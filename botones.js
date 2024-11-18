const botones = (div) => {
  const botonesContainer = document.createElement('div');
  botonesContainer.classList.add('botones-container');  // Agregar clase al contenedor

  const botonRemeras = document.createElement('button');
  botonRemeras.innerText = "Remeras";
  botonRemeras.type = "button";
  botonRemeras.onclick = () => {
    window.location.href = "./pages/remeras.html";
  };

  const botonAbrigos = document.createElement('button');
  botonAbrigos.innerText = "Abrigos";
  botonAbrigos.type = "button";
  botonAbrigos.onclick = () => {
    window.location.href = "./pages/abrigos.html";
  };

  const botonAccesorios = document.createElement('button');
  botonAccesorios.innerText = "Accesorios";
  botonAccesorios.type = "button";
  botonAccesorios.onclick = () => {
    window.location.href = "./pages/accesorios.html";
  };

  const botonNosotros = document.createElement('button');
  botonNosotros.innerText = "Nosotros";
  botonNosotros.type = "button";
  botonNosotros.onclick = () => {
    window.location.href = "./pages/nosotros.html";
  };

  const botonLocal = document.createElement('button');
  botonLocal.innerText = "Local";
  botonLocal.type = "button";
  botonLocal.onclick = () => {
    window.location.href = "./pages/local.html";
  };

  botonesContainer.appendChild(botonRemeras);
  botonesContainer.appendChild(botonAbrigos);
  botonesContainer.appendChild(botonAccesorios);
  botonesContainer.appendChild(botonNosotros);
  botonesContainer.appendChild(botonLocal);

  div.append(botonesContainer);
};

export default botones;
