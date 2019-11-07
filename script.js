const int = document.querySelector('.intro');
const vid = int.querySelector('video');
const intText = int.querySelector('h1');

//second section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magic
const controller = new ScrollMagic.Controller();

//scenes
const scene = new ScrollMagic.Scene({
    duration: 10000,
    triggerElement: int,
    triggerHook: 0
})
.addIndicators()
.setPin(int)
.addTo(controller);

//videos (animated)
let accelamount = .1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(()=> {
    delay += (scrollpos - delay) * accelamount;
    vid.currentTime = delay;
}, 33.3);