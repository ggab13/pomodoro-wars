import { useState } from 'react';
import Signup from '../auth/Signup';
import Register from '../auth/Register';
import { NavbarStyled, ButtonStyled } from './Navbar.styled';
import { auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

function Navbar() {
  const [modal, setModal] = useState(false);
  const [user] = useAuthState(auth);

  const handleModalChange = () => {
    setModal(!modal);
  };

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <NavbarStyled>
      {!user ? (
        <ul>
          {' '}
          <li>
            <ButtonStyled onClick={handleModalChange}>Register</ButtonStyled>
          </li>
          <li>
            <ButtonStyled>Login</ButtonStyled>
          </li>
        </ul>
      ) : (
        <ul>
          {' '}
          <li>
            <p>Welcome {user?.email}</p>
          </li>
          <li>
            <ButtonStyled onClick={signUserOut}>Log out</ButtonStyled>
          </li>
        </ul>
      )}

      {/*   <ul>
        <li>
          <ButtonStyled onClick={handleModalChange}>Register</ButtonStyled>
        </li>
        <li>
          <ButtonStyled>Login</ButtonStyled>
        </li>
      </ul> */}
      {/* <p>{String(modal)}</p> */}
      {/*    {modal ? <Signup modal={modal} /> : ''} */}
      <Register openModal={modal} closeModal={() => setModal(false)} />
    </NavbarStyled>
  );
}

export default Navbar;
