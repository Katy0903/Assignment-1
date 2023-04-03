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


const cancelButton = document.querySelector(".cancelb")
const saveButton = document.querySelector(".saveb")
const textArea = document.querySelector("textarea")


function hideTextAreaandButton () {
    textArea.classList.add("hidden");
    saveButton.classList.add("hidden");
    cancelButton.classList.add("hidden");
};

cancelButton.addEventListener("click", hideTextAreaandButton);