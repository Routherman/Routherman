import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const payload = await req.json();
    const { servicio, nombre, contacto, empresa, mensaje } = payload || {};
    if (!servicio || !nombre || !contacto) {
      return NextResponse.json({ ok: false, error: "Datos incompletos" }, { status: 400 });
    }

    const STRAPI_URL = process.env.STRAPI_URL;
    const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

    const r = await fetch(`${STRAPI_URL}/api/consultas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify({ data: { servicio, nombre, contacto, empresa, mensaje } }),
      cache: "no-store",
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      return NextResponse.json({ ok: false, error: "Strapi error", detail }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
