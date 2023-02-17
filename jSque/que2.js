// Write a function that takes a string as input and returns the reverse of the string.


function reverseString (str){
    
    let newString ="";
    for (let i = str.length - 1 ; i >= 0 ; i --){
        newString += str[i];
    }
    return newString;
}

const string = ('Reverse String');
const result = reverseString(string);
console.log(result);

///////////////////////////////////////
// function ReverseString(str) {
//     return str.split('').reverse().join('')
//     }
      
//     // Function call
//     console.log(ReverseString("JavaScript"))


//////////////////////
// const ReverseString = str => [...str].reverse().join('');
      
//     console.log(ReverseString("E Y E"))