let content5 = document.getElementById("er");
let bodyfull = document.getElementsByClassName('post')[0];
let shadow = document.getElementsByClassName('overlay')[1];
let show5 = document.getElementById("menu_react");
show5.addEventListener("click", () => {
    content5.style.display = "block",
    shadow.style.display = "block"
});
content5.addEventListener("click", () => {
    content5.style.display = "none",
    shadow.style.display = "none"
});
