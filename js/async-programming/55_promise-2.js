let p1 = new Promise((resolve,reject) => {
    console.log("checkpoint p1.1 ", "p1 is pending")
    setTimeout(() => {
        console.log("checkpoint p1.2 ", "p1 is fullfilled(resolved)")
        resolve(32)
    }, 5000)
})

console.log("checkpoint p1.3 ", p1)

let p2 = new Promise((resolve,reject) => {
    console.log("checkpoint p2.1 ", "p2 is pending")
    setTimeout(() => {
        console.log("checkpoint p2.2 ", "p2 is rejected")
        reject(new Error("p2 is rejected with this error"))
    }, 2500)
})

console.log("checkpoint p2.3 ", p1)

p1.then((value) => {
    console.log("checkpoint p1.4 " , "p1 -> fullfilled (resolved) -> value ->" , value)
})

p2.catch((error) => {
    console.log("checkpoint p2.4 " , "p2 -> rejected -> error ->" , "some error occured")
})