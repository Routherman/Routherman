"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    if (!email || !password) {
      setError("Completa todos los campos");
      return;
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess("Usuario registrado correctamente. Ahora puedes iniciar sesión.");
        setEmail("");
        setPassword("");
      } else {
        setError(data.error || "Error al registrar usuario");
      }
    } catch (err) {
      setError("Error de red o servidor");
    }
  };

  return (
    <main className="register-page" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form
        className="glass form"
        style={{
          width: '50%',
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <h2 className="h2" style={{ textAlign: 'center', marginBottom: 24 }}>Registro equipo Routherman</h2>
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
          Registrarse
        </button>
        {success && <p className="success mt-4">{success}</p>}
        {error && <p className="error mt-4">{error}</p>}
        <a href="/dashboard/login" style={{ marginTop: 24, color: '#8b5cf6', textDecoration: 'underline' }}>
          ¿Ya tienes cuenta? Inicia sesión aquí
        </a>
      </form>
    </main>
  );
}
