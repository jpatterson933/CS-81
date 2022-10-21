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
    // using reduce, we grab the array parameter and then take the previous value and add it to the next value and 
    // then the set the previous value as the two values added and repeat until reduce has gone through the entire array
    // then I devide that by the array.length to get an average
    return array.reduce((previousValue, nextValue) => previousValue + nextValue) / array.length;
};
// grab the first name with the paratmer being the full name
function getFirstName(fullName) {
    // assuming the name format is consisten "firstName lastName", then I can split them at the space 
    // " " and grab the first name in index spot [0]
    return fullName.split(" ")[0];
};
// paramter is the array, the average age, the average english grade, and a start which will normall be an empty array []
function findStudents(array, ageAvg, engAvg, start) {
    // set filteredDataset to start parameter
    let filteredDataSet = start;
    // loop through the array
    for (let data of array) {
        // here we say if the data.age is less than the average age and the data.english is greater than the average english grade, we will execute the command inside
        if (data.age < ageAvg && data.english > engAvg) {
            // here we push a new object into our filtered Data set with the first name, the age and the english grade
            filteredDataSet.push({
                "name": getFirstName(data.name),
                "age": data.age,
                "english": data.english
            });
        };
    };
    return filteredDataSet;
};
// our function to print to console with the paramter being the array
function printToConsole(array) {
    for (let each of array) {
        console.log(`${each.name} is ${each.age} years old and has an above average English grade of ${each.english}`)
    };
};

function printYoungEnglishStars() {
    let averageAge = (Math.round(average(dataSet.map(d => d.age))));
    let averageEng = (Math.round(average(dataSet.map(d => d.english))));
    let newDataSet = findStudents(dataSet, averageAge, averageEng, []);

    return printToConsole(newDataSet);
};

printYoungEnglishStars();