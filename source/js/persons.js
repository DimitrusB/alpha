import { person } from "./const.js";

const aboutPersons = document.getElementById("persons");
let currentIndex = 0;

renderPerson(person[currentIndex]);

function renderPerson(personInfo) {
  const card = document.createElement("div");
  card.classList.add("person__item");
  card.innerHTML = `
    <div style="display: flex; justify-content: space-between; width: 100%;">
      <img src="../../img/line.svg" alt="prev" title="Предыдущий" id="prev">
      <img src="${personInfo.image}" alt="${personInfo.name}">
      <img src="../../img/line.svg" alt="next" style="transform: rotate(180deg);" title="Следующий" id="next">
    </div>
    <div>
    <div class="person__item_name">${personInfo.name}</div>
    <div class="person__item_specialization">${personInfo.specialization}</div>
  </div>
  <ul class="person__experience">
    ${personInfo.experience
      .map((exp) => `<li class="person__item_experience">${exp}</li>`)
      .join("")}
  </ul>
`;
console.log(currentIndex);
aboutPersons.appendChild(card);
}

const prev = document.getElementById("prev");
prev.addEventListener("click", () => {
    next.disabled = false;
  if (currentIndex > 0) {
    currentIndex -= 1;
    aboutPersons.innerHTML = "";
    renderPerson(person[currentIndex]);
  } else {
    prev.disabled = true;
  }
});

const next = document.getElementById("next");
next.addEventListener("click", () => {
    prev.disabled = false;
  if (currentIndex < person.length - 1) {
    currentIndex += 1;
    aboutPersons.innerHTML = "";
    renderPerson(person[currentIndex]);
  } else {
    next.disabled = true;
  }
});