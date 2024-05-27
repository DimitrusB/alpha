import { work } from "./const.js";

const formAnketa = document.getElementById("anketa");
const sendInfo = document.getElementById("sendInfo");
const closeBtn = document.createElement("button");



function newCard() {
  
  const item = document.createElement("div");
  item.innerHTML = `
    <div class="anketa__modal">
      <div class="anketa__head">
        <img src="../../img/closebutton.svg" class="close-btn">
        </img>
      </div>
      <div class="anketa__form">
      <span class="about__span">заполните анкету</span>
      <div class="anketa__border">
      <input class="anketa__input" type="text" placeholder="Ф.И.О">
      </div>
      <div class="anketa__border">
      <input class="anketa__input" type="phone" placeholder="Телефон">
      </div>
      <span class="anketa__text">Отклик на вакансию</span>
      <div class="anketa__border">
      <select id="workerSelect" class="anketa__input">
      <option disabled selected>Выберите вакансию</option>
      ${work.map((element) => `<option value="${element.worker}">${element.worker}</option>`).join("")}
    </select>
    </div>
    <span class="anketa__text">Ваше резюме</span>
    <span class="anketa__smalltext">Есть резюме в формате .pdf или .doc?<br>
    Приложите и отправьте его нам.</span>
      <input type="file" id="file-upload" style="display: none;">

      <button onclick="document.getElementById('file-upload').click()" class="anketa__load">Загрузить файл</button>
    <div class="anketa__chekbox">
    <input type="checkbox">
    <span class="anketa__smalltext">Я прочитал(а), ознакомился(лась) и согласен(на) с Политикой конфиденциальности, Согласием на обработку персональных данных физическим лицом. Я осознаю, что даю Согласие на обработку персональных данных для использования предоставляемых возможностей Веб-сервиса.<br><br> Я достиг(ла) 18-летнего возраста</span>
    </div>
    
      </div>
      <button class="sendInfo" id="sendData">ОТПРАВИТЬ АНКЕТУ</button>
    </div>
  `;
  formAnketa.innerHTML = "";
  formAnketa.appendChild(item);

  const sdData = document.getElementById('sendData');
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeModal);
  sdData.addEventListener("click", sendData)
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


function sendData() {
  
  closeModal()
  const item = document.createElement("div");
  item.innerHTML = `
    <div class="anketa__modal">
      <div class="anketa__head">
        <img src="../../img/closebutton.svg" class="close-btn">
        </img>
      </div>
      <div class="anketa__form" style="align-items: center;padding-bottom: 110px;">
      <span class="about__span">Анкета отправлена</span>
      <div style="
      padding-bottom: 50px;
      padding-top: 80px;  ">
      <img src="../../img/ok.webp" alt="ok">
      </div>
    <span class="anketa__text">Благодарим за ваш отклик и интерес. <br><br>
    Мы изучим вашу анкету и свяжемся с вами в течении 2х дней.</span>

    
      </div>
      <button class="sendInfo" id="sendData">на главную</button>
    </div>
  `;
  formAnketa.innerHTML = "";
  formAnketa.appendChild(item);

  const closeBtn = document.querySelector(".close-btn");
  const sdData = document.getElementById('sendData');
  closeBtn.addEventListener("click", closeModal);
  sdData.addEventListener("click",closeModal)
}


