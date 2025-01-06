import { FTRService } from "./ftr";
const readline = require("node:readline/promises")
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

class CLI {
    private ftr: FTRService

    constructor(ftr: FTRService) {
        this.ftr = ftr
    }
    
    async run() {
        //setup the frequency display timer
        const delay = await this.getFrequencyEmitterDelay()
        let paused = false
        const timer = setInterval(() => {
            if (!paused) {
                this.showFrequency()
            }
        }, delay * 1000)

        let answer: string
        let exit: boolean = false
        //process the main input loop
        while (!exit) {
            answer = await rl.question("Please enter a number: ")
            //is the answer any of our commands?
            switch (answer.toLowerCase()) {
                case "halt" :
                    paused = true
                    console.log("timer halted")
                    continue;
                case "resume":
                    paused = false
                    console.log("timer resumed")
                    continue;
                case "quit":
                    exit = true
                    continue;
            }

            //finally check if it's a number input for processing by the ftr service
            try {
                const num = BigInt(answer) //this will throw an exception if the answer cannot be coerced to a bigint
                const isFib = this.ftr.processNumber(num)
                if (isFib) {
                    console.log("FIB")
                }
            } catch (error) {
                console.log("Unknown command. Please try again.")
            }
        }

        //user has quit, handle exit
        clearInterval(timer)
        this.showFrequency()
        console.log("Thanks for playing! Ctrl+C to exit.")
    }

    showFrequency() {
        const freq = this.ftr.getNumberFrequency();
        if (freq.length > 0) {
            console.log(freq.map((v) => v.join(":")).join(","));
        }
    }

    async getFrequencyEmitterDelay(): Promise<number> {
        const delay = await rl.question("Please input the amount of time in seconds between emitting numbers and their frequency? ")
        if (isNaN(Number(delay))) {
            console.log("Please enter a valid number.")
            return this.getFrequencyEmitterDelay()
        } else {
            return Number(delay)
        }
    }
}

export { CLI }