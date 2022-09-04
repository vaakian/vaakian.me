<script setup>
  import Counter from './Counter.vue'
  import {ref} from 'vue'
  const a = ref(5)
</script>

# article 1

Works just fine.

## this is my first article

<Counter />

```typescript
function sum(...initialArgs: number[]) {
  const acc: number[] = [...initialArgs]

  /**
   * @overload 1. if no arguments given, return the sum result.
   */
  function collector(): number

  /**
   * @overload 2. if {@link args} given, return the collector itself.
   * @param args
   */
  function collector(...args: number[]): typeof collector

  function collector(...args) {
    if (args.length) {
      acc.push(...args)
      return collector
    }
    return acc.reduce((a, b) => a + b)
  }
  return collector
}

const sixSum = sum(1, 2)(3) // a collector function
const twelve = sixSum(6)() // a number: 12
console.log(twelve) // 12
```

