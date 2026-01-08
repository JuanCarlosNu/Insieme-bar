//Agrega un evento para cambiar el idioma

document.getElementById("lang-es").addEventListener("click", () => {
  cambiarIdioma("es");
});

document.getElementById("lang-en").addEventListener("click", () => {
  cambiarIdioma("en");
});

// Función para cambiar el idioma
function cambiarIdioma(lang) {
  const elementos = document.querySelectorAll("[data-lang-" + lang + "]");
  elementos.forEach((elemento) => {
    const texto = elemento.getAttribute("data-lang-" + lang);
    elemento.textContent = texto;
  });
}
const btnTop = document.getElementById("btnTop");

// Mostrar/ocultar botón según scroll
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

// Scroll suave al inicio
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
