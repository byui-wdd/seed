gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "slow", duration: 3});




const tl1 = gsap.timeline();
const tl2 = gsap.timeline();
const tl3 = gsap.timeline();
const tl4 = gsap.timeline();
const tl5 = gsap.timeline();
const tl6 = gsap.timeline();
const tl7 = gsap.timeline();
const tl8 = gsap.timeline();
const tl9 = gsap.timeline();
const tl10 = gsap.timeline();
const tl11 = gsap.timeline();
const tl12 = gsap.timeline();

/* PAGE 1 */
tl1.from('#p1_t1', {
    opacity: 0, scale: 0
}).to('#p1_t1', {
    opacity: 1, scale: 1
}).to('#p1_t1', {
    opacity: 0, scale: 0
}).from('#p1_t1b', {
    opacity: 0, scale: 0
}).to('#p1_t1b', {
    opacity: 1, scale: 1
}).to('#p1_t1b', {
    opacity: 0, scale: 0
}).from('#p1_t2', {
    opacity: 0, scale: 0
}).to('#p1_t2', {
    opacity: 1, scale: 1
}).to('#p1_t2', {
    opacity: 0, scale: 0
}).from('#p1_t2b', {
    opacity: 0, scale: 0
}).to('#p1_t2b', {
    opacity: 1, scale: 1
}).to('#p1_t2b', {
    opacity: 0, scale: 0
}).from('.g1b', {
    x: '-100vw'
}).to('.g1b',{
    x: '0vw', duration: 2
}).from('.b1b', {
    x: '-100vw'
}).to('#p1_t2',{
    opacity: 0, scale: 0
}).to('.b1b',{
    x: '0vw', duration: 2
}).from('.g3b', {
    x: '-100vw'
}).to('.g3b',{
    x: '0vw', duration: 2
}).from('.lb', {
    x: '100vw'
}).to('.lb',{
    x: '0vw', duration: 2
}).from('.g2b', {
    x: '100vw'
}).to('.g2b',{
    x: '0vw', duration: 2
}).from('.b2b', {
    x: '100vw'
}).to('.b2b',{
    x: '0vw', duration: 2
}).from('#p1_t3', {
    opacity: 0, scale: 0
}).to('#p1_t3', {
    opacity: 1, scale: 1
}).to('#p1_t3', {
    opacity: 0, scale: 0
}).from('#p1_t3b', {
    opacity: 0, scale: 0
}).to('#p1_t3b', {
    opacity: 1, scale: 1
}).to('#p1_t3b', {
    opacity: 0, scale: 0
});

/* PAGE 2 */
tl2.from('#p2_t1', {
    opacity: 0, scale: 0
}).to('#p2_t1', {
    opacity: 1, scale: 1
}).to('#p2_t1', {
    opacity: 0, scale: 0
}).from('.up_water', {
    x: '100vw'
}).to('.up_water',{
    x: '0vw', duration: 1
}).to('.up_water', {
    rotation: -30,
}).from('.water', {
    opacity: 0
}).to('.water', {
    opacity: 1
}).from('#p2_t2', {
    opacity: 0, scale: 0
}).to('#p2_t2', {
    opacity: 1, scale: 1
}).to('#p2_t2', {
    opacity: 0, scale: 0
});

/* PAGE 3 */
tl3.from('#p3_t1', {
    opacity: 0, scale: 0
}).to('#p3_t1', {
    opacity: 1, scale: 1
}).to('#p3_t1', {
    opacity: 0, scale: 0
});

/* PAGE 4 */
tl4.from('#p4_t1', {
    opacity: 0, scale: 0
}).to('#p4_t1', {
    opacity: 1, scale: 1
}).to('#p4_t1', {
    opacity: 0, scale: 0
}).from('.up_water2', {
    x: '100vw'
}).to('.up_water2',{
    x: '0vw', duration: 1
}).to('.up_water2', {
    rotation: -30,
}).from('.water2', {
    opacity: 0
}).to('.water2', {
    opacity: 1
});


/* PAGE 5 */
tl5.from('#pots', {
    x: '100vw'
}).to('#pots', {
    x: '0vw', duration: 2
}).from('#p5_t1', {
    opacity: 0, scale: 0
}).to('#p5_t1', {
    opacity: 1, scale: 1
}).from('#p5_t2', {
    opacity: 0, scale: 0
}).to('#p5_t2', {
    opacity: 1, scale: 1
}).to('#p5_t2', {
    opacity: 0, scale: 0
});

/* PAGE 6 */
tl6.from('#p6_t1', {
    opacity: 0, scale: 0
}).to('#p6_t1', {
    opacity: 1, scale: 1
}).to('#p6_t1', {
    opacity: 0, scale: 0
}).from('#p6_t2', {
    opacity: 0, scale: 0
}).to('#p6_t2', {
    opacity: 1, scale: 1
}).to('#p6_t2', {
    opacity: 0, scale: 0
})

/* PAGE 7 */
tl7.from('#p7_t1', {
    opacity: 0, scale: 0
}).to('#p7_t1', {
    opacity: 1, scale: 1
}).to('#p7_t1', {
    opacity: 0, scale: 0
}).from('#p7_t2', {
    opacity: 0, scale: 0
}).to('#p7_t2', {
    opacity: 1, scale: 1
}).to('#p7_t2', {
    opacity: 0, scale: 0
});

/* PAGE 8 */
tl8.from('#p8_t1', {
    opacity: 0, scale: 0
}).to('#p8_t1', {
    opacity: 1, scale: 1
}).from('.g3f', {
    scale: 1
}).to('.g3f', {
    scale: 3, duration: 4
}).to('.g3f', {
    scale: 1
}).from('.b1f', {
    scale: 1
}).to('.b1f', {
    scale: 3, duration: 4
}).to('.b1f', {
    scale: 1
}).from('.g1f', {
    scale: 1
}).to('.g1f', {
    scale: 3, duration: 4
}).to('.g1f', {
    scale: 1
}).from('.g2f', {
    scale: 1
}).to('.g2f', {
    scale: 3, duration: 4
}).to('.g2f', {
    scale: 1
}).from('.b2f', {
    scale: 1
}).to('.b2f', {
    scale: 3, duration: 4
}).to('.b2f', {
    scale: 1
}).from('.ling_sit', {
    opacity: 0, scale: 0
}).to('.ling_sit', {
    opacity: 1, scale: 1
}).to('#p8_t1', {
    opacity: 0, scale: 0
}).from('#p8_t2', {
    opacity: 0, scale: 0
}).to('#p8_t2', {
    opacity: 1, scale: 1
}).to('#p8_t2', {
    opacity: 0, scale: 0
});

/* PAGE 9 */
tl9.from('#p9_t1', {
    opacity: 0, scale: 0
}).to('#p9_t1', {
    opacity: 1, scale: 1
}).to('#p9_t1', {
    opacity: 0, scale: 0
}).from('#p9_t2', {
    opacity: 0, scale: 0
}).to('#p9_t2', {
    opacity: 1, scale: 1
}).to('#p9_t2', {
    opacity: 0, scale: 0
}).from('#p9_t3', {
    opacity: 0, scale: 0
}).to('#p9_t3', {
    opacity: 1, scale: 1
}).to('#p9_t3', {
    opacity: 0, scale: 0
}).from('#p9_t4', {
    opacity: 0, scale: 0
}).to('#p9_t4', {
    opacity: 1, scale: 1
}).to('#p9_t4', {
    opacity: 0, scale: 0
}).from('.ling_talk', {
    x: '100vw'
}).to('.ling_talks', {
    x: '0vw', duration: 2
}).from('#p9_t5', {
    opacity: 0, scale: 0
}).to('#p9_t5', {
    opacity: 1, scale: 1
}).to('#p9_t5', {
    opacity: 0, scale: 0
}).from('#p9_t6', {
    opacity: 0, scale: 0
}).to('#p9_t6', {
    opacity: 1, scale: 1
}).to('#p9_t6', {
    opacity: 0, scale: 0
});

/* PAGE 10 */
tl10.from('#p10_t1', {
    opacity: 0, scale: 0
}).to('#p10_t1', {
    opacity: 1, scale: 1
}).from('#seeds', {
    x: '100vw'
}).to('#seedss', {
    x: '0vw', duration: 2
}).from('#p10_t1', {
    opacity: 0, scale: 0
}).from('#p10_t2', {
    opacity: 0, scale: 0
}).to('#p10_t2', {
    opacity: 1, scale: 1
}).to('#p10_t2', {
    opacity: 0, scale: 0
});

/* PAGE 11 */
tl11.from('#p11_t1', {
    opacity: 0, scale: 0
}).to('#p11_t1', {
    opacity: 1, scale: 1
}).to('#p11_t1', {
    opacity: 0, scale: 0
});

/* ENDING PAGE */
tl12.from('#ending_t1', {
    opacity: 0, scale: 0
}).to('#ending_t1', {
    opacity: 1, scale: 1
}).to('#ending_t1', {
    opacity: 0, scale: 0
}).from('#ending_t2', {
    opacity: 0, scale: 0
}).to('#ending_t2', {
    opacity: 1, scale: 1
}).to('#ending_t2', {
    opacity: 0, scale: 0
});


ScrollTrigger.create ({
    animation: tl1,
    trigger: "#p1",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});
    
ScrollTrigger.create ({
    animation: tl2,
    trigger: "#p2",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});

ScrollTrigger.create ({
    animation: tl3,
    trigger: "#p3",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});

ScrollTrigger.create ({
    animation: tl4,
    trigger: "#p4",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});

ScrollTrigger.create ({
    animation: tl5,
    trigger: "#p5",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});

ScrollTrigger.create ({
    animation: tl6,
    trigger: "#p6",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});

ScrollTrigger.create ({
    animation: tl7,
    trigger: "#p7",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});

ScrollTrigger.create ({
    animation: tl8,
    trigger: "#p8",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 25),
});

ScrollTrigger.create ({
    animation: tl9,
    trigger: "#p9",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});

ScrollTrigger.create ({
    animation: tl10,
    trigger: "#p10",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});

ScrollTrigger.create ({
    animation: tl11,
    trigger: "#p11",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});

ScrollTrigger.create ({
    animation: tl12,
    trigger: "#ending_page",
    pin: true,
    scrub: 2,
    start: 'center center',
    //end: '50%',
    end: "+=" + (window.innerHeight * 15),
});