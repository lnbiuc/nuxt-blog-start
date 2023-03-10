import { isAutherized } from "../composables/auth"
export default defineNuxtRouteMiddleware((to, form) => {
    if(isAutherized() == false) {
        return navigateTo('/index')
    }
})