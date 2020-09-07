// this is a pure function = always get same output for same inputs
// put a = 0 and b = 0 to provide default values in case of missing parameters
// function sum(a = 0, b = 0) {
//   return a + b
// }

//REFACTOR
// ...values means take all parameters and put them in an array called values
function sum(...values) {
  // initial value has to be 0
  return values.reduce((a, b) => a + b, 0)
}

// function difference(a = 0, b = 0) {
//   return a - b
// }

//REFACTOR
function difference(...values) {
  // initial value has to be the first parameter or default to 0
  // must do .slice(1) because to remove 1st value
  // because the 1st value was getting used twice
  return values.slice(1).reduce((a, b) => a - b, values[0] || 0)
}

// function product(a = 1, b = 1) {
//   return a * b
// }

//REFACTOR
function product(...values) {
  return values.reduce((a, b) => a * b, 1)
}

// function quotient(a = 0, b = 1) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero")
//   }
//   return a / b
// }

//REFACTOR
function quotient(...values) {
  if (values.slice(1).indexOf(0) > -1) {
    throw new Error("Cannot divide by zero")
  }
  return values.slice(1).reduce((a, b) => a / b, values[0] || 0)
}

function parse(data) {
  const result = {}

  // check that values exist and are arrays
  if (Array.isArray(data.sum)) {
    // spread before sending since data.sum is an array, and the sum function expects a list of parameters
    result.sum = sum(...data.sum)
  }
  if (Array.isArray(data.difference)) {
    result.difference = difference(...data.difference)
  }
  if (Array.isArray(data.product)) {
    result.product = product(...data.product)
  }
  if (Array.isArray(data.quotient)) {
    result.quotient = quotient(...data.quotient)
  }

  return result
}

module.exports = {
  sum,
  difference,
  product,
  quotient,
  parse
}