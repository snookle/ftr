import { test, expect } from "@jest/globals"
import { MemoryFrequencyStore } from "./frequency"
import { isEqual } from "lodash"

test("correctly stores and retrieves value frequencies", () => {
    let freq = new MemoryFrequencyStore()
    
    freq.putValue(12345n)
    freq.putValue(12345n)
    
    freq.putValue(4567n)

    freq.putValue(123n)
    freq.putValue(123n)
    freq.putValue(123n)

    expect(
        isEqual(
            freq.getValueFrequencies(), [
                [12345n, 2],
                [4567n, 1],
                [123n, 3],
            ]
        )
    ).toStrictEqual(true)
})

