"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Completa todos los campos");
      return;
    }
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      } else {
        setError(data.error || "Credenciales incorrectas");
      }
    } catch (err) {
      setError("Error de red o servidor");
    }
  };

  return (
    <main className="login-page" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form
        className="glass form"
        style={{
          width: '35%',
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <h2 className="h2" style={{ textAlign: 'center', marginBottom: 24 }}>Login</h2>
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '80%', marginBottom: 16 }}
        />
        <input
          className="input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '80%', marginBottom: 16 }}
        />
        <button className="btn btn-solid mt-8" type="submit" style={{ width: '60%' }}>
          Ingresar
        </button>
        {error && <p className="error mt-4">{error}</p>}
        <a href="/dashboard/register" style={{ marginTop: 24, color: '#8b5cf6', textDecoration: 'underline' }}>
          ¿No tienes cuenta? Regístrate aquí
        </a>
      </form>
    </main>
  );
}
