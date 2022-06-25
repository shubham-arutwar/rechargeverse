import React from "react";
import { render } from "react-dom";
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter} from "react-router-dom";
import Path from "./App";
import "./index.css";
import "./components/css/table.css"

const ROLE = 'admin';

const authLink = setContext((_, { headers }) => {
 return {
 headers: {
      'x-hasura-admin-secret': 'shubham',
      'X-Hasura-Role': ROLE
    }
  }
});

const httpLink = createHttpLink({
 uri: 'https://rechargeverse.hasura.app/v1/graphql',
});

const client = new ApolloClient({
 link: authLink.concat(httpLink),
 cache: new InMemoryCache()
});

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Path/>
    </ApolloProvider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));