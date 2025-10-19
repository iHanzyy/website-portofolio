import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1f36] text-white">
      <Navbar />
      <main className="flex h-[calc(100vh-80px)] items-center justify-center px-6 text-center text-white/60">
        <p className="text-sm uppercase tracking-[0.3em]">
          Section content coming soon
        </p>
      </main>
    </div>
  );
}
