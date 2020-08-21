// const paragraphOne = document.createElement('P')
// // <p></p> = paragraphOne 
// paragraphOne.innerText = 'Hi Im a paragraph'
// // <p>Hi im paragraph</p> = paragraphOne

// // To put something in our Html:
// // 1. Find the place to put it in
// // 2. Append child to that place
// const ourDiv = document.querySelector('#container')
// ourDiv.appendChild(paragraphOne)

function addParagraphToHtml(message) {
    if(message !== undefined) {
  const paragraphOne = document.createElement('P')
  paragraphOne.innerText = 'Hi Im a paragraph'
  const ourDiv = document.querySelector('#container')
  ourDiv.appendChild(paragraphOne)
    } else {
      console.log('You must give a message')
    }
}

addParagraphToHtml('Hi ima paragraph')
addParagraphToHtml('second paragraph')
addParagraphToHtml('Third')
addParagraphToHtml('Fourth')
addParagraphToHtml('Fifth')

addParagraphToHtml()

// Array & objects

const myFirstArray = []
// Array are like lists
const students = ['Jesse', 'Yana' , 'Julie']

// They are ordered from 0, 1, 2. these are called indexes
// Data Structures: a fancy way of trying to organize data.

// console.log(students[1]) = this one will now print Yana.They start at zero. 

const differentTypes = ['nathan', 12, true]

//  console.log(differentTypes[0]) = this one will print nathan.

// mutative / destructive
const newStudents = students.push('Grace')
// console.log(newStudents) = this on will print 4.

students.push('Grace')
students.push('Nathan')

// This will now add Grace and Nathan

// student.unshift('Melissa') = this one will add Melissa at the beginning

const studentCopy = student.slice();

console.log(studentCopy)
console.log(students)

studentCopy.push('asdf')

// removing
const states = ['NY', 'NJ', 'CT' , 'CA']
states.pop()

// mutative
// states.pop() removes the last item, which in this case is CA
// states.shift() removing from the beginning

// non-mutative / Non - destructive
const statesCopy = states.slice()
statesCopy.pop()

console.log(statesCopy)
console.log(states)
                // 0           1        2         3         4
const foods = ['apple' , 'banana', 'orange', 'pear', ['lollipop'], [['tootsie pop']]];
// console.log(foods[4] [0]) this means it will look into lollipop array and then select the first item, which is just lollipop without the brackets.