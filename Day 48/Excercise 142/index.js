//  Create a Promise that resolves with "Hello, World!" after 2 seconds.
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 4000);
});
helloPromise.then(function (message) { return console.log(message); });
