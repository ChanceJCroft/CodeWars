
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