import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1f36] text-white">
      <header
        className="w-full border-b border-[#dfd5d9]"
        style={{
          background:
            "linear-gradient(108deg, #0c1f34 0%, #253b5d 100%)",
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <Image
            src="/brand.svg"
            alt="Mojo brand"
            width={177}
            height={70}
            className="h-12 w-auto"
            priority
          />
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-14 text-lg font-semibold tracking-[0.02em]">
              <li>
                <a
                  className="transition-opacity duration-150 hover:opacity-80 focus-visible:opacity-80"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity duration-150 hover:opacity-80 focus-visible:opacity-80"
                  href="#project"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity duration-150 hover:opacity-80 focus-visible:opacity-80"
                  href="#experience"
                >
                  Experience
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex h-[calc(100vh-80px)] items-center justify-center px-6 text-center text-white/60">
        <p className="text-sm uppercase tracking-[0.3em]">
          Section content coming soon
        </p>
      </main>
    </div>
  );
}
