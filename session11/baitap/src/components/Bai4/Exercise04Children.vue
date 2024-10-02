<template>
    <div>
        Biến count: {{count}}
    </div>
</template>

<script setup>
    import {onUpdated} from "vue"
    const props = defineProps(["count"]);

    onUpdated(()=> {
        alert("giá trị của biến count đã thay đổi !!!")       
    })
</script>

<style>

</style>