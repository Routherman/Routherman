"use client";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    // Verifica si existe el JWT en localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/dashboard/login";
    }
    // Opcional: podrías validar el token con el backend aquí
  }, []);

  return (
    <main className="dashboard-page">
      <h1 className="h2">Dashboard Routherman</h1>
      <p>Acceso solo para el equipo. Aquí irán las funciones internas.</p>
      {/* Aquí se mostrarán las funciones y paneles internos */}
    </main>
  );
}
