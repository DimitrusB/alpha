import { work } from "./const.js";

const devItem = document.getElementById("division");

devItem.innerHTML = "";

work.forEach((element, index) => {
  const card = document.createElement("div");
  card.classList.add("devision__item_plus");
  card.innerHTML = `
  <div class="devision__item">
 <div style="display: flex; flex-direction: column; gap: 23px">
    <div class="devision__item_cloud">
      <img src="./img/vacancy.svg" alt="vacancy">
      <span class="devision__item_work devision">${element.worker}</span>
    </div>
    <div class="devision__item_cloud">
      <img src="./img/price.svg" alt="price">
      <span class="devision__item_work price">от ${element.price} руб</span>
    </div>
    </div>
    <img src="${element.icon}" alt="more" class="btn__more">
      <div class="more__info hidden">
      <ul class="more__info_item">Задачи:
      ${element.tasks
        .map((task) => `<li class="more__info_item">${task}</li>`)
        .join("")}
      </ul>
      <ul class="more__info_item">Наши ожидания:
      ${element.expectations
        .map((exp) => `<li class="more__info_item">${exp}</li>`)
        .join("")}
      </ul>
      <ul class="more__info_item">Мы предлагаем:
      ${element.offers
        .map((offers) => `<li class="more__info_item">${offers}</li>`)
        .join("")}
      </ul>
      </div>
      </div>
      `;

  devItem.appendChild(card);
});

const btnMore = document.querySelectorAll(".btn__more");
