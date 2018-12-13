// 1. I Love JavaScript
// Write a function that logs the string "I love JavaScript!" to the console.
// Call the function.
console.log("This is Exercise 1:")

function iLoveJava() {
    console.log("I love Java Script");
}

iLoveJava();

// 2. Dream Vacation
// Write a function that accepts two parameters of name and destination.
// The function should log a sentence to the console about where that person wants to go.
// Call the function three different times with different parameters. Example: if you pass in "Jessica" and "Mount Fuji" as parameters, you should see the sentence "Jessica would love to visit Mount Fuji." logged to the console.
console.log("This is Exercise 2:")
function dreamVacation(name, destination) {

    console.log(`${name} would love to visit ${destination}`);
}
dreamVacation("Sydney", "China");



// 3. Sandwich Maker
// Write a function that accepts three parameters: breadType (a string), sandwichName, and isToasted (a boolean).
// The function should check whether isToasted is true or false and build a sentence about the sandwich order accordingly.
// Log the sentence to the console.
// Call the function three times, passing in three different sets of parameters.
// Example output:

// "You ordered a toasted meatball sub sandwich on wheat."
console.log("This is Exercise 3:")
function sandwichMaker(breadType, sandwichName, isToasted) {

    if (isToasted === true) {
        console.log(`You ordered a toasted ${sandwichName} on ${breadType}`);

    } else {
        console.log(`You ordered an untoasted ${sandwichName} on ${breadType}`);
    }
}

sandwichMaker("wheat", "ham and cheese", true);
sandwichMaker("white", "chicken salad", true);
sandwichMaker("rye", "pastrami", false);


// 4. The Rock's Hobbies
// Copy and paste the following object into your JavaScript file:
console.log("This is Exercise 4:")
var dwayneObject = {
    firstName: "Dwayne",
    nickName: "The Rock",
    lastName: "Johnson",
    favoriteFood: "Eggs",
    hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
}

function printHobbies() {

    for (i = 0; i < dwayneObject.hobbies.length; i++) {
        console.log(`Hobby ${i + 1} is ${dwayneObject.hobbies[i]}`)
    }

}

// The printHobbies function should loop through the array of Dwayne The Rock Johnson's hobbies and print each one to the console.
// Call the printHobbies function.
printHobbies();

// 5. Sandwich Toppings
console.log("This is Exercise 5")
// Copy and paste the following array into your JavaScript file:
var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]
// Copy and paste the following code into your index.html file:
// <ul id="sandwich-container"></ul>
// Write a function that does the following things:
// Loop through sandwichToppings
// Build up an HTML string with an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".
// Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.

function sandwichTopper() {
    toppingString = "";

    for (i = 0; i < sandwichToppings.length; i++) {
        toppingString = `${toppingString} <li>${sandwichToppings[i]}</li>`
    }
    document.querySelector("#sandwich-container").innerHTML = toppingString;

}

sandwichTopper();

// 6. New Years Eve Party
console.log("This is Exercise 6")
// Copy and paste the following array into your JavaScript file:

var partyGuests = [
    {
        name: "Sam",
        age: 18
    },
    {
        name: "Jerry",
        age: 45
    },
    {
        name: "Lila",
        age: 29
    },
    {
        name: "Mary",
        age: 68
    },
    {
        name: "Todd",
        age: 10
    }
]

// YOUR CODE GOES HERE

// Copy and paste the following HTML into your index.html file:

// <div id="party-guests"></div>
// Fill in the ageChecker function so that it does the following things:

// Build a sentence or two about who can drink and who can't. (Example: " "Jery, Lila, and Mary can drink. Sam and Todd are too young.")
// Use document.querySelector and .innerHTML to print the sentence(s) to the "#party-guests" container in the DOM.


function ageChecker() {
    var tooYoung = [];
    var oldEnough = [];
    j = 0;
    k = 0;
    for (i = 0; i < partyGuests.length; i++) {
        // Loop through the partyGuests and check if each guest is at least 21.  Separate into two matrices

        if (partyGuests[i].age < 21) {
            tooYoung[j] = `${partyGuests[i].name}`;
            console.log(tooYoung);
            j++
        }
        else {
            oldEnough[k] = `${partyGuests[i].name}`;
            console.log(oldEnough);
            k++
        }
    }

    //Create the two sentences.  Having an "and" makes it less straightforward
    youngGuests="";
    for(i=0;i<1;i++){
        youngGuests=`${tooYoung[i]}`
    }
    for(i=1; i<tooYoung.length-1;i++){
        youngGuests=`${youngGuests}, ${tooYoung[i]}`
        console.log(youngGuests);
    }
        youngGuests=`${youngGuests} and ${tooYoung[i]} are too young to drink.`
        console.log(youngGuests);


    oldGuests="";
    for(i=0;i<1;i++){
        oldGuests=`${oldEnough[i]}`
    }
    for(i=1; i<oldEnough.length-1;i++){
        oldGuests=`${oldGuests}, ${oldEnough[i]}`
        console.log(oldGuests);
    }
        oldGuests=`${oldGuests} and ${oldEnough[i]} are old enough to drink.`
        console.log(oldGuests);

        // Combine the sentences and send to the DOM
        drinkingString = `<p>${youngGuests}</p><p>${oldGuests}</p>`
        document.querySelector("#party-guests").innerHTML=drinkingString;
}
// Call the function.
ageChecker();




// 7. Celsius to Fahrenheit
console.log("This is Exercise 7")
// You'll be writing two functions: one that converts Celsius to Fahrenheit and the other, vice versa.

// Write a function that takes the temperature in Celsius as the parameter
// The function should do the following calculation to get the temperature in Fahrenheit: T(F) = T(C) * 1.8 + 32
function convert_CtoF(tempC){
    tempF=tempC*1.8 +32;
    console.log(`"You entered" ${tempC} "Celsius.  That converts to" ${tempF} "Fahrenheit"`)

}
// Output the temperature in Fahrenheit to the console
convert_CtoF(0);
// Write a second function that takes the temperature in Fahrenheit as the parameter
// The function should do the following calculation to get the temperature in Celsius: T(C) = (T(F) - 32) / 1.8
function convert_FtoC(tempF){
    tempC=(tempF-32)/1.8;
    console.log(`"You entered" ${tempF} "Fahrenheit.  That converts to" ${tempC} "Celsius"`)
}
// Output the temperature in Celsius to the console Example output:
convert_FtoC(32);
// "You entered [degrees in Celsius] Celsius. That converts to [degrees in Fahrenheit] Fahrenheit." "You entered [degrees in Fahrenheit] Fahrenheit. That converts to [degrees in Celsius] Celsius."



// 8. It All Adds Up!
console.log("This is Exercise 8");

// Copy and paste the following code into your JavaScript file:

var outsideArray =  [4, 7, 8008, 10, 9, -1];
// In your JavaScript file, create (declare) a function named addThemUp.

function addThemup(array){

    mySum=0;
    for(i=0;i<array.length;i++){
    mySum=mySum+array[i];     
    // console.log(mySum);
      
    }
// return mySum;
}

addThemup(outsideArray);
console.log(mySum);

// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and add them up to a running sum.
// The addThemUp function should return the sum.
// Call addThemUp and pass in outsideArray as an argument.
// Save the returned value in a variable called mySum.
// Log mySum to the console.
// Try changing the numbers in the array or adding new numbers.



// 9. Law of Averages
console.log("This is Exercise 9")
// Copy and paste the following code into your JavaScript file:

var scoresToAverage =  [22, 34, 62, 11, 90, 88, 70, 65, 22, 89, 85, 39, 71, 92, 98, 84];
// In your JavaScript file, create (declare) a function named findAverage.
// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and find their average.
// The findAverage function should return the average of all the numbers.
// Call findAverage and pass in scoresToAverage as an argument.
// Save the returned value in a variable called myAverage.
function findAverage(scoresArray){
    mySum=0;
    myAverage=0;
    for(i=0;i<scoresArray.length;i++){
        mySum = mySum+scoresArray[i];
        
    }
myAverage=mySum/scoresArray.length;
console.log(myAverage);

}

findAverage(scoresToAverage);

// Log myAverage to the console.
// Try adding new numbers to the outsideArray. Your function should still return the correct average no matter how many items are in the array.



// Challenge: Cohort Website
// Copy and paste the following code inside the body tags of your HTML file:
// <div id = "cohort-one-container">
// </div>
// <div id = "cohort-two-container">
// </div>
// <div id = "cohort-three-container">
// </div>
// Copy and paste the following code in your JavaScript file:
var cohort1 = {
  name: "Cohort One",
  startDate: "January 15, 2018",
  endDate: "July 12, 2019",
  instructors: ["Kim", "Josh", "Jordan"],
  techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

var cohort2 = {
 name: "Cohort Two",
 startDate: "August 15, 2019",
 endDate: "Feb 12, 2020",
 instructors: ["Kim", "Josh", "Jordan"],
 techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

var cohort3 = {
 name: "Cohort Three",
 startDate: "September 15, 2020",
 endDate: "March 12, 2021",
 instructors: ["Kim", "Josh", "Jordan"],
 techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

// The buildHtmlString function should take an cohort object as a parameter and return a HTML string with the following elements:

// An h1 of the cohort's name
// An h3 for the start date
// An h3 for the end date
// An unordered list of instructors
// An unordered list of technologies learned
// The printHtmlString function should take two parameters:

// An HTML string
// The id of the element into which you want to print your HTML string
// The printCohort function should do the following things:

// Use document.querySelector to get a reference to the element in the DOM with whatever id you passed in.
// Use innerHTML to print the HTML string you passed in to the DOM.
// Call the buildHTMLString function and pass in cohort1 as an example.

// Store the returned value in a new variable called cohort1HTML.

// Call the printHtmlString function and pass in your cohort1HTML variable and the id of the element you want to print to ("cohort-one-container").


function buildHtmlString(cohortObjectParameter){
  instructors="";
    for(i=0; i<cohortObjectParameter.instructors.length; i++){
        instructors=`${instructors}<li>${instructors}`;
    }
    techStack="";
    for(i=0; i<cohortObjectParameter.techStack.length; i++){
        techStack=`${techStack}<li>${techStack}</li>`
    }
cohort1HTML = 
  `<h1>${cohortObjectParameter.name}</h1>
  <h3>${cohortObjectParameter.startDate}</h3>
  <h3>${cohortObjectParameter.endDate}</h3>
  <ul>${cohortObjectParameter.instructors}</ul>
  <ul>${cohortObjectParameter.techStack}</ul>`
  console.log(cohort1HTML);
  
//   document.querySelector("#cohort-one-container").innerHTML = cohortHTML;
  return cohort1HTML;
}


// document.querySelector("#cohort-one-container").innerHTML = cohortHTML;

function printHtmlString(htmlStringParameter, _elementIdParameter){
  document.querySelector("#_elementIdParameter").innerHTML = htmlStringParameter;
return htmlStringParameter;
}

buildHtmlString(cohort1);
printHtmlString(cohort1HTML, cohort-one-container);

//Not sure what the problem is....it doesn't like the parameters feeeding into the printHTMLstring but I can do it inside 
// the build string function just fine....


// console.log(cohortHTML);

// printHtmlString(cohortHTML, cohortonecontainer);

// buildHtmlString(cohort2);
// printHtmlString(cohortHTML, cohort-two-container);

// buildHtmlString(cohort3);
// printHtmlString(cohortHTML, cohort-three-container);

// Repeat steps 6-8 for cohort2 and cohort3
