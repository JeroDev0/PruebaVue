<template>
    <div>
      <button @click="startCounter">{{ isCounting ? 'Counting...' : 'Start Counting' }}</button>
      <p>Counter: {{ counter }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counter: 0,
        isCounting: false,
        intervalId: null
      };
    },
    mounted() {

      if (localStorage.getItem('counter')) {
        this.counter = parseInt(localStorage.getItem('counter'));
        this.startCounter();
      }
    },
    methods: {
      startCounter() {
        if (this.isCounting) return; 
  
        this.isCounting = true;
  
        this.intervalId = setInterval(() => {
          this.counter++;
          localStorage.setItem('counter', this.counter); 
        }, 1000);
      }
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    }
  };
  </script>
  