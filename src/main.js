// Write your code here

//task 1

function DateTime() {
    const now = new Date();


    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[now.getDay()];

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const time = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 || 12;


    console.log(`Today is: ${dayName}.`);
    console.log(`Current time is: ${hours}:${minutes}:${seconds} ${time}`);
}
DateTime();

// task 2
// done, shesrulebulia 


// task 3

function currectYearData() {
    const now = new Date();

    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();

    const current = `${month}-${day}-${year}`;
    console.log(`mm-dd-yyyy: ${current}`);

}
currectYearData();

// task 4 
function triangleArea(a, b, c) {

    const s = (a + b + c) / 2;

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}
const a = 5, b = 6, c = 7;
console.log(`The area of the triangle with sides ${a}, ${b}, and ${c} is: ${triangleArea(a, b, c).toFixed(2)}`);

// task 5 
// function rotateStringRight(str) {
//     let rotatedString = str;

//     setInterval(() => {

//         rotatedString = rotatedString.charAt(rotatedString.length - 1) + rotatedString.slice(0, -1);
//            console.log(rotatedString);
//            return 
//     }, 2000); 

// }
// rotateStringRight("w3resource");

// task 6
function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}


const year = 2024;
console.log(`${year} is ${LeapYear(year) ? "a leap year" : "not a leap year"}.`);

// task 7
function findSundays(startYear, endYear) {
    for (let year = startYear; year <= endYear; year++) {
        let date = new Date(year, 0, 1);
        if (date.getDay() === 0) {
            console.log(`1st January ${year} is a Sunday.`);
        }
    }
}

findSundays(2014, 2050);
// task 8
// let randomNumber = Math.floor(Math.random() * 10) + 1;

// let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// if (userGuess === randomNumber) {
//     console.log("Good Work");
// } else {
//     console.log("Not matched");
// }
// task 9 
function daysUntilChristmas() {
    let today = new Date();

    let christmas = new Date(today.getFullYear(), 11, 25);
    if (today > christmas) {
        christmas.setFullYear(today.getFullYear() + 1);
    }

    let timeDifference = christmas - today;

    let daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysLeft;
}

console.log(`There are ${daysUntilChristmas()} days left before Christmas.`);
// task 10 
// done. 

// task 11 
// done 

// task 12 
// done

// task 13 
// let variableName = prompt("Enter a name for your variable:");

// if (variableName) {
//   window[variableName] = "This is your dynamic variable!";

//   alert(variableName + " = " + window[variableName]);
// } else {
//   alert("You must enter a valid variable name.");
// }
// console.log(variableName);

// task 14 
// function getFileExtension(filename) {
//     let parts = filename.split('.');

//     if (parts.length > 1) {
//       return parts[parts.length - 1];
//     } else {
//       return "No extension found";
//     }
//   }

//   let filename = prompt("Enter the filename with its extension (e.g., image.jpg):");

//   let extension = getFileExtension(filename);
//   alert("The file extension is: " + extension);

//   task 15 
// function differenceFrom13(number) {
//     let difference = Math.abs(number - 13); 

//     if (number > 13) {
//       return 2 * difference;
//     } else {
//       return difference;
//     }
//   }

//   let number = parseInt(prompt("Enter a number:"));

//   let result = differenceFrom13(number);
//   alert("The result is: " + result);

//   task 16 
// function sumOfTwoIntegers(a, b) {
//     let sum = a + b; 

//     if (a === b) {
//       return sum * 3;
//     } else {
//       return sum;
//     }
//   }


//   let num1 = parseInt(prompt("Enter the first integer:"));
//   let num2 = parseInt(prompt("Enter the second integer:"));

//   let result = sumOfTwoIntegers(num1, num2);
//   alert("The result is: " + result);

//   task 17 
// function absoluteDifferenceFrom19(number) {
//     let difference = Math.abs(number - 19); 

//     if (number > 19) {
//       return 3 * difference;
//     } else {
//       return difference;
//     }
//   }

//   let number = parseInt(prompt("Enter a number:"));

//   let result = absoluteDifferenceFrom19(number);
//   alert("The result is: " + result);

// task 18 
// function checkNumbers(num1, num2) {
//     if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   let num1 = parseInt(prompt("Enter the first number:"));
//   let num2 = parseInt(prompt("Enter the second number:"));

//   let result = checkNumbers(num1, num2);
//   alert("Result: " + result);


//  task 19 
// function isWithin20(num) {
//     if (Math.abs(num - 100) <= 20 || Math.abs(num - 400) <= 20) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   let num = parseInt(prompt("Enter an integer:"));

//   let result = isWithin20(num);
//   alert("Is the number within 20 of 100 or 400? " + result); 

// task 20 
// function checkPositiveNegative(num1, num2) {
//     if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   let num1 = parseInt(prompt("Enter the first integer:"));
//   let num2 = parseInt(prompt("Enter the second integer:"));

//   let result = checkPositiveNegative(num1, num2);
//   alert("Is one number positive and the other negative? " + result); 

//   task 21 
function addingPy(str) {
    if (str.startsWith('Py')) {
        return str;
    }
    return "Py" + str;
}

console.log(addingPy("thon"));

// task 22
function removeCharAtPosition(str, position) {
    if (position < 0 || position >= str.length) {
        return str;
    }
    return str.slice(0, position) + str.slice(position + 1);
}



console.log(removeCharAtPosition("kotlin", 0));
console.log(removeCharAtPosition("Testofyoga", 5));

//   task 23 
function swapFirstAndLast(str) {
    if (str.length >= 1) {
        if (str.length === 1) {
            return str;
        }
        return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
    }
    return "String length must be at least 1.";
}

console.log(swapFirstAndLast("zuramela"));
console.log(swapFirstAndLast("zuracha"));
console.log(swapFirstAndLast("zura"));

// task 24 
function addFirstCharToFrontAndBack(str) {
    if (str.length >= 1) {
        const firstChar = str[0];
        return firstChar + str + firstChar;
    }
    return "String length must be at least 1.";
}


console.log(addFirstCharToFrontAndBack("churchxela"));


//   task 25 
function isMultipleOf3Or7(num) {
    if (num > 0) {
        if (num % 3 === 0 || num % 7 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Please enter a positive number.";
    }
}


console.log(isMultipleOf3Or7(21));
console.log(isMultipleOf3Or7(9));


//   task 26    
function modifyString(str) {
    if (str.length >= 3) {
        const lastThree = str.slice(-3);
        return lastThree + str + lastThree;
    }
    return "String length must be 3 or more.";
}

console.log(modifyString("hello"));


//   task 27 
function startsWithJava(str) {
    if (str.startsWith("Java")) {
        return "The string starts with 'Java'.";
    } else {
        return "The string does not start with 'Java'.";
    }
}



console.log(startsWithJava("css"));
console.log(startsWithJava("angular"));


//   task 28
function isInRange(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

console.log(isInRange(55, 120));


// task 29 
function isInRange29(num1, num2, num3) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99);
}

console.log(isInRange29(55, 120, 45));


// task 30 
function checkScriptPosition(str) {
    if (str.indexOf("Script", 4) === 4) {
        return str.slice(0, 4) + str.slice(10);
    }
    return str;
}

const inputString = "This is a Script example.";
console.log(checkScriptPosition(inputString));

// 31 
function findLargest(a, b, c) {
    return Math.max(a, b, c);
}

const num1 = 10;
const num2 = 25;
const num3 = 18;

console.log("The largest number is:", findLargest(num1, num2, num3));


// 32 
function closestTo100(num1, num2) {
    const diff1 = Math.abs(100 - num1);
    const diff2 = Math.abs(100 - num2);

    if (diff1 < diff2) {
        return num1;
    } else if (diff2 < diff1) {
        return num2;
    } else {
        return "Both numbers are equally close to 100";
    }
}

const value1 = 85;
const value2 = 110;

console.log("The closest value to 100 is:", closestTo100(value1, value2));

// 33 
function checkRanges(num5, num6) {
    const isInRange1 = (num5 >= 40 && num5 <= 60) || (num5 >= 70 && num5 <= 100);
    const isInRange2 = (num6 >= 40 && num6 <= 60) || (num6 >= 70 && num6 <= 100);

    if (isInRange1 && isInRange2) {
        return "Both numbers are in the valid ranges.";
    } else if (isInRange1) {
        return "Only the first number is in the valid ranges.";
    } else if (isInRange2) {
        return "Only the second number is in the valid ranges.";
    } else {
        return "Neither number is in the valid ranges.";
    }
}

console.log(checkRanges(num1, num2));

//   34 
function findLargestInRange(num7, num8) {
    if ((num7 >= 40 && num7 <= 60) && (num8 >= 40 && num8 <= 60)) {
        return Math.max(num7, num8);
    } else {
        return "Both numbers must be between 40 and 60 inclusive.";
    }
}

console.log("The largest number is:", findLargestInRange(num1, num2));


// 35
function checkCharacterInRange(str, char) {
    if (str.length < 4) {
        return "String is too short to check positions 2 to 4.";
    }

    const substring = str.substring(1, 4);

    if (substring.includes(char)) {
        return `The character '${char}' exists between the 2nd and 4th positions.`;
    } else {
        return `The character '${char}' does not exist between the 2nd and 4th positions.`;
    }
}
const character = "c";

console.log(checkCharacterInRange(character));

// 36
function checkLastDigit(num10, num11, num12) {
    const lastDigit1 = num10 % 10;
    const lastDigit2 = num11 % 10;
    const lastDigit3 = num12 % 10;

    if (lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3) {
        return "The last digits of all three numbers are the same.";
    } else {
        return "The last digits of the three numbers are not the same.";
    }
}

const num10 = 123;
const num11 = 53;
const num12 = 93;

console.log(checkLastDigit(num10, num11, num12));

// 37
function modifyString(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        return str.substring(0, 3).toLowerCase() + str.substring(3);
    }
}

const inputedString1 = "HelloWorld";
console.log(modifyString(inputedString1));

const shortString = "Hi";
console.log(modifyString(shortString));

// 38

function evaluateGrade(marks) {
    const totalMarks = marks.reduce((acc, curr) => acc + curr, 0);

    let grade;
    if (totalMarks >= 90) {
        grade = "A";
    } else if (totalMarks >= 70) {
        grade = "B";
    } else if (totalMarks >= 50) {
        grade = "C";
    } else if (totalMarks >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    return {
        totalMarks: totalMarks,
        grade: grade
    };
}

const studentMarks = [80, 90, 75, 85, 95];
const result = evaluateGrade(studentMarks);

console.log(`Total Marks: ${result.totalMarks}`);
console.log(`Grade: ${result.grade}`);

// 39 
function computeSum(num20, num21) {
    const sum = num20 + num21;

    if (sum >= 50 && sum <= 80) {
        return 65;
    } else {
        return 80;
    }
}

const num20 = 30;
const num21 = 40;

console.log(computeSum(num20, num21));

// 40
function checkEight(num25, num26) {
    if (num25 === 8 || num26 === 8 || num25 + num26 === 8 || Math.abs(num25 - num26) === 8) {
        return true;
    } else {
        return false;
    }
}

const num25 = 5;
const num26 = 3;

console.log(checkEight(num25, num26));

//41 
function checkNumbers(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        return 30;
    }
    else if (num1 === num2 || num2 === num3 || num1 === num3) {
        return 40;
    }
    else {
        return 20;
    }
}


console.log(checkNumbers(5, 5, 5));
console.log(checkNumbers(10, 10, 5));
console.log(checkNumbers(1, 2, 3));

// 42 
function checkIncreasingMode(num1, num2, num3) {
    if (num1 < num2 && num2 < num3) {
        return "Strict mode";
    } else if (num1 <= num2 && num2 <= num3) {
        return "Soft mode";
    } else {
        return "Neither";
    }
}

console.log(checkIncreasingMode(10, 15, 31));


// 43 
function checkRightmostDigit(num1, num2, num3) {
    const rightmostDigit1 = num1 % 10;
    const rightmostDigit2 = num2 % 10;
    const rightmostDigit3 = num3 % 10;

    if (rightmostDigit1 === rightmostDigit2 || rightmostDigit1 === rightmostDigit3 || rightmostDigit2 === rightmostDigit3) {
        return true;
    } else {
        return false;
    }
}
console.log(checkRightmostDigit(15, 24, 35));





// 44
function checkCondition(num1, num2, num3) {
    if ((num1 >= 20 && (num1 < num2 || num1 < num3)) ||
        (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
        (num3 >= 20 && (num3 < num1 || num3 < num2))) {
        return true;
    } else {
        return false;
    }
}

console.log(checkCondition(25, 15, 10));
console.log(checkCondition(30, 40, 20));



//45 
function checkFifteen(num1, num2) {
    if (num1 === 15 || num2 === 15 || num1 + num2 === 15 || Math.abs(num1 - num2) === 15) {
        return true;
    } else {
        return false;
    }
}

console.log(checkFifteen(15, 10));
console.log(checkFifteen(5, 10));


//46

function checkMultiple(num1, num2) {
    const isMultipleOf7or11 = (num) => num % 7 === 0 || num % 11 === 0;

    if ((isMultipleOf7or11(num1) && !isMultipleOf7or11(num2)) ||
        (isMultipleOf7or11(num2) && !isMultipleOf7or11(num1))) {
        return true;
    } else {
        return false;
    }
}

console.log(checkMultiple(14, 22));
console.log(checkMultiple(7, 11));


//47
function checkInRange(num) {
    if (num >= 40 && num <= 10000 && num.toString().includes('40')) {
        return true;
    } else {
        return false;
    }
}

console.log(checkInRange(40));
console.log(checkInRange(4000));



//48

function rever(str) {
    return str.split("").reverse().join('');
}
console.log(rever("zura"));
console.log(rever("zurakargibichia"));
console.log(rever("zuracudibichia"));



//49
function shiftCharacters(str) {
    return str.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
            if (char === 'z') return 'a';
            if (char === 'Z') return 'A';
            return nextChar;
        }
        return char;
    }).join('');
}

console.log(shiftCharacters("hello"));
console.log(shiftCharacters("JavaScript"));



//50
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

console.log(capitalizeFirstLetter("hello world"));
console.log(capitalizeFirstLetter("javaScript is fun"));

// 51 
function convertToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hours and ${remainingMinutes} minutes`;
}

console.log(convertToHoursAndMinutes(125));

// 52 
function convertalfabeticalsort(str) {
    return str.split("").reverse().join("");
}
console.log(convertalfabeticalsort("zurachka"))

// 53 
function checkABSeparation(str) {
    for (let i = 0; i < str.length - 3; i++) {
        if ((str[i] === 'a' && str[i + 4] === 'b') || (str[i] === 'b' && str[i + 4] === 'a')) {
            return true;
        }
    };
    return false;
}
console.log(checkABSeparation("axyzab"));




// 54

function countVowels(str) {
    const vowels = /[aeiouAEIOU]/g;
    const matches = str.match(vowels);
    return matches ? matches.length : 0;
}

console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));


// 55
function checkEqualPT(str) {
    const lowerStr = str.toLowerCase();

    const pCount = (lowerStr.match(/p/g) || []).length;
    const tCount = (lowerStr.match(/t/g) || []).length;

    return pCount === tCount;
}

console.log(checkEqualPT("pTptP"));


// 56
function divideAndFormat(num1, num2) {
    if (num1 <= 0 || num2 <= 0) {
        return "Both numbers should be positive.";
    }

    const result = num1 / num2;

    return result.toLocaleString();
}


console.log(divideAndFormat(1000000, 200));


// 57
function repeatString(str, num) {
    if (num <= 0) {
        return "Number of copies should be a positive integer.";
    }

    return str.repeat(num);
}

console.log(repeatString("hello", 3));


// 58
function repeatLastThreeChars(str) {
    if (str.length < 3) {
        return "String length must be 3 or above.";
    }


    const lastThreeChars = str.slice(-3);

    return lastThreeChars.repeat(4);
}


console.log(repeatLastThreeChars("nonohello"));
console.log(repeatLastThreeChars("asfgnasiughaisuguaqg"));


// 59
function extractFirstHalf(str) {
    if (str.length % 2 !== 0) {
        return "String length must be even.";
    }

    const halfLength = str.length / 2;
    return str.slice(0, halfLength);
}

console.log(extractFirstHalf("zemotadidatomez"));


// 60
function removeFirstAndLast(str) {
    if (str.length <= 2) {
        return "String length must be greater than 2.";
    }

    return str.slice(1, str.length - 1);
}

console.log(removeFirstAndLast("zdrastviwe"));

// 61 
function concatenateWithoutFirstChar(str1, str2) {
    if (str1.length < 1 || str2.length < 1) {
        return "Both strings must have at least one character.";
    }

    return str1.slice(1) + str2.slice(1);
}


console.log(concatenateWithoutFirstChar("gym", "kalmaxelidze"));

// 62
function moveLastThreeToStart(str) {
    if (str.length < 3) {
        return "String length must be greater than or equal to 3.";
    }

    const lastThreeChars = str.slice(-3);
    const restOfString = str.slice(0, str.length - 3);

    return lastThreeChars + restOfString;
}

console.log(moveLastThreeToStart("letsgoontrustavelitodayat7PM"));
console.log(moveLastThreeToStart("ShssareForRetards"));

// 63

function getMiddleThreeChars(str) {
    if (str.length < 3 || str.length % 2 === 0) {
        return "String length must be odd and greater than or equal to 3.";
    }

    const middleIndex = Math.floor(str.length / 2);

    return str.slice(middleIndex - 1, middleIndex + 2);
}


console.log(getMiddleThreeChars("acebGeorgianCopsAreBustards"));

// 64

function concatenateWithEqualLength(str1, str2) {
    if (str1.length !== str2.length) {
        const minLength = Math.min(str1.length, str2.length);
        str1 = str1.slice(0, minLength);
        str2 = str2.slice(0, minLength);
    }

    return str1 + str2;
}

console.log(concatenateWithEqualLength("forexample", "worldwarZ"));


// 65

function endsWithScript(str) {
    if (str.length >= 6 && str.endsWith("Script")) {
        return true;
    } else {
        return false;
    }
}


console.log(endsWithScript("goodforhealth"));
console.log(endsWithScript("Javaisgrreatinmorning"));



// 66

function displayCityName(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city;
    } else {
        return "";
    }
}

console.log(displayCityName("Kakheti"));
console.log(displayCityName("sighnaghi"));


// 67
function removePCharacters(str) {
    if (str.charAt(0) === 'P' && str.charAt(str.length - 1) === 'P') {
        return str.slice(1, str.length - 1);
    }
    return str;
}


console.log(removePCharacters("nika"));
console.log(removePCharacters("digitalacademy"));
console.log(removePCharacters(""));


// 68

function firstAndLastNChars(str, n) {
    if (str.length >= n) {
        return str.slice(0, n) + str.slice(str.length - n);
    } else {
        return "String length must be greater than or equal to n.";
    }
}

console.log(firstAndLastNChars("gamarjobaTbiliso", 3));
console.log(firstAndLastNChars("gamarjobasaqartvelo", 4));


// 69
function sumOfArray(arr) {
    if (arr.length === 3) {
        return arr[0] + arr[1] + arr[2];
    } else {
        return "Array must contain exactly 3 elements.";
    }
}


console.log(sumOfArray([4, 4, 4, 4]));

// 70
function rotateLeft(arr) {
    if (arr.length === 3) {
        return [arr[1], arr[2], arr[0]];
    } else {
        return "Array must contain exactly 3 elements.";
    }
}

console.log(rotateLeft([7, 8, 9]));

// 71
function checkFirstOrLast(arr) {
    if (arr.length >= 1) {
        if (arr[0] === 1 || arr[arr.length - 1] === 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Array must contain at least 1 element.";
    }
}

console.log(checkFirstOrLast([1, 2, 3]));
console.log(checkFirstOrLast([7]));

// 72
function firstandlast(arr) {
    if (arr.length === 3) {
        if (arr[0] === arr[arr.length - 1]) {
            return true;
        } else {
            return false
        }
    } else {
        return "arry aris swori da 3 element"
    }
}
console.log(firstandlast([1, 2, 1]));

// 73
function integratsarry(arr) {
    if (arr.length === 3) {
        return arr.reverse();

    } else {
        return "zustad toli aris 3 elementis"
    }
};
console.log(integratsarry([1, 2, 3]));

// 74
// warmodgena ar aris
// 75
function firstandlastelementsequal(arr) {
    if (arr.length >= 1) {
        return [arr[0], arr[arr.length - 1]];
    } else {
        return " rac shen gidna is damiwere"
    }

}
console.log(firstandlastelementsequal([1, 2, 3]));
console.log(firstandlastelementsequal([5, 10, 15]));

// 76
// rahhac ameria

// 77
function containsOneOrThree(arr) {
    if (arr.length === 2) {
        if (arr.includes(1) || arr.includes(3)) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Array must contain exactly 2 elements.";
    }
}
console.log(containsOneOrThree([1, 2]));
console.log(containsOneOrThree([5, 3]));


// 78

function doesNotContainOneOrThree(arr) {
    if (arr.length === 2) {
        if (!arr.includes(1) && !arr.includes(3)) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Array must contain exactly 2 elements.";
    }
}


console.log(doesNotContainOneOrThree([2, 6]));
console.log(doesNotContainOneOrThree([7]));

// 79
function contains30And40Twice(arr) {
    if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
        const count30 = arr.filter(num => num === 30).length;
        const count40 = arr.filter(num => num === 40).length;
        if (count30 === 2 && count40 === 2) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Array length must be 0, 1, or 2.";
    }
}
console.log(contains30And40Twice([30, 30, 40, 40]));
console.log(contains30And40Twice([30, 30]));
console.log(contains30And40Twice([40, 40]));


// 80
function swapFirstAndLast(arr) {
    if (arr.length >= 1) {
        if (arr.length === 1) {
            return arr;
        }

        const temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;

        return arr;
    } else {
        return "Array must contain at least 1 element.";
    }
}
console.log(swapFirstAndLast([6, 2, 7]));
console.log(swapFirstAndLast([5, 10, 15]));

// 81
function addTwoDigits(num) {

    if (num >= 10 && num <= 99) {

        const tens = Math.floor(num / 10);
        const ones = num % 10;


        const result = (tens + 2) * 10 + (ones + 2);

        return result;
    } else {
        return "Please enter a positive integer with exactly two digits.";
    }
}
console.log(addTwoDigits(34));
console.log(addTwoDigits(150));


// 82
function addWithoutCarrying(a, b) {
    if (a < 0 || b < 0) {
        return "Both numbers must be positive integers.";
    }

    let strA = a.toString();
    let strB = b.toString();

    while (strA.length < strB.length) {
        strA = '0' + strA;
    }
    while (strB.length < strA.length) {
        strB = '0' + strB;
    }

    let result = '';

    for (let i = strA.length - 1; i >= 0; i--) {
        let sum = parseInt(strA[i]) + parseInt(strB[i]);
        result = (sum % 10) + result;
    }

    return parseInt(result);
}


console.log(addWithoutCarrying(123, 456));
console.log(addWithoutCarrying(12, 89));


// 83
function findLongestString(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }

    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

console.log(findLongestString(["gamarjoba", "luka", "zura", "gamaindustriconalebisatvis"]));
console.log(findLongestString(["gamarjobarussia", "yvealferikargadiqneba", "sheshaaarissashasi", "sheshasashasia"]));



// 84
function shiftString(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= 'a' && char <= 'z') {
            result += (char === 'z') ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        }
        else if (char >= 'A' && char <= 'Z') {
            result += (char === 'Z') ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else {
            result += char;
        }
    }

    return result;
}

console.log(shiftString("asgiohasighqiurfmasfnsijabgug bsajbgdshu bgusbEGBSdhufuBUUSYBG!@#"));

// 85
function divideAndSum(arr) {
    let part1Sum = 0;
    let part2Sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            part1Sum += arr[i];
        } else {
            part2Sum += arr[i];
        }
    }


    return [part1Sum, part2Sum];
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(divideAndSum(arr));

// 86
function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute Angle";
    } else if (angle === 90) {
        return "Right Angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse Angle";
    } else if (angle === 180) {
        return "Straight Angle";
    } else if (angle > 180 && angle < 360) {
        return "Reflex Angle";
    } else if (angle === 0 || angle === 360) {
        return "Null or Full Rotation";
    }
}
console.log(angleType(45));
console.log(angleType(90));



// 87
// /.................


// 88
function areIntegersSimilar(num1, num2, divisor) {

    const dividesBoth = (num1 % divisor === 0) && (num2 % divisor === 0);
    const dividesNeither = (num1 % divisor !== 0) && (num2 % divisor !== 0);

    return dividesBoth || dividesNeither;
}

console.log(areIntegersSimilar(6, 12, 3));
console.log(areIntegersSimilar(5, 7, 2));



// 89
function checkOperator(x, y, z) {

    if (x + y === z) {
        return 'Addition (+)';
    } else if (x - y === z) {
        return 'Subtraction (-)';
    } else if (x * y === z) {
        return 'Multiplication (*)';
    } else if (y !== 0 && x / y === z) {
        return 'Division (/)';
    } else {
        return 'No valid operator';
    }
}

console.log(checkOperator(10, 30, 300));
console.log(checkOperator(10, 30, 40));


// 90
function findKthGreatestElement(arr, k) {
    arr.sort((a, b) => b - a);

    return arr[k - 1];
}

console.log(findKthGreatestElement([10, 4, 5, 8, 7], 2));
console.log(findKthGreatestElement([1, 2, 3, 4, 5], 3));


// 91
function maxSumOfKConsecutiveNumbers(arr, k) {
    if (k > arr.length) {
        return null;
    }

    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    let currentSum = maxSum;
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}


console.log(maxSumOfKConsecutiveNumbers([1, 2, 3, 4, 5, 6], 2));
console.log(maxSumOfKConsecutiveNumbers([1, 2, 3, 4, 5, 6], 3));



// 92
function maxAdjacentDifference(arr) {
    if (arr.length < 2) {
        return null;
    }

    let maxDiff = 0;

    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        maxDiff = Math.max(maxDiff, diff);
    }

    return maxDiff;
}

console.log(maxAdjacentDifference([1, 2, 3, 8, 9]));
console.log(maxAdjacentDifference([10, 20, 15, 5, 25]));




// 93
function findMaxDifference(arry) {
    if (arry.length < 2) {
        console.log("Array must contain at least two elements.");
        return null;
    }

    let maxVal = Math.max(...arry);
    let minVal = Math.min(...arry);

    return maxVal - minVal;
}

const Array = [10, 2, 9, 1, 5];
const maxDifference = findMaxDifference(arr);
console.log("Maximum difference:", maxDifference);


// 94
function findMostFrequentNumber(arrfrequent) {
    if (arrfrequent.length === 0) {
        console.log("Array is empty.");
        return null;
    }

    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequentNum = null;

    for (const num of arrfrequent) {
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
        }
    }
    return mostFrequentNum;
}

const arrfrequent = [1, 3, 2, 3, 4, 1, 3, 1];
const mostFrequentNumber = findMostFrequentNumber(arr);
console.log("Most frequent number:", mostFrequentNumber);


// 95
function replaceNumber(arrre, target, replacement) {
    return arrre.map(num => num === target ? replacement : num);
}

const arrre = [1, 2, 3, 4, 2, 5, 2];
const target = 2;
const replacement = 9;

const updatedArray = replaceNumber(arrre, target, replacement);
console.log("Updated array:", updatedArray);


// 96
function sumOfAbsoluteDifferences(ar) {
    if (ar.length < 2) {
        console.log("Array must contain at least two elements.");
        return 0;
    }

    let sum = 0;

    for (let i = 1; i < ar.length; i++) {
        sum += Math.abs(ar[i] - ar[i - 1]);
    }

    return sum;
}

const ar = [2, 4, 6, 8, 10];
const results = sumOfAbsoluteDifferences(ar);
console.log("Sum of absolute differences:", results);


// 97
function shortestPalindrome(s) {
    const isPalindrome = str => str === str.split('').reverse().join('');

    for (let i = s.length; i >= 0; i--) {
        if (isPalindrome(s.substring(0, i))) {
            const suffix = s.substring(i); // 
            return s + suffix.split('').reverse().join('');
        }
    }
    return s;
}

const input = "zemotadidatomez";
const resultes = shortestPalindrome(input);
console.log("Shortest palindrome:", resultes);


// 98
function convertToOptimalCase(str) {
    let upperCount = 0;
    let lowerCount = 0;

    for (const char of str) {
        if (char === char.toUpperCase()) {
            upperCount++;
        } else {
            lowerCount++;
        }
    }

    return upperCount > lowerCount ? str.toUpperCase() : str.toLowerCase();
}

const input1 = "Write";
const input2 = "PHp";

console.log(`Converted "${input1}" to:`, convertToOptimalCase(input1));
console.log(`Converted "${input2}" to:`, convertToOptimalCase(input2));


// 99
function canRearrange(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    function getCharFrequency(str) {
        const freq = {};
        for (let char of str) {
            freq[char] = (freq[char] || 0) + 1;
        }
        return freq;
    }

    const freq1 = getCharFrequency(str1);
    const freq2 = getCharFrequency(str2);

    for (let char in freq1) {
        if (freq1[char] !== freq2[char]) {
            return false;
        }
    }

    return true;
}

const string1 = "listen";
const string2 = "silent";

if (canRearrange(string1, string2)) {
    console.log("Yes, the strings can be rearranged to be equal.");
} else {
    console.log("No, the strings cannot be rearranged to be equal.");
}


// 100
function hasCommonElement(arr1, arr2) {
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            return true;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return false;
}

const array1 = [1, 3, 5, 7, 9];
const array2 = [2, 4, 5, 6, 8];

if (hasCommonElement(array1, array2)) {
    console.log("There is at least one common element.");
} else {
    console.log("No common elements found.");
}

// 101
function isValidString(str) {

    const regex = /^[A-Za-z]+$/;
    if (!regex.test(str)) {
        return false;
    }

    for (let i = 1; i < str.length; i++) {
        const currentChar = str[i];
        const prevChar = str[i - 1];

        if ((currentChar === currentChar.toUpperCase() && prevChar === prevChar.toUpperCase()) ||
            (currentChar === currentChar.toLowerCase() && prevChar === prevChar.toLowerCase())) {
            return false;
        }
    }

    return true;
}

const testString = "aBcdEfGh";
if (isValidString(testString)) {
    console.log("The string is valid.");
} else {
    console.log("The string is invalid.");
}


// 102
function countInversions(arrr) {
    function mergeAndCount(arrr, left, right) {
        if (left === right) return 0;

        const mid = Math.floor((left + right) / 2);
        let invCount = 0;

        invCount += mergeAndCount(arrr, left, mid);
        invCount += mergeAndCount(arrr, mid + 1, right);
        invCount += merge(arrr, left, mid, right);

        return invCount;
    }

    function merge(arrr, left, mid, right) {
        let temp = [];
        let i = left, j = mid + 1;
        let invCount = 0;

        while (i <= mid && j <= right) {
            if (arrr[i] <= arrr[j]) {
                temp.push(arrr[i]);
                i++;
            } else {

                temp.push(arrr[j]);
                invCount += (mid - i + 1);
                j++;
            }
        }

        while (i <= mid) {
            temp.push(arrr[i]);
            i++;
        }

        while (j <= right) {
            temp.push(arrr[j]);
            j++;
        }

        for (let k = left; k <= right; k++) {
            arrr[k] = temp[k - left];
        }

        return invCount;
    }

    return mergeAndCount(arrr, 0, arrr.length - 1);
}


const arrr = [2, 3, 8, 6, 1];
console.log("Number of inversions:", countInversions(arrr));



// 103
function findMaxNumber(num) {
    let numStr = num.toString();
    let maxNumber = -Infinity;

    for (let i = 0; i < numStr.length; i++) {
        let newNumStr = numStr.slice(0, i) + numStr.slice(i + 1);
        let newNum = parseInt(newNumStr, 10);

        maxNumber = Math.max(maxNumber, newNum);
    }

    return maxNumber;
}

const num = 2736;
console.log("Maximum number after deleting one digit:", findMaxNumber(num));

// 104
function findClosestPair(arrr, target1) {

    arrr.sort((a, b) => a - b);

    let left = 0;
    let right = arrr.length - 1;
    let closestPair = [];
    let closestDiff = Infinity;


    while (left < right) {
        const diff = Math.abs(arrr[left] - arrr[right]);


        if (diff <= target1 && diff < closestDiff) {
            closestDiff = diff;
            closestPair = [arrr[left], arrr[right]];
        }


        if (diff < target1) {
            left++;
        } else {
            right--;
        }
    }

    return closestPair;
}

const arrrr = [1, 5, 9, 3, 12, 7];
const target1 = 4;
const result1 = findClosestPair(arrrr, target1);
console.log("The closest pair is:", result1);

// 105
function countReplacements(nums1) {
    let count = 0;

    while (nums1 >= 10) {
        nums1 = nums1.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    return count;
}

const nums1 = 9875;
console.log("Number of replacements:", countReplacements(nums1));


// 106
function divideUntilNonInteger(num, divisor) {
    if (divisor === 0) {
        throw new Error("Cannot divide by zero");
    }

    while (num % divisor === 0) {
        num = num / divisor;
    }

    return num;
}

const resultss = divideUntilNonInteger(1000, 2);
console.log("Result after division:", resultss);


// 107
function countSortedPairs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
                count++;
            }
        }
    }

    return count;
}

console.log(countSortedPairs([1, 3, 2]));
console.log(countSortedPairs([2, 4, 16]));


// 108
function dotProduct(vector1, vector2) {
    if (vector1.length !== 3 || vector2.length !== 3) {
        throw new Error("Both vectors must be 3D.");
    }

    let product = 0;
    for (let i = 0; i < 3; i++) {
        product += vector1[i] * vector2[i];
    }

    return product;
}

const vector1 = [1, 2, 3];
const vector2 = [4, 5, 6];
console.log("Dot Product:", dotProduct(vector1, vector2));




// 109
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeNumbersUpTo(n) {
    let primes = [];


    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    primes.sort((a, b) => a - b);

    return primes;
}

const n = 50;
console.log("Prime numbers up to", n, ":", primeNumbersUpTo(n));


// 110
function countEvenBeforeNumber(sequence, targeted) {
    let count = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === targeted) {
            break;
        }

        if (sequence[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

const sequence = [1, 2, 3, 4, 5, 6, 7, 8];
const targeted = 5;
console.log("Even numbers before", target, ":", countEvenBeforeNumber(sequence, targeted));



// 111
function findThirdNumber(num1, num2, num3) {
    if (num1 === num2) {
        return num3;
    } else if (num1 === num3) {
        return num2;
    } else {
        return num1;
    }
}
console.log(findThirdNumber(5, 5, 3));
console.log(findThirdNumber(8, 6, 8));



// 112
function countTrailingZeros(n) {
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}
console.log(countTrailingZeros(100));
console.log(countTrailingZeros(25));


// 113
function calculateSum(n) {
    let sum = 0;
    let currentTerm = n;

    while (currentTerm > 0) {
        sum += currentTerm;
        currentTerm = Math.floor(currentTerm / 2);
    }
    return sum;
}
console.log(calculateSum(10));
console.log(calculateSum(100))

// 114
function isCorrectSentence(sentence) {
    if (sentence.charAt(0) === sentence.charAt(0).toUpperCase() && sentence.endsWith('.')) {
        return true;
    }
    return false;
}

console.log(isCorrectSentence("This is a correct sentence."));
console.log(isCorrectSentence("this is not correct."));

// 115
function isDiagonalMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (i !== j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

const matrix1 = [
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3]
];
console.log(isDiagonalMatrix(matrix1));

const matrix2 = [
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3]
];
console.log(isDiagonalMatrix(matrix2));

// 116
function findDivisibleByThreeOptions(str) {
    const results = [];
    const hashIndex = str.indexOf('#');

    for (let digit = 0; digit <= 9; digit++) {
        let replacedStr = str.substring(0, hashIndex) + digit + str.substring(hashIndex + 1);

        let sum = 0;
        for (let char of replacedStr) {
            sum += parseInt(char);
        }

        if (sum % 3 === 0) {
            results.push(replacedStr);
        }
    }

    return results;
}

console.log(findDivisibleByThreeOptions("2#0"));

// 117
function isIdentityMatrix(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                if (matrix[i][j] !== 1) {
                    return false;
                }
            } else {
                if (matrix[i][j] !== 0) {
                    return false;
                }
            }
        }
    }
    return true;
}


console.log(isIdentityMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
console.log(isIdentityMatrix([[1, 0, 0], [0, 1, 0], [1, 0, 1]]));

// 118
function isInRange29(number, lowerBound, upperBound) {

    return number >= lowerBound && number <= upperBound;
}

console.log(isInRange29(5, 1, 10));
console.log(isInRange29(15, 1, 10));


// 119
function hasIncreasingSequence(number) {

    const numStr = number.toString();


    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] <= numStr[i - 1]) {
            return false;
        }
    }

    return true;
}

console.log(hasIncreasingSequence(1234));
console.log(hasIncreasingSequence(4321));


// 120
function isPointInsideCircle(x, y, r, a, b) {

    const distanceSquared = (a - x) ** 2 + (b - y) ** 2;


    return distanceSquared < r ** 2;
}

console.log(isPointInsideCircle(0, 0, 5, 2, 3));
console.log(isPointInsideCircle(0, 0, 5, 5, 5));

// 121
function isLowerTriangular(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (matrix[i][j] !== 0) {
                return false;
            }
        }
    }

    return true;
}

const matrix3 = [
    [1, 0, 0],
    [2, 3, 0],
    [4, 5, 6]
];
console.log(isLowerTriangular(matrix3));

const matrix4 = [
    [1, 2, 0],
    [0, 3, 4],
    [0, 0, 5]
];
console.log(isLowerTriangular(matrix4));


// 122
function checkSequence(arr) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            isIncreasing = false;
        }
        if (arr[i] <= arr[i + 1]) {
            isDecreasing = false;
        }
    }

    if (isIncreasing) {
        return 'Strictly Increasing';
    } else if (isDecreasing) {
        return 'Strictly Decreasing';
    } else {
        return 'Neither Strictly Increasing nor Strictly Decreasing';
    }
}

console.log(checkSequence([1, 2, 3, 4, 5]));
console.log(checkSequence([5, 4, 3, 2, 1]));

// 123
function isPermutation(arr, n) {
    if (arr.length !== n) {
    }

    const numSet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 1 || arr[i] > n) {
            return false;
        }
        numSet.add(arr[i]);
    }


    return numSet.size === n;
}

console.log(isPermutation([1, 2, 3], 3));
console.log(isPermutation([3, 1, 2], 3));
console.log(isPermutation([1, 2, 2], 3));



// 124
function logical_Nor(x, y) {
    return !(x || y);
}

console.log(logical_Nor(true, false));
console.log(logical_Nor(false, false));



// 125
function findlongeststring(arr5) {
    for (let i = 0; i < arr5.length; i++) {

        if (arr5[i].length > longest.length) {
            longest = arr5[i]
        }
    }
}
console.log(findLongestString(["proximakentavri", "diditavi", "paataradatvi", "varskvlavi"]));

// 126
function largestEvenNumber(arr) {
    let largestEven = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (largestEven === null || arr[i] > largestEven) {
                largestEven = arr[i];
            }
        }
    }

    return largestEven;
}

console.log(largestEvenNumber([1, 3, 7, 10, 4, 6]));


// 127
function reverseBits(n) {
    let reversed = 0;
    let bitCount = 32;

    for (let i = 0; i < bitCount; i++) {
        reversed <<= 1;

        reversed |= (n & 1);

        n >>= 1;
    }

    return reversed >>> 0;
}

console.log(reverseBits(14));



// 128
function findSmallestRoundNumber(value) {
    if (value % 10 === 0) {
        return value;
    }

    return Math.ceil(value / 10) * 10;
}

console.log(findSmallestRoundNumber(590));
console.log(findSmallestRoundNumber(592));



// 129
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findSmallestPrimeGreaterThan(n) {
    let number = n + 1;

    while ((number)) {
        number++;
    }

    return number;
}

console.log(findSmallestPrimeGreaterThan(10));


//130
function countEvenDigits(n) {
    let numStr = Math.abs(n).toString();
    let count = 0;

    for (let i = 0; i < numStr.length; i++) {
        if (parseInt(numStr[i]) % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEvenDigits(123456));

//131
function prefixSum(arr) {
    let result = [];
    let sum = 0;


    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(sum);
    }

    return result;
}

console.log(prefixSum([1, 2, 3, 4]));

//132
//  rtulia


//133
function isProperFraction(numerator, denominator) {
    if (numerator > 0 && denominator > 0) {
        return numerator < denominator;
    } else {

        return false;
    }
}

console.log(isProperFraction(3, 4));


//134
function transformString(str) {
    let transformed = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= 'a' && char <= 'z') {
            let newChar = String.fromCharCode(219 - char.charCodeAt(0));
            transformed += newChar;
        } else {
            transformed += char;
        }
    }

    return transformed;
}

console.log(transformString("abgdebztikmnobjrst"));



//135
function removeDuplicateChars(str) {
    const freqMap = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (freqMap[char] === 1) {
            result += char;
        }
    }

    return result;
}

console.log(removeDuplicateChars("hardiwouldsay"));

//136
function replaceFirstDigit(str) {
    return str.replace(/\d/, '$');
}

console.log(replaceFirstDigit("trump123"));


//137
function checkNumber(num) {
    return num > 15 ? num : 15;
}

console.log(checkNumber(20));


//138
function reverseBites(num) {
    let reversed = 0;
    for (let i = 0; i < 16; i++) {
        reversed <<= 1;
        reversed |= (num & 1);

        num >>= 1;
    }
    return reversed;
}

console.log(reverseBites(0b0000000000001010));



//139
function findRightmostRoundNumber(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 10 === 0) {
            return i + 1;
        }
    }
    return 0;
}
console.log(findRightmostRoundNumber([123, 456, 780, 910, 200]));



// 140
function areAllDigitsSame(num) {
    const numStr = num.toString();

    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] !== numStr[0]) {
            return false;
        }
    }

    return true;
}

console.log(areAllDigitsSame(11111));
console.log(areAllDigitsSame(12345));



// 141
function findArrayLengths(arr28, arr29) {
    return {
        array8Length: arr28.length,
        array9Length: arr29.length
    };
}

const array8 = [1, 2, 3, 4];
const array9 = ['a', 'b', 'c', 'd', 'e'];

console.log(`Array 1 length: ${array8}`);
console.log(`Array 2 length: ${array9}`);


// 142
function simplifyPath(path) {
    const components = path.split('/');
    const stack = [];

    for (let component of components) {
        if (component === '' || component === '.') {
            continue;
        }
        if (component === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(component);
        }
    }

    return '/' + stack.join('/');
}
console.log(simplifyPath("/home//foo/"));


// 143
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["fruits", "onion", "speach", "greyfruit", "melon"]));
console.log(sortByLength(["bubuka", "koshka", "spilo", "iadoni", "bear"]));


// 144
// warmddgena ar makvs

// 145
function findMaxN(x) {
    let n = 0;
    let sum = 0;

    while (sum + (n + 1) <= x) {
        n++;
        sum += n;
    }

    return n;
}
console.log(findMaxN(10));

// 146
function sumOfCubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i * i;
    }
    return sum;
}

console.log(sumOfCubes(3));



// 147
function sumOfDigitsInString(str) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {

        if (/\d/.test(str[i])) {
            sum += parseInt(str[i], 10);
        }
    }

    return sum;
}

console.log(sumOfDigitsInString("abc121233"));



// 148
function swapArrayHalves(arr) {
    if (arr.length % 2 !== 0) {
        console.log("Array length must be even.");
        return arr;
    }

    let mid = arr.length / 2;

    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice(mid);

    return secondHalf.concat(firstHalf);
}

console.log(swapArrayHalves([1, 2, 3, 4]));



// 149
function toggleCase(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        }
        else {
            result += char.toUpperCase();
        }
    }

    return result;
}

console.log(toggleCase("earthisgreat"));
console.log(toggleCase("makeamericagreatagain"));
console.log(toggleCase("systemofdown"));


// 150
function swapAdjacentDigits(nums20) {
    let numStr = nums20.toString();

    if (numStr.length % 2 !== 0) {
        console.log("The number must have an even number of digits.");
        return;
    }

    let swappedStr = "";


    for (let i = 0; i < numStr.length; i += 2) {
        swappedStr += numStr[i + 1] + numStr[i];
    }

    return parseInt(swappedStr);
}

let nums20 = 123456;
let resultats = swapAdjacentDigits(nums20);
console.log(resultats); 
