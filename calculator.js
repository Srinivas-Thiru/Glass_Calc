const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

   event.preventDefault();
   document.getElementById("=").click();
});
for(var i = 0; i < document.querySelectorAll("input").length ; i++) {
document.querySelectorAll("input")[i].addEventListener("click", display);
}
function display() {
   var val = this.valueOf().value;
   if(val === "=") {
      document.querySelector(".display").valueOf().value = parseFloat(eval(document.querySelector(".display").valueOf().value)).toFixed(4);
   }else if(val === "AC"){
      document.querySelector(".display").valueOf().value = "";
   }else if(val === "DEL"){
      document.querySelector(".display").valueOf().value = document.querySelector(".display").valueOf().value.substr(0 , (document.querySelector(".display").valueOf().value.length - 1));
   }else{
   document.querySelector(".display").valueOf().value += val;
   }
 }
