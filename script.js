const button = document.getElementById("_button");
const notify = document.getElementById("_notification");

button.addEventListener("click", () => {
  const counter = Number(notify.getAttribute("data-count")) || 0;
  notify.setAttribute("data-count", counter + 1);
  notify.classList.add("count");

  // Force reflow
  notify.classList.remove("notify");
  void notify.offsetWidth; // Trigger reflow
  notify.classList.add("notify");
});

notify.addEventListener("animationend", () => {
  notify.classList.remove("notify");
});
