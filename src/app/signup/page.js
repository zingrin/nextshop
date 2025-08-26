"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!user.name || !user.email || !user.password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      alert("Account created successfully! Please login.");
      router.push("/signin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-amber-600">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-amber-500"/>
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-amber-500"/>
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} autoComplete="new-password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-amber-500"/>
        <button type="submit" disabled={loading}
          className="w-full py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      {/* 👇 Sign In link */}
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/signin" className="text-amber-600 font-medium hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
