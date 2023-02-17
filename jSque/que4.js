//Write a function that takes an array of strings and returns a new array with all the strings converted to uppercase.


function ArrayUppercase() {

    const arr = ['ali', 'atta', 'john'];

    const arr2 = arr.map(arr => arr.toUpperCase());
    return arr2;

}


console.log(ArrayUppercase());