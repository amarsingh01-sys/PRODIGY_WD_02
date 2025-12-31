 let [seconds, minutes, hours] = [0, 0, 0];
 let displayTime = document.getElementById("displayTime");
 let lapContainer = document.getElementById("laps");
 let timer = null;
 let lapCount = 0;

 function stopwatch() {
     seconds++;
     if (seconds === 60) {
         seconds = 0;
         minutes++;
         if (minutes === 60) {
             minutes = 0;
             hours++;
         }
     }

     let h = hours < 10 ? "0" + hours : hours;
     let m = minutes < 10 ? "0" + minutes : minutes;
     let s = seconds < 10 ? "0" + seconds : seconds;

     displayTime.innerHTML = `${h}:${m}:${s}`;
 }

 function watchStart() {
     if (timer !== null) clearInterval(timer);
     timer = setInterval(stopwatch, 1000);
 }

 function watchStop() {
     clearInterval(timer);
 }

 function watchReset() {
     clearInterval(timer);
     [seconds, minutes, hours] = [0, 0, 0];
     displayTime.innerHTML = "00:00:00";
     lapContainer.innerHTML = "";
     lapCount = 0;
 }

 function watchLap() {
     if (timer === null) return;

     lapCount++;
     let h = hours < 10 ? "0" + hours : hours;
     let m = minutes < 10 ? "0" + minutes : minutes;
     let s = seconds < 10 ? "0" + seconds : seconds;

     let li = document.createElement("li");
     li.innerHTML = `Lap ${lapCount} : ${h}:${m}:${s}`;
     lapContainer.appendChild(li);
 }
