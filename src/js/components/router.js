import { pages } from "../ViewControllers/index";
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faGasPump, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

const router = (route) => {
    let [home, resume, contact] = document.getElementsByClassName('nav__link')
    let content = document.getElementById("root");
    content.innerHTML = "";
    // pages.loader()

    switch (route) {
        case "": {
            resume.classList.remove('active')
            contact.classList.remove('active')
            home.classList.add('active')
            pages.home()
            library.add(fas, far, fab) 
            dom.i2svg() 
            return
        }
        case "#resume": {
        //   return content.appendChild(await pages.resume());
            home.classList.remove('active')
            contact.classList.remove('active')
            resume.classList.add('active')
            pages.resume()
            return 
        }
        case "#contact": {
            home.classList.remove('active')
            resume.classList.remove('active')
            contact.classList.add('active')
            pages.contact()
            return 
        }
    }
};

export { router };