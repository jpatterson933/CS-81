import axios from "axios";
import fs from "fs";
// this allows us to put our file into a specific folder
import path from "path";
const __dirname = path.resolve();

// this funciton will take any given file name, and the passed data and write it to a file
function writeToFile(fileName, fileData) {
                // here path will be used to join together the given parameters, the we json-stringify the data
    fs.writeFile(path.join(__dirname, "../Security_Advantage", fileName), JSON.stringify(fileData), (err) => {
        // ternary statment: if there is an error, console.log it else let us know the Data has been saved
        err ? console.log(err) : console.log("All data saved.");
    })

}
// this function will take a ticker symbol as a parameter and return data that can be used in writeToFile()
const getHistStockData = (tickerSymbol) => {
    // axios header
    const options = {
        // this is a GET request
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        // params required by Alpha Advantage
        params: {
            function: 'DIGITAL_CURRENCY_DAILY',
            // ticker symbol parameter
            symbol: `${tickerSymbol}`,
            market: "USD",
            outputsize: 'compact',
            datatype: 'json'
        },
        // include headers --- you need create a free api to use here
        // directions on how to do that are in the readme
        headers: {
            'X-RapidAPI-Key': `---------------** THIS IS WHERE YOUR API KEY WOULD GO **------------------`,
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };
    // axios.request
    axios.request(options).then(function (response) {
        // console.log(response.data);
        // call our writeToFile() function
        writeToFile("bc.json", response.data);

        // if there are any errors we will catch them below
    }).catch(function (error) {
        console.error(error);
    });

}
// call our getHistStockData() function - parameter MUST be a valid cryptocurrency else it will not work
getHistStockData("ETH")