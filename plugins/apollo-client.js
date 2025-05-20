import { useCustomApollo, useMutationApollo } from "#imports";
import { ApolloClients } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = useCustomApollo();
  const customClient = useMutationApollo();
  nuxtApp.vueApp.provide(ApolloClients, {
    default: apolloClient,
    custom: customClient, // 👈 this is the clientId you'll refer to
  });
});
