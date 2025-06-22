document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const openItem = document.querySelector(".accordion-item.active");

    if (openItem && openItem !== item) {
      openItem.classList.remove("active");
      openItem.querySelector(".icon").src = "assets/images/icon-plus.svg";
    }

    item.classList.toggle("active");
    const icon = header.querySelector(".icon");
    icon.src = item.classList.contains("active")
      ? "assets/images/icon-minus.svg"
      : "assets/images/icon-plus.svg";
  });
});
