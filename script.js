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
