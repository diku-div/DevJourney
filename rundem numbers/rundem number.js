var mybutton = document.getElementById("case5");
var number1 = document.getElementById("case1");
var number2= document.getElementById("case2");
var number3 = document.getElementById("case3");
 
var random1;
var random2;
var random3;


mybutton.onclick= function(){
   
   
    random1 = Math.floor( Math.random()*10 );
    random2 = Math.floor( Math.random()*10 );
    random3 = Math.floor( Math.random()*10 );

   number1.textContent = random1;
   number2.textContent = random2;
   number3.textContent = random3;

   console.log( random1);
   console.log( random2);
   console.log( random3);
   if ( random1 == random2 && random1 == random3){
    console.log( '3la slamtna ');
    window.write(" iwa 3la slama");
   }
   
   
   }


