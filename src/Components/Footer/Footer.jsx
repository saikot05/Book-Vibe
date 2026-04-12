import { Link } from "react-router";
import { BookOpen, Home, BookMarked, FileText, Info, Shield, ScrollText } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", to: "/", icon: <Home size={14} /> },
    { label: "Books", to: "/books", icon: <BookMarked size={14} /> },
    { label: "Pages to Read", to: "/pages-to-read", icon: <FileText size={14} /> },
  ];

  const supportLinks = [
    { label: "About Us", to: "/", icon: <Info size={14} /> },
    { label: "Privacy Policy", to: "/", icon: <Shield size={14} /> },
    { label: "Terms of Use", to: "/", icon: <ScrollText size={14} /> },
  ];

  return (
    <footer className="bg-neutral border-t border-neutral-content/10">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 border-b border-neutral-content/10">

          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-3 justify-center sm:justify-start">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shrink-0">
                <BookOpen size={16} className="text-neutral" />
              </div>
              <h2
                className="text-xl font-bold text-neutral-content"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Book<span className="text-amber-500">Vibe</span>
              </h2>
            </div>
            <p className="text-sm text-neutral-content/50 leading-relaxed max-w-[220px] mx-auto sm:mx-0">
              Discover books, track your reading journey, and find your next favourite story.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <p className="text-[10px] uppercase tracking-widest text-neutral-content/40 font-medium mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, to, icon }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-sm text-neutral-content/60 hover:text-amber-500 transition-colors duration-200"
                  >
                    {icon}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start lg:items-center">
            <p className="text-[10px] uppercase tracking-widest text-neutral-content/40 font-medium mb-4">
              Support
            </p>
            <ul className="flex flex-col gap-3">
              {supportLinks.map(({ label, to, icon }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-sm text-neutral-content/60 hover:text-amber-500 transition-colors duration-200"
                  >
                    {icon}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <p className="text-xs text-neutral-content/30 text-center sm:text-left">
            © 2026 <span className="text-neutral-content/60 font-medium">BookVibe</span>. All rights reserved.
          </p>
          <div className="flex gap-2 flex-wrap justify-center">
            {["📚 Read More", "✨ Discover", "🎯 Track"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-neutral-content/50 bg-neutral-content/5 border border-neutral-content/10 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;