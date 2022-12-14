import { Ref } from 'vue';
import { defineStore } from '../plugins/ParallelStore';

interface CounterStoreState {
  counter: Ref<number>;
}

export const useCounterStore = defineStore(
  'CounterStore',
  () => ({ counter: 0 }),
  {
    incrementAction(state: CounterStoreState, value = 1) {
      state.counter.value += value;
    },
    incrementLaterAction(state: CounterStoreState, value = 1) {
      setTimeout(() => {
        state.counter.value += value;
      }, 1000);
    },
  }
);
