// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css","~/assets/main.css","bootstrap-icons/font/bootstrap-icons.css"],
  modules: ["@nuxt/eslint"],

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      // baseURL: "https://rickandmortyapi.com/api",
    },
  },

  imports: {
    presets: [
      {
        from: "@vue/apollo-composable",
        imports: ["useMutation", "useQuery"],
      },
      {
        from: "graphql-tag",
        imports: ["gql"],
      },
    ],
  },

  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
        commaDangle: "always-multiline",
        indent: "tab",
      },
    },
  },

  nitro: { preset: "vercel" },
});
