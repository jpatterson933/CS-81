// my object with the cs80 w
let Learn_Computer_Science = [
    {
        week: 1,
        discussion: "Why do you want to learn Javascript?",
        begins: "09/19",
        topics: ["Introduction", "Chapter 1: Values Types Operators", "Assignment 1 due 11:59pm 09/25"]
    },
    {
        week: 2,
        discussion: "Why is the concept of control flow so integral to programming?",
        begins: "09/26",
        topics: ["Chapter 2: Programming Structure", "Assignment 2 due 11:59pm 10/02"]
    },
    {
        week: 3,
        discussion: "When might you use a weakly-type language to write software over a strongly-type language?",
        begins: "10/03",
        topics: ["Chapter 3: Functions", "Assignment 3 due 11:59pm 10/09"]
    },
    {
        week: 4,
        discussion: "What do you like about Javascript?",
        begins: "10/10",
        topics: ["Chapter 4: Data Structures // Objects and Arrays", "Assignment 4 due 11:59pm 10/16"]
    },
    {
        week: 5,
        discussion: "What kind of software applications do you think would make your life easier?",
        begins: "10/17",
        topics: ["Chapter 5: Higher-Order Functions", "Assignment 5 due 11:59pm 10/23", "Test 1 due 11:59 10/23"]
    },
    {
        week: 6,
        discussion: "Why is testing in programming so important? What types of testing do you think developers benefit from most?",
        begins: "10/24",
        topics: ["Chapter 6: The Secret Life of Objects", "Chapter 8: Bugs and Errors", "Assignment 6 due 11:59pm 10/30"]
    },
    {
        week: 7,
        discussion: "Is the user interface or user experience more important for a website?",
        begins: "10/31",
        topics: ["Chapter 14: The Document Object Model", "Assignment 7 due 11:59pm 11/06"]
    },
    {
        week: 8,
        discussion: "TBD",
        begins: "11/07",
        topics: ["Chapter 15: Handling Events", "Assignment 8 due 11:59pm 11/13"]
    },
    {
        week: 9,
        discussion: "TBD",
        begins: "11/14",
        topics: ["Chapter 18: HTTP and Forms", "Assignment 9 due 11:59pm 11/20"]
    },
    {
        week: 10,
        discussion: "TBD",
        begins: "11/21",
        topics: ["Chapter 20: Node.js // Express.js", "Assignment 10 due 11:59pm 11/27"]
    },
    {
        week: 11,
        discussion: "TBD",
        begins: "11/28",
        topics: ["Lecture Notes: Jquery // AJAX", "Bonus Assignment 11 accepted until 12/09"]
    },
    {
        week: 12,
        discussion: "TBD",
        begins: "12/05",
        topics: ["Semester Project due Sunday 11:59pm 12/11"]
    }
];

// function that takes are object and creates a table that displays on the page
function writeTable(object) {

    // set the background color of the body
    let container = document.querySelector('body');
    // styling our body container
    container.style.backgroundColor = "#7A918D";
    container.style.width = "fit-content";
    container.style.margin = "0 auto";

    // grab the div from html that will be holding the table
    let schedule = document.getElementById('schedule');
    // styling schedule container
    schedule.style.width = "fit-content";
    schedule.style.margin = "4em auto";
    schedule.style.fontFamily = "'Trebuchet MS', sans-serif";
    schedule.style.border = "10px solid #93B1A7";
    schedule.style.boxShadow = "0 0px 14px 4px black, 0px 0px 0px 34px white";

    // create <table> and <tr> our first table row
    let table = document.createElement('table');
    let newRow = document.createElement('tr');

    // set row attribute to an id equal to table-header-row
    newRow.setAttribute("id", "table-header-row");

    // append the new <tr> to the <table>
    table.append(newRow);
    // append the <table> to the <div id="schedule"></div>
    schedule.append(table);

    // This will assign the Table Headers or <th> to the first <tr> that was created
    Object.keys(object[0]).forEach(key => {
        // create newContent text node with each key in the object, the create a new <h1> and a new <th> 
        let newContent = document.createTextNode(key.toUpperCase());
        let newHeaderTitle = document.createElement('h1');
        let tableHeader = document.createElement('th');

        // append the text to the <h1>
        newHeaderTitle.appendChild(newContent);
        // append the new <h1> to the <th>
        tableHeader.append(newHeaderTitle);
        // append the <th> to the <tr>
        newRow.appendChild(tableHeader);
        
    });
    // here we loop through every object in the array and create the table rows with the corresponding table data
    for (let i = 0; i < object.length; i++) {
        // create a new table roq
        let newTableRow = document.createElement('tr');
        // appen the new row to our table
        table.appendChild(newTableRow);

        // then we grab only the values since we already have the keys mapped to the headers above
        Object.values(object[i]).forEach(value => {
            // if the value is an object, that means it is nested and we still have more items to put on the table
            if (typeof value === "object") {
                let newTableData = document.createElement('td');

                for (let item of value) {

                    // create a textValue text node with each value, then create a <div> and a <br>
                    let textValue = document.createTextNode(item);
                    let paragraph = document.createElement('div');
                    paragraph.style.fontSize = "18px";

                    let lineBreak = document.createElement('br');
                    
                    // we are checking each item and seeing if it has the word 'due' in it and if it does, we are putting that to the variable somethingDue
                    let somethingDue = item.includes("due");
                    
                    // if any of the text nodes have the word 'due' in it, the font color of that text node will be red
                    if (somethingDue === true) {
                        paragraph.style.color = "red";
                    };

                    // append <br> to <div>
                    newTableData.append(lineBreak);
                    // append text to <div>
                    paragraph.append(textValue);
                    // append <div> to <td>
                    newTableData.appendChild(paragraph);
                    // append <td> to <tr>
                    newTableRow.append(newTableData);
                }

            } else {
                // create a new variable newValue and stores the value text node in it
                let newValue = document.createTextNode(value);
                // create a new <td>
                let newTableData = document.createElement('td');
                // styling
                newTableData.style.textAlign = "center";
                newTableData.style.fontFamily = "'Trebuchet MS', sans-serif";
                // create a new <div>
                let paragraph = document.createElement('div');
                // styling
                paragraph.style.fontSize = "18px";

                // append text node newValue to <div>, append <div> to <td> and then append <td> to <tr>
                paragraph.append(newValue);
                newTableData.appendChild(paragraph);
                newTableRow.appendChild(newTableData);
            }
        })
    };
    // grabs every other even row in the document
    let evenTableRows = document.querySelectorAll('tr:nth-child(even)');
    
    // grabs every other odd row in the document
    let oddTableRows = document.querySelectorAll('tr:nth-child(odd)');
    // grabs the document table header
    let tableHeader = document.getElementById('table-header-row');
    // styling
    tableHeader.style.color = "white";

    // function to change even and odd table rows with any color as parameter
    function changeRowcolor(rowGroup, color) {
        for (let row of rowGroup) {
            row.style.background = color;
        }
    };

    // set color for all even rows
    changeRowcolor(evenTableRows, "#DBFEB8");
    // set color for all odd rows
    changeRowcolor(oddTableRows, "#99C2A2");
};

// call our writeTable funciton and put Learn_Computer_Science as the object variable.
writeTable(Learn_Computer_Science);