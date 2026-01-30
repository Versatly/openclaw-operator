export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">OpenClaw Operator</div>
        <div className="text-white/40 text-sm">© {new Date().getFullYear()} OpenClaw Operator. All rights reserved.</div>
      </div>
    </footer>
  );
}
