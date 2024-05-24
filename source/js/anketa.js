import { work } from "./const.js";

const formAnketa = document.getElementById("anketa");
const sendInfo = document.getElementById("sendInfo");
const closeBtn = document.createElement("button");
const sendData = document.getElementById('sendInfoAnketa');


function newCard() {
  
  const item = document.createElement("div");
  item.innerHTML = `
    <div class="anketa__modal">
      <div class="anketa__head">
        <button class="close-btn">
        
        </button>
      </div>
      <form class="anketa__form">
      <span class="about__span">заполните анкету</span>
      <input class="anketa__input" type="text" placeholder="Ф.И.О">
      <input class="anketa__input" type="phone" placeholder="Телефон">
      <span class="anketa__text">Отклик на вакансию</span>
      <select id="workerSelect">
      ${work.map((element) => `<option value="${element.worker}">${element.worker}</option>`).join("")}
    </select>
    <span class="anketa__text">Ваше резюме</span>
    <span class="anketa__smalltext">Есть резюме в формате .pdf или .doc?<br>
    Приложите и отправьте его нам.</span>
    <lable for="file-upload" class="anketa__load">Загрузить файл
    <input id="file-upload" type="file" "/>
    </lable>
    <div class="anketa__chekbox">
    <input type="checkbox">
    <span class="anketa__smalltext">Я прочитал(а), ознакомился(лась) и согласен(на) с Политикой конфиденциальности, Согласием на обработку персональных данных физическим лицом. Я осознаю, что даю Согласие на обработку персональных данных для использования предоставляемых возможностей Веб-сервиса.<br><br> Я достиг(ла) 18-летнего возраста</span>
    </div>
    <button class="sendInfo" id="sendInfoAnketa">ОТПРАВИТЬ АНКЕТУ</button>
      </form>
    </div>
  `;
  formAnketa.innerHTML = "";
  formAnketa.appendChild(item);

  // Добавление обработчика закрытия модального окна
  closeBtn.addEventListener("click", closeModal);
  document.querySelector(".close-btn").appendChild(closeBtn);
}

function closeModal() {
  const modal = document.querySelector(".anketa__modal");
  if (modal) {
    modal.remove();
  }
}

sendInfo.addEventListener("click", () => {
  newCard();
});

sendData.addEventListener("click",()=>{


})