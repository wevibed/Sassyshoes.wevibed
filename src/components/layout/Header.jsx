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

  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const go = (target) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToId(target);
      }, 120);
    } else {
      scrollToId(target);
    }
  };

  const renderItem = (item, className = "") => {
    const classes = `${className} hover:text-accent transition-colors`.trim();

    if (item.to) {
      return (
        <Link
          key={item.label}
          to={item.to}
          onClick={() => setOpen(false)}
          className={classes}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <button
        key={item.label}
        onClick={() => go(item.target)}
        className={classes}
      >
        {item.label}
      </button>
    );
  };

  return (
    <>
      {/* Top status bar */}
      <div className="w-full bg-foreground text-background text-center py-1.5 text-[10px] tracking-luxe uppercase">
        Boutique Status · {SITE.status}
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div
          className="
            max-w-[1400px]
            mx-auto
            px-4 md:px-10
            h-16 md:h-20
            grid
            grid-cols-[44px_minmax(0,1fr)_44px]
            md:grid-cols-3
            items-center
            relative
          "
        >

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center justify-start">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center w-9 h-9"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Left Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] tracking-wide-luxe uppercase">
            {NAV.slice(0, 3).map((item) => renderItem(item))}
          </nav>

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

          {/* Right Side */}
          <div className="flex items-center justify-end gap-3 md:gap-5">

            {/* Desktop Right Navigation */}
            <nav className="hidden md:flex items-center gap-7 text-[11px] tracking-wide-luxe uppercase">
              {NAV.slice(3).map((item) => renderItem(item))}
            </nav>

            {/* Desktop Search */}
            <button
              aria-label="Search"
              className="hidden md:flex items-center justify-center"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            {/* Shopping Bag */}
            <button
              aria-label="Shopping bag"
              className="relative flex items-center justify-center w-9 h-9 shrink-0"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />

              <span className="absolute -top-0.5 right-0 text-[8px] leading-none">
                0
              </span>
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
            {NAV.map((item) =>
              renderItem(
                item,
                "font-heading text-4xl text-left"
              )
            )}
          </nav>

          <div className="mt-auto px-6 pb-10 text-[11px] tracking-wide-luxe uppercase text-muted-foreground">
            {SITE.addressLine1}, {SITE.addressLine2}
          </div>

        </div>
      )}
    </>
  );
    }
