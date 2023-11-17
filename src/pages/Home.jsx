import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import { HomeStyled } from './Home.styled.js';

Header;

function Home() {
    return (
        <HomeStyled>
            <Header />
            <Main />
            <Footer />
        </HomeStyled>
    );
}

export default Home;
