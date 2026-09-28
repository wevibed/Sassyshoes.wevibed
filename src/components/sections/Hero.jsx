import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

const HERO_IMAGE = "/sassy-hero.png";

export default function Hero() {
  return (
    <section className="relative">

      {/* MOBILE HERO */}
      <div className="md:hidden relative h-[88vh] min-h-[620px] overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Sassy Lady Shoes luxury footwear"
          fittingType="fill"
          className="absolute inset-0 w-full h-full object-cover object-[68%_center]"
        />

        {/* Darker overlay on the lower section for readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
          <div className="text-[10px] tracking-luxe uppercase opacity-80 mb-3">
            {SITE.brand}
          </div>

          <h1 className="font-heading text-5xl leading-[0.95]">
            {SITE.tagline}
          </h1>

          <p className="mt-4 text-sm leading-relaxed opacity-90 max-w-xs">
            {SITE.subtagline}
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#new-arrivals"
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-6 py-3.5 text-[11px] tracking-wide-luxe uppercase"
            >
              Shop New Arrivals
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-background px-6 py-3.5 text-[11px] tracking-wide-luxe uppercase"
            >
              Visit the Boutique
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP HERO */}
      <div className="hidden md:grid md:grid-cols-12 min-h-[88vh]">

        {/* Copy */}
        <div className="md:col-span-5 flex flex-col justify-center px-10 lg:px-16">
          <Reveal>
            <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-5">
              {SITE.brand}
            </div>

            <h1 className="font-heading text-6xl lg:text-7xl leading-[0.95]">
              {SITE.tagline}
            </h1>

            <p className="mt-5 text-base text-muted-foreground max-w-sm">
              {SITE.subtagline}
            </p>

            <div className="mt-9 flex items-center gap-5">
              <a
                href="#new-arrivals"
                className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-[11px] tracking-wide-luxe uppercase hover:bg-accent hover:text-foreground transition-colors"
              >
                Shop New Arrivals
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="text-[11px] tracking-wide-luxe uppercase border-b border-foreground pb-1 hover:text-accent transition-colors"
              >
                Visit the Boutique
              </a>
            </div>
          </Reveal>
        </div>

        {/* Luxury Hero Image */}
        <div className="md:col-span-7 relative overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Sassy Lady Shoes luxury footwear"
            fittingType="fill"
            className="w-full h-full object-cover object-[68%_center]"
          />
        </div>
      </div>

    </section>
  );
}
