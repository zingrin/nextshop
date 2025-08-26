"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signin() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!user.email || !user.password) {
      setError("Email and password are required");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      alert(`Welcome ${data.user.name}`);
      router.push("/products"); // redirect after login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-amber-600">Sign In</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          autoComplete="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-amber-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          autoComplete="current-password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-amber-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* Register link নিচে */}
      <p className="mt-6 text-center text-gray-600">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-amber-600 font-semibold hover:underline">
          Create one
        </Link>
      </p>
    </div>
  );
}
