// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["karachi", "lahore", "islamabad", "faisalabad", "quetta", "multan", "hydrabad", "sawaat", "muree", "gilgit"];
//   for (var i = 0; i <=  cleanestCities.length; i++) { 
//     if (cityToCheck == cleanestCities[i]) { 
//         alert("It's one of the cleanest cities"); }
//      }

// var msg = "my favourit fruit is apple"

// var firstChar = msg.slice(0, 1);
// console.log(firstChar);

// var someChar = msg.slice(2, 11);
// console.log(someChar);

// var firstChar = msg.slice(0, 1);
// var someChars = msg.slice(1);
// firstChar = firstChar.toUpperCase();
// someChars = someChars.toLowerCase();
// var cappedCity = firstChar + someChars;
// console.log(cappedCity);

//  var month = prompt("Enter a month");
//  var charsInMonth = month.length;
//  if (charsInMonth > 3) {
//  monthAbbrev = month.slice(0, 3);
//  }

// console.log(monthAbbrev);

//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
//  break;
//  }
//  }

// var text = "The New Yorker magazine doesnt allow the phrase World War II.  They say it should be the Second World War. So lets search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R.";

//  for (var i = 0; i < text.length; i++) {
    //  if (text.slice(i, i + 12) === "World War II") {
    //  text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    //  }
    //  var firstChar = text.indexOf("World War II");
    //  if (firstChar !== -1) {
    //  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
    //  }
    
    // }
// console.log(text);



// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be");
// console.log(segIndex);



/////1st Method;

// var firstName =prompt("Entrer Your Name");
// var firstChar = firstName.slice(0, 1);
// console.log(firstChar);

/////2nd Method;

// var firstName =prompt("Entrer Your Name");
// var firstChar = firstName.charAt(0);
// console.log(firstChar);


// var Name = "Bear"
// var lastChar = Name.charAt(Name.length - 1);
// console.log(lastChar);

// var text = "Hello Worlds"

// for (var i = 0; i < text.length; i++) {
//      if (text.charAt(i) === "!") { 
//         alert("Exclamation point found!"); 
//         break;  
//     } 
//  }

///=============================================================================================================================================

// var a = "1.8";
// a = Math.round(a);
// a = Math.ceil(a);// upr ki value ki trf push krta h
// a = Math.floor(a); //  nichy value ki trf round krta h
// a = +a;
// a = Number(a);
// var type = typeof(a);
// a = parseInt(a);
// a = a.
// console.log(a);
// var a = Math.floor(Math.random() * 6) + 1;
// console.log(a);
// var dice = Math.round(a);
// alert(dice);

// var Months = ["jan","fab","march","april","may","june","july", "Aug", "Septemper", "oct","November","Dec"]; 

// var dt = new Date();
// // var a = dt.getMonth();
// // a = dt.getMinutes();
// // a = dt.getSeconds ();
// // a = dt.getTimezoneOffset();
// // a = dt.getTime();
// // a = dt.getHours();

// dt.setMonth(10);
// dt.setFullYear(200);
// dt.setDate(9);
// dt.setMinutes(0);
// dt.getSeconds(0);

// console.log(dt);

// var a = Math.random();
// var toss = Math.round(a);

// console.log(a);


// /////for dice


////First Method

// var a = Math.random();
// var toss= Math.ceil(a*6);
// console.log(toss);


////second Method


// var a = Math.floor(Math.random() * 6) + 1;
// console.log(a);
 // var dice = Math.round(a);
// console.log(dice);

// var dt =new Date();
// console.log(dt);

// var day = dt.getDay();
// console.log(day);

// var month = dt.getMonth();
// console.log(month);

// var type = typeof(dt);
// console.log(type);

// var date = dt.getDate();
// console.log(date);

// var year = dt.getFullYear();
// console.log(year);

// var hours = dt.getHours();
// console.log();

// var min = dt.getMinutes();
// console.log(min);

// var sec = dt.getSeconds();
// console.log(sec);

// var mili_sec = dt.getMilliseconds();
// console.log(mili_sec);

// var Months = ["jan","fab","march","april","may","june","july", "Aug", "Septemper", "oct","November","Dec"];
// var dt = new Date();
// var a = dt.getMonth();
// console.log(Months[a]);


////////First Method


// var dt = new Date();

// dt.setDate(5);
// dt.setMonth(5);
// dt.setFullYear(2010);
// dt.setHours(5);
// dt.setMinutes(00);
// dt.setSeconds(00);
// dt.setMilliseconds(00);

// console.log(dt);


////second 


// divide by 1000 

// var dt2 = new Date("5-august-2000");
// console.log(dt2);


// var dt1 = new Date();
// var a =dt1.getTime();
// // console.log(a);

// var dt2 = new Date("5-august-2000");
// var b =dt2.getTime();

// var c = a - b;
// var d = c / 1000 * 60 * 60 *360;
// console.log(d);


/////FUNCTION

// function caculateDiscout(){
//     var amount = 100,
//         discount = 20,
//         totalDis = amount - discount;
//         console.log(totalDis);
// }

// caculateDiscout();

// function caculateDiscout(a,b){
//     var amount = a,
//         discount = b,
//         totalDis = amount - discount;
//         console.log(totalDis);
// }

// caculateDiscout(1000,500);
// caculateDiscout(1990,220);
// caculateDiscout(10520,5230.30);
// caculateDiscout(10000,1234);

///==============================================================================================================================================

//global & local

// var type = "global";

// function abc(){
//     var b = "local";
// }

// abc();

// console.log(type);
// console.log(b);

//local

// var type = "global";

// function abc(){
//     var b = "local";
//     console.log(b);
// }

// abc();


// function abc(){
//     var b = "local";
//     return b;
// }
//  var c = abc();

//  console.log(c);

////switch case

//  var day = prompt("");
// switch(day) {
//     case "mon":
//         console.log("Ohh today is monday");
//         break;
//     case "tue":
//         console.log("Ohh today is Tuesday");
//         break;
//     case "wed":
//         console.log("Ohh today is Wednesday");
//         break;
//     case "thu":
//         console.log("Ohh today is Thursday");
//         break;
//     case "fri":
//             console.log("Ohh today is Friday");
//          break;
//     case "sat":
//              console.log("Ohh today is Saturday");
//           break;    
//     case "sun":
//             console.log("Ohh today is Sunday");
//     default:
//         console.log("no day found")            
                        
// }

///////while

// var i = 0;
// while(i < 10) {
//     i++;
//  console.log(i);
// }
//===========================================================

///////do while

// var i = 0;
// do {
//     console.log(i);
//     i++
// }
// while(i < 10);

// function abc(a) {
//     console.log(a);
// }