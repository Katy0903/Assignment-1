
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