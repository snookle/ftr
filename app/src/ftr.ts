import { FibonacciNumberChecker } from "./fibonacci";
import { FrequencyStore } from "./frequency";

interface FTRService {
    // Takes a number and stores it's frequency, and returns true if it's a fibbonacci number
    processNumber: (num: bigint) => Boolean;
    // Gets the frequency that a stored number has appeared in descending order of frequency
    getNumberFrequency: () => Array<[bigint, number]>
}

class FTR implements FTRService {

    private fib: FibonacciNumberChecker
    private freq: FrequencyStore<bigint>

    constructor(fib: FibonacciNumberChecker, freq: FrequencyStore<bigint>) {
        this.fib = fib
        this.freq = freq
    }
    
    processNumber(num: bigint): Boolean {
        this.freq.putValue(num)
        return this.fib.isFibonacciNumber(num)
    }

    getNumberFrequency(): Array<[bigint, number]> {
        return this.freq.getValueFrequencies().sort((a, b) => b[1] - a[1])
    }
}

export { FTR, FTRService }