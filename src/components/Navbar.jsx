import Image from "next/image";

export function Navbar() {
  // Ganti angka di sini untuk geser posisi.
  // Satuan px. Negatif = ke kiri/atas, positif = ke kanan/bawah.
  const OFFSETS = {
    brand: { x: -100, y: 15 },
    nav: { x: 25, y: 15 },
  };

  return (
    <header className="relative w-full pb-1">
      {/* overlay gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-95"
        style={{
          background:
            "linear-gradient(180deg, rgba(26, 35, 50, 0.95) 0%, rgba(32, 59, 83, 0.88) 55%, rgba(40, 77, 107, 0) 100%)",
        }}
      />

      {/* container dengan tinggi tetap agar header tidak ikut turun */}
      <div
        className="relative z-10 mx-auto w-full max-w-[1206px] px-6 md:px-10"
        style={{ height: 103 }} // sesuaikan tinggi area navbar di sini
      >
        <div className="relative h-full">
          {/* BRAND: absolute di kiri, bebas digeser via transform */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: `translate(calc(${OFFSETS.brand.x}px), calc(-50% + ${OFFSETS.brand.y}px))`,
            }}
          >
            <Image
              src="/brand.svg"
              alt="Mojo brand"
              width={177}
              height={70}
              className="h-18 w-auto"
              priority
            />
          </div>

          {/* NAV: absolute di kanan, bebas digeser via transform */}
          <nav
            aria-label="Primary navigation"
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: `translate(calc(${OFFSETS.nav.x}px), calc(-50% + ${OFFSETS.nav.y}px))`,
            }}
          >
            <ul className="font-unigeo-32 flex items-center gap-22 text-lg font-semibold tracking-[0.02em]">
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
      </div>

      {/* garis bawah */}
      <div className="relative z-10 mx-auto mt-2 h-px w-full max-w-[1206px] bg-white/65" />
    </header>
  );
}
