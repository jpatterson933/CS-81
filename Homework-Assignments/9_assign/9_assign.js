






// we need the word list and the form element
let wordList = document.querySelector("#wordList");
let form = document.querySelector("form");

// getWords() will populate the word list with existing words from localStorage
// TODO: COMPLETE THIS FUNCTION BELOW
getWords()

// add a listener on the submit action
// this will execute a callback function whenever submit is clicked
form.addEventListener("submit", (e) => {
  // stop page from loading
  e.preventDefault();


  // this will only grab the ordered list once it has been created in the addWord() function
  let orderedList = document.getElementById('ordered-list');
  // we will remove this element before replacing it with an updated list
  orderedList.remove();
  // this is the form data or word we want to add
  // let's clear input box once we click submit
  let word = form.elements.word.value;
  form.elements.word.value = "";

  // add word to list and localstorage
  // TODO: COMPLETE THIS FUNCTION BELOW
  addWord(word)


  // this is here to prevent the normal form submit action
  // we are doing our own listener for submit
});

function addWord(word) {
  /*
    When we get a word, we may want to:
    1. Add the new word to local storage
    1. bonus requirement: check if it exists in our localStorage already
    2. bonus requirement: add an click event listener for deletion
  */

  word.toLowerCase();

  // check if the word is in local storage
  if (word in localStorage) {
    // alert('This word already exists!');
  } else {

    //set word in local storage
    localStorage.setItem(word, word)
    // alert('You have added a new word!');
  }




  // YOUR CODE HERE

  // finally call getWords() to display the new list
  getWords()
}

function getWords() {
  /*
  This method will be used to:
  1. Get the existing list of words in local storage, if any
  2. Sort the list
  3. Display the word list in the html list <ul> element
  */



  let listSection = document.getElementById('show-words');
  let newList = document.createElement('ul');
  newList.setAttribute('id', 'ordered-list')



  let list = [];
  // list.push(localStorage.getItem())
  let words = localStorage


  Object.values(words).forEach(value => {
    list.push(value)
  });

  let orderedList = list.sort();

  for (let item of orderedList) {
    let listContainer = document.createElement('li')
    // add an event listener to the item when it is created
    // once clicked the item will be deleted from local storage and the page will reload to reflect new list
    listContainer.addEventListener('click', (e) => {
      // delete item from local storage
      localStorage.removeItem(item);
      // reload the page and display the new list
      alert(`You have deleted the word ${item}`);
      // reload the page
      location.reload();

    })
    // put the text inside of the li item created above
    let listItem = document.createTextNode(item);
    // append the listItem to the list container
    listContainer.append(listItem);
    // append the list container to the new list
    newList.append(listContainer)

  }
  // append the newly created list to the list section div in in the html
  listSection.append(newList)

  // YOUR CODE HERE
}

