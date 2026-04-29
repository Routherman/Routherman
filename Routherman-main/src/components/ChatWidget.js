"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Send, X, Minimize2, Loader2 } from "lucide-react";
import io from "socket.io-client";

// SOCKET CONNECTION
// Connects to local backend (or whatever is in env)
const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3000", {
    autoConnect: false,
});

export default function ChatWidget() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const [sessionId, setSessionId] = useState("");

    // Ocultar Widget en Dashboard (aunque no deberia existir en public)
    if (pathname?.startsWith("/dashboard")) return null;

    useEffect(() => {
        // Init Session ID
        let sid = localStorage.getItem("chat_session_id");
        if (!sid) {
            sid = "guest-" + Math.random().toString(36).substr(2, 9);
            localStorage.setItem("chat_session_id", sid);
        }
        setSessionId(sid);

        // Connect Socket
        socket.connect();
        socket.emit("join", { sessionId: sid });

        // Listen for messages
        const handleMessage = (msg) => {
            // msg format: { text, sender, time }
            setMessages((prev) => {
                // Deduplicate simple
                const last = prev[prev.length - 1];
                if (last && last.text === msg.text && last.sender === msg.sender) return prev;

                return [...prev, {
                    ...msg,
                    time: new Date(msg.time || Date.now())
                }];
            });
            if (msg.sender !== 'user') setLoading(false);
        };

        socket.on("chat_message", handleMessage);

        return () => {
            socket.off("chat_message", handleMessage);
            socket.disconnect();
        };
    }, []);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const text = input;
        const userMsg = { text, sender: "user", time: new Date() };

        // Optimistic update
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        // Send via Socket
        socket.emit("chat_message", {
            sessionId,
            text,
            sender: "user"
        });

        // Fallback timeout por si el socket no responde
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* CHAT WINDOW */}
            {isOpen && (
                <div className="mb-4 w-80 md:w-96 bg-[#111] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200">

                    {/* HEAD */}
                    <div className="bg-purple-600 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <MessageCircle size={20} />
                            <div>
                                <h3 className="font-bold text-sm">Soporte Routherman</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                                    <span className="text-xs text-purple-200">En línea</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-purple-500 rounded p-1 transition-colors">
                            <Minimize2 size={18} />
                        </button>
                    </div>

                    {/* BODY */}
                    <div className="h-80 overflow-y-auto p-4 space-y-3 bg-[#0A0A0A]">
                        {messages.length === 0 && (
                            <div className="text-center text-gray-500 text-sm mt-10">
                                <p>¡Hola! 👋</p>
                                <p>Déjanos un mensaje y te responderemos en breve.</p>
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${m.sender === 'user'
                                    ? 'bg-purple-600 text-white rounded-br-none'
                                    : 'bg-white/10 text-gray-200 rounded-bl-none'
                                    }`}>
                                    <p>{m.text}</p>
                                    <span className="text-[10px] opacity-50 block text-right mt-1">
                                        {m.time?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 rounded-xl rounded-bl-none px-4 py-2 flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                                    <span className="text-xs text-gray-400">Enviando...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* FOOTER */}
                    <form onSubmit={handleSend} className="p-3 bg-[#111] border-t border-white/10 flex gap-2">
                        <input
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="Escribe un mensaje..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-lg transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            {/* FLOATING BUTTON */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center justify-center w-14 h-14 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>
        </div>
    );
}
