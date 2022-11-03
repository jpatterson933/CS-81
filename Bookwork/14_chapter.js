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

    console.log(object)

};

writeTable(mountains);