import view from "../../views/contact.html";
import {timer} from '../components/timer'

let content = document.getElementById("root");
var isEmailValidated = true

const isInputEmpty = inputElement => {
  if(inputElement.name === "subject"){
    return false
  }
  else if(inputElement.value === ""){
    return true
  }
  return false
}

const validateEmail = email => {
  let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
  return reg.test(email);
}

const mapInit = (w,h) =>{
  const width = w
  const height = h
  const svg = d3.select('#map')
                .append('svg')
                .attr('width', width)
                .attr('height',height)
  const projection = d3.geoMercator().scale(500).center([132.08, -23.07]).translate([200, 200]);
  const path = d3.geoPath(projection)
  const g = svg.append('g')

  d3.json('https://raw.githubusercontent.com/rowanhogan/australian-states/master/states.geojson')
  .then(data => {
      // const states = topojson.feature(data, data.features);
      g.selectAll('path')
       .data(data.features)
       .enter()
       .append('path')
       .attr('d', path)
       .attr('fill', `#838c95`)
       .attr("stroke","#333333")
    })
}


export default () => {
  /* Before Page mounting */
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  content.appendChild(divElement)
  divElement.id = "contact"
  divElement.classList.add("contact__page")
  /* After Page mounting */
  if(window.innerWidth >= 1280){
    VANTA.BIRDS({
        el: "#contact",
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

  const inputs = document.querySelectorAll('input , textarea')
  const aniamteView = document.getElementById("contact")
  const tl = gsap.timeline({defaults: {duration: 2, ease:Power3.easeInOut}})
  tl.fromTo(aniamteView, {x:500 , opacity: 0 , duration : 1}, {x:0,opacity:1,duration:1},"+=.2")
  .fromTo(aniamteView,{ clipPath: "circle(10% at 0% 0%)" }, { clipPath: "circle(100% at 50% 50%)"},"-=1")

  /* Map */

  mapInit(400,450)
  /* Form Validation */
  inputs.forEach(input => {
    const label = input.parentElement
    // onfocus event 
    input.addEventListener('focus',()=>{
      switch(input.name){
        case "subject": 
          label.classList.add("matched")
          break
        
        case "email" :
          if(validateEmail(input.value)){
            label.className = "matched"
          }
          else{
            label.className = "mismatched"
          }
          break
        
        default :
          if(!isInputEmpty(input)){
            label.classList.remove("mismatched")
            label.classList.add("matched")
          }else{
            label.classList.add("mismatched")
          }
          break
      }
    })

    // oninput event
    input.oninput = () =>{
      switch(input.name){
        case "name" :
          //not empty
          if(input.value !== ""){
            label.classList.remove("mismatched")
            label.classList.add("matched")
          }
          input.onkeydown = e =>{
            if(e.keyCode === 8 && input.value.length === 1){
              label.className = "mismatched"
            }
          }
          break

        case "email" :
          //not empty
          if(!isInputEmpty(input) && validateEmail(input.value)){
            label.classList.remove("mismatched")
            label.classList.add("matched")            
          }
          input.onkeydown = e =>{
            if(e.keyCode === 8 && input.value.length === 1){
              label.className = "mismatched"
            }
          }
          break
        case "message" :
          if(input.value !== ""){
            label.classList.remove("mismatched")
            label.classList.add("matched")            
          }
          input.onkeydown = e =>{
            if(e.keyCode === 8 && input.value.length === 1){
              label.className = "textarea__container mismatched"
            }
          }                   
          break
        default : break
      }

    }

    input.onblur = () => {
      if(true){
        label.classList.remove("mismatched")
        label.classList.remove("matched")
      }
    }
  })

  /* SEND Email:
     get value -> validate -> send ajax call to PHPMailer
  */
  const sendBtn = document.getElementById("email_submit")

  const popBoxContainer = document.getElementById("pop__box__container")

  sendBtn.onclick = async e =>{
    const name =  emailForm.name.value  
    const subject = emailForm.subject.value
    const email = emailForm.email.value
    const message = emailForm.message.value 
    const newBox = document.createElement('div')
    e.preventDefault()
    if(name === "" || email === "" || message === ""){
      isEmailValidated = false
    }
    else if(!validateEmail(email)){
        isEmailValidated = false
    }
    else{
        isEmailValidated  = true
    }

    newBox.classList.add("pop__box")
    popBoxContainer.append(newBox)   
    $(newBox).animate({left:"250px"},600,"easeOutBack")
    setTimeout(()=>{
      $(newBox).animate({left:'-250px'}
                        ,{
                          duration:600,
                          specialEasing: {
                            left: "easeInBack",
                          },
                          complete: () => {
                            newBox.remove()
                          }
                        }
      )
    },1500)
    if(isEmailValidated === false){
      newBox.style.backgroundColor = "rgba(150, 40, 27, .5)"
      newBox.innerHTML = "<p> Please fill in all required fields </p>"
    } 
    else{
      newBox.style.backgroundColor = "rgba(0, 0, 0, 0.5)"      
      newBox.innerHTML = "<p> Processing. Please wait  </p>"

      $.ajax({
        type: "POST",
        url:"mail.php?name="+name+"subject="+subject+"message="+message+"email="+email,
        data:{name: name,
            subject: subject,
            email: email,
            message: message
            },
        success:function(){
          gsap.from("#rocket",{y:800, scale:1.5, ease:Power3.easeInOut, opacity:1, duration:2})
          popBoxContainer.append(newBox)   
          newBox.style.backgroundColor = "rgba(22, 160, 133, .5)"
          newBox.innerHTML = "<p> Thank you for your request  </p>"
          $(newBox).animate({left:"250px"},600,"easeOutBack")
          setTimeout(()=>{
            $(newBox).animate({left:'-250px'}
                              ,{
                                duration:600,
                                specialEasing: {
                                  left: "easeInBack",
                                },
                                complete: () => {
                                  newBox.remove()
                                }
                              }
            )
          },1500)
        }})
    }
  }
  return
};
