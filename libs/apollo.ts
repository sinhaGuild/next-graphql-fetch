import { ApolloClient, InMemoryCache } from "@apollo/client";
const GRAPH_URL = process.env.GRAPH_URL || "https://graphql.anilist.co";

const client = new ApolloClient({
  uri: GRAPH_URL,
  cache: new InMemoryCache(),
});

export default client;
