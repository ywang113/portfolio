import view from '../../views/home.html'
import { init as TypingTextInit } from '../components/TypingText';
import hoverEffect from '../components/hover'
let content = document.getElementById("root");


export default () =>{
    const divElement = document.createElement('div')
    divElement.id = "home"
    divElement.classList.add("home")
    divElement.innerHTML = view
    content.appendChild(divElement)

    TypingTextInit()

/* Animation Part  */
    /* GSAP Animation */
    const t1 = gsap.timeline({defaults: {duration: 1 }})
    const tl2 = gsap.timeline({defaults: {duration: 2, ease:Power3.easeInOut}})
    const imgWrapper = document.getElementById('img-wrapper')
    const aniamteView = document.getElementById("home")

    tl2.fromTo(aniamteView, {x:-500 , opacity: 0 , duration : 1}, {x:0,opacity:1,duration:1},"+=.2")
    .fromTo(aniamteView,{ clipPath: "circle(10% at 100% 0%)" }, { clipPath: "circle(100% at 50% 50%)"},"-=1")
    
    t1.from(".gary",{opacity: 0, y:50},"+=.5")
       .from(".title",{opacity: 0, y:50},"-=.5")
       .from('.info',{opacity: 0, y:50},"-=.5   ")


    /* Img Hover Effect */
    new hoverEffect({
        parent: document.querySelector('.img-wrapper'),
        intensity: 0.5,
        image1: 'static/images/question-mark.svg',
        image2: 'static/images/opacity.png',
        displacementImage: 'static/images/displacement.jpg',
        speedIn:1,
        speedOut:1,
        easeing:"3"
    });

    /* 主页还在做的效果 */
    imgWrapper.onmouseover = ()=>{
        document.querySelector('.img-wrapper h1').classList.add("active")
    }
    imgWrapper.onmouseleave = () =>{
        document.querySelector('.img-wrapper h1').classList.remove("active")
    }

    /* VANTA.JS Background canvas*/
    if(window.innerWidth >= 1280){
        VANTA.BIRDS({
            el: "#home",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0,
            color1: 0x0,
            color2: 0x0,
            backgroundAlpha: 0.00,
            quantity:4
            })
    }

}