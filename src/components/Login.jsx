import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("All fields are required");
      return;
    }

    console.log({ email, password });
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  const handleForgotPassword = () => {
    if (email === "") {
      alert("Please enter your email first");
    } else {
      alert("Password reset link sent to your email");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>

        <button type="button" onClick={handleForgotPassword}>
          Forgot Password
        </button>
      </form>
    </div>
  );
}