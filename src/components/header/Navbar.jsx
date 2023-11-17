import { useState } from 'react';
import Signup from '../Form/Signup';
import Register from '../form/Register';
import { NavbarStyled, ButtonStyled } from './Navbar.styled';

function Navbar() {
    const [modal, setModal] = useState(false);

    const handleModalChange = () => {
        setModal(!modal);
    };

    return (
        <NavbarStyled>
            <ul>
                <li>
                    <ButtonStyled onClick={handleModalChange}>
                        Register
                    </ButtonStyled>
                </li>
                <li>
                    <ButtonStyled>Login</ButtonStyled>
                </li>
            </ul>
            {/* <p>{String(modal)}</p> */}
            {/*    {modal ? <Signup modal={modal} /> : ''} */}
            <Signup openModal={modal} closeModal={() => setModal(false)} />
            <Register />
        </NavbarStyled>
    );
}

export default Navbar;
