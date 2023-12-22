var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');


var endDate = '12/25/2023 00:00:00'; 
// Date format = 'mm/dd/yy'

var x = setInterval(function(){
    var now = new Date(endDate).getTime();
    var countDown = new Date().getTime();
    var distance = now - countDown;


 //Time Calculations for days , hours, minutes, seconds

    var d = Math.floor(distance/(1000*60*60*24));
    var h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var m = Math.floor((distance % (1000*60*60)) / (1000*60));
    var s = Math.floor((distance % (1000*60)) / (1000));


   // Out put the result in element with id 
 
   days.innerHTML = d;
   hours.innerHTML = h;
   minutes.innerHTML = m;
   seconds.innerHTML = s;


    if(distance < 0){
      clearInterval(x);
      document.querySelector(".wrapper").style.display = 'none';

      document.querySelector(".merryChristmas").style.display = 'block';
   }



})



/*

var countDown = () =>{
    var futureDate = new Date("20 Dec 2023");
    var currentDate = new Date();
    var myDate = futureDate - currentDate;
    //console.log(myDate);

    var D = Math.floor(myDate / 1000 / 60 / 60 / 24);
    var H = Math.floor(myDate / 1000 / 60 / 60 ) % 24;
    var M = Math.floor(myDate / 1000 / 60) % 60;
    var S = Math.floor(myDate / 1000 ) % 60 ;

    //console.log(S)

    days.innerHTML = D;
    hours.innerHTML = H;
    minutes.innerHTML = M;
    seconds.innerHTML = S;

/*
    if(myDate < 0){
    clearInterval(countDown());
    document.querySelector(".wrapper").style.display = 'none';

    document.querySelector(".merryChristmas").style.display = 'block';

     }

}

setInterval(countDown, 1000);


 if(myDate < 0){
    clearInterval(countDown());
    document.querySelector(".wrapper").style.display = 'none';

    document.querySelector(".merryChristmas").style.display = 'block';

     }


*/
