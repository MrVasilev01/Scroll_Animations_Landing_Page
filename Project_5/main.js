$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);

    
    gsap.to("#navbar", {
        backgroundColor: '#643f0e99',
        scrollTrigger: {
            trigger: ".bcg-scroll-trigger",
            start: 'top 10%',
            end: 'bottom 5%',
            toggleActions: 'play none restart reset',
            // markers: true
        }
    })
    gsap.to("#navbar", {
        backgroundColor: '#171717a3',
        scrollTrigger: {
            trigger: ".side_img_1",
            start: 'top 10%',
            end: '210% 5%',
            toggleActions: 'play none none reset',
            // markers: true
        }
    })

    gsap.to("#moon", {
        x:-350,
        scrollTrigger:{
            trigger:'.parallax',
            scrub: 1,
            start: 'top top',
            // markers: {
            //     fontSize: '1.5rem'
            // }
        } 
    });

    gsap.to("#mountain", {
        y:-150,
        scrollTrigger:{
            trigger:'.parallax',
            scrub: 1,
            start: 'top top',
            // markers: {
            //     fontSize: '1.5rem'
            // }
        } 
    });

    gsap.to("#text", {
        y:200,
        scrollTrigger:{
            trigger:'.parallax',
            scrub: 1,
            start: 'top top',
            // markers: {
            //     fontSize: '1.5rem'
            // }
        } 
    });

    gsap.to(".bcg", {
        scale: 1.5,
        scrollTrigger:{
            trigger:".content-wrapper",
            scrub: 1,
            start: 'top center',
            // markers: {
            //     fontSize: '1.5rem'
            // }
        }
    });

    gsap.to(".side_img_1", {
        x: 0,
        duration: 2,
        opacity: 1,
        ease: 'back.out(1.7)',
        scrollTrigger:{
            trigger: '.side_img_1',
            start: '10% 70%',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse',
            // markers: {
            //     fontSize: '1.5rem'
            // }
        }
    });

    gsap.to(".side_img_2", {
        x: 0,
        duration: 2,
        opacity: 1,
        ease: 'back.out(1.7)',
        scrollTrigger:{
            trigger: '.side_img_2',
            start: '20% bottom',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse',
            // markers: {
            //     fontSize: '1.5rem'
            // }
        }
    });

    const lenis = new Lenis();

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    
    const splitTypes = $('.text_fade');

    splitTypes.each(function(i,char) {
        const text = SplitType.create('.text_fade', {types: 'chars'})

        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: '.side_img_1',
                start: '35% 80%',
                end: '60% 50%',
                scrub: true,
                markers: false
            },
            opacity: 0,
            stagger: 0.1
        });
    });

    const splitTypes_2 = $('.writhing_text');

    splitTypes_2.each(function(i,char) {
        const text = SplitType.create('.writhing_text', {types: 'chars'})

        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: '.side_img_2',
                start: '35% 80%',
                end: '80% 20%',
                toggleActions: 'play reverse play reverse',
                markers: false
            },
            x: -20,
            y: -20,
            opacity: 0,
            stagger: {
               each: 0.09,
               from: 'random',
            },
            duration: 2
        });
    });

});