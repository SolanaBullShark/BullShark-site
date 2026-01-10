"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const CA = "B9nLmgbkW9X59xvwne1Z7qfJ46AsAmNEydMiJrgxpump";

const LINKS = {
  twitter: "https://x.com/bullshark_sol",
  telegram: "https://t.me/BullShark_Sol",
  buy: "https://pump.fun/coin/B9nLmgbkW9X59xvwne1Z7qfJ46AsAmNEydMiJrgxpump",
  dexscreener: "https://dexscreener.com/solana/7aqgvmeaelled2krosugpylpqcfayehwnfkstzepkh8q",
};

export default function Page() {
  const [copied, setCopied] = useState(false);

  const assets = useMemo(
    () => ({
      // IMPORTANT: keep these EXACTLY matching your filenames in /public/assets (including .PNG caps if that’s how you saved them)
      banner: "/assets/chum-banner.PNG",
      beach: "/assets/bullshark-beach.PNG",
      master: "/assets/bullshark-master.PNG",
      charge: "/assets/bullshark-charge.PNG",
      oceanFloor: "/assets/bullshark-ocean-floor.PNG",
      closeUp: "/assets/close-up.PNG",
      redCandle: "/assets/red-candle.PNG",
      transparent1: "/assets/transparent-1.PNG",

      // If you want them later (they look realistic, so safe), just uncomment in the gallery:
      // fish1: "/assets/fish-1.PNG",
      // fish2: "/assets/fish-2.PNG",
      // fish3: "/assets/fish-3.PNG",
    }),
    []
  );

  async function copyCA() {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = CA;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    }
  }

  return (
    <main className="min-h-screen text-white">
      {/* HERO */}
      <section
        className="heroBanner"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.70), rgba(0,0,0,.92)), url(${assets.banner})`,
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                The ocean is quiet… until it isn’t.
              </div>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                BullShark <span className="text-white/80">$CHUM</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
                This isn’t a “maybe” token. This is a <span className="text-white">conviction</span> token.
                When the tide turns bullish, BullShark doesn’t swim… he <span className="text-white">charges</span>.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btnPrimary" href={LINKS.buy} target="_blank" rel="noreferrer">
                  Buy $CHUM
                </a>
                <a className="btnGhost" href={LINKS.telegram} target="_blank" rel="noreferrer">
                  Join Telegram
                </a>
                <a className="btnGhost" href={LINKS.twitter} target="_blank" rel="noreferrer">
                  Follow on X
                </a>
                <a className="btnGhost" href={LINKS.dexscreener} target="_blank" rel="noreferrer">
                  DexScreener
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-black/30 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="text-xs text-white/70">Contract Address (tap copy)</div>
                    <div className="mt-1 break-all font-mono text-sm text-white/90">{CA}</div>
                  </div>

                  <button className="btnCopy" onClick={copyCA} type="button">
                    {copied ? "Copied ✅" : "Copy CA"}
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-white/55">
                Not financial advice. DYOR. The BullShark eats fear and spits momentum.
              </div>
            </div>

            {/* Hero Art */}
            <div className="relative">
              <div className="cardGlow">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-white/5">
                  <Image
                    src={assets.master}
                    alt="BullShark Master"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="miniCard">
                    <div className="miniTitle">The Signal</div>
                    <div className="miniCopy">When this candle turns green, the ocean turns violent.</div>
                  </div>
                  <div className="miniCard">
                    <div className="miniTitle">The Mission</div>
                    <div className="miniCopy">Build the strongest community on the reef. Period.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats strip */}
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            <div className="statCard">
              <div className="statLabel">Ticker</div>
              <div className="statValue">$CHUM</div>
              <div className="statHint">Easy to remember. Impossible to ignore.</div>
            </div>
            <div className="statCard">
              <div className="statLabel">Vibe</div>
              <div className="statValue">Relentlessly Bullish</div>
              <div className="statHint">No doom-posting. No weak hands worship.</div>
            </div>
            <div className="statCard">
              <div className="statLabel">Community</div>
              <div className="statValue">The Reef</div>
              <div className="statHint">If you’re here early, you’re already winning.</div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY / PITCH */}
      <section className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Why BullShark wins</h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Most projects beg for attention. BullShark <span className="text-white">takes it</span>.
              This is the place where believers link up, build loud, and move as one.
              If you’ve been waiting for a community that feels like a signal — welcome home.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="featureRow">
                <span className="featureDot" />
                <div>
                  <div className="featureTitle">The Chart Loves Confidence</div>
                  <div className="featureCopy">We don’t chase pumps — we create pressure and hold the line.</div>
                </div>
              </div>

              <div className="featureRow">
                <span className="featureDot" />
                <div>
                  <div className="featureTitle">Built for Viral Moments</div>
                  <div className="featureCopy">Memes + presence + a banner that hits like a hook.</div>
                </div>
              </div>

              <div className="featureRow">
                <span className="featureDot" />
                <div>
                  <div className="featureTitle">The Reef Mentality</div>
                  <div className="featureCopy">One mission: make $CHUM impossible to fade.</div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btnPrimary" href={LINKS.telegram} target="_blank" rel="noreferrer">
                Join the Reef (TG)
              </a>
              <button className="btnGhost" onClick={copyCA} type="button">
                {copied ? "CA Copied ✅" : "Copy CA"}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={assets.beach}
                  alt="BullShark Beach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold">“Relaxed… until the pump hits.”</div>
                <div className="mt-1 text-sm text-white/70">
                  The calm is bait. The move is inevitable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold">Bullish visuals. Bullish energy.</h3>
            <p className="mt-2 text-white/70">
              Every frame is a message: <span className="text-white">we’re here to run it up.</span>
            </p>
          </div>
          <a className="btnGhost hidden sm:inline-flex" href={LINKS.buy} target="_blank" rel="noreferrer">
            Get $CHUM Now
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-12">
          <GalleryCard
            className="md:col-span-7"
            img={assets.charge}
            title="The Charge"
            copy="When the market flinches, BullShark accelerates."
          />

          <GalleryCard
            className="md:col-span-5"
            img={assets.closeUp}
            title="The Stare"
            copy="That look you make right before the candle goes vertical."
          />

          <GalleryCard
            className="md:col-span-6"
            img={assets.oceanFloor}
            title="The Apex"
            copy="Deep waters. Heavy conviction. No surface-level hands."
          />

          <GalleryCard
            className="md:col-span-6"
            img={assets.redCandle}
            title="The Bite"
            copy="Every dip is just more $CHUM in the water."
          />
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="ctaStrip">
        <div className="mx-auto w-full max-w-6xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h4 className="text-3xl font-extrabold">Don’t watch the run. Be the run.</h4>
              <p className="mt-3 text-white/75 leading-relaxed">
                If you’ve ever said “I wish I got in earlier”… this is the moment you stop saying it.
                Join the Reef and move with the BullShark.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a className="btnPrimary" href={LINKS.buy} target="_blank" rel="noreferrer">
                Buy on Pump.fun
              </a>
              <a className="btnGhost" href={LINKS.telegram} target="_blank" rel="noreferrer">
                Join Telegram
              </a>
              <a className="btnGhost" href={LINKS.twitter} target="_blank" rel="noreferrer">
                Follow X
              </a>
              <button className="btnCopy" onClick={copyCA} type="button">
                Copy CA
              </button>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 bg-black/35 p-4">
            <div className="text-xs text-white/60">Mint / CA</div>
            <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="break-all font-mono text-sm text-white/90">{CA}</div>
              <button className="btnGhost" onClick={copyCA} type="button">
                {copied ? "Copied ✅" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto w-full max-w-6xl px-5 pb-12 pt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/65">
            © {new Date().getFullYear()} BullShark • $CHUM • Built for the Reef
          </div>

          <div className="flex flex-wrap gap-3">
            <a className="footerLink" href={LINKS.twitter} target="_blank" rel="noreferrer">
              X / Twitter
            </a>
            <a className="footerLink" href={LINKS.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a className="footerLink" href={LINKS.dexscreener} target="_blank" rel="noreferrer">
              DexScreener
            </a>
            <a className="footerLink" href={LINKS.buy} target="_blank" rel="noreferrer">
              Buy
            </a>
          </div>
        </div>

        <div className="mt-4 text-xs text-white/45">
          Not financial advice. Crypto is risky. Only invest what you can afford to lose.
        </div>
      </footer>
    </main>
  );
}

function GalleryCard({
  img,
  title,
  copy,
  className = "",
}: {
  img: string;
  title: string;
  copy: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-white/15 bg-white/5 ${className}`}>
      <div className="relative aspect-[16/10] w-full">
        <Image src={img} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="p-5">
        <div className="text-base font-bold">{title}</div>
        <div className="mt-1 text-sm text-white/70">{copy}</div>
      </div>
    </div>
  );
}
