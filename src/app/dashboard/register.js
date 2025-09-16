import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica real de registro
    if (email && password) {
      setSuccess("Usuario registrado (simulado). Ahora puedes iniciar sesión.");
      setError("");
      setEmail("");
      setPassword("");
    } else {
      setError("Completa todos los campos");
      setSuccess("");
    }
  };

  return (
    <main className="register-page">
      <h2 className="h2">Registro equipo Routherman</h2>
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
          Registrarse
        </button>
        {success && <p className="success mt-4">{success}</p>}
        {error && <p className="error mt-4">{error}</p>}
      </form>
    </main>
  );
}
