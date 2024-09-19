<script setup>
    // V-bind 
    const imgURL = "https://giaydabongtot.com/wp-content/uploads/2020/10/Hinh-nen-ronaldo-cr7-may-tinh-laptop-3-scaled.jpg"
    const size = "30px"
    const color = "red"

    // V-if
    const isIf = false
    const isIf2 = true

    const age = 5

    // V-show
    const isShow = true

    // V-for
    const student = [
        {
            name: "Thế Minh",
            age: 19
        },
         {
            name: "Minh Sâm",
            age: 18
        }
    ]

    //V-modal
    import { ref } from 'vue';
    const text = ref("")

    const handleChange = (event) => {
        text.value = event.target.value
    }

    const count =ref(0);
    const increaseCount = () => {
        count.value = count.value + 1;
    }


    //Event
    const handleClick = (value) => {
        console.log(value);
        
    }
</script>

<template>
<div> 
    <h1>Lý thuyết</h1>
    <p>Binding Property
        
    </p>
    <ol>
        <li>v-bind
            <div>
                <img :src="imgURL"  alt="img1">
                <img v-bind:src="imgURL" alt="">
                <p v-bind:style="{fontSize: size, color: color}">Text Example</p>
            </div>
        </li>
        *******************************************************************************
        <li>v-if, v-else, v-else-if</li>
            <div>
                <!-- Trường hợp false thì không render ra DOM  -->
                <p v-if="isIf">Hiển thị nội dung false</p>
                <p v-if="isIf2">Hiển thị nội dung true</p>
            </div>
            <ul>
                <li v-if="age > 30">Trung niên</li>
                <li v-else-if="age>18">Thanh niên</li> 
                <li v-else-if="age > 6">Trưởng thành</li>
                <li v-else>Trẻ em</li>
            </ul>
        *********************************************************************************
        <li>v-show</li>
            <div>
                <!-- Trường hợp false thì vẫn render ra DOM nhưng không hiển thị -->
                <p v-if="isShow">Hiển thị nội dung true</p>
            </div>
        ********************************************************************************
        <li>v-for</li>
        <ul>
            <li v-for="(std, index) in student" :key="std.id">{{index+1}} {{std.name}}</li>
        </ul>
        ********************************************************************************
        <li>v-model</li>
        <p>Cách 1</p>
        <div>
            <input type="text" v-model="text">
            <p>Gía trị bạn nhập: {{text}}</p>
        </div>
        <p>Cách 2</p>
        <div>
            <input :value="text" type="text" @input="handleChange">
            <p>Gía trị bạn nhập: {{text}}</p>
        </div>

        <div>
            <p>count: {{count}}</p>
            <button @click="increaseCount">Tăng</button>
        </div>
    </ol>

    <p>Event</p>
    <div>
        <button @click="handleClick('Hello')">Click</button>
    </div>
  </div>
 
</template>

<style scoped>
    img {
        width: 100px;
        height: 100px;
    }
</style>
