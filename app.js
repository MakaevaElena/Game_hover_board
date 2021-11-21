const board = document.querySelector('#board');
const colors = ['#9370DB', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#4B0082', '#6A5ACD'];
const SQUARES_NUMBER = 400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // через замыкание
    // square.addEventListener('mouseover', () => {
    //     setColor(square)
    // })
    // square.addEventListener('mouseleave', () => {
    //     removeColor(square)
    // })

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square);

};

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
};

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`

};

// 1-ый вариант
// function getRandomColor() {
//     const index = Math.floor(Math.random() * colors.length);
//     return colors[index];
// };

// 2-ой вариант
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];

};



