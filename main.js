
myName.innerHTML= prompt("Adınızı Giriniz")


 /*   
document.querySelector("#myClock").innerHTML =saat.getDay();

if(document.querySelector("#myClock").innerHTML == 0){

    document.querySelector("#myClock").innerHTML="Pazar"
}else{
    document.querySelector("#myClock").innerHTML="pazartesi"
}

if(document.querySelector("#myClock").innerHTML == 2){

    document.querySelector("#myClock").innerHTML="Salı"
}else{
    document.querySelector("#myClock").innerHTML="çarşamba"
}
if(document.querySelector("#myClock").innerHTML == 4){

    document.querySelector("#myClock").innerHTML="Peşembe"
}else{
    document.querySelector("#myClock").innerHTML="Cuma"
}
if(document.querySelector("#myClock").innerHTML == 6){
    document.querySelector("#myClock").innerHTML="Cumartesi"
}
*/

let weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

let d = new Date();
let day = weekday[d.getDay()];

myClock.innerHTML = day;

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h)
    myClock.innerHTML =  h + ":" + m + ":" + s + " "+  day ;
    setTimeout(showTime, 1000);

  
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }
    showTime()





