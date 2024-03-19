import { useState, useEffect, useRef } from 'react';
import {
    Label,
    Input,
    Button,
    Success,
    Error,
    Messages,
} from './Signup.styled.js';

function Signup({ openModal, closeModal }) {
    const ref = useRef();

    // States for registration
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Modal change
    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    // Handling the username change
    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '' || email === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <Success
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}
            >
                <h1>User {username} successfully registered!!</h1>
            </Success>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <Error
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}
            >
                <h1>Please enter all the fields</h1>
            </Error>
        );
    };

    return (
        <div>
            {/* Calling to the methods */}
            <dialog ref={ref}>
                <Messages>
                    {errorMessage()}
                    {successMessage()}
                </Messages>
                <form onSubmit={handleSubmit}>
                    <Label htmlFor="username">Username </Label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsername}
                    ></Input>
                    <Label htmlFor="email">email </Label>
                    <Input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}
                    ></Input>
                    <Label htmlFor="password">Password </Label>
                    <Input
                        type="text"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePassword}
                    ></Input>

                    <Button type="submit">Submit</Button>
                </form>
                <Button onClick={closeModal}>Cancel</Button>
            </dialog>
        </div>
    );
}

export default Signup;
