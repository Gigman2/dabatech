import './App.css';
import { BrowserRouter} from 'react-router-dom'
import { ApolloClient, InMemoryCache} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthContextProvider } from './context/useAuth'
import { createUploadLink } from 'apollo-upload-client'
import Pages from './routes'

const apolloLink = createUploadLink({ uri: "http://localhost:5000/graphql"})

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('dt_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(apolloLink)
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthContextProvider>
          <Pages />
        </AuthContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
