////            CHAPTER NO 21           \\\\

// ================================================Q1
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Hello, " + fullName);
// -----------------------------------------------------
// ========================================Q2===============================

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// let phoneModel = prompt("What is your favorite mobile phone model?");
// let length = phoneModel.length;
// document.write("The length of your favorite mobile phone model is: " + length);
// -----------------------------------------------------
// ========================================Q3===============================

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// let word = "Pakistani";
// let index = word.indexOf("n");
// document.write("The index of the letter 'n' in the word 'Pakistani' is: " + index);

// -----------------------------------------------------
// ========================================Q4===============================
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


// let word = "Hello World";
// let lastIndex = word.lastIndexOf("l");
// document.write("The last index of the letter 'l' in the word 'Hello World' is: " + lastIndex);

// -----------------------------------------------------
// ========================================Q5===============================

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let word = "Pakistani";
// let char = word.charAt(3);
// document.write("The character at the 3rd index in the word 'Pakistani' is: " + char);

// -----------------------------------------------------
// ========================================Q6===============================

// 6. Repeat Q1 using string concat() method.

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(" ", lastName);
// document.write("Hello, " + fullName + "!");

// -----------------------------------------------------
// ========================================Q7===============================

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let word = "Hyderabad";
// let newWord = word.replace("Hyder", "Islam");
// document.write("The new word after replacement is: " + newWord);


// -----------------------------------------------------
// ========================================Q8===============================


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;



// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace(/and/g, "&");
// document.write("The new message after replacement is: " + newMessage);



// -----------------------------------------------------
// ========================================Q9===============================

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let strNum = "472";
// let num = Number(strNum);
// document.write("String value: " + strNum + "<br>");
// document.write("Type of string value: " + typeof strNum + "<br>");
// document.write("Number value: " + num + "<br>");
// document.write("Type of number value: " + typeof num + "<br>");

// -----------------------------------------------------
// ========================================Q10===============================

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let userInput = prompt("Enter some text:");
// let upperCaseInput = userInput.toUpperCase();
// document.write("Input in capital letters: " + upperCaseInput);


// -----------------------------------------------------
// ========================================Q11===============================

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// let userInput = prompt("Enter some text:");
// let titleCaseInput = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// document.write("Input in title case: " + titleCaseInput);

// Q:12 Write a program that converts the variable num to string.

// Ans:

// var num = 35.36;
// var str = num.toString();

// console.log(typeof str);

// Q:13 Write a program to take user input and store username in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// Ans:

// const pattern = /[@.,!]/;
// while (true) {
//   let username = prompt("Enter a username:");

//   if (pattern.test(username)) {
//     alert("Invalid username. Please enter a username without any special symbols among [@ . , !].");
//   } else {
//     alert(`Valid username: ${username}`);
//     break;
//   }
// }

// Q:14 You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// Ans:

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Wellcome To ABC Bakery. What do you want to order sir/ma'am").toLowerCase();

// for(var i = 0; i < arr.length; i++) {
//     if(arr[i].toLowerCase() === userInput){
//     alert(userInput + " is available at index " + i + " in the array.");
//     break;
//     }else if (i === arr.length - 1) {
//     alert(userInput + " is not available in the array.");
//     }
//  }

//  let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter an item to search:");

// // Convert userInput and array elements to lowercase for case-insensitive search
// userInput = userInput.toLowerCase();
// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     alert(userInput + " is available at index " + i + " in the array.");
//     break;
//   } else if (i === A.length - 1) {
//     alert(userInput + " is not available in the array.");
//   }
// }

// Q:15 Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// Ans: 

// let password = prompt("Enter your password");

// while(true) {
//   if(password.length < 6) {
//     password = prompt("Password should be at least 6 characters long. Please enter a valid password:");
//   }
//   else if(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//     password = prompt("Password should not start with a number. Please enter a valid password:");
//   }
//   else if(!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
//     password = prompt("Password should contain alphabets and numbers. Please enter a valid password:");
//   }
//   else {
//     console.log("Valid password entered!");
//     break;
//   }
// }

// ========================================Q16===============================

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser

// var university = "University of Karachi";
// var arr = university.split(" ");
// document.write(arr);


// -----------------------------------------------------
// ========================================Q17===============================

// 17. Write a program to display the last character of a user
// input.

// var userInput = prompt("Enter a string:");
// var lastChar = userInput.charAt(userInput.length - 1);
// alert("The last character of the input string is: " + lastChar);


// -----------------------------------------------------
// ========================================Q18===============================

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str = "The quick brown fox jumps over the lazy dog";
// var count = str.match(/the/gi).length;
// document.write("The word 'the' occurs " + count + " times in the given string.");

// ________________________END __________21___To____25___________________
// ________________________END __________21___To____25___________________
// ________________________END __________21___To____25___________________
// ________________________END __________21___To____25___________________
// ________________________END __________21___To____25___________________
// ________________________END __________21___To____25___________________
// ________________________END __________21___To____25___________________


// (((((((((((((((((((((((((((((((((((((((((MATH METHODS(((((((((())))))))))

// -----------------------------------------------------
// ========================================Q1===============================


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the numbe

// var num = prompt("Enter a positive integer:");
// var number = Number(num);

// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");

// -----------------------------------------------------
// ========================================Q2===============================

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = parseFloat(prompt("Enter a negative floating point number:"));

// document.write("<h3>Number: " + num + "</h3>");
// document.write("<h3>Round off value: " + Math.round(num) + "</h3>");
// document.write("<h3>Floor value: " + Math.floor(num) + "</h3>");
// document.write("<h3>Ceil value: " + Math.ceil(num) + "</h3>");

// -----------------------------------------------------
// ========================================Q3===============================

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let num = -4;
// let absValue = Math.abs(num);
// console.log(`The absolute value of ${num} is ${absValue}`);
    
// -----------------------------------------------------
// ========================================Q4===============================

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// function rollDice() {
//     // Generate a random number between 1 and 6
//     var diceValue = Math.floor(Math.random() * 6) + 1;

//     // Display the value of the dice in the browser
//     document.getElementById("diceValue").innerHTML = "The dice rolled " + diceValue;
//   }

// -----------------------------------------------------
// ========================================Q5===============================

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// Generate a random number between 0 and 1
// var randomNum = Math.random();

// If the random number is less than 0.5, the coin is heads; otherwise, it's tails
// var coin = (randomNum < 0.5) ? "Heads" : "Tails";

// Display the result in the browser

// document.write("The result of the coin toss is: " + coin);

// -----------------------------------------------------
// ========================================Q6===============================

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNumber);

// -----------------------------------------------------
// ========================================Q7===============================

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt("Enter your weight in kilograms");

// Remove any non-numeric characters from the input string
// weight = weight.replace(/[^\d\.]/g, '');

// Convert the weight to a number
// weight = parseFloat(weight);

// Display the weight in the browser
// document.write("Your weight is " + weight + " kilograms.");

// ========================================Q8===============================

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user

// generate random secret number from 1 to 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// ask user to input a number between 1 and 10
// var userNumber = parseInt(prompt("Guess the secret number between 1 and 10"));

// compare user input with secret number
// if (userNumber === secretNumber) {
//   alert("Congratulations! You guessed the secret number.");
// } else {
//   alert("Sorry, try again.");
// }


// -----------------------------------------------------
// =======================================================================

// ________________________END __________26___To____30___________________
// ________________________END __________26___To____30___________________
// ________________________END __________26___To____30___________________
// ________________________END __________26___To____30___________________
// ________________________END __________26___To____30___________________
// ________________________END __________26___To____30___________________
// ________________________END __________26___To____30___________________



// _____________________DATE METHODS_______________________
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ========================================Q1===============================

// 1. Write a program that displays current date and time in
// your browser.

// var today = new Date();
// console.log(today);

// -----------------------------------------------------
// ========================================Q2===============================

// 2. Write a program that alerts the current month in words.
// For example December.

// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// var d = new Date();
// var currentMonth = months[d.getMonth()];

// alert("The current month is " + currentMonth + ".");

// -----------------------------------------------------
// ========================================Q3===============================

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// var d = new Date();
// var currentDay = days[d.getDay()];

// alert("The first three letters of the current day are " + currentDay.slice(0, 3) + ".");

// -----------------------------------------------------
// ========================================Q4===============================

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today

// var d = new Date();
// var dayOfWeek = d.getDay();

// if (dayOfWeek === 0 || dayOfWeek === 6) {
//     alert("It's Fun day!");
// } else {
//     alert("Sorry, it's not Fun day today.");
// }

// -----------------------------------------------------
// ========================================Q5===============================

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var d = new Date();
// var currentDate = d.getDate();

// if (currentDate < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }


// -----------------------------------------------------
// ========================================Q6===============================

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.



// var now = new Date();
// var minutesSinceEpoch = (now.getTime() - now.getTimezoneOffset() * 60 * 1000) / (1000 * 60);

// console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);

// -----------------------------------------------------
// ========================================Q7===============================

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM

// var now = new Date();
// var hour = now.getHours();

// if (hour > 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


// -----------------------------------------------------
// ========================================Q8===============================

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date(2020, 11, 31);

// console.log(laterDate);


// -----------------------------------------------------
// ========================================Q9===============================

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var startingDate = new Date(2015, 5, 18); // month is zero-indexed
// var today = new Date();
// var timeDiff = today.getTime() - startingDate.getTime();
// var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // convert ms to days

// alert("Number of days past since 1st Ramadan: " + daysDiff);


// -----------------------------------------------------
// ========================================Q10===============================

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var referenceDate = new Date(); // current date and time
// var beginning2015 = new Date(2015, 0, 1); // January 1, 2015
// var secondsDiff = Math.floor((referenceDate.getTime() - beginning2015.getTime()) / 1000); // convert ms to seconds

// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsDiff);


// -----------------------------------------------------
// ========================================Q11===============================

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var currentDate = new Date(); // create a new Date object for the current date and time
// var currentHours = currentDate.getHours(); // extract the hours
// currentDate.setHours(currentHours + 1); // reset the date object an hour ahead

// document.write("Current date and time: " + new Date() + "<br>"); // display the original date object
// document.write("Date and time an hour ahead: " + currentDate); // display the modified date object


// -----------------------------------------------------
// ========================================Q12===============================

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date(); // create a new Date object for the current date and time
// var pastDate = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate()); // reset the date object 100 years back

// alert("100 years back, the date was: " + pastDate); // display the resulting date in an alert box


// -----------------------------------------------------
// ========================================Q13===============================

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age = prompt("What is your age?"); // ask the user for their age
// var currentYear = new Date().getFullYear(); // get the current year
// var birthYear = currentYear - age; // calculate the birth year

// document.write("Your age is: " + age + "<br>"); // display the user's age
// document.write("Your birth year is: " + birthYear); // display the calculated birth year


// -----------------------------------------------------
// ========================================Q14===============================


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// // customer information
// var customerName = "John Doe";
// var currentMonth = "March";
// var numberOfUnits = 250;

// // K-Electric rates
// const chargesPerUnit = 18.25;
// const latePaymentSurcharge = 0.05;

// // calculate bill amounts
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var latePaymentAmount = netAmountPayable * latePaymentSurcharge;
// var grossAmountPayable = netAmountPayable + latePaymentAmount;

// // display bill in the browser
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Current Month: " + currentMonth + "</p>");
// document.write("<p>Number of Units: " + numberOfUnits.toFixed(2) + "</p>");
// document.write("<p>Charges per Unit: " + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "</p>");
// document.write("<p>Late Payment Surcharge: " + (latePaymentSurcharge * 100).toFixed(2) + "%</p>");
// document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</p>");

// ((((((((((((((((((((((((((END ASSGN))))))))))))))))))))))))))
// ((((((((((((((((((((((((((END ASSGN))))))))))))))))))))))))))
// ((((((((((((((((((((((((((END ASSGN))))))))))))))))))))))))))

