import React from 'react';
import { useState } from 'react';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signInFormSubmit = async (ev) => {
    //form submission
    ev.preventDefault();
    try {
        const response = await fetch("/api/users/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        });
        if (!response.ok) {
        console.log("Unable to signup.");
        return;
        }
        console.log("Signed up successfully.");
        setEmail("");
        setPassword("");
    } catch (error) {
        console.error(error);
    }
    };
return(
    <div id="form">
    <div id="form-elem">
        <label for="email">Email</label>
        <input
        type="text"
        required
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        ></input>
    </div>
    <div id="form-elem">
        <label for="password">Password</label>
        <input
        type="password"
        required
        // value={password}
        //onChange={(e) => setPassword(e.target.value)}
        ></input>
    </div>
    <div>
        <button
        id="btn"
        onClick={() => {
            //auth.signInWithEmailAndPassword(email, password);
            // clearForm();
        }}
        >
        Sign In
        </button>
    </div>
    <p>
        <a href="#">Forgot Password?</a>
    </p>
    <p>
        Not a user?
        <a href="/signup"> Create Account</a>
    </p>
    </div>
)
}

export default SignIn;