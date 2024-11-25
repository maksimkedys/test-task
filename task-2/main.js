const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal__image");
const closeBtn = document.querySelector(".modal__close");
const body = document.querySelector("body");

function drawImages() {
  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = `images/${i}.jpg`;
    image.alt = `Image ${i}`;
    gallery.appendChild(image);
  }
}

function getCurrentDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function updateInfo() {
  const info = document.querySelector(".info");
  const currentDate = getCurrentDate();
  const imagesCount = document.querySelectorAll(".gallery__image").length;

  info.textContent = `Кількість зображень: ${imagesCount} | Дата: ${currentDate}`;
}

function openModal(event) {
  const imageSrc = event.target.src;
  modalImage.src = imageSrc;
  modal.style.display = "flex";
  body.classList.add("lock");
}

function closeModal() {
  modal.style.display = "none";
  body.classList.remove("lock");
  modalImage.src = "";
}

function handleImageClick(event) {
  if (event.target.classList.contains("gallery__image")) {
    openModal(event);
  }
}

function init() {
  drawImages();
  updateInfo();
  gallery.addEventListener("click", handleImageClick);
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", closeModal);
}

init();
