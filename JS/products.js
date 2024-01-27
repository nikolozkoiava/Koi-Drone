const filterRadioButtons = document.querySelectorAll(".tree_leaf_item input");
const filterableItems = document.querySelectorAll(".list_products .productItem__product");
const clearFilterButton = document.getElementById("clearFilter");

const filterItems = (selectedSeries) => {
  filterableItems.forEach((item) => {
    item.style.display = "none";
    if (item.dataset.name === selectedSeries || selectedSeries === "all") {
      item.style.display = "block";
    }
  });
};

filterRadioButtons.forEach((input) => {
  input.addEventListener("change", (e) => {
    document.querySelector(".active")?.classList.remove("active");
    e.currentTarget.classList.add("active");
    filterItems(e.currentTarget.dataset.name);
  });
});

clearFilterButton.addEventListener("click", () => {
  
  filterRadioButtons.forEach((input) => {
    input.classList.remove("active");
  });

  filterRadioButtons.forEach((input) => {
    input.checked = false;
  });

  filterItems("all");
});


