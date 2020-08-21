// returns only works inside these functions

// anything inside braces or in scope will apply within these braces

// Git review
// first thing you always want to do is git init. Git status running periodically shows what we have on our branch master
// git add text.txt will add the text file to our master branch
// another git status text.txt is green colored and a new file is on our master branch
// git commit needs a message so we write git commit -m "First commit"

// To get on Github


// for (let i = 0; i <5; i++) {
  // sayHi('hi')
}

// console.log(sayHi) {
  // This will print it 5 times
}

const listOfMessages = ['Bonjour', 'Hola', 'hello', 'Wilkommen']

// for (let i=0; i<4; i++) {
  // console.log(listOfMessages[i])
}

// for...of
// for(let arrayMessage of listOfMessages) {
  // console.log(arrayMessage)
}

const flightDetails = {
  destination: 'LHR',
  source: 'JFK',
  time: '4:30pm',
  duration: 11,
  passenggers: ['passenger 1', 'passenger 2']
}

// for...in
// for objects

// let is defining detail as the key
for (let detail in flightDetails) {
  console.log(detail + ":" flightDetails[detail])
}