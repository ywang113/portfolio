import './main.scss'
import {router} from './js/components/router'
import {timer as delay} from './js/components/timer'
// import {pages} from './js/ViewControllers/index'

const get = element => document.getElementById(element);
const loader = get('loader')
const open = get('menu-btn')
const exit = get("exit-btn")
const nav = get("nav")
const logo = get("Logo")
const linkElements = get("link-container")
const navLinks = document.getElementsByClassName('link')




var t1 = gsap.timeline({duration:.5})

const routerInit = () => {
    router(window.location.hash);
    window.addEventListener("hashchange", async () => {
        //!!!上次写到这。 还在做route的动画

        //用gsap的timeline可以实现整个动画逻辑。先将当前页面缩小，同时下拉loader，过1.5秒后loader渐变消失，放大当前视口
        let view = get('root').children[0].children


        t1.to(view,{scale: .9 ,  onComplete: async ()=>{
            loader.classList.remove("disabled")
            await delay(1500)
            router(window.location.hash)
        }},)
        .to(view,{  duration:1 , onStart:()=>{
            loader.classList.add("disabled")
        }},"+=2")
        
    });
};

window.addEventListener('load',()=>{

    loader.classList.add('disabled')
    routerInit()

    for(let i =0; i < navLinks.length; i++){
        navLinks[i].addEventListener('click',()=>{
            nav.classList.remove('open-nav')
            logo.classList.remove('open-logo')
            linkElements.classList.remove('open-link')       
        })
    }
    
    open.addEventListener('click', () => {
        nav.classList.add('open-nav')
        logo.classList.add('open-logo')
        linkElements.classList.add('open-link')
    })
    
    exit.addEventListener('click', () => {
        nav.classList.remove('open-nav')
        logo.classList.remove('open-logo')
        linkElements.classList.remove('open-link')
    })

    gsap.registerPlugin(ScrollTrigger)
})






