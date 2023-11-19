const panels = [...document.querySelectorAll(".panel")];

function myFunction(event) {
  this.classList.toggle("active");
  const panel = event.currentTarget;
  const firstParagraph = panel.querySelector('p:first-child');
  const lastParagraph = panel.querySelector('p:last-child');
  firstParagraph.classList.toggle('first');
  lastParagraph.classList.toggle('last');
}

panels.forEach((item) => {
  item.addEventListener("click", myFunction);
});
