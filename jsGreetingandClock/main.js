let greeting = document.querySelector(".title");
let userName = prompt("Adınızı Giriniz...")
greeting.innerHTML = `Merhaba <strong> ${userName}</strong>! Hoş Geldin!`;


function getHours()
{
    var now = new Date();
    return now.toLocaleTimeString(); 
}

function getDays() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Pazar";
    weekday[1] = "Pazartesi";
    weekday[2] = "Salı";
    weekday[3] = "Carşamba";
    weekday[4] = "Perşembe";
    weekday[5] = "Cuma";
    weekday[6] = "Cumartesi";
  
    var today = weekday[d.getDay()];
    return today;

}

function displayHours() {
	let clock = document.querySelector(".clock");
    clock.classList.add("text-decoration-underline");
	clock.innerHTML = getHours();
    clock.innerHTML += " " + getDays();
}

displayHours();

setInterval("displayHours()", 1000);