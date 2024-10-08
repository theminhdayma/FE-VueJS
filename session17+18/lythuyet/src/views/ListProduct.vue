<template>
    <div>
        <h1>List Product</h1>

        <input v-model="keySearch" type="text">
        <button @click="handleClick">Tìm kiếm</button>
    </div>
</template>

<script setup>
    import {ref, computed} from "vue"
    import {useRoute, useRouter} from "vue-router"

    const route = useRoute()
    const router = useRouter()
    const keySearch = ref("")

    //http://localhost:5173?q==value

    const handleClick = () => {
       router.push({query: { q: keySearch.value } });
    }

    const valueSearch = computed (()=> {
        return route.query.q
    })

    console.log(valueSearch.value);
    
</script>

<style scoped>

</style>