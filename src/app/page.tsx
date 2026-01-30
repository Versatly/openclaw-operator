"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import Integrations from "@/components/Integrations";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to actual waitlist API
    console.log("Waitlist signup:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="gradient-bg grid-pattern min-h-screen">
      <Header />
      <Hero email={email} setEmail={setEmail} onSubmit={handleSubmit} submitted={submitted} />
      <Features />
      <UseCases />
      <Pricing />
      <Integrations />
      <Waitlist email={email} setEmail={setEmail} onSubmit={handleSubmit} submitted={submitted} />
      <Footer />
    </main>
  );
}
