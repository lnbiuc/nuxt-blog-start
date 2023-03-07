<script setup lang='ts'>
// const router = useRouter()
// const {id} = router.currentRoute.value.params

const route = useRoute()
const {id} = route.params
</script>

<template>
	<div>
		<ArticleTitle></ArticleTitle>
		{{ id }}
	</div>
</template>

