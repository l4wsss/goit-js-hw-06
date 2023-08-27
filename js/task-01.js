const categoriesList = document.querySelectorAll("ul#categories > li.item");

console.log("Number of categories:", categoriesList.length);

categoriesList.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryEl = category.lastElementChild.querySelectorAll("li");

  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${categoryEl.length}`);
});
