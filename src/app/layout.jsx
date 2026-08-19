import "@/styles/globals.css";
import { siteConfig } from "@/config/siteConfig";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import CursorFollower from "@/components/ui/CursorFollower";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";

export const metadata = {
  title: `${siteConfig.brandName} | ${siteConfig.heroTitle}`,
  description: siteConfig.aboutStatement,
  icons: {
    icon: siteConfig.logoUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050507] text-[#f5f5f7] antialiased selection:bg-red-600 selection:text-white">
        <SmoothScrollProvider>
          <CursorFollower />
          <Preloader />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
