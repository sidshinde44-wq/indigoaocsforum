"use client";

import { useState } from "react";

export default function ResumePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Later: export to PDF or Supabase storage
    console.log("Resume Data:", formData);
    alert("Resume saved! (Feature: Export to PDF coming soon 🚀)");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Resume Builder</h1>
      <p className="text-gray-600">
        Fill in your details to build an AO&amp;CS/Ground Staff specific resume.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="education"
          placeholder="Education Details"
          value={formData.education}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows={3}
        />

        <textarea
          name="experience"
          placeholder="Work Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows={3}
        />

        <textarea
          name="skills"
          placeholder="Skills (e.g., Communication, Teamwork, Customer Service)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows={2}
        />

        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Save Resume
        </button>
      </form>
    </div>
  );
}
