
/* There is an array with some numbers. All numbers are equal except for one. Try to find it! */

//Prior to refactoring
/*export function findUniq(arr: number[]): number {
    let choiceOne: number[] = [arr[0]];
    let choiceTwo: number[] = [];
    
    for(let i = 1; i < arr.length; i++) {
      if(choiceOne.includes(arr[i])) {
        choiceOne.push(arr[i]);
      } else {
        choiceTwo.push(arr[i]);
      }
    }  
    
    return choiceOne.length === 1 ? choiceOne[0] : choiceTwo[0];
  }*/

  export function findUniq(arr: Array<number>): number {
    arr = arr.sort()
    return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0]
  }




/* In this Kata, we will calculate the minimum positive number that is not a possible sum from a list of positive integers.

solve([1,2,8,7]) = 4 => we can get 1, 2, 3 (from 1+2), but we cannot get 4. 4 is the minimum number not possible from the list. 
solve([4,1,2,3,12]) = 11. We can get 1, 2, 3, 4, 4+1=5, 4+2=6,4+3=7,4+3+1=8,4+3+2=9,4+3+2+1=10. But not 11. 
solve([2,3,2,3,4,2,12,3]) = 1. We cannot get 1.*/ 

//Note - only Javascript was available for the IDE to complete this Kata





  function solve(arr) {
    //Sort the array
    let newArr = arr.sort((a,b)=>a-b); 
  
    //Return 1 if possible
    if (newArr[0]>1) return 1;
  
    //Check the sum against the next array item and return
    let sum = 0;
    for (let i=0; i<newArr.length; i++) {      
      sum += newArr[i];
      if (newArr[i + 1] > sum + 1) {
        return sum + 1;
        }
    }
    return sum + 1;
}