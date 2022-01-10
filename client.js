import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDM3ODk2MjksImlhdCI6MTY0MTM3MDQyOSwiaXNzIjoiY2hhdGx5IiwianRpIjoiYWIyYjk2NjQtOWQ1NC00ZTRmLWE5MjctYmNkZmI0YmVjMTdlIiwibmJmIjoxNjQxMzcwNDI4LCJzdWIiOiI4YzFhZjA4Ny00N2I4LTQ2MzMtODhiMS1jNGI2ODA5ZTNkOGUiLCJ0eXAiOiJhY2Nlc3MifQ._O_U31JWzMv3_I9DzbkFB7nWAU_2jrJWiecfbLKnk7OYdNGMgCzwd_QyJm6o-zRe6k-Ge_63ogiwEVObk-YPog';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
