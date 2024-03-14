import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import { HomeStyled } from './Home.styled.js';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeStyled>
        <Header />
        <Main />
        <Footer />
      </HomeStyled>
    </QueryClientProvider>
  );
}

export default Home;
