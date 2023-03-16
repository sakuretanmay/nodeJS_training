// Write a function that takes an array of numbers and returns a new array with only the even numbers from the original array.

function getEvenNumbers(arr) {
    

    var arr = [1, 2, 3, 4, 5, 6];
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr2.push(arr[i])
        }
    }
    console.log(arr2);
}


getEvenNumbers();

