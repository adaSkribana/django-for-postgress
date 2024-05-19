// Cambiar colores al mover el mouse sobre los elementos de botón
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn");

  // Iterar sobre cada botón
  buttons.forEach(button => {
    // Agregar el evento mouseover para aplicar los estilos al pasar el mouse sobre el botón
    button.addEventListener("mouseover", function(event) {
      const goldColor = "rgb(255, 215, 0)";
      const silverColor = "rgb(192, 192, 192)";
      const goldShadow = `0 0 5px ${goldColor}, 0 0 10px ${goldColor}, 0 0 20px ${goldColor}`;
      const silverShadow = `0 0 5px ${silverColor}, 0 0 10px ${silverColor}, 0 0 20px ${silverColor}`;
      
      this.style.background = `linear-gradient(to right, ${goldColor}, ${silverColor})`;
      this.style.boxShadow = `${goldShadow}, ${silverShadow}`;
    });

    // Agregar el evento mouseout para quitar los estilos al salir del botón
    button.addEventListener("mouseout", function(event) {
      // Revertir los estilos a su estado original
      this.style.background = "";
      this.style.boxShadow = "";
    });
  });

  // Controlar el despliegue del menú desplegable al hacer clic en el botón de hamburguesa
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
  });
});
