"use client";

interface HeroProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitted: boolean;
}

export default function Hero({ email, setEmail, onSubmit, submitted }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-purple-300">Now accepting early access signups</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Deploy AI Operators
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 glow-text">
              in Minutes
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            The Operator-as-a-Service platform that lets you build, deploy, and scale 
            AI operators without infrastructure headaches. Self-service automation for modern businesses.
          </p>

          {/* CTA Form */}
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-12">
            {!submitted ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Get Early Access
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>You&apos;re on the list! We&apos;ll be in touch soon.</span>
              </div>
            )}
          </form>

          <p className="text-sm text-gray-500 mb-16">
            Join 2,500+ teams waiting for early access. No credit card required.
          </p>
        </div>

        {/* Product Demo / Terminal Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="terminal rounded-2xl overflow-hidden glow animate-float">
            {/* Terminal header */}
            <div className="terminal-header px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-500 font-mono ml-4">openclaw deploy</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm">
              <div className="space-y-2">
                <p><span className="text-green-400">$</span> <span className="text-white">openclaw init my-operator</span></p>
                <p className="text-gray-500">✓ Initialized operator project</p>
                <p className="text-gray-500">✓ Created configuration files</p>
                <br />
                <p><span className="text-green-400">$</span> <span className="text-white">openclaw deploy --prod</span></p>
                <p className="text-gray-500">⠋ Building operator...</p>
                <p className="text-purple-400">✓ Operator deployed successfully!</p>
                <br />
                <p className="text-gray-400"># Your operator is now live at:</p>
                <p><span className="code-string">https://my-operator.openclaw.run</span></p>
                <br />
                <p className="text-gray-500"># Processing 12,847 requests/min</p>
                <p className="text-gray-500"># Latency: 45ms p99</p>
                <p className="text-gray-500"># Cost: $0.0012 per request</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "10M+", label: "Requests/Day" },
            { value: "<50ms", label: "Avg Latency" },
            { value: "99.99%", label: "Uptime SLA" },
            { value: "150+", label: "Integrations" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {stat.value}
              </div>
              <div className="text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
