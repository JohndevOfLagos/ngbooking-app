// File: app/forgot-password/page.jsx
"use client";
import { useState } from "react";
import axios from "axios";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Request failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Send Reset Link</button>
      <p>{message}</p>
    </form>
  );
}