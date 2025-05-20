



fetch('https://discord.com/api/guilds/1370513329310793749/widget.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('miembros-online').innerText = data.presence_count;
    })
    .catch(error => {
        console.error('Error al obtener datos:', error);
        document.getElementById('miembros-online').innerText = "No disponible";
    });


document.addEventListener("scroll", () => {
    document.querySelectorAll(".container").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add("visible");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".cinematic-section");

    const mostrarSeccion = () => {
        sections.forEach(section => {
            const posicion = section.getBoundingClientRect().top;
            if (posicion < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    };

    mostrarSeccion(); 

    document.addEventListener("scroll", mostrarSeccion);
});





document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.carousel-image');
  let current = 0;

  function showImage(index) {
    images[current].classList.remove('active');
    current = (index + images.length) % images.length;
    images[current].classList.add('active');
  }

  document.getElementById('next').addEventListener('click', () => {
    showImage(current + 1);
  });

  document.getElementById('prev').addEventListener('click', () => {
    showImage(current - 1);
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const textos = [
    `<p><strong>No permitido en el Inframundo</strong><br><br>
    - No ser cristal (ofenderse por todo).<br>
    - No spam, flood, walltext, etc.<br>
    - No links.<br>
    - No usar mal los canales o tickets.<br>
    - No hacer ping innecesario.<br>
    - No unirse a llamadas para saturar micro o poner sonidos.<br>
    - No estafas, robo de identidad o multicuentas.<br>
    - No MD sin permiso.<br>
    - No enviar contenido ilegal (cp, gore, etc).</p>`,

    `<p><strong>Sí permitido en el Inframundo</strong><br><br>
    - Sí insultos.<br>
    - Sí humor negro.<br>
    - Sí discusiones en broma.<br>
    - Sí uso de todas las fobias (ej: gordofobia).<br>
    - Sí racismo, machismo, etc.<br>
    - Cualquier palabra permitida, no hay ban por eso.</p>`
  ];

  let indice = 0;
  const textoActual = document.getElementById("textoActual");

 window.cambiarTexto = function (direccion, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation(); 
  }

  indice = (indice + direccion + textos.length) % textos.length;
  textoActual.style.opacity = 0;

  setTimeout(() => {
    textoActual.innerHTML = textos[indice];
    textoActual.style.opacity = 1;
  }, 200);
};
});

if (window.location.hash === '#reglas') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.body.focus(); 
        window.scrollTo(window.scrollX, window.scrollY); 
      }, 500);
    });
  }

  document.querySelectorAll('.arrow-text').forEach(btn => {
  btn.addEventListener('keydown', e => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault(); 
    }
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const sections = [...document.querySelectorAll(".cinematic-section")];
  let currentIndex = 0;
  let isScrolling = false;

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      isScrolling = true;
      currentIndex = index;
      sections[index].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 800); // tiempo del scroll
    }
  }

  window.addEventListener("wheel", function (e) {
    if (isScrolling) return;

    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      scrollToSection(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    }
  }, { passive: false });

  // Establecer el índice correcto al cargar
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentIndex = sections.indexOf(entry.target);
      }
    });
  }, { threshold: 0.6 }); // cuando el 60% de la sección es visible

  sections.forEach(section => observer.observe(section));
});
