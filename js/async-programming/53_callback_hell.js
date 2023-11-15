//Pyramid of doom / Callback hell
// \
//  \
//   \
//    \ 
//    /
//   /
//  /
// /


function conversation1(name, callback) {
    console.log("Hi, I am " + name)
    callback(name, 1)
}

conversation1("deepak", function(name, num) {
    console.log("Hi " + name + " , I am JS Callback function 1. Nice to meet to you,  for the " + num + "th time")
    conversation1("divyalok", function(name, num) {
        console.log("Hi " + name + " , I am JS  Callback function 2. Nice to meet to you,  for the " + num + "th time")
        conversation1("arshad", function(name, num) {
            console.log("Hi " + name + " , I am JS  Callback function 3. Nice to meet to you,  for the " + num + "th time")
            conversation1("lakshay", function(name, num) {
                console.log("Hi " + name + " , I am JS  Callback function 4. Nice to meet to you,  for the " + num + "th time")
            })
        })
    })
})