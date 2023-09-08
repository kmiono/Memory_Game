const moves = document.getElementById('moves-count');
const timeValue = document.getElementById('time');
const startButton = document.getElementById('start');
const stpoButton = document.getElementById('stop');
const gameContainer = document.querySelector('.game-container');
const result = document.getElementById('result');
const controls = document.querySelector('.controls-container');
let cards;
let intarval;
let firstCard = false;
let secondCard = false;

// item Array
const items = [
  { name: 'bee', image: 'bee.png' },
  { name: 'cat', image: 'cat.png' },
  { name: 'giraf', image: 'giraf.png' },
  { name: 'hebi-shirokuro', image: 'hebi-shirokuro.png' },
  { name: 'kujira', image: 'kujira.png' },
  { name: 'kuma', image: 'kuma.png' },
  { name: 'panda', image: 'panda.png' },
  { name: 'penguin', image: 'penguin.png' },
  { name: 'syakutorimusi', image: 'syakutorimusi.png' },
  { name: 'taka', image: 'taka.png' },
  { name: 'yagi', image: 'yagi.png' },
  { name: 'azarasi', image: 'azarasi.png' },
];

// Initial Time
let seconds = 0,
  minutes = 0;

// Initial moves and win count
let movesCount = 0,
  winCount;

// For Timer
const timeGenerator = () => {
  seconds += 1;
  // minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }

  // format time before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;

  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

// For calculating moves
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

// Pick ramdom objects from item array
const generateRandom = (size = 4) => {
  // temporary array
  let tempArray = [...items];
  // initializes cardValues array
  let cardValues = [];
  // size should be double (4*4 matrix)/2 since pairs of objects would exist
  size = (size * size) / 2;
  // Random object selection
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    // once selected remove the object from temp array
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = '';
  cardValues = [...cardValues, ...cardValues];
  // simple shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    /*
    Create cards
    before => front side (contains puestion mark)
    after => back side (containts actual image)
    data-card-values is a custom attribute which stores the names of the cards to match later
    */
    gameContainer.innerHTML += `
   <div class="card-container" data-card-value="${cardValues[i].name}">
   <div class="card-before">?</div>
   <div class="card-after"><img src="${cardValues[i].image}" class="image" width="75" height="75"/></div>
   </div>   
   `;
  }
  // Grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;
};

// Initialized values and func calls
const initializer = () => {
  result.innerText = '';
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  matrixGenerator(cardValues);
};

initializer();
