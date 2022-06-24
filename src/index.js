import React from "react";
import { render } from "react-dom";
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache, split} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllCustomers from "./components/AllCustomers"
import "./index.css";
import "./components/css/table.css"

const GRAPHQL_ENDPOINT = "rechargeverse.hasura.app/v1/graphql";

const httpLink = new HttpLink({
  uri: `https://${GRAPHQL_ENDPOINT}`,
});

const wsLink = new WebSocketLink({
  uri: `ws://${GRAPHQL_ENDPOINT}`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AllCustomers/>
    </ApolloProvider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));