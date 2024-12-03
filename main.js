// Acessar a câmera
const video = document.querySelector("video");
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => console.error("Erro ao acessar a câmera:", err));

// Selecionar elementos
const overlay = document.getElementById("overlay");
const opacityRange = document.getElementById("opacityRange");
const imageUpload = document.getElementById("imageUpload");

// Ajustar opacidade da imagem
opacityRange.addEventListener("input", () => {
  overlay.style.opacity = opacityRange.value / 100;
});

// Fazer upload da imagem
imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      overlay.src = e.target.result;
    };
    reader.readAsDataURL(file); // Converte a imagem em base64 para exibição
  }
});

// Hide options
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const controls = document.querySelector("#controls");
  const isVisible = controls.style.display === "none";

  if (isVisible) {
    controls.style.display = "flex";
  } else {
    controls.style.display = "none";
  }
});
