const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']

// color is a parameter
function createColorfulDiv (color) {
  const newDiv = document.createElement('div')
    // <div></div>
  newDiv.innerText = color
  // <div>red</div>
  
  newDiv.style.backgroundColor = color
  const containerDiv = docu
  ment.querySelector('#container')
  containerDiv.appendChild(newDiv)

}

// StopIteration

// do something fior every color inside of colors
for(let color of colors) {
 createColorfulDiv(color)  
}

for( let i = 0; i<10; i +=1) {
  console.log('hi')
  
  const locations = ['NY', 'CA', 'TX', 'NC', 'NJ', 'WY', 'SD', 'ND']
    
    for (let i = 0; i < 8; i += 1) {
      console.log(locations[i])
    }
    
    for (let location of locations) {
      console.log(location)
    }
    
    const flightDetails = {
      startingDestination: 'JFK',
      endingDestination: 'LHR',
      time: '4:00PM',
      carrier: 'American Airlines',
    }
    
    for (let flightDetail in flightDetails) {
      console.log(flightDetail)
      console.log(flightDetails[flightDetail])
    }
    
}