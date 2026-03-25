import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Electra - Future of Electronic Devices',
  description: 'Discover cutting-edge smartphones, smartwatches, and audio devices from Electra. Experience innovation, quality, and seamless technology.',
  keywords: ["electronics, smartphones, smartwatches, headphones, laptops, tech, gadgets, innovation, Electra"],
  openGraph: {
    "title": "Electra - Future of Electronic Devices",
    "description": "Discover cutting-edge smartphones, smartwatches, and audio devices from Electra. Experience innovation, quality, and seamless technology.",
    "url": "https://www.electra.com",
    "siteName": "Electra",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/a-sleek-futuristic-electronic-device-pos-1774437041328-2785c23a.png",
        "alt": "Electra electronic devices"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Electra - Future of Electronic Devices",
    "description": "Discover cutting-edge smartphones, smartwatches, and audio devices from Electra. Experience innovation, quality, and seamless technology.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BR0w2hiKRPdp3zd2fStDSD9hR0/a-sleek-futuristic-electronic-device-pos-1774437041328-2785c23a.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
