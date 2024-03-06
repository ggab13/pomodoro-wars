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
  ValidPasswordStyled,
  InvalidPasswordStyled,
  ValidMatchStyled,
  InValidMatchStyled,
  RegisterFormStyled,
  UserErrorInfoStyled,
  PasswordErrorInfoStyled,
  ValidMatchErrorInfoStyled,
} from './Register.styled';
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState('');
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
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMessage('');
  }, [user, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If button enabled with JS
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || v2) {
      setErrorMessage('Invalid entry');
      return;
    }
    console.log(user, password);
    setSuccess(true);
  };

  return (
    <section>
      <p ref={errorRef} aria-live="assertive">
        {errorMessage}
      </p>

      <RegisterFormStyled onSubmit={handleSubmit}>
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

        {/* Username section */}
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

        {/* Password section */}
        <label htmlFor="password">
          Password:{' '}
          <ValidPasswordStyled validPassword={validPassword}>
            <FontAwesomeIcon icon={faCheck} />
          </ValidPasswordStyled>
          <InvalidPasswordStyled
            validPassword={validPassword}
            password={password}
          >
            <FontAwesomeIcon icon={faTimes} />
          </InvalidPasswordStyled>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-invalid={validPassword ? 'false' : 'true'}
          aria-describedby="passwordnote"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <PasswordErrorInfoStyled
          id="passwordnote"
          validPassword={validPassword}
          password={password}
          passwordFocus={passwordFocus}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          &nbsp; 8 to 24 characters. <br />
          Must include uppercase and lowercase letters, a number and a special
          character. <br />
          Allowed special characters:
          <span aria-label="exlamation mark"> ! </span>
          <span aria-label="at symbol">@ </span>
          <span aria-label="dollar signk">$ </span>
          <span aria-label="percent">% </span>
        </PasswordErrorInfoStyled>

        {/* Confirm password section */}
        <label htmlFor="confirmPassword">
          Confirm Password:{' '}
          <ValidMatchStyled
            matchPassword={matchPassword}
            validMatch={validMatch}
          >
            <FontAwesomeIcon icon={faCheck} />
          </ValidMatchStyled>
          <InValidMatchStyled validMatch={validMatch}>
            <FontAwesomeIcon icon={faTimes} />
          </InValidMatchStyled>
        </label>
        <input
          type="password"
          id="confirmPassword"
          onChange={(e) => setMatchPassword(e.target.value)}
          required
          aria-invalid={validPassword ? 'false' : 'true'}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <ValidMatchErrorInfoStyled
          id="confirmnote"
          validMatch={validMatch}
          matchFocus={matchFocus}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          &nbsp;Must match the first password field. <br />
        </ValidMatchErrorInfoStyled>
        <button
          disabled={!validName || !validPassword || !validMatch ? true : false}
        >
          Sign Up
        </button>
      </RegisterFormStyled>
    </section>
  );
}

export default Register;
