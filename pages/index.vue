<script setup lang='ts'>
definePageMeta({
	// hit when access this page
	middleware: ['auth'],
})
const time = ref(getTime())
const app = useAppConfig()
</script>

<template>
	<div>
		<h3>Index</h3>
		<h4>{{ app.title }}</h4>
		<!-- <h4 class="text-blue-4">{{ time }}</h4> -->
	</div>
</template>