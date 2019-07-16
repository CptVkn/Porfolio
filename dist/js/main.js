const menuBtns = document.querySelectorAll("#menuBtn");
const pages = document.querySelectorAll("#pages");
const menuBtn = [].slice.call(menuBtns);

// Set INitail State Of Menu \\
var showMenu = [true, false, false, false, false];

//console.log(menuBtn);
//console.log(menu);

menuBtn.forEach(function(menuBtns, index) {
  //console.log(showMenu[index]);
  menuBtns.addEventListener("click", function() {
    for (let i = 0; i < showMenu.length; i++) {
      if (!showMenu[index]) {
        pages[index].classList.add("show");
        showMenu[index] = true;
      } else {
        pages[index].classList.remove("show");
        showMenu[index] = false;
      }
    }
  });
});
