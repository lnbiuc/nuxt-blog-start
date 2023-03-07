<template>
	<div>
		<NuxtLayout name="default">
			<template #header>
				<Navs/>
			</template>
			<template #main>
				<NuxtPage class="h-[70vh] m-4 p-4 bg-gray-200"/>
			</template>
			<template #footer>
				<Footer/>
			</template>
		</NuxtLayout>
	</div>
</template>
