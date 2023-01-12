const annoyer = {

    phrases: ["literray", "cray cray", "I can't even", "Totes", "YOLO", "Can't Stop"],
    pickPhrase(){
    const {phrases} = this
    const idx = Math.floor(Math.random()* phrases.length)
    return phrases[idx]
    },
    start() { // not good on using arrow on the custom function
       
        this.timerId = setInterval(()=>{ // better use arrow on this one to we can use this
            console.log(this.pickPhrase())

        }, 3000)
    },

    stop() {
        clearInterval(this.timerId)
        console.log("PWE STOP NOW HEHEHE")
    }
}
console.log(annoyer.pickPhrase())
console.log(annoyer.start())
console.log(annoyer.stop())
