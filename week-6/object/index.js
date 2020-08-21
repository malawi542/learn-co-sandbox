// Objects

const messages = ['Hey', 'How are you', 'Goodbye']
messages[0]
messages[2]

const person = {
// Key Value
  name: 'Nathan',
  location: 'New York, NY',
  occupation: 'Cool person'
}

console.log(person.occupation)
//  Mutatuve / destructive

person.email = 'test&test.com'
person.phoneNumber = '3475431575'
console.log(person)

// non-mutative
// const personCopy = object.assign({}, person). We start with the {} because that is where we want to start off with

personCopy.newKey = 'newKey'

delete person.email
console.log(person)

const car = {
  model: 'Ford',
  noOfWheels: 4,
}

console.log(person.occupation)
const document = {
  querySelector:
  querySelectorAll:
  createElement:
}

document.querySelector