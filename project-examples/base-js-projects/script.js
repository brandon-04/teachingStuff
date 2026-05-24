let fizzBuzzButton = document.querySelector("#fizz-buzz").addEventListener("click", fizzBuzz);
let fooFizzBuzzBarButton = document.querySelector("#foo-fizz-buzz-bar").addEventListener("click", fooFizzBuzzBar)
let ninetyNineBottles = document.querySelector("#ninety-nine-bottles").addEventListener("click", ninetyNineBottlesOfBeer)

// Print the numbers from 1 to 100 inclusive, each on their own line.
// If, however, the number is a multiple of three then print Fizz instead, and if the number is a multiple of five then print Buzz.
// If multiple conditions hold true then all replacements should be printed, for example 15 should print FizzBuzz. 
function fizzBuzz() {
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

// Print the numbers from 1 to 1,000 inclusive, each on their own line.
// If, however, the number is a multiple of two then print Foo instead, 
// if the number is a multiple of three then print Fizz, 
// if the number is a multiple of five then print Buzz, 
// and if the number is a multiple of seven then print Bar.
// If multiple conditions hold true then all replacements should be printed, for example 15 should print FizzBuzz. 
function fooFizzBuzzBar() {

    for(let i = 1; i < 1000; i++) {
        let multipleOfTwo = i % 2 == 0 ? true : false;
        let multipleOfThree = i & 3 == 0 ? true : false;
        let multipleOfFive = i % 5 == 0 ? true : false;
        let mutltipleOfSeven = i % 7 == 0 ? true : false;

        if(!multipleOfTwo && !multipleOfThree && !multipleOfFive && !mutltipleOfSeven) {
            console.log(i);
        }
        else {
            console.log(`${multipleOfTwo ? "Foo" : ""}${multipleOfThree ? "Fizz" : ""}
                ${multipleOfFive ? "Buzz" : ""}${mutltipleOfSeven ? "Bar" : ""}`)
        }
     }
}

// Print the lyrics to the song 99 Bottles of Beer:

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// …
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
function ninetyNineBottlesOfBeer() {
    for(let i = 99; i >= 0; i--) {
        let val = i > 0 ? i : "No more";
        console.log(`${val} bottles of beer on the wall, ${val} bottles of beer.\n` + `Take one down and pass it around, ${isNaN(val) ? val : val - 1} bottles of beer on the wall.`);
    } 
}

// Given a date in the YYYY-MM-DD format between 1583-01-01 and 9999-12-31 inclusive, output the English name of the corresponding day of the week. 
function dayOfWeek() {
    
}