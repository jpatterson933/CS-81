/*
  Jeffery W. Patterson
  11/20/2022
  CS 81
*/

// we need the word list and the form element
let wordList = document.querySelector("#wordList");
let form = document.querySelector("form");

getWords();

// this will execute a callback function whenever submit is clicked
form.addEventListener("submit", (e) => {
  // stop page from reloading
  e.preventDefault();

  // this will only grab the ordered list once it has been created in the addWord() function
  let orderedList = document.getElementById('unordered-list');
  // we will remove this element before replacing it with an updated list
  orderedList.remove();
  // this is the form data or word we want to add
  // let's clear input box once we click submit
  let word = form.elements.word.value;
  form.elements.word.value = "";
  // add word to list and localstorage
  addWord(word);
});

function addWord(word) {

  // put all words in lower case so same words with different cases cannot be saved
  word.toLowerCase();

  // check if the word is in local storage
  if (word in localStorage) {
    // alert the user so they know the word already exists
    alert('This word already exists!');
  } else {

    //set word in local storage
    localStorage.setItem(word, word)
    // alert the user that they have created a new word
    alert('You have added a new word!');
  };
  // finally call getWords() to display the new list
  getWords();
};

function getWords() {
  // grab our html div container 
  let listSection = document.getElementById('show-words');
  // create a new unordered list and give it an id of unordered-list
  let newList = document.createElement('ul');
  newList.setAttribute('id', 'unordered-list');
  // set an empty array to push our words into so we can organized them using the sort() method
  let list = [];
  // list.push(localStorage.getItem())
  let words = localStorage;
  // grave the values in local storage and push them into our list
  Object.values(words).forEach(value => {
    list.push(value);
  });
  // organize the list in abc order
  let orderedList = list.sort();
  // for loop to create a list
  for (let item of orderedList) {
    let listContainer = document.createElement('li');
    // add an event listener to the item when it is created
    // once clicked the item will be deleted from local storage and the page will reload to reflect new list
    listContainer.addEventListener('click', (e) => {
      // delete item from local storage
      localStorage.removeItem(item);
      // reload the page and display the new list
      alert(`You have deleted the word ${item}`);
      // reload the page
      location.reload();
    });
    // put the text inside of the li item created above
    let listItem = document.createTextNode(item);
    // append the listItem to the list container
    listContainer.append(listItem);
    // append the list container to the new list
    newList.append(listContainer);
  }
  // append the newly created list to the list section div in in the html
  listSection.append(newList);
};