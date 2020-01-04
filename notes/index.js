const title = document.getElementById("title");
title.style.color = "blue";
console.log(title)

function handleClick(event){
    title.style.color = "red";
}
title.addEventListener("click", handleClick);