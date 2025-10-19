import Image from "next/image";

export function Navbar() {
  return (
    <header
      className="w-full pb-2"
      style={{
        background: "linear-gradient(108deg, #0c1f34 0%, #253b5d 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1206px] items-center justify-between px-6 py-6 md:px-10">
        <Image
          src="/brand.svg"
          alt="Mojo brand"
          width={177}
          height={70}
          className="h-12 w-auto"
          priority
        />
        <nav aria-label="Primary navigation">
          <ul className="font-unigeo-32 flex items-center gap-14 text-lg font-semibold tracking-[0.02em]">
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
      <div className="mx-auto mt-2 h-px w-full max-w-[1206px] bg-white/80" />
    </header>
  );
}
