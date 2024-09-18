<template>
    <div>
      <h2>Danh sách kết quả</h2>
      <ul>
        <li>{{ a }} + {{ b }} = {{ total(a, b) }}</li>
        <li>{{ a }} - {{ b }} = {{ subtract(a, b) }}</li>
        <li>{{ a }} * {{ b }} = {{ multiply(a, b) }}</li>
        <li>{{ a }} / {{ b }} = {{ divide(a, b) }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        a: 100,
        b: 10,
      };
    },
    methods: {
      total: (a, b) => {
        return a + b;
      },
      subtract(a, b) {
        return a - b;
      },
      multiply(a, b) {
        return a * b;
      },
      divide(a, b) {
        // Check to avoid division by zero
        return b !== 0 ? a / b : "Infinity";
      },
    },
  };
  </script>
  
  <style></style>