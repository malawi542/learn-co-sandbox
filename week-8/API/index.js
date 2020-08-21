// fetch('http://www.omdbapi.com/?apikey=8ebff4b5&t=iron+man')

// .then((movieResponse) => movieResponse.json()).then((movieJson) => console.log(movieJson))

// .then(movieJson) => {
//   const title = document.querySelector('#title')
//   const rated = document.querySelector('#rated')
//   const year = document.querySelector('#year')
  
//   title.innerText = movieJson['Title']
  
// }

const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', (event) => {
  const input = document.querySelector('input')
  const movieName = input.value
  fetch('http://www.omdbapi.com/?apikey=8ebff4b5&t=' + movieName)
    .then((response) => response.json())
    .then((movieJson) => {
      const title = document.querySelector('#title')
      const rated = document.querySelector('#rated')
      const year = document.querySelector('#year')
      
      title.innerText = movieJson['Title']
      rated.innerText = movieJson['Rated']
      year.innerText = movieJson['Year']
    })
}

// asynchronous programming
console.log(1 + 2)
