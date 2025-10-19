import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1f36] text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
