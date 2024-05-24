import { product } from "./const.js";

const productSent = document.getElementById("products");
const item = document.querySelector(".products__company");
productSent.innerHTML = "";

item.innerHTML = `
<span class="about__span prod">Преимущества Компании</span>
`;

product.forEach((element, index) => {
  const card = document.createElement("div");
  card.classList.add("product__item");

  card.innerHTML = `
    <div class="product__item_content">
    <span class="product__span">${element.title}</span>
    <span class="product__description hidden">${element.description}</span>  
  </div>
    <img style="padding-right: 20px;" src="./img/more.svg" alt="more" class="more-btn" data-index="${index}"/>
  </div>
    `;

  productSent.appendChild(card);
});

const moreBtns = document.querySelectorAll(".more-btn");
moreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const index = parseInt(btn.getAttribute("data-index"));

    const hiddenSpan = btn.parentElement.querySelector(".product__description");

    if (hiddenSpan.classList.contains("hidden")) {
      hiddenSpan.classList.remove("hidden");
      btn.style.rotate = '45deg';
    } else {
      hiddenSpan.classList.add("hidden");
      btn.style.rotate = 'none';
    }
  });
});
