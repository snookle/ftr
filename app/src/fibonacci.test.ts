import { test, expect } from "@jest/globals"
import { First1000FibonacciNumberChecker } from "./fibonacci"

test("correctly validates fibonacci numbers", () => {
    const f = new First1000FibonacciNumberChecker()
    expect(f.isFibonacciNumber(0n)).toBe(true)
    expect(f.isFibonacciNumber(1n)).toBe(true)
    expect(f.isFibonacciNumber(2n)).toBe(true)
    expect(f.isFibonacciNumber(3n)).toBe(true)
    expect(f.isFibonacciNumber(5n)).toBe(true)
    expect(f.isFibonacciNumber(8n)).toBe(true)
})

test("handles large fibonacci numbers", () => {
    const f = new First1000FibonacciNumberChecker()
    expect(f.isFibonacciNumber(6765n)).toBe(true)
    expect(f.isFibonacciNumber(832040n)).toBe(true)
    expect(f.isFibonacciNumber(12586269025n)).toBe(true)
    expect(f.isFibonacciNumber(2111485077978050n)).toBe(true)
    expect(f.isFibonacciNumber(218922995834555169026n)).toBe(true)
    expect(f.isFibonacciNumber(354224848179261915075n)).toBe(true)
    expect(
        f.isFibonacciNumber(43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n)
    ).toBe(true)
})

test("invalid fibonacci numbers are not valid", () => {
    const f = new First1000FibonacciNumberChecker()
    expect(f.isFibonacciNumber(-1n)).toBe(false)
    expect(f.isFibonacciNumber(4n)).toBe(false)
})

test("only finds the first 1000 numbers", () => {
    const f = new First1000FibonacciNumberChecker()
    expect(
        //1000th fib number
        f.isFibonacciNumber(43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n)
    ).toBe(true)
    expect(
        //1001th fib number - should be false
        f.isFibonacciNumber(70330367711422815821835254877183549770181269836358732742604905087154537118196933579742249494562611733487750449241765991088186363265450223647106012053374121273867339111198139373125598767690091902245245323403501n)
    ).toBe(false) 
})
