const addItemsForm = document.querySelector(".add-items-form");
const itemsList = document.querySelector(".items-list");
const items = [];

addItemsForm.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();

  const text = e.target.item.value;
  const item = {
    text: text,
  };
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
  displayItems(items, itemsList);
  this.reset();
  //   console.log(text, items);
}

function displayItems(ingredients, ingredientsList) {
  console.log(ingredients, ingredientsList);
  ingredientsList.innerHTML = ingredients
    .map((ingredient, index) => {
      return `<li>${ingredient.text}</li>`;
    })
    .join("");
}
