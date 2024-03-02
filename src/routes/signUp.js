import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUpFormSubmit = async (ev) => {
    //form submission
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        body: { email: email, password: password },
        //   headers: { "Content-Type": "application/json" },
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
    <form onSubmit={signUpFormSubmit}>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
          required
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          required
        ></input>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default SignUp;
