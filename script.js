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
