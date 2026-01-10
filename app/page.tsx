"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type SiteConfig = {
  name: string;
  ticker: string;
  description: string;
  contractAddress: string;
  links: { buy: string; telegram: string; dexscreener: string; x: string };
  assets: {
    banner: string;
    closeUp: string;
    master: string;
    charge: string;
    oceanFloor: string;
    beach: string;
    redCandle: string;
    transparent: string;
  };
};

function getSite(): SiteConfig {
  // @ts-ignore
  return (typeof window !== "undefined" && window.__BULLSHARK__) || null;
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function safeLink(href: string) {
  return href && href.trim().length > 0;
}

export default function Page() {
  const site = useMemo(() => getSite(), []);
  const [copied, setCopied] = useState(false);

  if (!site) return null;

  const heroButtons = [
    {
      label: "Copy CA",
      onClick: async () => {
        try {
          await navigator.clipboard.writeText(site.contractAddress);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch {
          // fallback prompt if clipboard blocked
          window.prompt("Copy Contract Address:", site.contractAddress);
        }
      }
    },
    safeLink(site.links.buy)
      ? { label: "Buy", href: site.links.buy }
      : null,
    safeLink(site.links.telegram)
      ? { label: "Join TG", href: site.links.telegram }
      : null,
    safeLink(site.links.dexscreener)
      ? { label: "Dexscreener", href: site.links.dexscreener }
      : null,
    safeLink(site.links.x) ? { label: "X", href: site.links.x } : null
  ].filter(Boolean) as Array<
    { label: string; onClick: () => void } | { label: string; href: string }
  >;

  const gallery = [
    { src: site.assets.master, title: "Master" },
    { src: site.assets.charge, title: "Charge" },
    { src: site.assets.oceanFloor, title: "Ocean Floor" },
    { src: site.assets.beach, title: "Beach" },
    { src: site.assets.closeUp, title: "Close Up" },
    { src: site.assets.redCandle, title: "Red Candle" }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="hero-bg">
          <Image
            src={site.assets.banner}
            alt="BullShark Banner"
            fill
            priority
            className="object-cover"
          />
          <div className="hero-vignette" />
          <div className="hero-grid" />
        </div>

        <header className="mx-auto max-w-6xl px-5 pt-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="logo">
                <Image
                  src={site.assets.closeUp}
                  alt="BullShark Icon"
                  width={44}
                  height={44}
                  className="rounded-xl"
                />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-semibold">{site.name}</div>
                <div className="text-sm text-white/70">{site.ticker}</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              {safeLink(site.links.telegram) && (
                <a className="navlink" href={site.links.telegram} target="_blank" rel="noreferrer">
                  Telegram
                </a>
              )}
              {safeLink(site.links.dexscreener) && (
                <a className="navlink" href={site.links.dexscreener} target="_blank" rel="noreferrer">
                  Dexscreener
                </a>
              )}
              {safeLink(site.links.x) && (
                <a className="navlink" href={site.links.x} target="_blank" rel="noreferrer">
                  X
                </a>
              )}
              {safeLink(site.links.buy) && (
                <a className="navlink navlink-cta" href={site.links.buy} target="_blank" rel="noreferrer">
                  Buy
                </a>
              )}
            </div>
          </nav>
        </header>

        <div className="mx-auto max-w-6xl px-5 pb-14 pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] items-center">
            <div>
              <div className="chip">
                <span className="dot" />
                There’s something in the water…
              </div>

              <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight">
                {site.name}
                <span className="block text-white/80 mt-2">{site.ticker}</span>
              </h1>

              <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">
                {site.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {heroButtons.map((b) => {
                  if ("onClick" in b) {
                    return (
                      <button
                        key={b.label}
                        className={cn("btn", b.label === "Copy CA" && "btn-primary")}
                        onClick={b.onClick}
                      >
                        {copied && b.label === "Copy CA" ? "Copied ✅" : b.label}
                      </button>
                    );
                  }
                  return (
                    <a
                      key={b.label}
                      className={cn("btn", b.label === "Buy" && "btn-primary")}
                      href={b.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {b.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60 uppercase tracking-wider">
                  Contract Address
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <code className="text-sm text-white/85 break-all">
                    {site.contractAddress}
                  </code>
                  <button
                    className="btn btn-ghost"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(site.contractAddress);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1200);
                      } catch {
                        window.prompt("Copy Contract Address:", site.contractAddress);
                      }
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-white/55">
                Not financial advice. DYOR. 🩸
              </div>
            </div>

            <div className="relative">
              <div className="card">
                <div className="card-inner">
                  <Image
                    src={site.assets.oceanFloor}
                    alt="BullShark Ocean Floor"
                    width={900}
                    height={900}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                  <div className="card-glow" />
                </div>
              </div>
              <div className="floating-badge">
                <Image
                  src={site.assets.closeUp}
                  alt="BullShark Badge"
                  width={46}
                  height={46}
                  className="rounded-xl"
                />
                <div>
                  <div className="text-sm font-semibold">Apex Mode</div>
                  <div className="text-xs text-white/65">No mercy on red candles.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">BullShark Visuals</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Built around your art style: gritty, cinematic, and aggressive. No goofy assets.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <div key={g.title} className="tile">
              <div className="tile-img">
                <Image
                  src={g.src}
                  alt={g.title}
                  width={1200}
                  height={1200}
                  className="w-full h-auto"
                />
              </div>
              <div className="tile-cap">
                <span>{g.title}</span>
                <span className="pill">{site.ticker}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO BUY */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="panel">
          <div className="panel-left">
            <h2 className="text-2xl sm:text-3xl font-bold">How to Buy</h2>
            <p className="mt-2 text-white/70">
              Simple, fast, and degen-proof.
            </p>

            <ol className="mt-6 steps">
              <li>
                <div className="step-num">1</div>
                <div>
                  <div className="step-title">Get SOL</div>
                  <div className="step-sub">Fund your wallet with SOL for gas + swap.</div>
                </div>
              </li>
              <li>
                <div className="step-num">2</div>
                <div>
                  <div className="step-title">Open your swap</div>
                  <div className="step-sub">
                    Use Jupiter/Raydium/your preferred route. (Button below if you added it.)
                  </div>
                </div>
              </li>
              <li>
                <div className="step-num">3</div>
                <div>
                  <div className="step-title">Paste CA</div>
                  <div className="step-sub">
                    Use the contract address above—verify the token before swapping.
                  </div>
                </div>
              </li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              {safeLink(site.links.buy) ? (
                <a className="btn btn-primary" href={site.links.buy} target="_blank" rel="noreferrer">
                  Buy {site.ticker}
                </a>
              ) : (
                <div className="hint">
                  Add your Buy link in <code>app/layout.tsx</code> → <code>links.buy</code>
                </div>
              )}
              {safeLink(site.links.dexscreener) ? (
                <a className="btn" href={site.links.dexscreener} target="_blank" rel="noreferrer">
                  View Chart
                </a>
              ) : (
                <div className="hint">
                  Add Dexscreener link in <code>links.dexscreener</code>
                </div>
              )}
            </div>
          </div>

          <div className="panel-right">
            <div className="monster">
              <Image
                src={site.assets.charge}
                alt="BullShark Charge"
                width={1000}
                height={1200}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="mini">
              <div className="mini-left">
                <div className="mini-title">Signature Move</div>
                <div className="mini-sub">Bites red candles.</div>
              </div>
              <Image
                src={site.assets.redCandle}
                alt="Red Candle"
                width={120}
                height={120}
                className="mini-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <details className="faq" open>
            <summary>What is {site.ticker}?</summary>
            <p>
              A meme token powered by pure conviction and brutal aesthetics. The brand is the weapon.
            </p>
          </details>
          <details className="faq">
            <summary>Where’s the contract address?</summary>
            <p>
              Right in the hero section. Use “Copy CA” and paste into your swap—always verify.
            </p>
          </details>
          <details className="faq">
            <summary>Why no fish?</summary>
            <p>
              You said it: only realistic fish—so we’re not using any fish assets at all.
            </p>
          </details>
          <details className="faq">
            <summary>How do I add links?</summary>
            <p>
              Open <code>app/layout.tsx</code> and set <code>links.buy</code>, <code>links.telegram</code>, <code>links.dexscreener</code>, <code>links.x</code>.
            </p>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="text-white/70 text-sm">
            © {new Date().getFullYear()} {site.name}. Built to hunt.
          </div>
          <div className="flex items-center gap-3">
            {safeLink(site.links.telegram) && (
              <a className="navlink" href={site.links.telegram} target="_blank" rel="noreferrer">
                Telegram
              </a>
            )}
            {safeLink(site.links.x) && (
              <a className="navlink" href={site.links.x} target="_blank" rel="noreferrer">
                X
              </a>
            )}
            {safeLink(site.links.dexscreener) && (
              <a className="navlink" href={site.links.dexscreener} target="_blank" rel="noreferrer">
                Dexscreener
              </a>
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}
