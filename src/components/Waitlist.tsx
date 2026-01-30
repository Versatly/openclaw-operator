interface WaitlistProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitted: boolean;
}

export default function Waitlist({ email, setEmail, onSubmit, submitted }: WaitlistProps) {
  return (
    <section id="waitlist" className="py-24 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Get Early Access</h2>
        <p className="text-white/60 mb-8">Be first to deploy AI operators that work 24/7. Limited spots available.</p>
        {submitted ? (
          <div className="text-cyan-400 text-xl">🎉 You&apos;re on the list! We&apos;ll notify you when we launch.</div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email" required className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 focus:border-cyan-400 outline-none flex-1 max-w-md" value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">Join Waitlist</button>
          </form>
        )}
        <p className="text-white/40 text-sm mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
