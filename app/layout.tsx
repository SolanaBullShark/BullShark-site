import "./globals.css";
import type { Metadata } from "next";

const site = {
  name: "The BullShark",
  ticker: "$CHUM",
  description:
    "Aggressive. Adaptable. Territorial. Built for conviction. Calm markets, violent markets—same shark, same conviction.",
  contractAddress: "B9nLmgbkW9X59xvwne1Z7qfJ46AsAmNEydMiJrgxpump",
  // Replace these with the exact links you already have:
  links: {
    buy: "", // e.g. https://jup.ag/swap/SOL-...
    telegram: "",
    dexscreener: "",
    x: ""
  },
  assets: {
    banner: "/assets/chum-banner.png",
    closeUp: "/assets/close-up.png",
    master: "/assets/bullshark-master.png",
    charge: "/assets/bullshark-charge.png",
    oceanFloor: "/assets/bullshark-ocean-floor.png",
    beach: "/assets/bullshark-beach.png",
    redCandle: "/assets/red-candle.png",
    transparent: "/assets/transparent-1.png"
  }
};

export const metadata: Metadata = {
  title: `${site.name} • ${site.ticker}`,
  description: site.description,
  icons: [{ rel: "icon", url: site.assets.closeUp }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__BULLSHARK__ = ${JSON.stringify(site)};
            `
          }}
        />
      </body>
    </html>
  );
}
