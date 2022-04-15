setTimeout(function(){
    let title = document.querySelector('.title');
    title.setAttribute('style', 'visibility: visible;');
}, 3500);
document.addEventListener('load', setTimeout);



// function setVisible(){
//     let title = document.querySelector('.title');
//     title.setAttribute('style', 'height: 0vh');
// };
// let titlestay = document.querySelector('.title');
// titlestay.addEventListener('animationend', setVisible);



const video = gsap.timeline();

video.to('video', {
    duration: 5
}).to('video', {
    opacity: 0
});

const ded = gsap.timeline();

ded.from('.title', {
    opacity: 0, scale: 0, duration: 3
}).to('.title', {
    opacity: 1, scale: 1
}).to('.title', {
    opacity: 0, scale: 0
}).from('.arrow', {
    opacity: 0, duration: 5
}).to('arrow', {
    opacity: 1
});


// let background = document.getElementById('music');
// background.play();
// background.preload;
// console.log(background);
// let icon = document.getElementById('icon');
// console.log(icon);


// function music(){
//         console.log(background);
//         background.pause();
// }

// icon.addEventListener('click', music)