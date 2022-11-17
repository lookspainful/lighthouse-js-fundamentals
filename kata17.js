const urlDecode = function(text) {
  let urlObj = {};
  const hText = decodeURI(text); //decodes the URL To make it user-friendly

  const index = []; //Stores the index of any end points for the string
  const nIndex = [0]; //Indexes all of our start points
  for(let i = 0; i < hText.length; i++){
    if (hText[i].includes('=')){
      index.push(i);
    }
    else if(hText[i].includes('&'))
    {
      nIndex.push(i + 1);
    }
  }
  index.push(hText.length);
  


  //Assign left of = to property name, right of equal to property value
  //Loop through the index
  for (let i = 0; i < nIndex.length; i++){
    //Define a variable for property name, property, and for tracking index
    let x = [];
    let y = [];
    let k = i + 1;
    for(let j = nIndex[i]; j < hText.length; j++){
      //This bit of logic took me some time.
      //While j is lower than our indexed end points, it makes a string property name.
      if(j < index[i]){
        x += hText[j];
      }
      //After the end point, and before the next end point, create a string to put into the created property with the
      //remaining characters.
      else if(j > index[i] && j < index[k]){
        if (hText[j] === '&'){
          //This just says if it detects a new thing to begin inputting, stop the current process where it is.
          break;
        }
        y += hText[j];
      }
    }
    
    //x, the left side, is the property name. The right side, y, is the property.
    urlObj[x] = y;
  }
  
  

  //console.log(nIndex, index);
  return urlObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);