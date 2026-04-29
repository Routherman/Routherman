import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr) {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit", 
        minute: "2-digit"
    });
}

export function formatCurrency(amount) {
    return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(amount);
}
