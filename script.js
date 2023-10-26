gsap.to("#nav",{
    backgroundColor: "#FFEDF9",
    height: "7vw",
    duration: 0.2,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        //markers: true,
        start: "top -60%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor: "#f3fde8",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        //markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2, 
    }
})

gsap.from("#page2 h1, #page2 img, #page2 p",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})

gsap.from("#page3 h1, #page3 img, #page3 p",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})

gsap.from("#page4 h1, #page4 img, #page4 p",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})

var typed = new Typed('#element', {
    strings: ["<i></i> What's Your Carbon Footprints? "],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    backDelay: 1500,
    backSpeed: 50,
  });

  gsap.from("#page5 #element, #page5 img,#page5 p, #page5 btn",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})

gsap.from("#page6 img,#page6 p",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})

var typed = new Typed('#element2', {
    strings: ["<i></i> Local Community  Gardens"],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    backDelay: 1500,
    backSpeed: 50,
  });

  gsap.from("#page7 img,#page7 p,#page7 h3,#page7 i ",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})

gsap.from("#page8 img,#page8 p,#page8 h3,#page8 i ",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page8",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})

gsap.from("#page9 img,#page9 p,#page9 h3,#page9 i ",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page9",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})