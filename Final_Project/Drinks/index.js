import cocktails from '../cocktails.json' assert {type: 'json'};

console.log(cocktails[1].name)

function consoleLogStuff () {
    for(let i = 0; i < cocktails.length; i++) {
        console.log(cocktails[i].name)
    }

    console.log(cocktails)
}

consoleLogStuff();