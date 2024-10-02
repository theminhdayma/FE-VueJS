<template>
    <div>
        <button @click="handleClick">Counter</button>
        <p>Count: {{count}} </p>
    </div>
</template>

<script setup>
    import { ref, onUpdated} from "vue";
    const count = ref(0)

    const handleClick = () => {
        count.value +=1
    }

    onUpdated(()=> {
        console.log("Dữ liệu đã thay đổi");        
    })
</script>

<style>

</style>