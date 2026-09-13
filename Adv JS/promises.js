new Promise(function(resolve, reject) {

    setTimeout(function() {

        console.log("The operation was completed.");

        resolve();

    }, 2000);

}).then(function(result) {

    console.log("Success");

});


const promise3= new Promise( function(resolve, reject){
    setTimeout(function(){
        resolve({name: "Alice", age: 30})
    }, 1000)
})
promise3.then(function(result){
    console.log(result);
})


const promiseFour = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = true;

        if (error) {

            resolve({
                username: "hitesh",
                password: "123"
            });

        } else {

            reject("ERROR: Something went wrong");

        }

    }, 1000);

});


promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function(error) {
        console.log(error);
    }).finally(function() {
        console.log("The promise is either resolved or rejected.");
    })
    ;

    //Async way ---------------------

    const promiseFive = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = false;

        if (!error) {
            resolve("JS went well");
        } else {
            reject("ERROR: JS went wrong");
        }

    }, 1000);

});
async function consumePromiseFive() {

    try {

        const response = await promiseFive;

        console.log(response);

    } catch (error) {

        console.log(error);

    }
}

consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

/*
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
*/