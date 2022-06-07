let randMax = (max)=>{
 return(Math.trunc(1E9 * Math.random()) % max )
}

//Generates a number

var reel = {
    symbols: ['X', 'Y', 'Z', 'W', '$', '*', '<', '@'],
    spin(){
        if(this.position == null){
            this.position = randMax(this.symbols.length - 1) 
        }
        this.position =(
            this.position + 100 + randMax(100)
        ) % this.symbols.length
    },
    display(){
        if(this.position == null){
            this.position = randMax(
                this.symbols.length - 1
            )
        }
        return this.symbols[this.position]
    }

}

let slotMachine = {
    reels: [
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    spin(){
        this.reels.forEach(function spinReel(reel){
            reel.spin()
        })
    },
    display(){
        let lines = []
        for(let linePos = -1; linePos <= 1; linePos++){
            let line = this.reels.map(
                function getSlot(reel){
                    var slot = Object.create(reel)
                    slot.position =(
                        reel.symbols.length + reel.position + linePos
                    ) % reel.symbols.length
                    return reel.display.call(slot)
                }
            )
            lines.push(line.join ('|'))
        }
        console.log(lines.join('\n'))
    }
}

slotMachine.spin()
slotMachine.display()