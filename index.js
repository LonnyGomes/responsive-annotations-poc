import './main.css';

console.log('hello world');

const vid = document.querySelector('.video');
const btn = document.getElementById('toggle');
btn.addEventListener('click', () => {
    vid.paused ? vid.play() : vid.pause();
})