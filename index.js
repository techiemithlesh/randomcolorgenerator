
var container = document.querySelector('.container');
var btn = document.querySelector('.btn');
var placeHolder = document.querySelector('.placeholder');


btn.addEventListener('click', () => {
    let output = (Math.random()*0xffffff*100000).toString(16).slice(0,6);
    let newOutput = '#' + output;
    container.style.background = newOutput;
    placeHolder.innerHTML = newOutput;
})
