// File: app/reset-password/page.jsx
"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return setMessage("Passwords do not match");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/reset-password", { token, newPassword: password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Reset failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} required />
      <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
      <button type="submit">Reset Password</button>
      <p>{message}</p>
    </form>
  );
}
