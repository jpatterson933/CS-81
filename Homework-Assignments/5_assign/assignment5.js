/*
    Jeffery W. Patterson
    CS 81
    Assignment 5
*/

// our data set that we will be using for this assignment
let dataSet = [
    {
        "name": "Maura Glass",
        "age": 60,
        "math": 97,
        "english": 63,
        "yearsOfEducation": 4
    },
    {
        "name": "James Gates",
        "age": 55,
        "math": 72,
        "english": 96,
        "yearsOfEducation": 10
    },
    {
        "name": "Mills Morris",
        "age": 26,
        "math": 83,
        "english": 77,
        "yearsOfEducation": 10
    },
    {
        "name": "Deena Morton",
        "age": 57,
        "math": 63,
        "english": 63,
        "yearsOfEducation": 10
    },
    {
        "name": "Edith Roth",
        "age": 38,
        "math": 79,
        "english": 94,
        "yearsOfEducation": 10
    },
    {
        "name": "Marva Morse",
        "age": 31,
        "math": 93,
        "english": 78,
        "yearsOfEducation": 9
    },
    {
        "name": "Etta Potts",
        "age": 48,
        "math": 57,
        "english": 93,
        "yearsOfEducation": 7
    },
    {
        "name": "Tate Moss",
        "age": 22,
        "math": 83,
        "english": 64,
        "yearsOfEducation": 8
    },
    {
        "name": "Sanders Burris",
        "age": 27,
        "math": 65,
        "english": 66,
        "yearsOfEducation": 5
    },
    {
        "name": "Latoya Malone",
        "age": 35,
        "math": 100,
        "english": 100,
        "yearsOfEducation": 5
    },
    {
        "name": "Wade Foreman",
        "age": 25,
        "math": 76,
        "english": 87,
        "yearsOfEducation": 10
    },
    {
        "name": "Miller Valentine",
        "age": 31,
        "math": 56,
        "english": 89,
        "yearsOfEducation": 6
    },
    {
        "name": "Rita Olson",
        "age": 53,
        "math": 100,
        "english": 52,
        "yearsOfEducation": 6
    },
    {
        "name": "Potter Newton",
        "age": 29,
        "math": 91,
        "english": 75,
        "yearsOfEducation": 5
    },
    {
        "name": "Madeline Bartlett",
        "age": 23,
        "math": 60,
        "english": 74,
        "yearsOfEducation": 10
    },
    {
        "name": "Tamara Tran",
        "age": 46,
        "math": 73,
        "english": 78,
        "yearsOfEducation": 4
    },
    {
        "name": "Elena Evans",
        "age": 43,
        "math": 60,
        "english": 82,
        "yearsOfEducation": 10
    },
    {
        "name": "Cote Merrill",
        "age": 55,
        "math": 86,
        "english": 63,
        "yearsOfEducation": 7
    },
    {
        "name": "Madeleine Brennan",
        "age": 52,
        "math": 82,
        "english": 88,
        "yearsOfEducation": 4
    },
    {
        "name": "Alford Weber",
        "age": 38,
        "math": 71,
        "english": 85,
        "yearsOfEducation": 4
    },
    {
        "name": "Kirsten Daniel",
        "age": 35,
        "math": 86,
        "english": 61,
        "yearsOfEducation": 8
    },
    {
        "name": "Melton Chan",
        "age": 26,
        "math": 55,
        "english": 96,
        "yearsOfEducation": 4
    },
    {
        "name": "Mcmahon Woodward",
        "age": 54,
        "math": 56,
        "english": 63,
        "yearsOfEducation": 9
    },
    {
        "name": "Helga Monroe",
        "age": 29,
        "math": 79,
        "english": 92,
        "yearsOfEducation": 5
    },
    {
        "name": "Patricia Herrera",
        "age": 46,
        "math": 94,
        "english": 99,
        "yearsOfEducation": 10
    },
    {
        "name": "Mccullough Lambert",
        "age": 56,
        "math": 65,
        "english": 96,
        "yearsOfEducation": 8
    },
    {
        "name": "Haynes Davidson",
        "age": 60,
        "math": 86,
        "english": 50,
        "yearsOfEducation": 5
    }
];

//find average - parameter is an array of objects
function average(array) {
    /*
        Here we are using a higher order function reduce on our array parameter
        we are using two parameters in our reduce function - using an e6 arrow function
        our first paramter is going to be the previousValue in our array - however when it starts, 
        reduce will use the FIRST value and our second parameter is going to be our next value
        then the fucntion will add the next value to our previous value until it goes through the 
        whole function and then divide by the length of the array
    */
    return array.reduce((previousValue, nextValue) => previousValue + nextValue) / array.length;
};
// funciton with paramter a full name
function getFirstName(fullName) {
    // assuming the name format is consistent with "firstName lastName", then I can split them at the space 
    // " " and grab the first name in index spot [0] 
    return fullName.split(" ")[0];
};
// function to filter out students with array, average age and average english grade parameters
function filterStudents(array, ageAvg, engAvg) {
    // return our filtered data -> 
    return filteredData = array.filter(data => {
        // only return the data if age is less than average age AND english grade is greater than average english grade
        return data.age < ageAvg && data.english > engAvg;
    });
};
// our function to print to console with the paramter being the array
function printToConsole(array) {
    // for loop that will print in the console the name, age and english grade in our array using template literals
    for (let each of array) {
        // call our getFirstName function
        console.log(`${getFirstName(each.name)} is ${each.age} years old and has an above average English grade of ${each.english}`)
    };
};

// our function to combine the above and print out our the young english starts
function printYoungEnglishStars() {
    /*
        first we use map to create a new array with only the ages or only the english grades
        then, the average function will use reduce to create an average from the newly mapped array
        then we will use Math.round() to round that number to a whole number
        then, we will set that to a varialbe to be used in the filterStudents()
    */
    let averageAge = (Math.round(average(dataSet.map(d => d.age))));
    let averageEng = (Math.round(average(dataSet.map(d => d.english))));
    // here we call filterStudents() with our main array dataSet and our two created average variables
    let newDataSet = filterStudents(dataSet, averageAge, averageEng);
    // we plug in our new data set as the array we have filtered and it will print out to the console
    return printToConsole(newDataSet);
};
// call our main function to print out young all starts to the console
printYoungEnglishStars();