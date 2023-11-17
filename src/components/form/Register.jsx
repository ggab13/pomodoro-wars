import { useRef, useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faCoffee,
    faCheck,
    faTimes,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
    ValidUsernameStyled,
    InvalidUsernameStyled,
    RegisterFormStyled,
    UserErrorInfoStyled,
} from './Register.styled';
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setpassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = USER_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    useEffect(() => {
        setErrorMessage('');
    }, [user, password, matchPassword]);

    return (
        <section>
            <p ref={errorRef} aria-live="assertive"></p>

            <RegisterFormStyled>
                <h2>Register</h2>
                <label htmlFor="username">
                    Username:{' '}
                    <ValidUsernameStyled validName={validName}>
                        <FontAwesomeIcon icon={faCheck} />
                    </ValidUsernameStyled>
                    <InvalidUsernameStyled validName={validName} user={user}>
                        <FontAwesomeIcon icon={faTimes} />
                    </InvalidUsernameStyled>
                </label>

                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? 'false' : 'true'}
                    aria-describedby="useridnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <UserErrorInfoStyled
                    id="useridnote"
                    validName={validName}
                    user={user}
                    userFocus={userFocus}
                >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    &nbsp; 4 to 24 characters. <br />
                    Must begin with a letter. <br />
                    Letters, numbers, underscores, hyphens allowed.
                </UserErrorInfoStyled>
            </RegisterFormStyled>
        </section>
    );
}

export default Register;
