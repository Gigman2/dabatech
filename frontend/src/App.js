import './App.css';
import { BrowserRouter} from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthContextProvider } from './context/useAuth'
import Pages from './routes'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  request: async operation => {
    const token = sessionStorage.getItem('dt_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  }
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
