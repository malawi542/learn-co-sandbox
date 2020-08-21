// Git

// const myObjects = {}
// const myArrays = []

// function myFunction () {
  // do stuff
  // can return
  // return 1 + 1
}

// const result = myFunction ()
// console.log(result)

// map, filter -> myArrays

const prices = [23, 45, 19, 20, 34]


function dividedNumberBy100 (number) {
  return number/100
}
console.log(prices.map(dividedNumberBy100))

function isItInMyPriceRange(number) {
  return number<25
}

console.log(prices.filter(isItInMyPriceRange)