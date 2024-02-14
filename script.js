gsap.registerPlugin(ScrollTrigger);

// _________FIRST GSAP SECTION___________
var firstSection = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "top 100px",
        toggleActions: "play none none reverse",
        // markers: true,
    }
});

firstSection.fromTo(".header", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power1.inOut",
    delay: 0,
})
    .fromTo(".left-mountain", {
        y: 0
    }, {
        y: 150,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .fromTo(".middle-mountain", {
        y: 0
    }, {
        y: 150,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .fromTo(".right-mountain", {
        y: 0
    }, {
        y: 150,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .fromTo(".background", {
        rotation: 7,
    }, {
        rotation: 0,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .fromTo(".balloon", {
        y: 0,
    }, {
        y: 100,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .fromTo(".clouds", {
        y: 0,
        opacity: 0,
    }, {
        y: 0,
        opacity: 0,
        duration: 0,
        ease: "power1.inOut",
        delay: 0,
    }, 0)

// _________SECOND GSAP SECTION___________
var secondTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "140px 100px",
        toggleActions: "restart none none reverse",
        // markers: true
    }
});

secondTimeLine.to(".header", {
    y: 0,
    opacity: 0,
    duration: 2,
    ease: "power1.inOut",
    delay: 0,
})
    .fromTo(".background", {
        rotation: 0,
    }, {
        rotation: 7,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .to(".balloon", {
        y: -100,
        scale: 1.2,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .fromTo(".horizon-text", {
        y: 400,
        scaleY: 0,
        opacity: 0,
    }, {
        y: -100,
        scaleY: 1,
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
        transformOrigin: "0% 100%",
    }, 0)
    .fromTo(".left-mountain", {
        y: 150
    }, {
        y: 0,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .fromTo(".middle-mountain", {
        y: 150
    }, {
        y: 0,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .fromTo(".right-mountain", {
        y: 150
    }, {
        y: 0,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .fromTo(".clouds", {
        y: 400,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
        offset: 0
    }, 0)

// ___________THIRD GSAP SECTION___________
var theEventTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-section",
        start: "140px 100px",
        toggleActions: "restart none none reverse",
        // markers: true
    }
});

theEventTimeline.fromTo(".the-event", {
    opacity: 0,
    y: 150
}, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power1.inOut",
    delay: 0,
    offset: 0
}, 0)
    .to(".navbar", {
        borderBottomColor: "black",
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .to(".vertical-line-left", {
        borderColor: "black",
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .to(".vertical-line-right", {
        borderColor: "black",
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .to(".nav-links", {
        color: "black",
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .to(".logo", {
        color: "black",
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
    }, 0)
    .to(".bi", {
        fill: "black",
        duration: 1,
        ease: "power1.inOut",
        delay: 0,
    }, 0)

// _________FOURTH GSAP SECTION___________
var carouselTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".the-event",
        toggleActions: "restart none none reverse",
        start: "140px 100px",
        // markers: true
    }
});

carouselTimeLine.fromTo(".carousel-bg", {
    y: 150,
}, {
    y: 0,
    duration: 2,
    ease: "power1.inOut",
    delay: 0,
    offset: 0
})

// _________FIFTH GSAP SECTION___________
var lastTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".carousel-section",
        start: "140px 100px",
        toggleActions: "restart none none reverse",
        // markers: true
    }
});

lastTimeLine.fromTo(".hello", {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power1.inOut",
    delay: 0,
})
    .fromTo(".last-section-p", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
        transformOrigin: "0% 100%",
    }, 0)
    .fromTo(".last-image", {
        y: 200,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
        transformOrigin: "0% 100%",
    }, 0)
    .fromTo(".notified", {
        x: 20,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        delay: 0,
        transformOrigin: "0% 100%",
    }, 0)
    .fromTo(".all", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2.5,
        ease: "power1.inOut",
        delay: 0,
        transformOrigin: "0% 100%",
    }, 0)
