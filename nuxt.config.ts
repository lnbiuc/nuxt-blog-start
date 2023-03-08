// https://nuxt.com/docs/api/configuration/nuxt-config
import presetChinese from "unocss-preset-chinese";

export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
    ],
    unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,

        // core options
        shortcuts: [],
        rules: [],
    },
    app: {
        pageTransition: {
            name: 'fade',
            mode: 'out-in' // default
        },
        layoutTransition: {
            name: 'slide',
            mode: 'out-in' // default
        }
    }
})
