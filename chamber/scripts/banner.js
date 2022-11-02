const paragraph = document.querySelector("p");
const d = new Date();
let date = d.toDateString();
    paragraph.textContent = date;