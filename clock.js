console.log("tut47");

function updateClock(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let currentDate = currentTime.getDate();
    let currentMonth = currentTime.getMonth()+1;



    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds;
    currentMonth = (currentMonth < 10 ? "0": "") + currentMonth;
    currentDate = (currentDate < 10 ? "0": "") + currentDate;


   
    // cucurrentHoure = (currentMinutes > 12) ? cucurrentHoure - 12 : cucurrentHoure;
    // cucurrentHoure = (currentMinutes == 0) ? 12 : currentHour;

    let timeOfDay = (currentHour < 12) ? "AM" : "PM";
         
    const currentTimeStr = `${currentHour}:${currentMinutes}:${currentSeconds}:${timeOfDay}: ${currentDate}:${currentMonth}`;
    document.getElementById("clock").innerHTML = currentTimeStr;


}