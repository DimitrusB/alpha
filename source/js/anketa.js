const formAnketa = document.getElementById("anketa");

const sendInfo = document.getElementById("sendInfo");

const item = document.createElement("div");

function newCard() {
  item.innerHTML = `
    <div>
    <div class="anketa__head"></div>
    <p>заполните анкету</p>

    </div>
    `;
    formAnketa.innerHTML=""
  formAnketa.appendChild(item);
}

sendInfo.addEventListener("click", () => {
  newCard();
});
