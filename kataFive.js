const urlEncode = function(text) {
  let message = '';

  for (let i = 0; i < text.length; i++){
    //Handles spaces at the beginning
    if (text[i] === ' ' && i === 0){
      message += '';
    }
    //Handles spaces at the end
    else if (text[i] === ' ' && i === text.length - 1){
      message += '';
    }
    //Changes other spaces into %20
    else if (text[i] === ' ' && i !== 0 && i !== text.length - 1){
      message += '%20';
    }
    //Otherwise just add onto the message
    else{
      message += text[i];
    }
  }

  return message;
  
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
