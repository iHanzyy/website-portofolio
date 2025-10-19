import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#1a2332",
        backgroundImage:
          "radial-gradient(140% 100% at 15% 0%, rgba(152, 193, 217, 0.28) 0%, rgba(26, 35, 50, 0) 55%), radial-gradient(120% 120% at 80% 0%, rgba(37, 101, 156, 0.2) 0%, rgba(26, 35, 50, 0) 60%), linear-gradient(180deg, #1a2332 0%, #1e3a52 30%, #264d6b 70%, #2d5a7b 100%)",
      }}
    >
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
