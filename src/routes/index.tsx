import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import cateringTable from "@/assets/catering-table.jpg";
import chefStory from "@/assets/chef-story.jpg";
import heroFeast from "@/assets/hero-feast.jpg";
import signatureDishes from "@/assets/signature-dishes.jpg";

const menuGroups = {
  Plates: [
    ["Coal-kissed jerk chicken", "coconut rice, mango chow", "$24"],
    ["Sunday oxtail", "butter beans, thyme gravy", "$29"],
    ["Market snapper", "escovitch vegetables, lime", "$31"],
    ["Curry goat", "roti, tamarind chutney", "$27"],
  ],
  Sides: [
    ["Rice & peas", "coconut, scallion", "$7"],
    ["Sweet plantain", "sea salt, lime", "$8"],
    ["Callaloo greens", "garlic, pepper", "$9"],
    ["Festival bread", "honey butter", "$7"],
  ],
  Sweets: [
    ["Rum cake", "brown butter cream", "$11"],
    ["Coconut drops", "ginger, cane sugar", "$8"],
    ["Mango ice", "lime zest, mint", "$9"],
    ["Sorrel poached pear", "spice, vanilla", "$12"],
  ],
  Drinks: [
    ["Sorrel fizz", "hibiscus, ginger, lime", "$7"],
    ["Pineapple ting", "charred pineapple, soda", "$7"],
    ["Island old fashioned", "dark rum, allspice", "$15"],
    ["Ginger beer", "house-brewed, fiery", "$6"],
  ],
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mango & Coal — Caribbean Kitchen in Harbourview" },
      { name: "description", content: "Fire-cooked Caribbean plates, bright island flavours, and generous hospitality at Mango & Coal in Harbourview." },
      { property: "og:title", content: "Mango & Coal — Caribbean Kitchen" },
      { property: "og:description", content: "Slow fire, bright spice, and a table made for sharing." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function BrandMark() {
  return <span className="grid size-10 place-items-center rounded-full bg-sun font-display text-xl font-black text-jungle">M</span>;
}

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<keyof typeof menuGroups>("Plates");

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-hero-foreground/20 bg-jungle/15 text-hero-foreground backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Mango and Coal home">
            <BrandMark />
            <span className="font-display text-xl font-black uppercase">Mango & Coal</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-bold uppercase md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#menu">Menu</a>
            <a className="nav-link" href="#story">Our story</a>
            <a className="nav-link" href="#catering">Catering</a>
            <a className="nav-link" href="#visit">Visit</a>
          </nav>
          <a href="#visit" className="hidden items-center gap-2 bg-pepper px-5 py-3 text-sm font-black uppercase shadow-brutal transition-transform hover:-translate-y-0.5 md:inline-flex">
            Find our table <ArrowRight size={16} />
          </a>
          <button className="grid size-11 place-items-center md:hidden" onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="border-t border-hero-foreground/20 bg-jungle px-5 py-6 md:hidden" aria-label="Mobile navigation">
            {["menu", "story", "catering", "visit"].map((item) => (
              <a key={item} href={`#${item}`} className="block border-b border-hero-foreground/15 py-4 font-display text-2xl font-bold capitalize" onClick={() => setMobileOpen(false)}>{item}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" className="relative min-h-[92svh] bg-jungle text-hero-foreground">
        <img src={heroFeast} alt="Caribbean feast with jerk chicken, grilled fish, rice and plantains" className="absolute inset-0 h-full w-full object-cover object-center" width={1920} height={1200} fetchPriority="high" />
        <div className="absolute inset-0 bg-hero-wash" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-screen-2xl items-end px-5 pb-12 pt-32 md:px-10 md:pb-16">
          <div className="max-w-4xl animate-rise">
            <p className="mb-5 flex items-center gap-3 text-xs font-black uppercase text-sun"><span className="h-px w-10 bg-sun" /> Harbourview’s island kitchen</p>
            <h1 className="font-display text-[clamp(4rem,11vw,9.5rem)] font-black uppercase leading-[0.78]">
              Good fire.<br/><span className="text-sun">Big flavour.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-hero-muted md:text-lg">Jerk smoke, bright citrus, slow-braised comfort. Caribbean food made loudly and served with an open door.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center gap-2 bg-sun px-6 py-4 text-sm font-black uppercase text-jungle shadow-brutal transition-transform hover:-translate-y-1">Explore the menu <ArrowDown size={17} /></a>
              <a href="#catering" className="inline-flex items-center gap-2 border border-hero-foreground/50 bg-jungle/25 px-6 py-4 text-sm font-black uppercase backdrop-blur-sm transition-colors hover:bg-jungle/50">Bring the feast</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden bg-pepper px-7 py-5 text-sm font-black uppercase shadow-brutal md:block">Open today · 12–10</div>
      </section>

      <div className="marquee overflow-hidden border-y-2 border-jungle bg-sun py-4 text-jungle" aria-hidden="true">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap font-display text-2xl font-black uppercase">
          {[...Array(2)].flatMap((_, group) => ["Jerk chicken", "Whole snapper", "Curry goat", "Rum cake", "Oxtail", "Sorrel fizz"].map((item) => <span key={`${group}-${item}`} className="flex items-center gap-8">{item}<b className="text-pepper">✦</b></span>))}
        </div>
      </div>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-10">
          <div className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8"><p className="eyebrow">House favourites</p><h2 className="section-title">Three reasons to come hungry.</h2></div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:col-span-4">Recipes with roots, sharpened by smoke, acid, and the best produce we can find.</p>
          </div>
          <div className="relative overflow-hidden border-2 border-jungle bg-jungle shadow-brutal-lg">
            <img src={signatureDishes} alt="Oxtail, jerk chicken and grilled snapper dishes" className="aspect-[16/9] w-full object-cover md:aspect-[2/1]" width={1536} height={1024} loading="lazy" />
            <div className="grid divide-y-2 divide-jungle bg-cream md:grid-cols-3 md:divide-x-2 md:divide-y-0">
              {[
                ["01", "Sunday Oxtail", "Butter beans · thyme gravy", "$29"],
                ["02", "Coal Jerk Chicken", "Mango chow · coconut rice", "$24"],
                ["03", "Market Snapper", "Escovitch · charred lime", "$31"],
              ].map(([number, name, detail, price]) => (
                <article key={name} className="group p-6 transition-colors hover:bg-sun">
                  <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs font-bold text-pepper">({number})</span><span className="font-display text-2xl font-black">{price}</span></div>
                  <h3 className="mt-8 font-display text-2xl font-black uppercase">{name}</h3><p className="mt-2 text-sm text-muted-foreground group-hover:text-jungle">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-jungle py-20 text-hero-foreground md:py-28">
        <div className="mx-auto grid max-w-screen-2xl gap-12 px-5 md:grid-cols-2 md:px-10">
          <div className="relative">
            <img src={chefStory} alt="Chef Amara Ellis at the charcoal grill" className="aspect-[4/5] w-full border-2 border-hero-foreground/30 object-cover shadow-sun" width={1024} height={1280} loading="lazy" />
            <div className="absolute -bottom-5 -right-2 bg-sun px-5 py-4 font-mono text-xs font-bold uppercase text-jungle md:right-8">Chef Amara Ellis<br/>Founder · Firekeeper</div>
          </div>
          <div className="flex flex-col justify-center md:pl-8">
            <p className="eyebrow text-sun">Our story</p>
            <h2 className="section-title text-hero-foreground">From a backyard grill to a room full of regulars.</h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-hero-muted">Mango & Coal began with one barrel grill, a family spice blend, and Sunday plates passed over a garden fence.</p>
            <p className="mt-5 max-w-xl leading-relaxed text-hero-muted">Today, Chef Amara cooks with the same instinct: build the fire slowly, season with patience, and make enough for whoever arrives next.</p>
            <blockquote className="mt-10 border-l-4 border-pepper pl-6 font-display text-3xl font-bold leading-tight text-sun">“The table gets better when it gets louder.”</blockquote>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <div className="text-center"><p className="eyebrow justify-center">Eat with us</p><h2 className="section-title">The house menu</h2><p className="mt-4 text-sm text-muted-foreground">Prices in CAD · Menu changes with the market</p></div>
          <div className="mt-10 flex overflow-x-auto border-y-2 border-jungle" role="tablist" aria-label="Menu sections">
            {(Object.keys(menuGroups) as Array<keyof typeof menuGroups>).map((group) => (
              <button key={group} role="tab" aria-selected={activeMenu === group} onClick={() => setActiveMenu(group)} className={`min-w-28 flex-1 px-5 py-4 text-sm font-black uppercase transition-colors ${activeMenu === group ? "bg-jungle text-hero-foreground" : "bg-background text-jungle hover:bg-sun"}`}>{group}</button>
            ))}
          </div>
          <div className="mt-8 grid gap-x-14 md:grid-cols-2">
            {menuGroups[activeMenu].map(([name, detail, price]) => (
              <article key={name} className="grid grid-cols-[1fr_auto] gap-4 border-b border-border py-6">
                <div><h3 className="font-display text-xl font-black">{name}</h3><p className="mt-1 text-sm text-muted-foreground">{detail}</p></div><p className="font-display text-xl font-black text-pepper">{price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catering" className="relative min-h-[620px] overflow-hidden text-hero-foreground">
        <img src={cateringTable} alt="Caribbean catering feast at sunset" className="absolute inset-0 h-full w-full object-cover" width={1920} height={912} loading="lazy" />
        <div className="absolute inset-0 bg-catering-wash" />
        <div className="relative mx-auto flex min-h-[620px] max-w-screen-2xl items-center px-5 py-20 md:px-10">
          <div className="max-w-2xl"><p className="eyebrow text-sun">Catering</p><h2 className="section-title text-hero-foreground">Put the whole island on the table.</h2><p className="mt-6 max-w-lg text-lg leading-relaxed text-hero-muted">Drop-off feasts for ten or a full spread for two hundred. Choose the plates; we’ll bring the colour, smoke, and plenty.</p><a href="mailto:feasts@mangoandcoal.example?subject=Catering%20inquiry" className="mt-8 inline-flex items-center gap-2 bg-sun px-6 py-4 text-sm font-black uppercase text-jungle shadow-brutal transition-transform hover:-translate-y-1">Start a catering request <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section className="bg-pepper py-20 text-hero-foreground md:py-28">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-10">
          <p className="eyebrow text-sun">Good words</p>
          <div className="mt-8 grid divide-y-2 divide-hero-foreground/40 border-y-2 border-hero-foreground/40 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
            {["The jerk chicken crackles, the gravy sings, and somehow there’s always room for rum cake.", "It feels less like dinner out and more like being invited to the best family table in town.", "Our office feast arrived hot, generous, and gone in twenty minutes. No notes."].map((quote, i) => (
              <figure key={quote} className="p-7 md:p-9"><div className="text-sun">★★★★★</div><blockquote className="mt-7 font-display text-2xl font-bold leading-snug">“{quote}”</blockquote><figcaption className="mt-8 font-mono text-xs font-bold uppercase text-hero-muted">{["Nadia R. · Local guide", "Marcus J. · Friday regular", "Elena P. · Catering guest"][i]}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-sun py-20 text-jungle md:py-28">
        <div className="mx-auto grid max-w-screen-2xl gap-12 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7"><p className="eyebrow text-pepper">Come through</p><h2 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] font-black uppercase leading-[0.82]">Find the<br/>green door.</h2><div className="mt-10 flex flex-wrap gap-3"><a href="https://maps.google.com/?q=84+Harbour+Lane+Harbourview" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-jungle px-6 py-4 text-sm font-black uppercase text-hero-foreground shadow-brutal"><MapPin size={17}/> Get directions</a><a href="tel:+14165550184" className="inline-flex items-center gap-2 border-2 border-jungle px-6 py-4 text-sm font-black uppercase"><Phone size={17}/> Call us</a></div></div>
          <div className="border-l-2 border-jungle/30 pl-7 md:col-span-5 md:pl-10">
            <div className="space-y-8"><div><p className="detail-label">Address</p><p className="detail-value">84 Harbour Lane<br/>Harbourview, ON M6K 2T4</p></div><div><p className="detail-label">Kitchen hours</p><p className="detail-value">Tue–Thu · 12–9<br/>Fri–Sat · 12–10<br/>Sun · 12–8</p></div><div><p className="detail-label">Say hello</p><p className="detail-value">(416) 555-0184<br/>hello@mangoandcoal.example</p></div></div>
          </div>
        </div>
      </section>

      <footer className="bg-jungle py-12 text-hero-foreground">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-10 px-5 md:flex-row md:items-end md:justify-between md:px-10">
          <div><div className="flex items-center gap-3"><BrandMark/><span className="font-display text-2xl font-black uppercase">Mango & Coal</span></div><p className="mt-4 max-w-sm text-sm text-hero-muted">Caribbean food, slow fire, open door.</p></div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-bold uppercase"><a className="nav-link" href="#menu">Menu</a><a className="nav-link" href="#catering">Catering</a><a className="nav-link" href="#visit">Visit</a><a className="nav-link inline-flex items-center gap-2" href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-screen-2xl flex-col gap-2 border-t border-hero-foreground/15 px-5 pt-6 font-mono text-[11px] uppercase text-hero-muted md:flex-row md:justify-between md:px-10"><p>© 2026 Mango & Coal</p><p>Fictional restaurant concept · Frontend only</p></div>
      </footer>
    </main>
  );
}