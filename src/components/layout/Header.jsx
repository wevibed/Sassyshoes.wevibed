import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "Shop", to: "/shop" },
  { label: "New Arrivals", target: "new-arrivals" },
  { label: "Collections", target: "collections" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (target) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(target), 120);
    } else {
      scrollToId(target);
    }
  };

  const renderItem = (n, className = "") => {
    const cls = `${className} hover:text-accent transition-colors`.trim();

    return n.to ? (
      <Link
        key={n.label}
        to={n.to}
        onClick={() => setOpen(false)}
        className={cls}
      >
        {n.label}
      </Link>
    ) : (
      <button
        key={n.label}
        onClick={() => go(n.target)}
        className={cls}
      >
        {n.label}
      </button>
    );
  };

  return (
    <>
      {/* Top status bar */}
      <div className="w-full bg-foreground text-background text-center py-1.5 text-[10px] tracking-luxe uppercase">
        Boutique Status · {SITE.status}
      </div>

      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div
          className="
            max-w-[1400px] mx-auto
            px-4 md:px-10
            h-16 md:h-20
            grid
            grid-cols-[44px_minmax(0,1fr)_44px]
            md:grid-cols-3
            items-center
            relative
          "
        >
          {/* Desktop left navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] tracking-wide-luxe uppercase">
            {NAV.slice(0, 3).map((n) => renderItem(n))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center justify-start">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center w-9 h-9"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Brand */}
          <Link
            to="/"
            className="
              min-w-0
              w-full
              text-center
              font-heading
              text-[15px]
              sm:text-[17px]
              md:text-2xl
              tracking-[0.10em]
              md:tracking-[0.18em]
              font-medium
              whitespace-nowrap
              overflow-hidden
              text-ellipsis
            "
          >
            {SITE.brand}
          </Link>

          {/* Right side */}
          <div className="flex items-center justify-end gap-4 md:gap-5">
            {/* Desktop right navigation */}
            <nav className="hidden md:flex items-center gap-7 text-[11px] tracking-wide-luxe uppercase">
              {NAV.slice(3).map((n) => renderItem(n))}
            </nav>

            {/* Desktop search */}
            <button
              aria-label="Search"
              className="hidden md:flex items-center justify-center"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            {/* Shopping bag */}
            <button
              aria-label="Shopping bag"
              className="relative flex items-center justify-center w-9 h-9"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />

              <span className="absolute -top-0.5 right-0 text-[8px] leading-none">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="flex items-center justify-between px-5 h-16 border-b border-border">
            <span className="font-heading text-xl tracking-[0.18em]">
              {SITE.brand}
            </span>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center w-9 h-9"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-10 gap-5">
            {NAV.map((n) =>
              renderItem(n, "font-heading text-4xl text-left")
            )}
          </nav>

          <div className="mt-auto px-6 pb-10 text-[11px] tracking-wide-luxe uppercase text-muted-foreground">
            {SITE.addressLine1}, {SITE.addressLine2}
          </div>
        </div>
      )}
    </>
  );
    }import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "Shop", to: "/shop" },
  { label: "New Arrivals", target: "new-arrivals" },
  { label: "Collections", target: "collections" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (target) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(target), 120);
    } else {
      scrollToId(target);
    }
  };

  const renderItem = (n, className = "") => {
    const cls = `${className} hover:text-accent transition-colors`.trim();

    return n.to ? (
      <Link
        key={n.label}
        to={n.to}
        onClick={() => setOpen(false)}
        className={cls}
      >
        {n.label}
      </Link>
    ) : (
      <button
        key={n.label}
        onClick={() => go(n.target)}
        className={cls}
      >
        {n.label}
      </button>
    );
  };

  return (
    <>
      {/* Top status bar */}
      <div className="w-full bg-foreground text-background text-center py-1.5 text-[10px] tracking-luxe uppercase">
        Boutique Status · {SITE.status}
      </div>

      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div
          className="
            max-w-[1400px] mx-auto
            px-4 md:px-10
            h-16 md:h-20
            grid
            grid-cols-[44px_minmax(0,1fr)_44px]
            md:grid-cols-3
            items-center
            relative
          "
        >
          {/* Desktop left navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] tracking-wide-luxe uppercase">
            {NAV.slice(0, 3).map((n) => renderItem(n))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center justify-start">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center w-9 h-9"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Brand */}
          <Link
            to="/"
            className="
              min-w-0
              w-full
              text-center
              font-heading
              text-[15px]
              sm:text-[17px]
              md:text-2xl
              tracking-[0.10em]
              md:tracking-[0.18em]
              font-medium
              whitespace-nowrap
              overflow-hidden
              text-ellipsis
            "
          >
            {SITE.brand}
          </Link>

          {/* Right side */}
          <div className="flex items-center justify-end gap-4 md:gap-5">
            {/* Desktop right navigation */}
            <nav className="hidden md:flex items-center gap-7 text-[11px] tracking-wide-luxe uppercase">
              {NAV.slice(3).map((n) => renderItem(n))}
            </nav>

            {/* Desktop search */}
            <button
              aria-label="Search"
              className="hidden md:flex items-center justify-center"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            {/* Shopping bag */}
            <button
              aria-label="Shopping bag"
              className="relative flex items-center justify-center w-9 h-9"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />

              <span className="absolute -top-0.5 right-0 text-[8px] leading-none">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="flex items-center justify-between px-5 h-16 border-b border-border">
            <span className="font-heading text-xl tracking-[0.18em]">
              {SITE.brand}
            </span>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center w-9 h-9"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-10 gap-5">
            {NAV.map((n) =>
              renderItem(n, "font-heading text-4xl text-left")
            )}
          </nav>

          <div className="mt-auto px-6 pb-10 text-[11px] tracking-wide-luxe uppercase text-muted-foreground">
            {SITE.addressLine1}, {SITE.addressLine2}
          </div>
        </div>
      )}
    </>
  );
              } { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "Shop", to: "/shop" },
  { label: "New Arrivals", target: "new-arrivals" },
  { label: "Collections", target: "collections" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (target) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(target), 120);
    } else {
      scrollToId(target);
    }
  };

  const renderItem = (n, className = "") => {
    const cls = `${className} hover:text-accent transition-colors`.trim();
    return n.to ? (
      <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className={cls}>
        {n.label}
      </Link>
    ) : (
      <button key={n.label} onClick={() => go(n.target)} className={cls}>
        {n.label}
      </button>
    );
  };
lex items-center justify-end gap-4 md:gap-5">
            <nav className="hidden md:flex items-center gap-7 text-[11px] tracking-wide-luxe uppercase">
              {NAV.slice(3).map((n) => renderItem(n))}
            </nav>
            <button aria-label="Search" className="hidden md:block">
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button aria-label="Shopping bag" className="relative">
              <ShoppingBag className="w-[18px] h-[18px]" />
              <span className="absolute -top-1.5 -right-2 text-[9px]">0</span>
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="flex items-center justify-between px-5 h-16 border-b border-border">
            <span className="font-heading text-xl tracking-[0.18em]">{SITE.brand}</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-10 gap-5">
            {NAV.map((n) => renderItem(n, "font-heading text-4xl text-left"))}
          </nav>
          <div className="mt-auto px-6 pb-10 text-[11px] tracking-wide-luxe uppercase text-muted-foreground">
            {SITE.addressLine1}, {SITE.addressLine2}
          </div>
        </div>
      )}
    </>
  );
} 
