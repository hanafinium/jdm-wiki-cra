import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUpFormSubmit = async (ev) => {
    //form submission
    ev.preventDefault();
    try {
      const response = await fetch("/api/users/signup", {
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
  return (
    // <form onSubmit={signUpFormSubmit}>
    //   <div>
    //     <label>Email</label>
    //     <input
    //       type="text"
    //       name="email"
    //       id="email"
    //       onChange={(ev) => {
    //         setEmail(ev.target.value);
    //       }}
    //       required
    //     ></input>
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       name="password"
    //       id="password"
    //       onChange={(ev) => {
    //         setPassword(ev.target.value);
    //       }}
    //       required
    //     ></input>
    //   </div>
    //   <button type="submit">Register</button>
    // </form>
    <div id="form">
    <div id="form-elem">
      <label for="email">Email</label>
      <input
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
    </div>
    <div id="form-elem">
      <label for="password">Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
    </div>
    <div>
      <button
        id="btn"
        onClick={() => {
          //auth.createUserWithEmailAndPassword(email, password);
          //clearForm();
        }}
      >
        Sign Up
      </button>
    </div>
    <p>
      Already a user? <a href="/signin">Sign In</a>
    </p>
  </div>
  );
}

export default SignUp;
