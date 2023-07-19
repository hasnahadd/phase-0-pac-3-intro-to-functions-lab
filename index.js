
///first function 
const x = 'hello';

function shout(string) {
    return string.toUpperCase();
  }
  console.log(shout(x));
///the end 
//the second one 
const y = 'HELLO'  ;
function whisper(string){

    return string.toLowerCase();

}
console.log(whisper(y));
//the end 

//the third one
const string = "hello";
function  logShout(string){

 console.log(string.toUpperCase());
   // string === string.toUpperCase();
    
}
  logShout(string);
  //the end 

  const z ="HELLO"  ;
function logWhisper(a){

    console.log(string.toLowerCase());

}
logWhisper(z);
const msg ="hello";
const msg1 ="Let's have dinner together!";


function sayHiToHeadphonedRoommate(string){
if (string === string.toUpperCase())
{

    return "YES INDEED!";

}
else if ( string === msg1){

    return "I would love to!";
    
    }
else{

    return "I can't hear you!";
}

}
console.log(sayHiToHeadphonedRoommate(msg1));


//////switch case another solution with switch case//
/*function sayHiToHeadphonedRoommate(string) {
    let msg; 
    switch (true) {
      case string === string.toUpperCase():
        msg = "YES INDEED!";
        break; 
  
      case string === msg1:
        msg = "I would love to!";
        break; 
  
      case string === string.toLowerCase():
        msg = "I can't hear you!";
        break; 
  
      default:
        break;
    }
  
    return msg; 
  }
  
  const inputString = "HELLO";
  const msg11 = "Let's have dinner together!";
  
  console.log(sayHiToHeadphonedRoommate(msg11));*/
  //////switch case another solution with switch case//
