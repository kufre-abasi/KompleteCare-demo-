import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  from,
  Observable,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

import { onError } from "@apollo/client/link/error";

const checkInternetConnection = async () => {
  // Perform extra a lightweight fetch to confirm internet connectivity, incase navigator.onLine is not supported on device.
  try {
    const response = await fetch("https://www.gstatic.com/generate_204", {
      method: "HEAD",
      cache: "no-cache",
    });
    return response.ok;
  } catch (error) {
    return false;
  }
};

const useMutationApollo = () => {
  const config = useRuntimeConfig();
  const token = useCookie("auth_token");

  const httpLink = new HttpLink({
    uri: "https://testdrive.kompletecare.com/graphql",
  });

  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (networkError && networkError.statusCode === 401) {
        navigateTo("/login");
        return;
      }

      if (graphQLErrors) {
        for (let { message, extensions } of graphQLErrors) {
          if (
            extensions.code === "FORBIDDEN" ||
            extensions.code === "UNAUTHENTICATED"
          ) {
            if (errorStore.retries <= 3) {
              // use toast to handle error
            } else {
              navigateTo("/login");
              console.error(message);
            }
          }
        }
      }
    }
  );

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
      },
    }));
    return forward(operation);
  });

  const link = from([errorLink, authMiddleware, httpLink]);

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });

  provideApolloClient(apolloClient);
  return apolloClient;
};
export { useMutationApollo };
