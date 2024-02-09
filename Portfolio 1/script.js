let tl = gsap.timeline()

tl.from(".logo h1, ul li",{
    y : -50 , 
    duration : 0.5,
    opacity  : 0,
    stagger :0.3,
})
tl.from(".image",{
    y: -40,
    duration:0.7 ,
    opacity : 0

})
tl.from(".left2 h1,.left2 p",{
    y : -40,
    stagger : 0.3,
    duration :1,
    opacity : 0,
    scrollTrigger : {
        trigger : ".left2 h1,.left2 p" ,
        scroller : "body",
        start : "top 50%",
        scrub : true
    }
})
tl.from(".skill-1,.skill-2,.skill-3",{
    x : 60,
    opacity :0,
    stagger : 0.3,
    duration :1,
    scrollTrigger : {
        trigger : ".skill-1,.skill-2,.skill-3",
        scroller : "body",
        start : "top 100%",
        end :"top 20%",
        scrub : true
    }
})
tl.from(".main3 > h1,.project",{
    y : -10,
    duration : 0.5,
    opacity : 0,
    stagger : 0.3,
    scrollTrigger :{
        trigger : ".main3 > h1,.project",
        scroller : "body",
        start : "top 50%",
        end : "top 20%",
        scrub : true
    }
})
tl.from(".left4 >h1,.about h2,.about p",{
    opacity : 0,
    x : -20,
    duration:0.8,
    stagger :0.3,
    scrollTrigger :{
        trigger : ".left4 >h1,.about h2,.about p",
        scroller : "body",
        start : "top 80%",
        scrub : true
    }
})
tl.from(".right4 form",{
    opacity : 0,
    x : 40,
    duration : 0.9,
    scrollTrigger:{
        trigger : ".right4 form",
        scroller:"body",
        start :"top 120%",
        scrub : true
    }
})
