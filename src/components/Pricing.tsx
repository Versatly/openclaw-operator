export default function Pricing() {
  const plans = [
    { name: "Starter", price: "$99", period: "/mo", features: ["5 AI Operators", "1,000 tasks/month", "Email support", "Basic analytics"], cta: "Join Waitlist" },
    { name: "Pro", price: "$499", period: "/mo", features: ["25 AI Operators", "10,000 tasks/month", "Priority support", "Advanced analytics", "Custom workflows", "API access"], cta: "Join Waitlist", popular: true },
    { name: "Enterprise", price: "$999", period: "/mo", features: ["Unlimited Operators", "Unlimited tasks", "24/7 dedicated support", "Custom integrations", "On-premise option", "SLA guarantee"], cta: "Contact Sales" }
  ];

  return (
    <section id="pricing" className="py-24 bg-black/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Simple, Scalable Pricing</h2>
        <p className="text-center text-white/60 mb-16">Start free. Scale as you grow.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-b from-purple-600/20 to-cyan-600/20 border-2 border-purple-500' : 'bg-white/5 border border-white/10'}`}>
              {plan.popular && <span className="text-sm bg-purple-500 px-3 py-1 rounded-full">Most Popular</span>}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="my-4"><span className="text-5xl font-bold">{plan.price}</span><span className="text-white/60">{plan.period}</span></div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => <li key={j} className="flex items-center gap-2"><span className="text-cyan-400">✓</span>{f}</li>)}
              </ul>
              <a href="#waitlist" className={`block text-center py-3 rounded-lg font-semibold ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-cyan-500' : 'border border-white/20 hover:bg-white/10'}`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
