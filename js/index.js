window.onload = function () {
  // Verifica si la página se ha cargado antes
  if (!localStorage.getItem("loaded")) {
    // Si no, muestra la pantalla de carga
    document.getElementById("loadingScreen").style.display = "flex";

    // Guarda un indicador en el almacenamiento local para saber que la página ya se ha cargado
    localStorage.setItem("loaded", true);

    // Simula un tiempo de carga de 3 segundos, luego redirige a otra página
    setTimeout(function () {
      window.location.href = "../Html/index.html";
    }, 5000);
  }
};

const textElement = document.getElementById('fadeText');
let opacity = 1; // inicializa la opacidad a 1
function fadeOut() {
    if (opacity > 0) {
        opacity -= 0.01; // reduce opacidad
        textElement.style.opacity = opacity;
        requestAnimationFrame(fadeOut); // continúa el ciclo de animación
    }
}
fadeOut();