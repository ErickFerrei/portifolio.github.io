window.onload = function () {
  var progressBar = document.getElementById("file");
  var progress = 0;
  var interval = 4000 / 100; // 4 segundos dividido por 100 passos

  var loadingInterval = setInterval(function () {
    progress += 1;
    progressBar.value = progress;
    progressBar.innerHTML = progress + "%";

    // Quando chegar a 100%, pare o intervalo e mostre o conteúdo
    if (progress >= 100) {
      clearInterval(loadingInterval);
      document.getElementsByClassName("box-load")[0].style.display = "none";
      document.getElementsByClassName("container")[0].style.display = "block";
    }
  }, interval);
};

function menu() {
  var nav = document.getElementById("nav");
  nav.classList.toggle("ativo");
}
