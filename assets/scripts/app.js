
let progress = document.getElementById('progress');
let logo = document.getElementById('logo');
let video = document.getElementById("video")

var queue = new createjs.LoadQueue(false);

queue.on("progress", event => {
    console.log(event);
    let progress = Math.floor(event.progress * 100);
    this.progress.style.width = progress + '%';
})

queue.on("complete", event => {        
    loadAnimation();
})

queue.on("fileload", handleFileComplete);
queue.loadFile('/assets/media/Darci.mp4');

function handleFileComplete(event) {

}


function loadAnimation() {
    var x = window.matchMedia("(max-width: 900px)")

    gsap.to('.progress__container', {opacity: 0, ease: 'Power1.easeIn', delay: 2} );
    if (x.matches) {
        gsap.to('.logo', {top: 57.5, left: 100, scale: 0.375, x: "0%", y: "0%", delay: 2.2});
    } else {
        gsap.to('.logo', {top: 57.5, left: 130, scale: 0.375, x: "0%", y: "0%", delay: 2.2});
    }
    
    gsap.to('.noise-wrapper', {opacity: 1, delay: 2.2});
    gsap.to('.hero-section__video-container', 3, {opacity: 1, scale: 1, ease: 'Power2.easeIn', delay: 2.3});
    gsap.to('.hero-section__title', {visibility: 'visible', opacity: 1, y: '60%', delay: 5.3});
    gsap.to('.social', {autoAlpha: 1, right: '2%', delay: 5.3});
    gsap.to('.menu', {autoAlpha: 1, delay: 5.3});
}