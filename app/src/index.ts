import { CLI } from "./cli"
import { First1000FibonacciNumberChecker } from "./fibonacci";
import { MemoryFrequencyStore } from "./frequency";
import { FTR } from "./ftr";

new CLI(
  new FTR(new First1000FibonacciNumberChecker(), 
  new MemoryFrequencyStore())
).run();