const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeIcon = document.getElementById("closeIcon");

const isOpen = false;

hamburger.addEventListener("click", () => {
  if (!isOpen) {
    menu.classList.toggle("hidden");
    closeIcon.classList.remove("hidden");
    isOpen = true;
  }
});
// pojihpo0 npiutpitgu 

closeIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  closeIcon.classList.add("hidden");
  isOpen = false;
});




function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const plusIcon = element.querySelector(".plus-icon");
  const crossIcon = element.querySelector(".cross-icon");

  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
    plusIcon.classList.remove("hidden");
    crossIcon.classList.add("hidden");
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px"; // Set to the scrollHeight to enable transition
    plusIcon.classList.add("hidden");
    crossIcon.classList.remove("hidden");
  }
}
