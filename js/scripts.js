//Para cambiar visualización de navbar
window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});




//TO DO
// Declare las variables del formulario login
// Ontenemos los valores de los campos de contraseñas 
const boton=document.getElementById('loginBtn')

//cree la funcion validar
function validar() {
const email=document.getElementById("inputEmail").value;
const pass= document.getElementById("inputPassword").value;
  if(email =="admin" && pass=="12345"){
    window.location.href="/pages/dashboard.html"
    }
     else {
      alert("Usuario Incorrecto")   
    }

  }
 // Implemente el evento para llamar a la funcion validar
// btn.addEventListener("click", function (evt) ....
  boton.addEventListener("click", validar);
  




