import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const syne = Syne({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Fast2Lend - Fast Loan Provider USA",
  description: "Get quick loans from $100 to $5000 USD. Fast2Lend provides instant loan solutions across the United States with minimal documentation and quick approval.",
  keywords: "fast loans, quick loans, personal loan, instant loan, USA loan, $100 loan, $5000 loan",
  authors: [{ name: "Fast2Lend" }],
  openGraph: {
    title: "Fast2Lend - Fast Loan Provider USA",
    description: "Get quick loans from $100 to $5000 USD. Instant approval and fast disbursement.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* CSS Files */}
        <link rel="stylesheet" href="/assets/fonts/flaticon/flaticon_ensuran.css" />
        <link rel="stylesheet" href="/assets/fonts/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/magnific-popup/dist/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendor/slick/slick.css" />
        <link rel="stylesheet" href="/assets/vendor/nice-select/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/vendor/animate.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={`${dmSans.variable} ${syne.variable}`}>
        {children}
        
        {/* JavaScript Files */}
        <Script src="/assets/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/popper/popper.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/bootstrap/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/slick/slick.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/magnific-popup/dist/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/jquery.counterup.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/jquery.waypoints.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/nice-select/js/jquery.nice-select.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/wow.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/theme.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}