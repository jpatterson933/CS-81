// import packages we need to run the express app
let express = require('express');
let app = express();
let cors = require('cors');

let corsOptions = {
    origin: '*', 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200
}



let bodyParser = require("body-parser");

//middleware
app.use(cors());

// adding a body parser to handle JSON for us automagically
app.use(bodyParser.json())

app.use('/', express.static(__dirname))

// serve up page
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
})

// our in-memory fake data store is just an array of javascript objects
// we declare it here so that both endpoints can use it
let books = [
    { "author": "me", "title": "BookA", "pages": 600, "quality": "new" },
    { "author": "you", "title": "BookB", "pages": 400, "quality": "used" },
    { "author": "us", "title": "BookC", "pages": 500, "quality": "old" },
]

// VIEW ALL BOOKS
app.get('/book/all', cors(corsOptions), function (req, res) {

    // initialize the return data
    let data = [];

    // search for the book
    for (let i = 0; i < books.length; i++) {
            data.push(books[i]);
    }

    // pass JSON back to client
    res.set('Content-type', 'application/json');
    res.status(201);    // POST success response code
    res.send({ "book": data });
});

// VIEW BOOK BY TITLE
app.get('/book', cors(corsOptions), function (req, res) {
    // get the query params
    let title = req.query.title;

    // initialize the return data
    let data;

    // search for the book
    for (let i = 0; i < books.length; i++) {
        if (books[i].title == title) {
            data = books[i];
            break;
        }
    }

    // pass JSON back to client
    res.set('Content-type', 'application/json');
    res.status(201);    // POST success response code
    res.send({ "book": data });
});

// CREATE A BOOK
app.post('/book', function (req, res) {

    res.set('Content-type', 'application/json');
    // access the request POST body from the request object
    let data = req.body;

    // add the new book to the data store and return it
    let book = {
        "author": data.author,
        "title": data.title,
        "pages": data.pages,
        "quality": data.quality,
    }

    // add the book to the hardcoded list of books
    books.push(book)

    // return JSON list of books
    res.set('Content-type', 'application/json');
    res.status(200);     // GET success response code
    res.send({ "books": books });
});

// DELETE A BOOK
app.delete('/book', function (req, res) {

    console.log("req params", req.query.title)

    // find the index number of the book and then remove it from books array
    const itemIndex = books.findIndex(({ title }) => title === req.query.title)
    if(itemIndex>=0) {
        books.splice(itemIndex, 1);
    }

    // pass JSON back to client
    res.set('Content-type', 'application/json');
    res.status(201);    // POST success response code

    // Shows updated list of books
    res.send({ books });

    
})

// listen for HTTP requests on port 3000
app.listen(3000, function () {
    console.log("listening on port 3000");
});

