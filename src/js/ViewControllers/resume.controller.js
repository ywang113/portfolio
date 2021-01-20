import view from '../../views/resume.html'


let content = document.getElementById("root");

export default () =>{
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    content.appendChild(divElement)
    divElement.id = "resume"
    divElement.classList.add("resume_page")
    // return divElement

    /* Animation */
    const edu = document.querySelector('.education .header-col')
    const tl = gsap.timeline({defaults: {duration: 2, ease:Power3.easeInOut}})
    // tl.from(edu,{
    //     y:50, opacity:0, ease:Power2.easeOut
    // },"+=.5")
    // .to(`.education .header-col h1 span`,{
    //     clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=1")
    // .from(`.education .item h3`,{
    //     y:50, opacity:0, ease:Power2.easeOut, stragger:.3
    // },"-=.4")
    // .from(`.education .item .info`,{
    //     y:50, opacity:0, ease:Power2.easeOut, stragger:.3     
    // },"-=.5")
    // .from(`.education .item ul li`,{
    //     y:50, opacity:0, ease:Power2.easeOut, stragger:.3     
    // },"-=.6")
    // .from(` .education .resume__subject-title, .resume__subject-list`,{
    //     y:50, opacity:0, ease:Power2.easeOut, stragger:.3         
    // },"-=.7")
    const aniamteView = document.getElementById("resume")
    tl.fromTo(aniamteView, {y:100 , opacity: 0 , duration : 1}, {y:0,opacity:1,duration:1},"+=.2")
    .fromTo(aniamteView,{ clipPath: "circle(10% at 50% 50%)" }, { clipPath: "circle(100% at 50% 50%)"},"-=1")

    // gsap.to(".education", {
    //     scrollTrigger: {
    //         trigger:'.work',
    //         scrub:1,
    //     }, 
    //     x: 200,
    //     opacity:0
    //   });
    //   gsap.from(".work", {
    //     scrollTrigger: {
    //         trigger:'.work',
    //         start:"100px bottom",
    //         end:"center center",
    //         scrub:1,
    //         markers:true,
    //     },
    //     x: 200,
    //     opacity:0
    //   }); 

    // if(window.innerWidth >= 1280){
    //     VANTA.BIRDS({
    //         el: "#resume",
    //         mouseControls: true,
    //         touchControls: true,
    //         gyroControls: false,
    //         minHeight: 200.00,
    //         minWidth: 200.00,
    //         scale: 1.00,
    //         scaleMobile: 1.00,
    //         backgroundColor: 0x0,
    //         color1: 0x0,
    //         color2: 0x0,
    //         backgroundAlpha: 0.00,
    //         quantity:4
    //         })
    // }
    return
}