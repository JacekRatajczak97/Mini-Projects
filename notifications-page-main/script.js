const readAll = document.querySelector(".mark-as-read");
const numb = document.querySelector(".notification-number");
const elementsArray = document.querySelectorAll(".enter");
const elementsArrayUnread = document.querySelectorAll(".unread");
const dotted = document.querySelectorAll(".dot");
numb.innerText = elementsArrayUnread.length;

readAll.addEventListener("click", () => {
  for (i = 0; i < elementsArray.length; i++) {
    elementsArray[i].classList.remove("unread");
    dotted[i].classList.add("dot-hidden");
    numb.innerText = 0;
  }
});

elementsArray.forEach((elem) => {
  elem.addEventListener("click", function () {
    elem.classList.toggle("unread");
    elem.querySelector(".dot").classList.toggle("dot-hidden");
    numb.innerText = document.querySelectorAll(".unread").length;
  });
});
