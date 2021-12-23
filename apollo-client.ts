import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.monday.com/v2",
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.MONDAY_API_TOKEN || "",
  },
  cache: new InMemoryCache(),
});

export default client;
