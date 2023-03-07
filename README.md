# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Development
## Directory Structure
- pages
- components
- layouts
- assets
## Pages
> nuxt中访问页面的入口，每个页面都是一个 vue 文件，文件名就是页面的路径，比如 pages/index.vue 就是访问 / 路径的页面，pages/about.vue 就是访问 /about 路径的页面。
pages中的vue文件文件名应 使用小写

pages/article.vue/[id].vue
相当于访问路径/pages/article.vue/{id}，其中ID为自定义参数

在[id].vue可以 通过以下代码获取到这个id
```typescript
const router = useRouter()
const {id1} = router.currentRoute.value.params
// or
const route = useRoute()
const {id2} = route.params
```

## 嵌套路由
```
|--pages
|----parent/
|------child.vue
|----parent.vue
```

父路由访问路径为/pages/parent
子路由为/pages/parent/child

在parent.vue添加`<NuxtPage></NuxtPage>`作为子路由的出口
例如：
```html
<template>
  <div>
    <h1>Parent</h1>
    <NuxtPage></NuxtPage>
  </div>
```
## layouts
- 创建一个layouts
```html
<template>
	<div class="flex flex-col w-full h-full bg-gray-100 shadow-md">
		<slot name="header"/>
		<h4>layouts/default</h4>
		<slot name="main"/>
		<slot name="footer"/>
	</div>
</template>
```

- 在pages中使用
```html
<template>
	<div>
		<NuxtLayout name="default">
			<template #header>
				<Navs/>
			</template>
			<template #main>
				<NuxtPage/>
			</template>
			<template #footer>
				<Footer/>
			</template>
		</NuxtLayout>
	</div>
</template>
```

## components
- 创建一个组件：在components中创建一个vue文件例如：`components/Navs.vue`，组件名应使用大写

- 在其他组件中引用这个组件：
```html
<NuxtLayout name="default">
    <Navs/>
    <NuxtPage class="h-[70vh] m-4 p-4 bg-gray-200"/>
    <Footer/>
</NuxtLayout>
```

- 使用目录中的组件：如组件在`components/article/Title.vue`中，可以在其他组件中使用`<ArticleTitle></ArticleTitle>`来引用，目录名应小写
