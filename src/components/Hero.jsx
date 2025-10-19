import Image from "next/image";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      id="about"
      className="relative overflow-hidden"
    >
      {/* container — dilebarkan biar nama muat satu baris */}
      <div className="mx-auto w-full max-w-[1360px] px-6 md:px-10 mr-7">
        {/* layout: text | photo */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_431px] items-center gap-12">
          {/* LEFT: headings + socials */}
          <div className="w-full md:pr-10 -mt-60">
            {/* row: "Hi! I am" | pill */}
            <div className="grid grid-cols-[auto_max-content] items-end gap-8">
              <span className="whitespace-nowrap font-aeonik-trial text-[96px] font-bold leading-[105.6px] text-[#A8DADC] tracking-[-0.02em]">
                Hi! I am
              </span>

              {/* Pill + mascot */}
              <div className="relative h-[215px] w-[402px]">
                <div className="absolute -top-[1px] left-1/2 -translate-x-1/2">
                  <Image
                    src="/jet.svg"
                    alt="Jet mascot"
                    width={137}
                    height={137}
                    priority
                  />
                </div>

                <div className="absolute bottom-0 left-1/2 w-[386px] -translate-x-1/2">
                  <div className="flex h-[100px] items-center justify-between rounded-[50px] bg-[#98C1D9] px-8">
                    <span className="font-aeonik-trial text-[48px] font-bold uppercase text-white tracking-[-0.02em] leading-[1]">
                      Programmer
                    </span>
                    <div className="flex h-[60px] w-[73px] items-center justify-center overflow-hidden rounded-[20px]">
                      <Image
                        src="/React.gif"
                        alt="React logo animation"
                        width={73}
                        height={60}
                        className="h-full w-full object-cover"
                        priority
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* nama besar — JANGAN wrap */}
            <h1
              id="hero-heading"
              className="mt-4 font-aeonik-trial text-[96px] font-bold leading-[105.6px] tracking-[-0.02em] text-[#F9F9F9] whitespace-nowrap"
            >
              Jonah Setiawan
            </h1>

            <p className="mt-4 max-w-[520px] text-lg text-white/75">
              Passionate about crafting seamless websites and interfaces. Let's
              create something amazing together!
            </p>

            <div className="mt-6 flex items-center gap-6">
              <Image
                src="/sosmedIcon/instagram.svg"
                alt="Instagram"
                width={50}
                height={50}
                priority
              />
              <Image
                src="/sosmedIcon/github.svg"
                alt="GitHub"
                width={50}
                height={50}
              />
              <Image
                src="/sosmedIcon/linkedin.svg"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </div>
          </div>

          {/* RIGHT: photo*/}
          <div className="relative w-full max-w-[600px] h-[800px] place-self-end md:place-self-auto -ml-8">
            <Image
              src="/mojoHero.png"
              alt="Jonah Setiawan portrait"
              fill
              sizes="(max-width: 768px) 90vw, 600px"
              priority
              className="object-cover object-top select-none"
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* wave footer */}
      <div className="w-full absolute bottom-8 left-0 z-10">
        <Image
          src="/wave/waveHero.svg"
          alt=""
          width={1920}
          height={220}
          priority
          className="h-auto w-full select-none"
        />
      </div>
    </section>
  );
}
