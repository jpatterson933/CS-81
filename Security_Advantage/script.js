/**
 * Jeffery W. Patterson
 * 12/11/2022
 * CS 81
 * Final Project Submission
 */

// Crypto Coin Historical Data
import doge from "./doge.json" assert {type: "json"}
import ethereum from "./ethereum.json" assert {type: "json"};

// Historical Data Put into Arrays for easy switching
const chooseStockInfo = [doge["Meta Data"], ethereum["Meta Data"]];
const chooseStockDetails = [doge["Time Series (Digital Currency Daily)"], ethereum["Time Series (Digital Currency Daily)"]]


//---------- SET HISTORICAL DATA ----------//
const stockInformation = chooseStockInfo[0];
const days = chooseStockDetails[0]
const eachDay = Object.entries(days);

/**
 * //---------- CONTROL PANEL DIRECTIONS ----------//
 * // applicationSpeed: controls the speed of the setTimeout in the function called tick()
 * // startingFunds: money the program can use
 * // startingStocks: # of stocks program has
 * // stocksToBuy: number of stocks to buy at the given parameters in the tick() function
 * // stocksToSell: number of stocks to sell at the given parameter in the tick() function
 */
//------------------------- CONTROL PANEL -------------------------//
const applicationSpeed = 1;
const startingFunds = 100000;
const startingStocks = 0;
const stocksToBuy = 10;
const stocksToSell = 10;
//------------------------- END CONTROL PANEL -------------------------//

//------------------------- cycleNodes() -------------------------//
// 1st Paramater: Existing html element - 2nd Parameter will be appended here
// 2nd Parameter: new Element that will be appended to 1st Parameter
// 3rd Parameter: txt that will be appended to the 2nd parameter
const cycleNodes = (htmlEle, newEle, newText) => {
  // checking the value of the html element in the html document's child nodes - if there are no children, itll return undefined
  let exists = htmlEle.childNodes[0];
  // if no children
  if (exists === undefined) {
    // new html element created to hold the new text - this will be created outside and above the function
    newEle.append(newText);
    // new html element is appeneded to an html element that already exists inside of the html document
    htmlEle.append(newEle);
    // else if child exists
  } else {
    // we will remove the child node since it exists and replace it with a new one
    htmlEle.removeChild(exists);
    newEle.append(newText);
    htmlEle.append(newEle);
  }
};

//------------------------- appendTickerNews() -------------------------//
// Paramater: Takes a string and outputs it into the ticker news section on the page
const appendTickerNews = (news) => {
  // grab existing element
  let dashboardNews = document.getElementById('dashboard-news');
  // count children of existing element
  let dashBoardChildren = dashboardNews.childElementCount;
  // if existing element has 7 shildren, it will remove the last one providing a running news area //
  if (dashBoardChildren > 6) {
    dashboardNews.removeChild(dashboardNews.lastElementChild)
  }
  // create div with class news and put the news parameter into it as a newly created text node
  let newsNode = document.createElement('div');
  newsNode.setAttribute('class', 'news');
  let data = document.createTextNode(news);
  newsNode.append(data);
  // prepend everything so the most recent is displayed at the top
  dashboardNews.prepend(newsNode);
}



/* ---------------------------- STOCK PORTFOLIO CLASS ------------------------------*/
class StockPortfolio {
  // Parameter 1 is the total funds declared in the CONTROL PANEL
  // Parameter 2 is the total stocks declared in the CONTROL PANEL
  constructor(funds, totalStocks) {
    this.funds = funds;
    this.totalStocks = totalStocks;
    // this will hold the amount and total of the last purchased stocks
    this.bundle = [];
    // future add on here - will have program save money based off of specific conditions
    this.saveMoney = 0;
  }

  // ---------- StockPortfolio METHODS

  // Updates the amount in the center of the window and returns this.funds
  updateFunds() {
    // grab funds element in index.html
    let funds = document.getElementById('funds')
    // create a div element with an id of funds-display and append variable data to it
    let fundDisplay = document.createElement('div')
    fundDisplay.setAttribute('id', 'funds-display')
    let data = document.createTextNode("Balance: $" + (this.funds).toFixed(2))
    // call function to put new this.funds amount on screen
    cycleNodes(funds, fundDisplay, data)
    return this.funds;
  }
  //
  updateStocks() {
    // first we grab the stocks html element in index.html
    let stocks = document.getElementById('stocks')
    // second, create a div element with an id of stocks-display and append variable data to it
    let stocksDisplay = document.createElement('div')
    stocksDisplay.setAttribute('id', 'stocks-display')
    let data = document.createTextNode("# Stocks " + this.totalStocks)
    // call function to put new this.funds amount on screen
    cycleNodes(stocks, stocksDisplay, data)
    // return the this.totalStocks to be used
    return this.totalStocks;
  }
  // -- METHODS THAT UPDATE FUNDS AND STOCK AMOUNTS -- //
  increaseFunds(stockSoldFor) {
    // console.log((this.funds + stockSoldFor), "increaseFunds()");
    return this.funds = this.funds + stockSoldFor;
  }
  decreaseFunds(stockCost) {
    // console.log((this.funds - stockCost), "decreaseFunds()");
    return this.funds = this.funds - stockCost;
  }
  increaseHeldStocks(stockBought) {
    // console.log((this.totalStocks + stockBought), "increaseHeldStocks()");
    return this.totalStocks = this.totalStocks + stockBought;
  }
  decreaseHeldStocks(stockSold) {
    // console.log((this.totalStocks - stockSold), "decreaseHeldStocks()");
    return this.totalStocks = this.totalStocks - stockSold;
  }
  // -- END METHODS THAT UPDATE FUNDS AND STOCK AMOUNTS -- //



  // this creates an historical bundle in later versions we can use this to analyze and improve algorithmic trading based off of what was successful or not
  /* we can also use this to trade the bundle back aka if I buy 10 @ 42, I want to see if 42 is now 30% higher and then sell 10 at (42 * 1.3) and remove what I sold from the bundle - did not have enough time to do this before the assignment was due */
  setStockBundle(price, amount) {
    let purchaseInstance = {
      price: Number(price),
      amount: amount
    }
    this.bundle.push(purchaseInstance);

    return this.bundle;
  }

  // CHECK STOCK BUNDLE - THIS WILL BE MORE INVOLVED IN FUTURE ADDITION
  checkStockBundle() {
    // console.log(this.bundle[0])
    let exists = this.bundle[0];
    // console.log(exists)
    if (exists === undefined) {
      // if there is nothing in the stock bundle, that means nothing has been purchased yet so it will return
      return;
    } else {
      // 
      console.log(this.bundle[0].price, "checkStockBundle()")
      return this.bundle[0].price;
    }
  }

  // need to limit buys - can potentially get out of control and just buy buy buy (aka How to Lose your Money in 10 Trades starring Jeff Patterson)
  buyStocks(stockPrice, stockAmount) {
    // set the current stock bundle
    this.setStockBundle(stockPrice, stockAmount)
    // first we decrease our funds
    this.decreaseFunds(stockPrice * stockAmount);
    // second we increase the stocks 
    this.increaseHeldStocks(stockAmount);

    // the bottom three lines here should update what the user sees on screen
    appendTickerNews(`Purchased ${stockAmount} @ ${stockPrice}`)
    this.updateStocks();
    this.updateFunds();
  }
  sellStocks(stockPrice, stockAmount) {
    this.increaseFunds(stockPrice * stockAmount);
    this.decreaseHeldStocks(stockAmount);
    // the bottom three lines here should update what the user sees on screen
    appendTickerNews(`Sold ${stockAmount} @ ${stockPrice}`)
    this.updateFunds();
    this.updateStocks();
  }
  // This is where I was working on the deposit money function - FUTURE PLAN
  depositMoney() {
    console.log(this.funds, "depositMoney()")
    return 0;
  }


};

// CREATE YOUR NEW STOCK PORTFOLIO HERE
let userStocks = new StockPortfolio(startingFunds, startingStocks);

// Display the stock information on the upper left hand screen
const showStockInfo = () => {
  // console.log(stockInformation["3. Digital Currency Name"])
  // console.log(stockInformation["2. Digital Currency Code"])
  // console.log(stockInformation["4. Market Code"])
  // console.log(stockInformation["7. Time Zone"])

  // GRAB HTML ELEMENTS
  let stockName = document.getElementById('stock-name');
  let stockCode = document.getElementById('stock-code');
  let stockCurrency = document.getElementById('stock-currency');
  let stockTime = document.getElementById('stock-time');
  // CREATE NEW TEXT NODES
  let name = document.createTextNode(stockInformation["3. Digital Currency Name"]);
  let code = document.createTextNode("Ticker Symbol: " + stockInformation["2. Digital Currency Code"]);
  let currency = document.createTextNode("Currency: " + stockInformation["4. Market Code"]);
  let time = document.createTextNode("Time Zone: " + stockInformation["7. Time Zone"]);
  // APPEND TEXT NODES TO HTML ELEMENTS
  stockName.append(name);
  stockCode.append(code);
  stockCurrency.append(currency);
  stockTime.append(time);
}
// call function to display stock information
showStockInfo();

//------------------------- showTicker() -------------------------//
// Paramater: Takes a string and outputs it into the middle of the screen section on the page
const showTicker = (text) => {
  // grab html element with id of ticker
  let ticker = document.getElementById('ticker')
  // create a new div element with an id of tick-display and append data to it
  let tickDisplay = document.createElement('div')
  tickDisplay.setAttribute('id', 'tick-display')
  let data = document.createTextNode("$" + text)
  // call cycleNodes() funciton
  cycleNodes(ticker, tickDisplay, data)
};
// global varialbe to carry our rolling daily averages
const shortAverageResult = [];
const longAverageResult = [];

//------------------------- calcDailyAverage() -------------------------//
// 1st Paramater: takes the stock price
// 2nd Parameter: days is the amount of days you want to put into the average CANNOT BE 1
// 3rd Parameter: array is either shortAverageResult of longAverageResult
const calcDailyAverage = (stockPrice, days, array) => {
  // if the array.length is less than day then we will add the next day of data into it
  if (array.length < days) {
    // initialize price and grab from data
    let price = Number(stockPrice);
    // add new price
    array.push(price)
    // if the number of items is greater than or equal to the days paramater
    // IT will remove first item and put in new item at the end on each iteration
  } else if (array.length >= days) {
    // first we remove the first element from the array
    array.splice(0, 1);
    // then we calculate our average by adding up everything in the array and dividing by 7 (days parameter)
    let average = (array.reduce((accumulator, currentValue) => accumulator + currentValue)) / days
    // initialize a new price variable to push into array that will then be appended to the end aka keep updating
    let price = Number(stockPrice);
    // push prise to array
    array.push(price)
    // return the average
    return average;
  }
};

//------------------------- tick() -------------------------//
// 1st Paramater: this is a number, it must be between 1 & 999, the closer to 1, the closer you are to the end of the data
// 2nd Parameter: each iteration through, the function will bring back the previous price under the guise of oldPrice
function tick(i, oldPrice) {
  // will continue going until i is 0
  if (i > 0) {
    // set timeout function that cycles through our data / emulates real time ticker
    setTimeout(() => {
      // grab current price from data
      const currentPrice = eachDay[i--][1]["1a. open (USD)"];
      // this shows our ticker based off of the set timeout time
      showTicker(currentPrice);
      // will show as undefined until the array has the two numbers (Current: 3 & 12 on 12/11/2022)
      const shortAverage = calcDailyAverage(currentPrice, 3, shortAverageResult);
      const longAverage = calcDailyAverage(currentPrice, 12, longAverageResult);

      //--------- DEPOSIT MONEY FUNCTION ----------//
      // 1. Will be apart of future additions
      console.log(userStocks.depositMoney())
      // Also for future additions
      if (userStocks.updateFunds() > 150) {
        // userStocks.depositMoney();
      }
      // i definitely can short up this if statement into something more refined 
      // if no average, console.log
      if (shortAverage === undefined || longAverage === undefined) {
        console.log("Not enough Data Yet");
        // if shortAverage day average greater than longAverage day average, buy stocks
      } else if (shortAverage > longAverage || currentPrice > ((oldPrice * 30) + currentPrice)) {
        // Condition One -> Mean Reversion
        // (shortAverage > longAverage)

        // userStocks.updateFunds();
        if (userStocks.updateFunds() < (currentPrice * stocksToBuy)) {
          // console.log(userStocks.updateFunds(), (currentPrice * stocksToBuy), "Did not Buy");

        } else if (userStocks.updateFunds() > (currentPrice * stocksToBuy)) {
          //user buy stocks at current price and stocks to buy amount
          userStocks.buyStocks(currentPrice, stocksToBuy);
          // then we update funds and stocks
          userStocks.updateFunds()
          userStocks.updateStocks();
        }

        // if current price is greater than 30% of 12 * 3 day average, than sell OR
        // if current price is 30% greater than old price OR
        // if current price is 30% greater than the last stock purchase 
      } else if (currentPrice > (((longAverage / 100) * 20)) + longAverage
        || currentPrice > ((oldPrice * 30) + oldPrice)
        || (currentPrice > (userStocks.checkStockBundle() * 30) + userStocks.checkStockBundle)) {

        if (userStocks.updateStocks() < (stocksToSell)) {
          // LETS US KNOW IF WE DO NOT HAVE ENOUGH STOCKS - UNNECESSARY FOR NOW
          // NEED TO SHORTON IF STATEMENTS
          // console.log(userStocks.updateStocks(), (stocksToSell), "Not enough Stock to Sell");

        } else if (userStocks.updateStocks() > (stocksToSell)) {
          userStocks.sellStocks(currentPrice, stocksToSell);
        }

      }
      // call tick with increased i value as new parameter
      // console.log(userStocks.checkSavings(), "checkSavings()")
      tick(i, currentPrice)
    }, applicationSpeed)
  } else {
    // end the ticker once we go through all of the arrays
    clearTimeout();
    // Call return to exit function
    return;
  }
}
// the data we have saved is data points so we set tick to 999 since a position of 0 will equal 1000 positions
tick(900);
