var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gardiant");
var button = document.querySelector(".random");


//generate color
function colorGen()
{  return Math.floor(Math.random()*16777215).toString(16);
}

// color generating button 
button.addEventListener("click", function(){
color1.value = '#' + colorGen();
color2.value = '#' + colorGen();
setGradient();
})



function setGradient(){
    body.style.background = "linear-gradient(to right,"
    + color1.value +" , "+ color2.value + ")" ;
    css.textContent = body.style.background+";";
};

setGradient();
// OR u can use onclick/oninput in the html element  oninput="setGradient()"
color1.addEventListener("input",setGradient);
color2.addEventListener("input", setGradient);
