<script setup lang='ts'>
const isShow = ref(false)
const showText = () => {
	isShow.value = !isShow.value
}
</script>

<template>
	<div>
		<div>
			<h1>Child</h1>
		</div>
		<div class="mt-4">
			<button class="p-3 transition-all hover:bg-blue-500 bg-blue-400 rounded-md drop-shadow border-none" @click="showText">
				<span class="text-md">
					SHOW
				</span>
			</button>
			<LazyLazyText v-if="isShow"/>
		</div>
	</div>
</template>

