/*
    Jeffery W. Patterson
*/

/*
        For each row, the <table> tage contains a <tr> tag. Inisde of these <tr> tags, we can put cell elements: either heading cells (<th>) or 
    regular cells(<td>).
        Given a data set of mountains, an array of objects with name, height, and place properties, generate the DOM structure for a table that 
    enumerates the objects. It should have one column per key and one row per object, plus a header row with <th> elements at the top, listing 
    the column names.
        Write this so that the columns are automatically derived from the objects, by taking the property names of the irst ojbect in the data.
    add the resulting table to the element with an id attribute of "mountains" so that it becomes visible in the document.
        Once you have this working, right-align cells that contina number values by setting their style.textAligh property to "right"

*/

const mountains = [
    {
        name: "Blue Peak",
        height: "1345ft",
        place: "River Place"
    },
    {
        name: "Red Peak",
        height: "145ft",
        place: "Sandbox Palace"
    },
    {
        name: "Purple Peak",
        height: "455ft",
        place: "Husky Hollows"
    },
    {
        name: "Green Peak",
        height: "8273ft",
        place: "Forest Falls"
    }
];

function writeTable (object) {
    let mountains = document.getElementById('mountains');
    // create a table
    let table = document.createElement('table');
    // append the table to the body of the document
    mountains.append(table);
    // create a new row
    let newRow = document.createElement('tr');
    table.append(newRow)

    Object.keys(object[0]).forEach(key => {
        let newTableHeader = document.createElement('th');
        newTableHeader.style.fontSize = "2em";
        newRow.appendChild(newTableHeader);
        let newContent = document.createTextNode(key);
        newTableHeader.appendChild(newContent);
    });

    for(let i = 0; i < object.length; i++) {

        let newTableRow = document.createElement('tr');
        table.appendChild(newTableRow);

        Object.values(object[i]).forEach(value => {

            let newTableData = document.createElement('td');
            newTableData.style.textAlign = "right";
            newTableData.style.padding = "2px 2em";
            let newValue = document.createTextNode(value);
            newTableData.appendChild(newValue);
            newTableRow.appendChild(newTableData)
        })
    }
};

writeTable(mountains);

/*
    The document.getElementsByTagName method returns all child elements with a given tagname. Implement your own version of this as a function that takes a node and a string(the tag name) as arguments and returns an array containing all descendant element nodes with the given tag name.
        To find the tag name of an element, use its nodeName property. But note 
    that this will return the tag name in all uppercase. Use the toLowerCase or toUpperCase string methods to compensate for this.
*/


function getNodes(node, string) {

    let foundNodes = document.querySelectorAll(node);
    console.log(foundNodes)

    for(let i = 0; i < foundNodes.length; i++) {
        if(foundNodes[i].hasChildNodes){
            let deepNode = foundNodes[i].childNodes
            for(let i = 0; i < deepNode.length; i++) {
                // if(deepNode === st)
            } 
            console.log("test")
            console.log(foundNodes[i].nodeName)
            let chlNd = foundNodes[i].nodeName.toLowerCase();

            console.log(chlNd)
            if(chlNd === string) {
                
            }
        }
    }



    console.log(document.querySelectorAll(node)[0].nodeName)

    
    
};

// console.log(getNodes("something", "div"))
getNodes("tr", "td")
