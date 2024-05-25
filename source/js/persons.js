import { person } from "./const.js";

const aboutPersons = document.getElementById("persons");
let currentIndex = 0;

renderPerson(currentIndex);

function renderPerson(index) {
    const personInfo = person[index];
    const card = document.createElement("div");
    card.classList.add("person__item");
    card.innerHTML = `
        <div style="display: flex; justify-content: space-between; width: 100%;">
            <img src="../../img/line.svg" alt="prev" class="prev">
            <img src="${personInfo.image}" alt="${personInfo.name}">
            <img src="../../img/line.svg" alt="next" style="transform: rotate(180deg);" class="next">
        </div>
        <div>
            <div class="person__item_name">${personInfo.name}</div>
            <div class="person__item_specialization">${personInfo.specialization}</div>
        </div>
        <ul class="person__experience">
            ${personInfo.experience.map((exp) => `<li class="person__item_experience">${exp}</li>`).join("")}
        </ul>
    `;
    aboutPersons.innerHTML = ''; 
    aboutPersons.appendChild(card);

    const prev = card.querySelector(".prev");
    prev.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            renderPerson(currentIndex);
        }
    });

    const next = card.querySelector(".next");
    next.addEventListener("click", () => {
        if (currentIndex < person.length - 1) {
            currentIndex += 1;
            renderPerson(currentIndex);
        }
    });
}