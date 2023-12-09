import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="app-container">
    <header>
      <h1>We're launching soon</h1>
    </header>
    <div class="countdownTimer-container">
      <div class="countdownTimer-timer">
        <div class="flip-card day">
          <div class="flip-card-top">14</div>
          <div class="flip-card-bottom">14</div>
        </div>
        <p class="countdownTimer-timer-time">Days</p>
      </div>
      <div class="countdownTimer-timer">
        <div class="flip-card hour">
          <div class="flip-card-top">00</div>
          <div class="flip-card-bottom">00</div>
        </div>
        <p class="countdownTimer-timer-time">Hours</p>
      </div>
      <div class="countdownTimer-timer">
        <div class="flip-card minute">
          <div class="flip-card-top">00</div>
          <div class="flip-card-bottom">00</div>
        </div>
        <p class="countdownTimer-timer-time">Minutes</p>
      </div>
      <div class="countdownTimer-timer">
        <div class="flip-card second">
          <div class="flip-card-top">00</div>
          <div class="flip-card-bottom">00</div>
        </div>
        <p class="countdownTimer-timer-time">Seconds</p>
      </div>
    </div>
    <footer>
      <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
      <a href="#"><i class="fa-brands fa-pinterest"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
    </footer>
  </div>
`

// Get DOM elements of flipped cards
const flipCardDay = document.querySelector('.flip-card.day')
const flipCardHour = document.querySelector('.flip-card.hour')
const flipCardMinute = document.querySelector('.flip-card.minute')
const flipCardSecond = document.querySelector('.flip-card.second')


// Rendor the rest of time on the DOM

rendorRestOfTime()

function rendorRestOfTime() {
  const now = new Date()
  const eventDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14)
  const currentTime = now.getTime()
  const eventTime = eventDate.getTime()
  const restOfTime = eventTime - currentTime

  const seconds = Math.floor(restOfTime / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  let restOfDays = days
  let restOfHours = hours % 24
  let restOfMinutes = minutes % 60
  let restOfSeconds = seconds % 60

  restOfDays = restOfDays < 10 ? '0' + restOfDays : restOfDays
  restOfHours = restOfHours < 10 ? '0' + restOfHours : restOfHours
  restOfMinutes = restOfMinutes < 10 ? '0' + restOfMinutes : restOfMinutes
  restOfSeconds = restOfSeconds < 10 ? '0' + restOfSeconds : restOfSeconds

  // Render the time on DOM
  document.querySelector('.flip-card.day .flip-card-top').textContent = restOfDays
  document.querySelector('.flip-card.hour .flip-card-top').textContent = restOfHours
  document.querySelector('.flip-card.minute .flip-card-top').textContent = restOfMinutes
  document.querySelector('.flip-card.second .flip-card-top').textContent = restOfSeconds

  document.querySelector('.flip-card.day .flip-card-bottom').textContent = restOfDays
  document.querySelector('.flip-card.hour .flip-card-bottom').textContent = restOfHours
  document.querySelector('.flip-card.minute .flip-card-bottom').textContent = restOfMinutes
  document.querySelector('.flip-card.second .flip-card-bottom').textContent = restOfSeconds
}


// Countdown

setInterval(countdown, 1000)

function countdown() {
  const now = new Date()
  const eventDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14)
  const currentTime = now.getTime()
  const eventTime = eventDate.getTime()
  const restOfTime = eventTime - currentTime

  const seconds = Math.floor(restOfTime / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  let restOfDays = days
  let restOfHours = hours % 24
  let restOfMinutes = minutes % 60
  let restOfSeconds = seconds % 60

  restOfDays = restOfDays < 10 ? '0' + restOfDays : restOfDays
  restOfHours = restOfHours < 10 ? '0' + restOfHours : restOfHours
  restOfMinutes = restOfMinutes < 10 ? '0' + restOfMinutes : restOfMinutes
  restOfSeconds = restOfSeconds < 10 ? '0' + restOfSeconds : restOfSeconds

  // Flip cards
  flip(flipCardSecond, restOfSeconds)
  flip(flipCardMinute, restOfMinutes)
  flip(flipCardHour, restOfHours)
  flip(flipCardDay, restOfDays)
}


// Flip cards animation

function flip(flipCard, nextNumber) {
  const flipCardTop = document.querySelector(`.${flipCard.classList[0]}.${flipCard.classList[1]} .flip-card-top`)
  const flipCardBottom = document.querySelector(`.${flipCard.classList[0]}.${flipCard.classList[1]} .flip-card-bottom`)
  
  const flipTop = document.createElement('div')
  const flipBottom = document.createElement('div')
  const startNumber = flipCardTop.textContent

  // If start number is the same as the next number,
  // return to the begginning to avoid appending duplicated DOM(div)
  if (parseInt(nextNumber) === parseInt(startNumber)) {
    return
  }

  // Inner Text
  flipTop.textContent = startNumber
  flipBottom.textContent = startNumber

  // Animation
  flipTop.classList.add('flip-top')
  flipBottom.classList.add('flip-bottom')

  // Append Animation Elements
  flipCard.append(flipTop, flipBottom)

  // Changing Numbers
  flipTop.addEventListener('animationstart', () => {
    flipCardTop.textContent = nextNumber
  })

  flipTop.addEventListener('animationend', () => {
    flipTop.remove()
  })

  flipBottom.addEventListener('animationstart', () => {
    flipBottom.textContent = nextNumber
  })

  flipBottom.addEventListener('animationend', () => {
    flipCardBottom.textContent = nextNumber
    flipBottom.remove()
  })
}