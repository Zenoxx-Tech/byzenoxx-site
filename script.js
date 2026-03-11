window.onload = function(){

console.log("Site ByZenoxx chargé 🚀");

}

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

})

})

})