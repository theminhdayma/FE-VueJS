<template>
    <div>
      <select v-model="selectedColor" @change="filterBoxes">
        <option value="">All</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <div class="container">
        <div
          v-for="(box, index) in displayedBoxes"
          :key="index"
          :class="['box', box]"
        >
          Box
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedColor: "",
        boxes: ["red", "green", "blue"],
        displayedBoxes: ["red", "green", "blue"],
      };
    },
    methods: {
      filterBoxes() {
        if (this.selectedColor) {
          this.displayedBoxes = this.boxes.filter(
            (box) => box === this.selectedColor
          );
        } else {
          this.displayedBoxes = this.boxes;
        }
      },
    },
  };
  </script>
  
  <style>
  .container {
    display: flex;
    gap: 20px;
    width: 620px;
    color: #fff;
  }
  
  .container .box {
    width: 200px;
    height: 200px;
    text-align: center;
    line-height: 200px;
  }
  
  .container .red {
    background: red;
  }
  .container .green {
    background: green;
  }
  .container .blue {
    background: blue;
  }
  </style>