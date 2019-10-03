const menuBtns = document.querySelectorAll("#menuBtn");
const pages = document.querySelectorAll("#pages");
const menuBtn = [].slice.call(menuBtns);

// Set Initail State Of Menu \\
var showMenu = [true, false, false, false];
var contactSubmitted = false;

menuBtn.forEach(function(menuBtns, index) {
  menuBtns.addEventListener("click", function() {
    for (let i = 0; i < showMenu.length; i++) {
      if (i == index) {
        pages[i].classList.add("show");
        showMenu[i] = true;
      } else {
        pages[i].classList.remove("show");
        showMenu[i] = false;
      }
    }
    if (showMenu[3] == true) {
      formSubmitListener();
    } else {
      successMessage.style.visibility = "hidden";
    }
  });
});

// -- FormSubmit event handler --\\
function formSubmitListener() {
  const ContactMeForm = document.querySelector("#contactForm");
  const successMessage = document.querySelector("#successMessage");
  const submitBtn = document.querySelector("#submit");
  const textFields = document.querySelectorAll(".field");
  const textTitles = document.querySelectorAll(".title");

  console.log(textFields);
  console.log(textTitles);

  ContactMeForm.addEventListener("submit", e => {
    if (textFields[0].value.length < 1) {
      textTitles[0].style.color = "red";
      textFields[0].placeholder = "Please Enter Your Name";
      textTitles[1].style.color = "black";
      e.preventDefault();
    } else if (textFields[1].value == "") {
      textTitles[0].style.color = "black";
      textTitles[1].style.color = "red";
      textFields[1].placeholder = "Please Enter Email Your Address";
      e.preventDefault();
    } else {
      textTitles[0].style.color = "black";
      textTitles[1].style.color = "black";

      successMessage.style.visibility = "visible";

      submitBtn.disabled = true;
      submitBtn.style.background = "grey";

      contactSubmitted = true;
      console.log("Submitted!");
    }
  });
}
