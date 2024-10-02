<template>
  <div class="traffic-light">
    <div
      class="light"
      :class="{'red': currentLight === 'red', 'off': currentLight !== 'red'}"
    >
      {{ redTimeLeft }}
    </div>
    <div
      class="light"
      :class="{'yellow': currentLight === 'yellow', 'off': currentLight !== 'yellow'}"
    >
      {{ yellowTimeLeft }}
    </div>
    <div
      class="light"
      :class="{'green': currentLight === 'green', 'off': currentLight !== 'green'}"
    >
      {{ greenTimeLeft }}
    </div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const currentLight = ref('red'); 
const redTimeLeft = ref(40); 
const yellowTimeLeft = ref(0);
const greenTimeLeft = ref(0); 

let intervalId = null;

const updateTrafficLight = () => {
  if (currentLight.value === 'red') {
    redTimeLeft.value--;
    if (redTimeLeft.value === 0) {
      currentLight.value = 'green';
      greenTimeLeft.value = 60;
    }
  } else if (currentLight.value === 'green') {
    greenTimeLeft.value--;
    if (greenTimeLeft.value === 0) {
      currentLight.value = 'yellow';
      yellowTimeLeft.value = 3;
    }
  } else if (currentLight.value === 'yellow') {
    yellowTimeLeft.value--;
    if (yellowTimeLeft.value === 0) {
      currentLight.value = 'red';
      redTimeLeft.value = 40;
    }
  }
};

onMounted(() => {
  intervalId = setInterval(updateTrafficLight, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const message = computed(() => {
  if (currentLight.value === 'red') {
    return 'Đèn đỏ. Vui lòng dừng lại';
  } else if (currentLight.value === 'green') {
    return 'Đèn xanh. Được phép đi';
  } else if (currentLight.value === 'yellow') {
    return 'Đèn vàng. Vui lòng giảm tốc độ';
  }
});
</script>

<style scoped>
.traffic-light {
  text-align: center;
}

.light {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.red {
  background-color: red;
}

.yellow {
  background-color: yellow;
  color: black;
}

.green {
  background-color: green;
}

.off {
  background-color: lightgray;
}
</style>
