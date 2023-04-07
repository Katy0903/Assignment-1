
// change bg color

const backGroundColor = document.querySelector(".darkb")

function turnDarkTheme () {
  
  document.body.classList.toggle("darkbgbody");
  document.querySelector("aside").classList.toggle("darkbgaside");
  
  if (backGroundColor.textContent === "Dark Theme") {
    backGroundColor.textContent = "Light Theme";
  } else if (backGroundColor.textContent === "Light Theme") {
    backGroundColor.textContent = "Dark Theme";
  };
  
};

backGroundColor.addEventListener("click", turnDarkTheme);



// cancel button

const cancelButton = document.querySelector(".cancelb")
const saveButton = document.querySelector(".saveb")
const textArea = document.querySelector("textarea")


function hideTextAreaandButton () {
    textArea.classList.add("hidden");
    saveButton.classList.add("hidden");
    cancelButton.classList.add("hidden");
};

cancelButton.addEventListener("click", hideTextAreaandButton);

// new note button

const newButton = document.querySelector(".newb")

function showTextAreaandButton () {
    if (textArea.classList.contains("hidden")) {
    textArea.classList.remove("hidden");
    saveButton.classList.remove("hidden");
    cancelButton.classList.remove("hidden");
    } else {
        textArea.value = "" ; 
    };
};

newButton.addEventListener("click", showTextAreaandButton);


// note array
const notesArray = [
    {title: "note one", body: "this is my first note"},
    {title: "note two", body: "this is my second note"},
    {title: "note three", body: "this is my third note"}
];

// save note
function saveNote() {
    const noteBody = textArea.value;

    // check if the titlename is existing
    let noteTitle = '';
    do {
        noteTitle = prompt('Please enter the title of your note:');
    } while (notesArray.some(note => note.title === noteTitle || noteTitle === ''));
    
    if (noteTitle === null) {
        return;
    };
  
    if (noteTitle !== undefined && noteTitle !== '' && noteBody !== '') {
      
      newNote = {title: noteTitle, body: noteBody};
      notesArray.push(newNote);
      const sideBarList = document.querySelector("ul")
      const newListItem = document.createElement('li');
      newListItem.textContent = noteTitle
      sideBarList.appendChild(newListItem);
   
      textArea.value = "" ; 
    };
  };
  
  saveButton.addEventListener("click", saveNote);
  

// show body
const noteTitleList = document.querySelector("ul");

function checkBody(event) {
    const clickedItem = event.target;
  
    for(let i = 0; i < notesArray.length; i++) {
      if (notesArray[i].title === clickedItem.textContent) {
        textArea.value = notesArray[i].body;
  };
 };
};  

noteTitleList.addEventListener("click", checkBody);