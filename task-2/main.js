const gallery = document.querySelector(".gallery");

for (let i = 1; i <= 12; i++) {
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = `images/${i}.jpg`;
  image.alt = `Image ${i}`;
  gallery.appendChild(image);
}
