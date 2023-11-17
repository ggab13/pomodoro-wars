import Navbar from './Navbar';
import Tomato from '../../assets/tomato2.svg?react';
import { H1Styled, HeaderStyled, TomatoSvgStyled } from './Header.styled';

function Header() {
    return (
        <HeaderStyled>
            <img id="asd"></img>
            <H1Styled>
                <TomatoSvgStyled>
                    P<Tomato />
                    modor
                    <Tomato /> Wars
                </TomatoSvgStyled>
            </H1Styled>

            <Navbar />
        </HeaderStyled>
    );
}

export default Header;
