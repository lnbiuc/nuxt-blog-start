<template>
	<div class="flex flex-col w-full h-full bg-gray-100 shadow-md">
		<slot name="header"/>
		<h4>layouts/default</h4>
		<slot name="main"/>
		<slot name="footer"/>
	</div>
</template>

