// types/apollo.d.ts
import type { ApolloClientConfig } from "@nuxtjs/apollo";

declare module "nuxt/config" {
  interface NuxtConfig {
    apollo?: ApolloClientConfig;
  }
}

declare module "@nuxt/schema" {
  interface NuxtConfig {
    apollo?: ApolloClientConfig;
  }
}
