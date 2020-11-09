const tl=gsap.timeline({ default: { ease: "power4"} })
const tl2=gsap.timeline({ default: { duration: 10 } })
const tl3=gsap.timeline({ default: { duration: 10 } })

tl.to('.text',{ x: '0%', duration: 1})
tl.to('.intro2',{ y: '0%', duration: 1, delay: .7})
tl.to('.text2',{ x: '0%', duration: .7})
tl.to('.intro',{ y: '-100%', duration: .5})
tl.to('.intro2',{ y: '-100%', duration: 1})

tl2.to('.cornsilk', { rotation: '360', transformOrigin: '64%', repeat: -1, duration:8, ease:Power0.easeNone  })
tl3.to('.red', { rotation: '-360', transformOrigin: '35%' , repeat: -1, duration:8, ease:Power0.easeNone  })

gsap.timeline({
    scrollTrigger:{
        trigger: ".sec2",
        start:"bottom bottom",
        end: "bottom -400px",
        // markers: true,
        scrub: true,
        pin:true
    }
}).from('.sec2',{ backgroundColor: 'rgb(2, 2, 29)'})
.from('.txt1', {x:innerWidth * 1, offset: '-+=1'})
.from('.txt2', {x:innerWidth * -1, offset: '-+=1'})
.from('.txt3', {x:innerWidth * 1, offset: '-+=1'})