//Write a function that takes an array of numbers and returns the sum of all the numbers in the array


function sumArray(array) {
    let sum = 0;

    //loop over array and add each item to sum 
    for (const item of array) {
        sum += item;
    }

    // return the result
    console.log(sum);
    return sum;
}

sumArray([1, 2, 4, -5, 10]); 
