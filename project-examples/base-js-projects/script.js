let fizzBuzzButton = document.querySelector("#fizz-buzz").addEventListener("click", fizzBuzz);



function fizzBuzz() {
// Print the numbers from 1 to 100 inclusive, each on their own line.
// If, however, the number is a multiple of three then print Fizz instead, and if the number is a multiple of five then print Buzz.
// If multiple conditions hold true then all replacements should be printed, for example 15 should print FizzBuzz. 
    for(let i = 1; i <= 100; i++) {
        let multipleOfThree = i % 3 == 0 ? true : false;
        let multipleOfFive = i % 5 == 0 ? true : false;

        if(multipleOfThree && multipleOfFive) {
            console.log("FizzBuzz")
        }
        else if(multipleOfFive) {
            console.log("Buzz")
        }
        else if(multipleOfThree) {
            console.log("Fizz")
        }
        else {
            console.log(i)
        }
    }
}

function fooFizzBuzzBar() {
// Print the numbers from 1 to 1,000 inclusive, each on their own line.
// If, however, the number is a multiple of two then print Foo instead, 
// if the number is a multiple of three then print Fizz, if the number is 
// a multiple of five then print Buzz, and if the number is a multiple of seven then print Bar.
// If multiple conditions hold true then all replacements should be printed, for example 15 should print FizzBuzz. 

    

}