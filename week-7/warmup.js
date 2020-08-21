// 1) get the button for the click event
// 2) attach the click event to the button
const button = document.querySelector('#add')
// <button>+</button>

function onClick(event) {
  
}

button.addEventListener('click', (event) => {
  // 1) find the div
    const div = document.querySelector('#total')
  // 2) change the nunber inside the div
  // 3) save the old value
  const oldValue = parseInt(div.innerText, 10)
  // 4) add one to the old value
    div.innerText = oldValue + 1
})


const subtractButton = document.querySelector('#subtract')

subtractButton.addEventListener('click', (event) => {
  
    // 1) find the div
    const div = document.querySelector('#total')
    if(div.innerText === '0') {
      return 
    }
  // 2) change the nunber inside the div
  // 3) save the old value
  const oldValue = parseInt(div.innerText, 10)
  // 4) add one to the old value
    div.innerText = oldValue - 1
  
})

const myArray = [2, 32, 45, 7, 8, 9]

console.log(myArray[2])

const myObject = {
  name: 'Harry Potter',
  gender: 'male',
  age:'19'
}

const keyICareAbout = 'name'

console.log(myObject.keyICareAbout)
console.log(myObject[keyICareAbout])

