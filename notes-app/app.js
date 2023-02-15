// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by nodeJS.'),
// fs.appendFileSync('notes.txt', ' This is added with append')

// const add = require('./utils.js')

// const sum = add(9 , -8)

// // const name = 'tan' 

// console.log(sum)

const chalk  = require ('chalk')
// const validator = require ('validator')
const getNotes  =  require ('./notes.js')

/////////////////////
// chalk implimentation

// const message = getNotes()
// console.log(message)

// const greenMsg = chalk.bold.inverse.red("ERROR!")
// console.log(greenMsg)

// console.log(validator.isEmail('adcexample.com'))

// console.log(process.argv[2])



////////////////////////////
//Getting input from user

const command = process.argv[2]
 
// console.log( process.argv)

if(command === 'add'){
    console.log('Adding note!')
}
    else if( command === 'remove' ){
        console.log('Removing a note!')
}


