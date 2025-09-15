"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthLayout() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-6 border-b pb-2">
            <button
              onClick={() => setActiveTab("login")}
              className={`text-lg font-medium ${
                activeTab === "login"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`text-lg font-medium ${
                activeTab === "register"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Register
            </button>
          </div>

          {/* Show login or register form */}
          {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </body>
    </html>
  );
}

// ------------------ Login Form ------------------
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError(error.message);
    else router.push("/dashboard"); // ✅ redirect
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        className="border rounded-md px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border rounded-md px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}

// ------------------ Register Form ------------------
function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name }, // save user metadata
      },
    });

    if (error) setError(error.message);
    else router.push("/dashboard"); // ✅ redirect
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Full Name"
        className="border rounded-md px-3 py-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="border rounded-md px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border rounded-md px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
      >
        Register
      </button>
    </form>
  );
}
