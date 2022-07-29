// Code your solutions in this file

function writeCards(array,string){
  const newArray =[]// empty array 
  for(let i=0; i <array.length ;i++ ){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);

  }
  console.log(newArray);
return newArray;
}

function countDown(num){
  while( num >=0 ){
  console.log(num);
  num--;
  }
  
}
