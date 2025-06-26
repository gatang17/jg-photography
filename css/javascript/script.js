// ----------------------------
// 1. Contenido del <head>
// ----------------------------
// 1. Insertar contenido estático (meta, title, bootstrap CSS, y tu CSS) con innerHTML:
document.head.innerHTML += `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>J&G Photography</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous">

  <!-- Tus estilos -->
  <link rel="stylesheet" href="css/styles.css">
`;

// 2. Insertar scripts con createElement para que se ejecuten bien:
const script = document.createElement('script');
script.src = 'css/javascript/script.js';
document.body.appendChild(script);

const bootstrap = document.createElement('script');
bootstrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
bootstrap.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
bootstrap.crossOrigin = 'anonymous';
document.body.appendChild(bootstrap);




// Esta función mueve el carrusel dependiendo del tamaño de la pantalla
function moveCarousel() {
    // Obtenemos el carrusel
    const carousel = document.getElementById('carr_ind');
  
    // Este es el contenedor vacío donde se mostrará el carrusel en MÓVIL
    const mobilePlaceholder = document.getElementById('carousel-mobile-placeholder');
  
    // Este es el contenedor que originalmente tiene el carrusel en ESCRITORIO
    const desktopContainer = document.getElementById('carousel-container');
  
    // Obtenemos el ancho actual de la ventana
    const width = window.innerWidth;
  
    // Si alguno de los elementos no existe, detenemos el código
    if (!carousel || !mobilePlaceholder || !desktopContainer) return;
  
    // Si la pantalla es más pequeña de 768px (modo móvil)
    if (width < 768) {
      // Si el carrusel no está ya en el contenedor móvil, lo movemos allí
      if (!mobilePlaceholder.contains(carousel)) {
        mobilePlaceholder.appendChild(carousel);
      }
    } else {
      // Si la pantalla es más grande (modo desktop) y el carrusel no está allí, lo devolvemos
      if (!desktopContainer.contains(carousel)) {
        desktopContainer.appendChild(carousel);
      }
    }
  }
  
  // Esta parte hace que la función se ejecute:
  // - cuando se carga la página (DOMContentLoaded)
  // - y también cuando se cambia el tamaño de la ventana (resize)
  window.addEventListener('DOMContentLoaded', moveCarousel);
  window.addEventListener('resize', moveCarousel);

  // Este código debe estar en script.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, 4000); // cambia cada 4 segundos
});


  document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
     <footer>
    <h3>Quick Links</h3>
    <div class="row">
      <div class="col-4 cont_foot">
        <a href="#">Facebook</a>
       <a href="#">Instagram</a>
     </div>

      <div class="col-4 cont_foot">
        <a href="#">Gallery</a>
        <a href="#">Packages</a>
       
      </div>

      <div class="col-4 cont_foot">
        <a href="#">Post</a>
     </div>
    </div>

  </footer>
    `;
  
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
  });

  document.addEventListener('DOMContentLoaded', function() {
    const section_1HTML = `
   <!-- CONTENEDOR DEL MENÚ -->
<div class="menu_2 col-md-6 col-sm-12">

  <a href="index.html" class="nav-link">HOME</a>

  <!-- MENU CON SUBMENÚ -->
  <div class="dropdown">
    <a href="services.html" class="nav-link">SERVICES ▾</a>
    <div class="dropdown-content">
      <a href="photography.html">Photography</a>
      <a href="graphic_design.html">Graphic Design</a>
      <a href="social_media.html">Social Media</a>
    </div>
  </div>

  <a href="about_us.html" class="nav-link">ABOUT US</a>
  <a href="contact.html" class="nav-link">CONTACT</a>

</div>
 `;
  
    document.getElementById('section_1').innerHTML = section_1HTML;
  });

  //calculadora
  const services = {
    portrait: {
      name: "Portrait Photography",
      packages: {
        essential: {
          name: "Essential Portrait",
          price: 75,
          image: "img/services/retrato.jpg"
        },
        creative: {
          name: "Creative Portrait",
          price: 120,
          image: "img/services/retrato2.jpg"
        },
        branding: {
          name: "Branding Mini Session",
          price: 150,
          image: "img/services/retrato3.jpg"
        }
      }
    },
    flyer: {
      name: "Flyer Design",
      packages: {
        basic: {
          name: "Basic Flyer",
          price: 45,
          image: "img/services/flyer.jpg"
        }
      }
    },
    social: {
      name: "Social Media Kit",
      packages: {
        starter: {
          name: "Starter Social Media Kit",
          price: 60,
          image: "img/services/social.jpg"
        }
      }
    }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const serviceKey = urlParams.get("service");
  const packageKey = urlParams.get("package");

  const service = services[serviceKey] || services["portrait"];
  const pkg = service.packages[packageKey] || Object.values(service.packages)[0];

  document.getElementById("serviceName").textContent = service.name;
  document.getElementById("packageName").textContent = pkg.name;
  document.getElementById("basePrice").textContent = `$${pkg.price}`;
  document.getElementById("previewImage").src = pkg.image;

  function calculateTotal() {
    let total = pkg.price;
    if (document.getElementById("extra1").checked) total += 5;
    if (document.getElementById("extra2").checked) total += 10;
    if (document.getElementById("extra3").checked) total += 7;
    document.getElementById("totalPrice").textContent = total;
  }

  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", calculateTotal);
  });

  calculateTotal();
  