let content = document.getElementById("content");
let show = document.getElementById("showContent");
let hide = document.getElementById("hideContent");
let submit_active = document.querySelector('.post-comment-icon');
show.addEventListener("click", () => {
    content.style.display = "grid",
    show.style.display = "none",
    hide.style.display = "block"
});

hide.addEventListener("click", () =>{
content.style.display = "none",
show.style.display = "block",
hide.style.display = "none"
});

let content2 = document.getElementById("content2");
let show2 = document.getElementById("showContent2");
let hide2 = document.getElementById("hideContent2");
let submit_active2 = document.querySelector('.post-comment-icon');
show2.addEventListener("click", () => {
    content2.style.display = "grid",
    show2.style.display = "none",
    hide2.style.display = "block"
});

hide2.addEventListener("click", () =>{
content2.style.display = "none",
show2.style.display = "block",
hide2.style.display = "none"
});

let content3 = document.getElementById("content3");
let show3 = document.getElementById("showContent3");
let hide3 = document.getElementById("hideContent3");
let submit_active3 = document.querySelector('.post-comment-icon');
show3.addEventListener("click", () => {
    content3.style.display = "grid",
    show3.style.display = "none",
    hide3.style.display = "block"
});

hide3.addEventListener("click", () =>{
content3.style.display = "none",
show3.style.display = "block",
hide3.style.display = "none"
});