import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import view from '../../views/loader.html'


let content = document.getElementById("root");

export default () =>{
    //initilization
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    content.appendChild(divElement)
    const loader = document.getElementById("loader")
    //animation
    
    //control
    setTimeout(()=>{
        loader.classList.add('disabled')
    },1500)
    
}