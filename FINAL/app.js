var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");

// middleware for the application
// cross-origin
app.use(cors());
// parse JSON
app.use(bodyParser.json());
// serve css files in the root folder to the client
app.use(express.static('.'))


/*
    The in-memory storage is set globally here. There are currently two
    datastore objects to hold TODO and Completed tasks. There is some
    pre-populated data here that we'll definitely remove when we release
    this app to users!
*/

let taskDatastore = {
    "todo": [
        "finish test 2",
    ],
    "completed": [
        "read the test instructions",
    ],
};

// GET handler returns all tasks to the client (COMPLETED FOR YOU ALREADY)
app.get('/tasks', (req, res) => {
    res.set('Content-Type', 'application/json');
    /*
        Returns 200 with response body containing the datastore
    */
    res.status(200).send(taskDatastore);
});

// POST handler adds a task to a list (COMPLETED FOR YOU ALREADY)
app.post('/task', (req, res) => {
    res.set('Content-Type', 'application/json');

    /*
        Input: data coming into this handler will be in the form:

        {"task": "mytask"}

        You can see contents of the incoming request with:
        console.log(req.body.task). "req" is the request
        and within it, the property req.body holds the incoming data
        above from the client request, hence "task" is a property of
        that incoming request data object.

        Output: This handler should send an empty body back to
        the client with a 201 response code if successful, and return
        and 400 response code with no response body if the task already
        exists in either the TODO or Completed list.
    */

    // post body data as a javascript object
    let newTask = req.body.task;
    // if add task function returns flase, it will throw the 400 status
    if (!addTask("todo", newTask)) {
        // send 400 bad request status code back to client with error
        res.status(400).send({ "error": "duplicate task" });
        // return to completed the request handler
        return
    }

    // send 201 status with no response body
    res.status(201).send({})
});

// add task to appropriate list in datastore and returns false if already exists
// the task parameter is what we are typing into the task input, the type is "todo" or "completed"
function addTask(type, task) {
    switch (type) {
        case "todo":
            // check to see if our task already exists and if it does, return false
            const check = taskDatastore.todo.includes(task)
            if(check) {
                // return false which will throw the bad request error
                return false;
            } else {
                // store newTask and break out of function
                taskDatastore.todo.push(task)
                break;
            }
        case "completed":
            // put task in completed and break out of function
            taskDatastore.completed.push(task)
            break;
    }
    return true;
}
// parameter is any array
function emptyArray(array) {
        // if the array length is 0 that means it is empty and it will return
        if(array.length == 0) {
            return array;
            /*
                if the array length is not 0, I used a for loop and the pop() method to cycle through each item and 
                remove it from the array until the array length is 0
            */
        } else {
            // set i to array legnth and if i is more than 0 that means we have stuff in the array
            for(let i = array.length; i > 0; i--) {
                /* we will pop each item out of the array as it loops through and i will decrease 
                 each time until eventually it equals 0 and there is nothing left in the array */
                array.pop();
            }
            // return the array after the for loop
            return array;
        }
}

// DELETE handler deletes all tasks in TODO and Completed lists
app.delete('/tasks', (req, res) => {
    /*
        This handler will return 204 status code with an empty
        body when all tasks are deleted from the TODO and Completed
        lists.
    */
   // function that will empty an array that is set as the parameter - function located above
    emptyArray(taskDatastore.todo)
    emptyArray(taskDatastore.completed)

    // send 204 status code with no response body
    res.status(204).send()
});

// DELETE handler deletes a task from the TODO list
// and adds the task to the Completed list
app.delete('/task/todo/:task', (req, res) => {

    let clickedTask = req.params.task;
    // find the index position of the clicked task in the taskDatastore.todo array
    const findIndex = taskDatastore.todo.indexOf(clickedTask)
    // console.log(findIndex)
    // using splice we will remove the item based off of its returned index position
    taskDatastore.todo.splice(findIndex, 1);

    // console.log(taskDatastore.todo, taskDatastore.completed)
    // then we will add the clicked task to completed
    addTask("completed", clickedTask)

    res.status(204).send()
});

// DELETE handler deletes a task completely
app.delete('/task/completed/:task', (req, res) => {
    /*
        This handler (like the previous handler) will return
        a 204 status code with no response body after it deletes
        the task from the Completed list.
    */

    let completedTask = req.params.task;
    taskDatastore.completed = taskDatastore.completed.filter((t) => {
        return t != completedTask;
    });

    // send 204 status code with no response body
    res.status(204).send();
});

// This base handler will serve the HTML page todo.html to localhost:3000 when
// the app is started
app.get('/', (req, res) => {
    res.sendFile('todo.html', { root: __dirname });
});

// Listen for HTTP requests on port 3000
app.listen(3000, () => {
    console.log("listening on port 3000");
});