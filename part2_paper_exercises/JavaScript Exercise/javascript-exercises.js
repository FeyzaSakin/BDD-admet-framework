//  The "count()" function counts from 1-10 in a loop
function count(){
  console.log("1.Starting counting: ");
  let i = 1;
  for(;i < 10;){
    process.stdout.write(String(i)+ ", ");
    i++;
  }
  process.stdout.write(String(i));
}
count();

//  The "countEvens" function counts even numbers in an array
function countEvens(arr){
  for(let i = 0; i < arr.length;i++){
    if(arr[i]%2===0){
      process.stdout.write(String(arr[i]));
      if(i < arr.length-1){
        process.stdout.write(", ");
      }
    }  
  }
}
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log("\n\n2.Starting counting evens for an array with values from 1-10: ");
countEvens(arr);

// The "findLong" function finds the longest word from the choices: apple, grape, peach, elephant
console.log("\n\n3.Starting finding the longest word: ");
function findLong(wordList){
  let num = -1;
  let longestWord = "";
  for(let i = 0; i < wordList.length;i++){
    if(num < wordList[i].length){
      num = wordList[i].length;
      longestWord = wordList[i];
    }
  }
  if(longestWord){
    return process.stdout.write("The longest word: "+longestWord);
  }
  else{
    return process.stdout.write("The word list is empty");
  }
}
let words = ["apple", "grape", "peach", "elephant"];
findLong(words);