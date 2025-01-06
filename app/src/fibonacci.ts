interface FibonacciNumberChecker {
    isFibonacciNumber: (num: bigint) => Boolean;
}

class First1000FibonacciNumberChecker implements FibonacciNumberChecker {
    private fib: Array<bigint> = [];

    constructor() {
        // Fib sequence generator function shamelessly adapted from https://stackoverflow.com/a/50376273
        this.fib = Array.from(function* (num = 0)
        {
            let a = 0n
            let b = 1n
            let _
            while(num >= 0) {
                yield a
                _ = a
                a = b
                b = b + _ 
                num--
            }
        }(1000))
    }
    
    isFibonacciNumber(num: bigint): boolean {
        return this.fib.includes(num)
    }
}

export { FibonacciNumberChecker, First1000FibonacciNumberChecker }