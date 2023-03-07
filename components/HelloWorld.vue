<script setup lang='ts'>
const msg = ref<string>('Hello World')

</script>

<template>
	<div class="text-blue-400 text-4xl flex justify-center items-center h-full cursor-pointer hover:text-blue-500 transition-all hover:underline">
		<span class="mt-[150px]">
			{{ msg }}
		</span>
	</div>
</template>

