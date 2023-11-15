/* //1. Async Programming
 console.log("checkpoint 1")
setTimeout(function() {console.log("hey, are you guys okay")},3000)
console.log("checkpoint 2")  */


//2. Callback function
function conversation1(name, callback) {
    console.log("Hi, I am " + name)
    callback(name)
}

function conversation2(name) {
    console.log("Hi " + name + " , nice to meet you, I am the JS console")
}

conversation1("deepak", conversation2)
/* conversation1("deepak", function (x) {
    console.log("Hi " + x + " , nice to meet you, I am the JS console")
})
 */