import './App.css';
import { BrowserRouter} from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloLink, concat} from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthContextProvider } from './context/useAuth'
import { createUploadLink } from 'apollo-upload-client'
import Pages from './routes'

const token = sessionStorage.getItem('dt_token');
const apolloLink = createUploadLink({ uri: "http://localhost:5000/graphql"})
const AuthMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({headers = {}}) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }))
  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(AuthMiddleware, apolloLink)
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
