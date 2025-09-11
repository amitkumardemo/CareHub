"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import './Contact.css';

export default function ContactPage() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_KEY); // ✅ from .env.local

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-emerald-950/90 py-16 px-6 text-white flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight title-box">
            Get in touch
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Let’s talk about your health journey
            </h2>
            <p className="text-gray-300 mb-8">
              At <span className="text-emerald-400 font-semibold">CareHub</span>,
              we’re here to support you every step of the way. Reach out for
              appointments, inquiries, or collaborations.
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <Mail className="text-emerald-400" />
                support@carehub.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-emerald-400" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-emerald-400" />
                Bhubaneswar, Odisha
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-emerald-900/40 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-300">
              Request a Callback
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="First Name"
                  className="w-full p-3 rounded-lg bg-emerald-950/40 border border-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Last Name"
                  className="w-full p-3 rounded-lg bg-emerald-950/40 border border-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-emerald-950/40 border border-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message here..."
                className="w-full p-3 rounded-lg bg-emerald-950/40 border border-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>

            {result && (
              <p className="text-center mt-4 text-emerald-400 font-medium">
                {result}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
