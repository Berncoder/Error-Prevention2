//code a function declaration
/*function addTwoNums(a,b) {
    console.log(a+b) //display the result
}
addTwoNums(5, 7)*/

//invoke the addTwoNums function w a number and a string
/*function addTwoNums(a,b) {
    console.log(a+b)
} 
addTwoNums(5,"5")*/

//update the addTwoNums function w a try.. catch block
/*function addTwoNums(a,b) {
    try {
        console.log(a+b)
    } catch(err) {
        console.log(err)
    }
}*/

//if the passed-in arguments are not numbers, throw an error
/*function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first number is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a+b)
        } 
    } catch(err) {
        console.log(err)
    }
}
addTwoNums(5, "5")*/

//Update the catch block
/*function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a+b)
        }
    } catch(err) {
        console.log("Error", err)
    }
}
*/

/*Invoeke the addTwoNums function and add another console log under the
addTwoNums function invocation*/
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if(typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a+b)
        } 
    } catch(err) {
        console.log("Error", err)
    }
}
addTwoNums(5,"5")
console.log("It still works")