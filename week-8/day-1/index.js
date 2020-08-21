function addTodo(event) {
  event.preventDefault()
  const input = document.querySelector('#new-todo')
  const newTodo = input.value 
  const div = document.querySelector('#todos')
  const listItem = document.createElement('li')
  listItem.innerText = newTodo
  div.appendChild(listItem)
  input.value = ''
  
  // We want to cross it out when we click on it
  listItem.addEventListener('click', (event) => {
    listItem.classList.add('finished')
  })
}

const button = document.querySelector('#submit-button')
button.addEventListener('click', addTodo)