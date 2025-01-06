import { jest, test, expect } from "@jest/globals"
import { MemoryFrequencyStore } from "./frequency"
import { First1000FibonacciNumberChecker } from "./fibonacci"
import { FTR } from "./ftr"


import { isEqual } from "lodash"

jest.mock("./fibonacci")
jest.mock("./frequency")

test("process number stores number and returns whether fib number", () => {
    const isFib = true
    const mockFib = jest.mocked(new First1000FibonacciNumberChecker())
    mockFib.isFibonacciNumber.mockReturnValue(isFib);

    const mockFreq = jest.mocked(new MemoryFrequencyStore())
    const num = 1234567890n

    const ftr = new FTR(mockFib, mockFreq)
    //WHEN: processNumber is called
    expect(ftr.processNumber(num))
    //THEN: expect it to return whether it is a fib number
        .toStrictEqual(isFib)
    //AND THEN: expect freq store called with number
    expect(mockFreq.putValue).toHaveBeenCalledWith(num)
})

test("get frequency sorts in frequency descending order", () => {
    const mockFib = jest.mocked(new First1000FibonacciNumberChecker())

    //GIVEN: freq store returns unsorted frequencies
    const mockFreq = jest.mocked(new MemoryFrequencyStore())
    mockFreq.getValueFrequencies.mockReturnValue([
        [12345n, 2],
        [4567n, 1],
        [123n, 3],
    ])
    const ftr = new FTR(mockFib, mockFreq)
    //WHEN: getNumberFrequency is called
    //THEN: expect it to be sorted in frequency descending order
    expect(isEqual(
        ftr.getNumberFrequency(), [
            [123n, 3],
            [12345n, 2],
            [4567n, 1],
        ]
    )).toStrictEqual(true)
    expect(mockFreq.getValueFrequencies).toHaveBeenCalledTimes(1)
})


