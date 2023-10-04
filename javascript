let random_number = Math.floor((Math.random() * 100) + 1);
let user_number = prompt("guess the number between 1 to 100");
let tern = 0;
while(random_number != user_number){
  if(random_number>user_number){
    user_number=prompt("BADA DAAL");
  }else{
    user_number=prompt("CHOTA DAAL");
  }
  tern = tern + 1;
}
alert("7 crore $$$$  "+ user_number + " is the correct answer. Your score is"+ (100-tern))

