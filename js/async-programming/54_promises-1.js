let p = new Promise((resolve,reject) => {
    console.log("checkpoint 1 ", "Promise is pending")
    setTimeout(() => {
        console.log("checkpoint 2 ", "I am a promise and I am fulfilled(resolved)")
        resolve(56)
        
        // //in the rejected case, the code breaks here
        // console.log("checkpoint 2 ", "I am a promise and I am rejected")
        // reject(new Error("new reject error"))
    }, 2500)
})

console.log("checkpoint 3 ",p)

setTimeout(() => {
    console.log("checkpoint 4 ", p)
}, 3000) // If I reduce the time here, checkpoint 4, would be printed before checkpoint 2, and the promise would 
         // still be in pending state