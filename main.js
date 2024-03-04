var accBtn = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accBtn.length; i++) {
  accBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let plus = this.querySelector(".plus")
    let minus = this.querySelector(".minus")
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      plus.style.display = "block"
      minus.style.display = "none"
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      plus.style.display = "none"
      minus.style.display = "block"
    }
  });
} 