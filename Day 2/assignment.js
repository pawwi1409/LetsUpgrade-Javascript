/* Solution 1 */
/* Function to find particular character in a string */
/*
  @author: Pawan Parihar
  @params : str: string in which we need to find character, char: character that needs to be find in string
*/

function findCharInString(str, char) {
    for(let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            let res = 'Character found at position ' + i;
            return res; 
        }
    }
    return 'Element not found!'
}


/* Solution 2 */
/* Function to convert minutes to seconds */
/*
  @author: Pawan Parihar
  @params: minute: value of minute that needs to be converted to seconds
*/

function convertToSeconds(minute) {
    return minute * 60;  
}

/* Solution 3 */
/* Function to search an element in array of strings */
/*
  @author: Pawan Parihar
  @params: array: string array, str: element that needs to be searched
*/

function findElementInArray(arr, str) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            let res = 'Element found at position ' + i;
            return res;
        }    
    }
    return 'Element not found!'
}


/* Solution 4 */
/* Function to display only elements containing 'a' in them from a array */
/*
  @author: Pawan Parihar
  @params: array: string array
*/

function printElementsWithA(arr){
    for(let i=0; i < arr.length; i++) {
        if (arr[i].search('a')) {
            console.log(arr[i]);
        }
    }
}

/* Solution 4 */
/* Function to print array in reverse order */
/*
  @author: Pawan Parihar
  @params: arr: array
*/

function printElementsWithA(arr){
    for(let i=arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}


