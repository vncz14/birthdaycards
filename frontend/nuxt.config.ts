// https://nuxt.com/docs/api/configuration/nuxt-config

import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
    css: ["@/assets/css/globals.css"],
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    fonts: {
        defaults: { weights: [400, 700], styles: ["normal", "italic"] },
        families: [{ name: "Pretendard", provider: "local" }],
    },
    modules: ["@nuxt/fonts", "@primevue/nuxt-module", "nuxt-auth-utils"],
    primevue: {
        options: {
            theme: {
                preset: definePreset(Aura, {
                    semantic: {
                        primary: {
                            50: "{fuchsia.50}",
                            100: "{fuchsia.100}",
                            200: "{fuchsia.200}",
                            300: "{fuchsia.300}",
                            400: "{fuchsia.400}",
                            500: "{fuchsia.500}",
                            600: "{fuchsia.600}",
                            700: "{fuchsia.700}",
                            800: "{fuchsia.800}",
                            900: "{fuchsia.900}",
                            950: "{fuchsia.950}",
                        },
                    },
                }),
            },
        },
    },
    runtimeConfig: {
        NUXT_SESSION_PASSWORD: process.env.NUXT_SESSION_PASSWORD,
        NUXT_OAUTH_GOOGLE_CLIENT_ID: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        NUXT_OAUTH_GOOGLE_CLIENT_SECRET:
            process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
    },
});
