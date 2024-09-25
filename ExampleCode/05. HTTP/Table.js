// 1) Get all tds
let tds = document.querySelectorAll("td");
// 2) Traverse
tds.forEach((item) => {
  item.onclick = function () {
    this.style.background = "#222";
  };
});
