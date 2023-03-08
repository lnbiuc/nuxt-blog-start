<script setup lang='ts'>
const data = ref(await useFetch('https://vio.vin/api/count', {
    method: 'GET'
}))
</script>

<template>
    <div>
        {{ data }}
    </div>
</template>