import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareHub - Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            <footer className="bg-emerald-950/80 border-t border-emerald-900/40 py-12">
              <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-300">
                {/* Brand / About */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <img
                      src="/logo.png"
                      alt="CareHub Logo"
                      className="h-8 w-8"
                    />
                    <span className="text-lg font-semibold text-white">
                      CareHub
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Connect with doctors anytime, anywhere. Simplify your
                    healthcare journey with CareHub.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/" className="hover:text-emerald-400">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/pricing" className="hover:text-emerald-400">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="hover:text-emerald-400">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="hover:text-emerald-400">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Support</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/faq" className="hover:text-emerald-400">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="/help" className="hover:text-emerald-400">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="hover:text-emerald-400">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="/privacy" className="hover:text-emerald-400">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact + Social */}
                <div>
                  <h3 className="text-white font-semibold mb-4">
                    Get in Touch
                  </h3>
                  <p className="text-sm mb-3">Email: support@carehub.com</p>
                  <div className="flex gap-4 text-lg">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      className="hover:text-emerald-400"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      className="hover:text-emerald-400"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      className="hover:text-emerald-400"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      className="hover:text-emerald-400"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-emerald-900/40 mt-8 pt-6 text-center text-sm text-gray-500">
                <p>
                  © {new Date().getFullYear()} CareHub. All rights reserved.
                </p>
                <p className="mt-1">Made with 💗 by Mahbub Alam</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
