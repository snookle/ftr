interface FrequencyStore<T> {
    getValueFrequencies: () => Array<[T, number]>;
    putValue: (val: T) => void;
}

class MemoryFrequencyStore implements FrequencyStore<bigint> {
    private store: Map<bigint, number> = new Map<bigint, number>;

    putValue(num: bigint): void 
    {
        const v = this.store.get(num) ?? 0
        this.store.set(num, v + 1)
    }
    
    getValueFrequencies(): Array<[bigint, number]> {
        return [...this.store.entries()]
    }
}

export { FrequencyStore, MemoryFrequencyStore }
