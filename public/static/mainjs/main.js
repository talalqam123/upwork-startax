document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");
  if (accordionItems.length > 0) {
    accordionItems[0].classList.add("open");
  }
  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-item-header");
    header.addEventListener("click", () => {
      document.querySelectorAll(".accordion-item").forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("open")) {
          otherItem.classList.remove("open");
        }
      });
      item.classList.toggle("open");
    });
  });
});

{
  document
    .querySelectorAll(".menu_res_bar, .close_res")
    .forEach(function (element) {
      element.addEventListener("click", function () {
        var filter_data = document.querySelectorAll(".Menu");
        filter_data.forEach(function (element) {
          element.classList.toggle("ActiveMenu");
        });
      });
    });
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    if(document.getElementById("preloader")) document.getElementById("preloader").style.display = "none";
    if(document.getElementById("content")) document.getElementById("content").style.display = "block";
  }, 1000);
});
