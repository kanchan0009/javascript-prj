document.getElementById("menu").addEventListener("click",function(){
    document.querySelector(".menulist").classList.add("visible");
});


document.getElementById("close").addEventListener("click",function(){
    document.querySelector(".menulist").classList.remove("visible");
});

