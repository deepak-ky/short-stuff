const addNumbers = (a,b) => a + b
const subtractNumbers = (a,b) => a - b

module.exports = {addNumbers, subtract:subtractNumbers}
// --------------------------------------------------------------------------------------
// OPTION - 1 to IMPORT

const math = require('./index1')
console.log(math.addNumbers(2,3))
console.log(math.subtract(2,3))
// --------------------------------------------------------------------------------------
// OPTION - 2 to IMPORT

const {addNumbers, subtract} = require('./index1')
console.log(addNumbers(2,3))
console.log(subtract(2,3))
