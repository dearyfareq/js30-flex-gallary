//step 1: capture all divs with panel class and 'distribut' them to the panel array const
const panels = [...document.querySelectorAll(".panel")];

//step 3: function to play
function myFunction(event) {
  //toggle the active class for 'this', which is the div
  this.classList.toggle("active");

  //capture the event in a const
  const panel = event.currentTarget;

  //use query to select the first and last child
  const firstParagraph = panel.querySelector("p:first-child");
  const lastParagraph = panel.querySelector("p:last-child");

  //toggle the preset classes
  firstParagraph.classList.toggle("first");
  lastParagraph.classList.toggle("last");
}

//step 2: forEach 'item' in the array, listen for a click and then play the function
panels.forEach((item) => {
  item.addEventListener("click", myFunction);
});
