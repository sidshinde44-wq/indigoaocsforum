"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    }
    getUser();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome{user ? `, ${user.email}` : ""} 👋
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">📄 OL Timeline</div>
        <div className="p-4 border rounded shadow">📑 Resume for AO&CS/Groundstaff</div>
        <div className="p-4 border rounded shadow">🎤 Interview Prep 1v1</div>
        <div className="p-4 border rounded shadow">📊 Basic Assessment Score</div>
      </div>
    </div>
  );
}
