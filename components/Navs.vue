<script setup lang='ts'>
const toRandomArticle = () => {
	const router = useRouter();
	return router.push('/article/' + Math.random());
}
</script>

<template>
	<div class="flex flex-row justify-center items-center text-2xl m-4 bg-gray-100 p-4 rounded-full shadow-md">
		<span class="mx-2 hover:text-blue-400 hover:underline">
			<NuxtLink class="link" to="/">Index</NuxtLink>
		</span>
		<span class="mx-2">
			<NuxtLink class="link" to="/demo1">Demo1</NuxtLink>
		</span>
		<span class="mx-2">
			<span class="link" @click="toRandomArticle">Article</span>
		</span>
		<span class="mx-2">
			<NuxtLink class="link" to="/parent">parent</NuxtLink>
		</span>
		<span class="mx-2">
			<NuxtLink class="link" to="/parent/child">parent/child</NuxtLink>
		</span>
		<span class="mx-2">
			<NuxtLink class="link" to="/count">count</NuxtLink>
		</span>
	</div>
</template>
<style scoped>
.link {
	@apply hover:text-blue-400 text-black no-underline transition-all cursor-pointer;
}
</style>

