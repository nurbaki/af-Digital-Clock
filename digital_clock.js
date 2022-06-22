//*=================================================================
//*              Digital Clock
//* ================================================================


const sec = document.querySelector(".seconds");
const minut = document.querySelector(".minutes");
const Hour = document.querySelector(".hours");
const PMAM = document.querySelector(".pm_am");

let pm_am;
let counter = new Date().getSeconds();
let minutes = new Date().getMinutes();
let hours = new Date().getHours();
let ilksaat = 0;
let ilkdakika = 0;

if (counter < 10) {
    sec.innerHTML = `0${counter}`;
}else sec.textContent = counter;

if (minutes < 10) {
    minut.innerHTML = `0${minutes}`;
}else minut.innerHTML = minutes;

if (hours%12 < 10) {
    Hour.innerHTML = `0${hours%12}`;
}else Hour.innerHTML = hours%12;

if (hours >=12 ) {
    PMAM.innerHTML="PM";                    
}else PMAM.innerHTML="AM";


const Clock = setInterval(() => {
    if (counter < 10) {
        // counter +=1;
        sec.innerHTML = `0${counter}`;
        counter +=1;
    } 
    else if ( 9 < counter && counter <60) {
        // counter +=1;
        sec.textContent = counter%60;
        counter +=1;

    }
    else if ( counter == 60) {
        if (ilkdakika == 0) {
            minutes +=1;
            ilkdakika =1;
        }
        if (minutes < 10) {
            // minutes += 1;
            minut.innerHTML = `0${minutes}`;
            minutes += 1;
        }
        else if ( 9 <minutes && minutes <60) {
            // minutes += 1;
            minut.innerHTML = minutes%60;
            minutes += 1;
        }
        else if ( minutes == 60) {
            if (ilksaat== 0) {
                hours +=1;
                ilksaat =1;
            }
            if (hours >=12 ) {
                PMAM.innerHTML="PM";                    
            }else PMAM.innerHTML="AM";

            if ((hours%12) < 10) {
                // hours += 1;                                 
                Hour.innerHTML = `0${hours%12}`;
                hours += 1;
            }
            else if ( 9 < (hours%12) && (hours%12) < 12) {
                // hours += 1;
                Hour.innerHTML = hours % 12;
                hours += 1;
            }
            else if ( (hours%12) == 0) {
                Hour.innerHTML = `00`
                hours=1;
            }
            minut.innerHTML = `00`;
            minutes = 1;
        }    
    sec.innerHTML = `00`;
    counter = 1;
    }; 

}, 1000);
