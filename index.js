// Code your solutions in this file
for (let age=30; age < 40 ; age++){
    console.log (`I'm ${age} years old. Happy Birthday To Me!`);
    // debugger;
}


// wrapGifts
 const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts (gifts){
for (let i=0; i< gifts.length ; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
   // debugger;
}
return gifts;
}

wrapGifts(gifts);


// writeCards
const messages =[];
function writeCards (names, event){
for (let i=0; i <names.length; i++ ){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    // debugger;
}
return messages;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
console.log(messages);


// countDown
function countDown (num){
   
    while(num > 0){
     console.log(num);
     num --;
     
    }
    return num;
}

console.log(countDown(10));