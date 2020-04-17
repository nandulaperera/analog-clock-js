const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runClock(){
    //This totally depends on the date object
    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition =(min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;
    
    //If using the animation use this code block and initialize the above variables once outside the function
    //This totally depends on the browser
    /* hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6; */

    HOURHAND.style.transform="rotate("+hrPosition+"deg)";
    MINUTEHAND.style.transform="rotate("+minPosition+"deg)";
    SECONDHAND.style.transform="rotate("+secPosition+"deg)";
}

var interval = setInterval(runClock,1000);