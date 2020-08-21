// review
const array = ['51','45','50','34','45']
array.push()
array.pop()
array.unshift()
array.shift()

// to not change the original list, we make a copy

const arrayCopy = array.slice()

//50 -> 52
// This is to change the third item on the list 
Array[2] = '52'


function addFarenheitToTemperature(temperature) {
  return temperature + 'F'
}

const array = ['51','45','50','34','45']

// change this to ['51F','45F','50F','34F','45F']
// we will use map
// Map will take whatever is in the array and add the changes 

console.log(array.map(addFarenheitToTemperature))

function temperaturesAbove50() {
  return temperature >= 50
}

// filter takes/removes things out of our array. It determies what things to keep or not.
console.log(array.filter(temperaturesAbove50))

Const movieObjectbject = {
  title: 'iron man',
  rating: 'PG-13',
  releaseCountries: ['United States', 'Britain', 'Singapore']
}

// One way to get items from objects is by using the dot.
movieObject.title  

// The other way is give it a string
movieObject['title']


console.log(movieObject.releaseCountries[1])

