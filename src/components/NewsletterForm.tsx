"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <div className="animate-fade-in-up text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-6 py-3">
          <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-serif text-lg text-gold">
            Thank you! We&apos;ll keep you in the loop.
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        className="flex-1 rounded-full border border-foreground/20 bg-charcoal-dark/50 px-6 py-3 text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
      />
      <button
        type="submit"
        className="rounded-full bg-gold px-8 py-3 font-semibold text-charcoal-dark transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 active:scale-95"
      >
        Notify Me
      </button>
    </form>
  );
}
