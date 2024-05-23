import {work} from "./const.js";

const devItem = document.getElementById("division");

devItem.innerHTML = "";

work.forEach((element, index) => {
  const card = document.createElement("div");
  card.classList.add("devision__item");
 card.innerHTML = `
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
    <img src="${element.icon}" alt="more">
    </div>
  `;

  devItem.appendChild(card);
});
