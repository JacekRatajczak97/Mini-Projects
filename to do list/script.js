const addNote = document.querySelector(".add-note");
const removeNote = document.querySelector(".remove-note");
const menu = document.querySelector(".menu");
const popup = document.querySelector(".popup");
const container = document.querySelector(".container");
const closePopup = document.querySelector(".close-popup");
const noteContainer = document.querySelector(".note-container");
const button = document.querySelector(".submit-button");

// add new note listener
addNote.addEventListener("click", () => {
  popup.classList.remove("unvisible");
  container.style.opacity = "12%";
});

//create note
const createNote = () => {
  //create note container
  const newDiv = document.createElement("div");
  newDiv.classList.add("note");
  noteContainer.appendChild(newDiv);

  //create note head
  const noteHead = document.createElement("div");
  noteHead.classList.add("note-head");
  newDiv.appendChild(noteHead);

  //create note body
  const noteBody = document.createElement("div");
  noteBody.classList.add("note-body");
  noteHead.parentNode.insertBefore(noteBody, noteHead.nextSibling);

  //add value from inputs to divs
  const titleText = document.querySelector(".input-head");
  const contentText = document.querySelector(".content-text");
  noteHead.textContent = titleText.value;
  noteBody.textContent = contentText.value;

  //clear inputs
  titleText.value = "";
  contentText.value = "";
};

// submit text
button.addEventListener("click", () => {
  createNote();
  closePopupFunction();

  menu.style.marginBottom = "2rem";
});

// close popup function
const closePopupFunction = () => {
  popup.classList.add("unvisible");
  document.body.style.backgroundColor = "#29335c";
  container.style.opacity = "100%";
  menu.classList.remove("border");
};

// close popup x
closePopup.addEventListener("click", () => {
  closePopupFunction();
});

noteContainer.addEventListener("click", (e) => {
  if (e.path[1].classList.contains("note")) {
    e.path[1].firstChild.classList.toggle("delete");
  }
});

removeNote.addEventListener("click", () => {
  const note = document.querySelectorAll(".delete");
  note.forEach((el) => {
    el.parentNode.remove();
  });
});
