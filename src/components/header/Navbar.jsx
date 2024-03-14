import { useState } from 'react';
import Signup from '../Form/Signup';
import Register from '../form/Register';
import { NavbarStyled, ButtonStyled } from './Navbar.styled';

import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

function Navbar() {
  const [modal, setModal] = useState(false);

  const handleModalChange = () => {
    setModal(!modal);
  };

  const { data: catData } = useQuery({
    queryKey: ['cat'],
    queryFn: () => {
      return Axios.get('https://catfact.ninja/fact').then((res) => res.data);
    },
    //...
  });

  return (
    <NavbarStyled>
      <ul>
        <li>
          <ButtonStyled onClick={handleModalChange}>Register</ButtonStyled>
        </li>
        <li>
          <ButtonStyled>Login</ButtonStyled>
        </li>
      </ul>
      {/* <p>{String(modal)}</p> */}
      {/*    {modal ? <Signup modal={modal} /> : ''} */}
      <Register openModal={modal} closeModal={() => setModal(false)} />
      <>{catData.fact}</>
    </NavbarStyled>
  );
}

export default Navbar;
