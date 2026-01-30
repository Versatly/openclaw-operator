const useCases = [
  {
    title: "Customer Support",
    description: "Deploy AI operators that handle support tickets, answer FAQs, and escalate complex issues to humans.",
    image: "🎧",
    stats: "70% ticket reduction",
    code: `operator.on("ticket", async (ctx) => {
  const intent = await ctx.classify();
  if (intent.confidence > 0.9) {
    return ctx.autoResolve();
  }
  return ctx.escalate("human");
});`,
  },
  {
    title: "Data Processing",
    description: "Build operators that extract, transform, and analyze data from any source at massive scale.",
    image: "📊",
    stats: "10x faster processing",
    code: `operator.pipeline([
  extract("documents/*"),
  transform(async (doc) => ({
    summary: await ai.summarize(doc),
    entities: await ai.extract(doc)
  })),
  load("warehouse")
]);`,
  },
  {
    title: "Sales Automation",
    description: "Create operators that qualify leads, schedule meetings, and personalize outreach at scale.",
    image: "📈",
    stats: "3x more meetings",
    code: `operator.on("lead", async (ctx) => {
  const score = await ctx.qualify(lead);
  if (score > 80) {
    await ctx.enrichProfile();
    await ctx.sendSequence("high-intent");
  }
});`,
  },
  {
    title: "Content Generation",
    description: "Deploy operators that create, edit, and publish content across all your channels automatically.",
    image: "✍️",
    stats: "100x content output",
    code: `operator.schedule("daily", async () => {
  const topics = await trending.fetch();
  const content = await ai.generate({
    topics, tone: "professional"
  });
  await publish.all(content);
});`,
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              every use case
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From customer support to data pipelines, OpenClaw operators power automation across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`gradient-border rounded-2xl overflow-hidden card-hover ${
                index % 2 === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{useCase.image}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{useCase.title}</h3>
                      <span className="text-sm text-purple-400">{useCase.stats}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{useCase.description}</p>

                {/* Code preview */}
                <div className="terminal rounded-xl overflow-hidden">
                  <div className="terminal-header px-3 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-gray-500 font-mono">operator.ts</span>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-x-auto">
                    <code className="text-gray-300">{useCase.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
