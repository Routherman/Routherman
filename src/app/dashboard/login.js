"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica real de autenticación
    if (email === "admin@routherman.com" && password === "123456") {
      localStorage.setItem("auth", "true");
      window.location.href = "/dashboard";
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <main className="login-page mx-auto">
      <form className="glass form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-solid mt-8" type="submit">
          Ingresar
        </button>
        {error && <p className="error mt-4">{error}</p>}
      </form>
    </main>
  );
}
