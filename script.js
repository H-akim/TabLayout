var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");

var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", ()=>{
   content1.style.transform = "translateX(0)";
   content2.style.transform = "translateX(100%)";
   content3.style.transform = "translateX(100%)";
   btn1.style.color = "#ff7846";
   btn2.style.color = "#000";
   btn3.style.color = "#000";
});

var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", ()=>{
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    btn1.style.color = "#000";
    btn2.style.color = "#ff7846";
    btn3.style.color = "#000";
});

var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", ()=>{
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
    btn1.style.color = "#000";
    btn2.style.color = "#000";
    btn3.style.color = "#ff7846";
});
