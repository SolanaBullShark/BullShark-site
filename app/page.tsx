"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const CA = "B9nLmgbkW9X59xvwne1Z7qfJ46AsAmNEydMiJrgxpump";

const LINKS = {
  twitter: "https://x.com/bullshark_sol",
  telegram: "https://t.me/BullShark_Sol",
  buy: "https://pump.fun/coin/B9nLmgbkW9X59xvwne1Z7qfJ46AsAmNEydMiJrgxpump",
  dexscreener:
    "https://dexscreener.com/solana/7aqgvmeaelled2krosugpylpqcfayehwnfkstzepkh8q",
};

export default function Page() {
  const [copied, setCopied] = useState(false);

  const assets = useMemo(
    () => ({
      // IMPORTANT: these must match /public/assets EXACTLY (case-sensitive on Vercel)
      // Your repo screenshot shows lowercase .png, so keep them lowercase here.
      banner: "/assets/chum-banner.png",
      beach: "/assets/bullshark-beach.png",
      master: "/assets/bullshark-master.png",
      charge: "/assets/bullshark-charge.png",
      oceanFloor: "/assets/bullshark-ocean-floor.png",
      closeUp: "/assets/close-up.png",
      redCandle: "/assets/red-candle.png",
      transparent1: "/assets/transparent-1.png",
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
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.62), rgba(0,0,0,.92)), url(${assets.banner})`,
          // Keep the full banner visible + centered (prevents text chopping on mobile)
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                The ocean is quiet… until <span className="text-white">we</span>{" "}
                make it roar.
              </div>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                BullShark <span className="text-white/80">$CHUM</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
                This isn’t a “maybe” token. This is a{" "}
                <span className="text-white">must-be-there</span> community. When
                the tide flips bullish, BullShark doesn’t swim… he{" "}
                <span className="text-white">charges</span>.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btnPrimary"
                  href={LINKS.buy}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy $CHUM
                </a>
                <a
                  className="btnGhost"
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join The Shiver (TG)
                </a>
                <a
                  className="btnGhost"
                  href={LINKS.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  Follow on X
                </a>
                <a
                  className="btnGhost"
                  href={LINKS.dexscreener}
                  target="_blank"
                  rel="noreferrer"
                >
                  DexScreener
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-black/30 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="text-xs text-white/70">
                      Contract Address (tap copy)
                    </div>
                    <div className="mt-1 break-all font-mono text-sm text-white/90">
                      {CA}
                    </div>
                  </div>

                  <button className="btnCopy" onClick={copyCA} type="button">
                    {copied ? "Copied ✅" : "Copy CA"}
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-white/55">
                Not financial advice. DYOR. In this Shiver, we don’t beg for pumps
                — we build pressure until the chart has no choice.
              </div>
            </div>

            {/* Hero Art */}
            <div className="relative">
              <div className="cardGlow">
                {/* FIX: make the HERO image show the full words AND bullshark nicely on mobile:
                    - use object-contain (no cropping)
                    - give it a slightly wider aspect on small screens
                */}
                <div className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/5">
                  <div className="relative aspect-[16/12] sm:aspect-[4/5] w-full">
                    <Image
                      src={assets.master}
                      alt="BullShark Master"
                      fill
                      priority
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="miniCard">
                    <div className="miniTitle">The Signal</div>
                    <div className="miniCopy">
                      When fear hits the tape, we call it{" "}
                      <span className="text-white">fuel</span>.
                    </div>
                  </div>
                  <div className="miniCard">
                    <div className="miniTitle">The Mission</div>
                    <div className="miniCopy">
                      Build the loudest, strongest community on Solana —{" "}
                      <span className="text-white">then send.</span>
                    </div>
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
              <div className="statHint">
                Easy to remember. Impossible to fade.
              </div>
            </div>
            <div className="statCard">
              <div className="statLabel">Vibe</div>
              <div className="statValue">Aggressively Bullish</div>
              <div className="statHint">
                No doom-posting. No “maybe later.” Only momentum.
              </div>
            </div>
            <div className="statCard">
              <div className="statLabel">Community</div>
              <div className="statValue">The Reef</div>
              <div className="statHint">
                Early believers become legends when the ocean turns green.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY / PITCH */}
      <section className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">
              Why BullShark wins (and why you can’t miss it)
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Most projects beg for attention. BullShark{" "}
              <span className="text-white">takes it</span>. This is the spot
              where conviction links up, memes go nuclear, and the whole Shiver
              moves as one.
              <br />
              <br />
              If you’ve ever watched a run and said{" "}
              <span className="text-white">“I should’ve joined earlier”</span> —
              this is your redo.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="featureRow">
                <span className="featureDot" />
                <div>
                  <div className="featureTitle">Pressure Creates Price</div>
                  <div className="featureCopy">
                    We don’t chase pumps — we stack presence, build hype, and
                    hold like predators.
                  </div>
                </div>
              </div>

              <div className="featureRow">
                <span className="featureDot" />
                <div>
                  <div className="featureTitle">Made for Viral Moments</div>
                  <div className="featureCopy">
                    Every image hits. Every post is a flex. Every raid is a wave.
                  </div>
                </div>
              </div>

              <div className="featureRow">
                <span className="featureDot" />
                <div>
                  <div className="featureTitle">The Shiver Mentality</div>
                  <div className="featureCopy">
                    One mission: make $CHUM{" "}
                    <span className="text-white">inevitable</span>.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="btnPrimary"
                href={LINKS.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Join the Shiver (TG)
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
                <div className="text-sm font-semibold">
                  “Calm waters… until the send.”
                </div>
                <div className="mt-1 text-sm text-white/70">
                  The relaxation is bait. The breakout is the plan.
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
            <h3 className="text-2xl font-extrabold">
              Bullish visuals. Bullish believers.
            </h3>
            <p className="mt-2 text-white/70">
              Every frame says one thing:{" "}
              <span className="text-white">this Shiver is built to win.</span>
            </p>
          </div>
          <a
            className="btnGhost hidden sm:inline-flex"
            href={LINKS.buy}
            target="_blank"
            rel="noreferrer"
          >
            Lock In $CHUM
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-12">
          <GalleryCard
            className="md:col-span-7"
            img={assets.charge}
            title="The Charge"
            copy="When the market hesitates, we accelerate. That’s how legends are made."
            imgClassName="object-cover object-top"
          />

          <GalleryCard
            className="md:col-span-5"
            img={assets.closeUp}
            title="The Eyes"
            copy="The look right before the chart turns vertical and the timeline panics."
          />

          <GalleryCard
            className="md:col-span-6"
            img={assets.oceanFloor}
            title="The Apex"
            copy="Deep waters. Heavy conviction. No surface-level hands allowed."
          />

          <GalleryCard
            className="md:col-span-6"
            img={assets.redCandle}
            title="The Feast"
            copy="Red candles aren’t problems — they’re $CHUM in the water."
            imgClassName="object-cover object-top"
          />
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="ctaStrip">
        <div className="mx-auto w-full max-w-6xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h4 className="text-3xl font-extrabold">
                Don’t watch the run. Be the run.
              </h4>
              <p className="mt-3 text-white/75 leading-relaxed">
                If you’ve ever said “I wish I got in earlier”… this is the moment
                you stop saying it. Join the Shiver and move with the BullShark.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                className="btnPrimary"
                href={LINKS.buy}
                target="_blank"
                rel="noreferrer"
              >
                Buy on Pump.fun
              </a>
              <a
                className="btnGhost"
                href={LINKS.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Join Telegram
              </a>
              <a
                className="btnGhost"
                href={LINKS.twitter}
                target="_blank"
                rel="noreferrer"
              >
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
              <div className="break-all font-mono text-sm text-white/90">
                {CA}
              </div>
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
            © {new Date().getFullYear()} BullShark • $CHUM • Built for the Shiver
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="footerLink"
              href={LINKS.twitter}
              target="_blank"
              rel="noreferrer"
            >
              X / Twitter
            </a>
            <a
              className="footerLink"
              href={LINKS.telegram}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              className="footerLink"
              href={LINKS.dexscreener}
              target="_blank"
              rel="noreferrer"
            >
              DexScreener
            </a>
            <a
              className="footerLink"
              href={LINKS.buy}
              target="_blank"
              rel="noreferrer"
            >
              Buy
            </a>
          </div>
        </div>

        <div className="mt-4 text-xs text-white/45">
          Not financial advice. Crypto is risky. Only invest what you can afford
          to lose.
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
  imgClassName = "object-cover",
}: {
  img: string;
  title: string;
  copy: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-white/15 bg-white/5 ${className}`}
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={img}
          alt={title}
          fill
          className={imgClassName}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5">
        <div className="text-base font-bold">{title}</div>
        <div className="mt-1 text-sm text-white/70">{copy}</div>
      </div>
    </div>
  );
}
