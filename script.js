const moves = document.getElementById('moves-count');
const timeValue = document.getElementById('time');
const startButton = document.getElementById('start');
const stpoButton = document.getElementById('stop');
const gemeContainer = document.querySelector('.game-container');
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
  { name: 'hebi-sirokuro', image: 'hebi-sirokuro.png' },
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
