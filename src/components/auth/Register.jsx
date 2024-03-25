import { useRef, useState, useEffect } from 'react';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCoffee,
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
  ValidEmailStyled,
  InValidEmailStyled,
  EmailErrorInfoStyled,
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
  CloseButtonStyled,
  SignUpButtonStyled,
} from './Register.styled';

// Regex for validation
/* const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; */
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\S+@\S+$/;

function Register({ openModal, closeModal }) {
  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  /*   const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false); */

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  function showData() {
    console.log('email: ' + user + 'password: ' + password);
  }

  useEffect(() => {
    if (openModal) {
      userRef.current?.showModal();
    } else {
      userRef.current?.close();
    }
  }, [openModal]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  /*   useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]); */

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMessage('');
  }, [, /* user */ password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If button enabled with JS
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrorMessage('Invalid entry');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed up
        const user1 = JSON.stringify(userCredential.user);
        console.log(user1 + 'User');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });

    setSuccess(true);
  };

  return (
    <>
      <section>
        <dialog
          ref={userRef}
          style={{
            width: '320px',
            height: '500px',
            border: 'none',
            backgroundColor: 'transparent',
          }}
        >
          <RegisterFormStyled onSubmit={handleSubmit}>
            <p ref={errorRef} aria-live="assertive">
              {errorMessage}
            </p>
            <CloseButtonStyled onClick={closeModal}>X</CloseButtonStyled>
            <h2>Register</h2>

            <label htmlFor="email">
              Email:{' '}
              <ValidEmailStyled $validEmail={validEmail}>
                <FontAwesomeIcon icon={faCheck} />
              </ValidEmailStyled>
              <InValidEmailStyled $validEmail={validEmail} $email={email}>
                <FontAwesomeIcon icon={faTimes} />
              </InValidEmailStyled>
            </label>

            {/* Username section */}
            <input
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={validEmail ? 'false' : 'true'}
              aria-describedby="useridnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <EmailErrorInfoStyled
              id="useridnote"
              $validEmail={validEmail}
              $email={email}
              $emailFocus={emailFocus}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              &nbsp; Must contain @. <br />
            </EmailErrorInfoStyled>
            {/*  <div>
              <label htmlFor="username">
                Username:{' '}
                <ValidUsernameStyled $validName={validName}>
                  <FontAwesomeIcon icon={faCheck} />
                </ValidUsernameStyled>
                <InvalidUsernameStyled $validName={validName} $user={user}>
                  <FontAwesomeIcon icon={faTimes} />
                </InvalidUsernameStyled>
              </label>
              Username section 
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
                $validName={validName}
                $user={user}
                $userFocus={userFocus}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                &nbsp; 4 to 24 characters. <br />
                Must begin with a letter. <br />
                Letters, numbers, underscores, hyphens allowed.
              </UserErrorInfoStyled>
            </div> */}
            {/* Password section */}
            <label htmlFor="password">
              Password:{' '}
              <ValidPasswordStyled $validPassword={validPassword}>
                <FontAwesomeIcon icon={faCheck} />
              </ValidPasswordStyled>
              <InvalidPasswordStyled
                $validPassword={validPassword}
                $password={password}
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
              $validPassword={validPassword}
              $password={password}
              $passwordFocus={passwordFocus}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              &nbsp; 8 to 24 characters. <br />
              Must include uppercase and lowercase letters, a number and a
              special character. <br />
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
                $matchPassword={matchPassword}
                $validMatch={validMatch}
              >
                <FontAwesomeIcon icon={faCheck} />
              </ValidMatchStyled>
              <InValidMatchStyled $validMatch={validMatch}>
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
              $validMatch={validMatch}
              $matchPassword={matchPassword}
              $matchFocus={matchFocus}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              &nbsp;Must match the first password field. <br />
            </ValidMatchErrorInfoStyled>
            <SignUpButtonStyled
              disabled={
                /*  !validName || */ !validPassword || !validMatch
                  ? true
                  : false
              }
            >
              Sign Up
            </SignUpButtonStyled>
            <p
              style={{
                textAlign: 'center',
                color: '#2db83d',
                fontSize: '1.25rem',
              }}
            >
              {success ? 'Succesfull registration' : ''}
            </p>
          </RegisterFormStyled>
        </dialog>
      </section>
    </>
  );
}

export default Register;
