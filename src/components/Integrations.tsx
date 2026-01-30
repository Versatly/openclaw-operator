export default function Integrations() {
  const integrations = ["Slack", "Discord", "Notion", "GitHub", "Jira", "Salesforce", "HubSpot", "Zapier", "Gmail", "Calendar", "Sheets", "Airtable"];
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Connects With Your Favorite Tools</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((name, i) => (
            <div key={i} className="px-6 py-3 bg-white/5 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
