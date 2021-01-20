class TypingText {
    constructor(txtElement,words,wait){
        this.txtElement = txtElement
        this.words = words
        this.txt = ''
        this.wordIndex = 0
        this.wait = parseInt(wait,10)
        this.type()
        this.isDeleting = false
    }

    type(){
        const current = this.wordIndex % this.words.length
        const fullText = this.words[current]
        if(this.isDeleting){
            //remove
            this.txt = fullText.substring(0, this.txt.length - 1);
        }
        else{
            //add
            this.txt = fullText.substring(0,this.txt.length + 1)
        }
    
        //initial type speed
        let typeSpeed = 150
    
        if(this.isDeleting){
            typeSpeed /= 3
        }
    
        //if word is complete
        if(!this.isDeleting && this.txt === fullText){
            //pause at the end
            typeSpeed = this.wait;
            this.isDeleting = true
        }
        else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false
            //move to next text
            this.wordIndex ++
            // puase before typing
            typeSpeed = 500
        }
    
        //insert txt into Element
        this.txtElement.innerHTML = `<span class = "txt">${this.txt} </span>`
    
        setTimeout(()=> this.type(),typeSpeed)
    }
}

function init() {
    const txtElement = document.querySelector('.txt-type')
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait')
    //Init TypeWriter
    new TypingText(txtElement,words,wait)
}

export {init}