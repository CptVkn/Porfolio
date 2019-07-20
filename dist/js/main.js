const menuBtns = document.querySelectorAll("#menuBtn");
const pages = document.querySelectorAll("#pages");
const menuBtn = [].slice.call(menuBtns);

// Set Initail State Of Menu \\
var showMenu = [true, false, false, false, false];

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
    if (showMenu[4] == true) {
      mailEventListener();
    }
  });
});

// -- mail event handler --\\
function mailEventListener() {
  const ContactMeForm = document.querySelector("#contactForm");

  ContactMeForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("Submitted!");
  });
}

// ContactMeForm.submitForm({
//   cURL:
//     "mailto: " +
//     email +
//     "?subject=" +
//     subject +
//     "&body=You can also input some standard text to appear in the body of the email.",
//   cSubmitAs: "PDF",
//   cCharset: "utf-8"
// });

// var email = "kevinarlynswenson@gmail.com";
// var subject = "Website Submission";
