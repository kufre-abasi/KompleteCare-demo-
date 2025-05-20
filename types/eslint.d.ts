// types/eslint.d.ts
import type { NuxtESLintConfigOptions } from "@nuxt/eslint";

declare module "nuxt/config" {
  interface NuxtConfig {
    eslint?: NuxtESLintConfigOptions;
  }
}
