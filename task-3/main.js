const API_URL = "http://universities.hipolabs.com";
const form = document.querySelector(".form");
const table = document.querySelector(".table");
const tableBody = document.querySelector(".table__body");
const errorContainer = document.querySelector(".error");
const resetBtn = document.querySelector(".form__button.reset");

async function fetchUniversities(url, country) {
  try {
    const response = await fetch(`${url}/search?country=${country}`);
    if (!response.ok) {
      throw new Error("Сталася помилка. Спробуйте пізніше.");
    }

    const data = await response.json();
    if (!data || data.length === 0) {
      throw new Error("По заданій країні нічого не знайдено.");
    }
    return data;
  } catch (error) {
    tableBody.innerHTML = "";
    errorContainer.innerHTML = error.message;
  }
}

function drawTable(universities) {
  tableBody.innerHTML = "";
  table.classList.remove("hidden");
  universities.forEach((university, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `    
      <td class="table__column">${i + 1}</td>
      <td class="table__column">${university.name}</td>
      <td class="table__column">${university.country}</td>
      <td class="table__column">
        <a href="${university.web_pages}" target="_blank">Посилання на сайт</a>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

async function handleSubmit(event) {
  event.preventDefault();
  const country = document.querySelector(".form__input").value;
  const universities = await fetchUniversities(API_URL, country);
  drawTable(universities);
}

function handleReset() {
  table.classList.add("hidden");
  tableBody.innerHTML = "";
  errorContainer.innerHTML = "";
}

form.addEventListener("submit", handleSubmit);
resetBtn.addEventListener("click", handleReset);
