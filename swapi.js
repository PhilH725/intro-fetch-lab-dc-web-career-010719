// Write your swapi code in this file!
// fetch('https://swapi.co/api/films/1/')
//   .then(res => res.json())
//   .then(json => console.log(json));

// getOpeningCrawl() {
//   fetch('https://swapi.co/api/films/1/')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }

// document.addEventListener('DOMContentLoaded' () => {
// })

let crawlButton = document.getElementById('crawlBtn')
crawlButton.addEventListener('click', function () {
  fetch('https://swapi.co/api/films/1/')
    .then(res => res.json())
    .then(json => {
      let ele = document.createElement('p')
      ele.innerHTML = json.opening_crawl
      let crawlDiv = document.querySelector('#crawlDiv')
      crawlDiv.appendChild(ele)
    });
})

let planetForm = document.getElementById('planetInput')
let planetSubmitButton = document.getElementById('findPlanet')
planetSubmitButton.addEventListener('click', function(e) {
  e.preventDefault()
  let input = planetForm.value
  fetch(`https://swapi.co/api/planets/${input}/`)
    .then(res => res.json())
    .then(json => {
      let newElement = document.createElement('p')
      newElement.innerHTML = `${json.name}, ${json.climate}`
      document.getElementById('planetData').appendChild(newElement)
    });
})

// document.addEventListener('DOMContentLoaded', () => {
// })



// let c3Div = document.querySelector('#droid-2')
// let r2Div = document.getElementById('droid-3')
// let c3Ele = document.createElement('p')
// document.getElementById('droid-2').appendChild('c3Ele')
// fetch('https://swapi.co/api/people/2/')
// .then(res => res.json())
// .then(json => {
//   c3Ele.innerHTML = `${json.name}, ${json.height}, ${json.mass}`
// });




// fetch(url)
// .then(res => res.text())
// .then(console.log)

let oneButton = document.getElementById('number-one')
oneButton.addEventListener('click', function () {
  fetch('http://numbersapi.com/1/trivia')
  .then(res => res.text())
  .then(console.log)
})


let pickNum = document.getElementById('pick-a-number')
pickNum.addEventListener('keydown', function(e) {
  if (e.which === 13) {
  fetch(`http://numbersapi.com/${pickNum.value}/trivia`)
  .then(res => res.text())
  .then(console.log)}
})

year = 2019
function decYear () {
  fetch(`http://numbersapi.com/${year}/year`)
  .then(res => res.text())
  .then(console.log)
  year--
}

setInterval(decYear, 50000)

allButton = document.getElementById('all-numbers-button')
allButton.addEventListener('click', function () {
  for (let i = 0; i<100; i++) {
    fetch(`http://numbersapi.com/random/trivia`)
    .then(res => res.text())
    .then(console.log)
  }
})

function pass () {
  
}























//
