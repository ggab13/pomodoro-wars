import Navbar from './Navbar';
import Tomato from '../../assets/tomato2.svg?react';
import { H1Styled, HeaderStyled, TomatoSvgStyled } from './Header.styled';
import { addUser, auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderStyled>
      <img id="asd"></img>
      <H1Styled>
        <TomatoSvgStyled>
          P<Tomato style={{ width: '30px' }} />
          mod
          <Tomato style={{ width: '30px' }} />
          ro Wars
        </TomatoSvgStyled>
      </H1Styled>

      {/*   <p>Welcome {user?.email}</p> */}
      <Navbar />
    </HeaderStyled>
  );
}

export default Header;
