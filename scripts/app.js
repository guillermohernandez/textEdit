document.getElementById("header").innerHTML = localStorage["header"] || "Enter Title";
document.getElementById("content").innerHTML = localStorage["content"] || "Put something in the body";

setInterval(function(){
    localStorage["header"] = document.getElementById("header").innerHTML;
    localStorage["content"] = document.getElementById("content").innerHTML;
})