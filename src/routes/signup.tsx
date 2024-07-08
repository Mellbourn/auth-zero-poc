import React, { useState } from "react";
import authConfig from "../auth_config.json";

export const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { domain, clientId } = authConfig;

    const response = await fetch(`https://${domain}/dbconnections/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        email,
        password,
        connection: "Username-Password-Authentication",
        user_metadata: { name },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(
        "Signup successful! Please check your email to verify your account."
      );
    } else {
      setError(data.error || "An error occurred during signup.");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default Signup;
