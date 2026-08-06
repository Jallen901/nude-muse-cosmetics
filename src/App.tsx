import { ScrollScrub } from "./components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "./scroll-scrub-scenes";
import { useState } from "react";


const PRODUCTS = [
  { name: "Nude Lip Gloss", price: "$28", detail: "High-shine hydration in your most flattering nude shade", tag: "BESTSELLER", swatchClass: "lu-swatch-gloss", benefits: ["Non-sticky high-shine finish", "Vitamin E moisturizing complex", "6+ hour wear"] },
  { name: "Brown Lip Liner", price: "$22", detail: "Long-wear precision that defines and stays all day", tag: "NEW", swatchClass: "lu-swatch-liner", benefits: ["12-hour crease-proof formula", "Creamy glide-on texture", "Pairs with all nudes"] },
  { name: "Clear Lip Oil", price: "$26", detail: "Nourishing gloss that amplifies any shade you wear", tag: "NEW", swatchClass: "lu-swatch-oil", benefits: ["Jojoba & rosehip oil blend", "Plumping peptide complex", "Layerable over any shade"] },
  { name: "Hydrating Lip Balm", price: "$18", detail: "Your daily essential for soft, supple, kissable lips", tag: null, swatchClass: "lu-swatch-balm", benefits: ["Shea butter + hyaluronic acid", "All-day moisture seal", "Fragrance-free formula"] },
];
const TABS = ["ALL", "LIP GLOSS", "LIP LINER", "LIP OIL", "SETS"];
const TESTIMONIALS = [
  { quote: "I have been searching for nudes that actually complement my skin. Nude Muse finally got it right.", name: "Destiny W.", city: "Atlanta, GA" },
  { quote: "Clean ingredients, luxury feel. This is everything I wanted from a lip brand.", name: "Maya R.", city: "Houston, TX" },
  { quote: "The lip gloss became my everyday essential in one week. I will not leave home without it.", name: "Jasmine T.", city: "Chicago, IL" },
];
const PRESS = [
  { quote: "A new standard in clean luxury", outlet: "Beauty Insider" },
  { quote: "The lip brand we have been waiting for", outlet: "Muse Collective" },
  { quote: "Nudes that actually work for every skin tone", outlet: "Shade Report" },
];

function LogoMark() {
  return (
    <svg className="lu-logomark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <ellipse cx="20" cy="20" rx="18" ry="18" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="20" cy="20" rx="10" ry="14" stroke="currentColor" strokeWidth="1"/>
      <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}

function AnnouncementBar() {
  return (
    <div className="lu-ann">
      Free shipping on orders over $50&nbsp;&middot;&nbsp;
      <a href="#collection" className="lu-ann-link">Shop the Collection &rarr;</a>
    </div>
  );
}

function Nav() {
  return (
    <nav className="lu-nav" aria-label="Main navigation">
      <div className="lu-nav-inner lu-nav-3col">
        <div className="lu-nav-left">
          <a href="#collection" className="lu-nav-link">Shop</a>
          <a href="#about" className="lu-nav-link">About</a>
          <a href="#community" className="lu-nav-link">Community</a>
        </div>
        <a href="/" className="lu-nav-logo" aria-label="Nude Muse Cosmetics home">
          <LogoMark />
          <span className="lu-logo-wordmark">
            <span className="lu-logo-script">Nude Muse</span>
            <span className="lu-logo-cosmetics">COSMETICS</span>
          </span>
        </a>
        <div className="lu-nav-right">
          <button className="lu-nav-icon" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
          <button className="lu-nav-icon" aria-label="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          <button className="lu-nav-icon" aria-label="Bag">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <a href="#cta" className="lu-btn-primary lu-nav-cta">Join the Edit</a>
        </div>
      </div>
    </nav>
  );
}

function TrustBar() {
  const items = [
    { label: "Clean Formula", body: "Free of parabens, sulfates and synthetic fragrances" },
    { label: "Cruelty Free", body: "PETA certified. Never tested on animals" },
    { label: "Woman-Founded", body: "Built by and for women of all shades" },
    { label: "Shade Inclusive", body: "Nudes for every skin tone, always" },
  ];
  return (
    <div className="lu-trust" id="about">
      {items.map((it) => (
        <div key={it.label} className="lu-trust-item">
          <span className="lu-trust-icon">+</span>
          <div>
            <p className="lu-trust-label">{it.label}</p>
            <p className="lu-trust-body">{it.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  return (
    <div className="lu-pcard">
      <div className={"lu-pimg " + product.swatchClass}>
        {product.tag && <span className="lu-pbadge">{product.tag}</span>}
        <button className="lu-pquick">Notify Me</button>
      </div>
      <div className="lu-pinfo">
        <p className="lu-pname">{product.name}</p>
        <p className="lu-pdetail">{product.detail}</p>
        <ul className="lu-pbenefits">
          {product.benefits.map((b: string) => <li key={b}>{b}</li>)}
        </ul>
        <p className="lu-pprice">{product.price}</p>
      </div>
    </div>
  );
}

function CollectionSection() {
  const [tab, setTab] = useState("ALL");
  return (
    <section className="lu-section" id="collection">
      <div className="lu-container">
        <p className="lu-eyebrow">The Edit</p>
        <h2 className="lu-section-title">A New Kind of Nude</h2>
        <p className="lu-section-intro">Shades engineered to complement, not erase. Every formula clean, every finish flawless.</p>
        <div className="lu-tabs" role="tablist">
          {TABS.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t}
              className={"lu-tab" + (tab === t ? " lu-tab-on" : "")}
              onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <div className="lu-pgrid">
          {PRODUCTS.map((p) => <ProductCard key={p.name} product={p} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="lu-feature" id="promise">
      <div className="lu-feature-img">
        <img src="https://images.pexels.com/photos/13153662/pexels-photo-13153662.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Model wearing Nude Muse lip gloss" className="lu-feature-photo" />
      </div>
      <div className="lu-feature-text">
        <p className="lu-eyebrow">Our Promise</p>
        <h2 className="lu-section-title">Made for the Skin You&rsquo;re In</h2>
        <p className="lu-feature-body">We built Nude Muse because nudes were never actually made for us. Every shade calibrated to complement deeper skin tones, crafted with clean ingredients that love your skin back.</p>
        <ul className="lu-feature-list">
          <li>Vegan &amp; cruelty-free formulas</li>
          <li>Dermatologist-tested ingredients</li>
          <li>Long-wear with moisture-lock technology</li>
        </ul>
        <a href="#collection" className="lu-btn-primary lu-feature-cta">Explore the Collection</a>
      </div>
    </section>
  );
}

function PressBar() {
  return (
    <div className="lu-press">
      <div className="lu-press-inner">
        {PRESS.map((p, i) => (
          <div key={p.outlet} className="lu-press-item">
            {i > 0 && <span className="lu-press-sep" aria-hidden="true">&mdash;</span>}
            <div>
              <p className="lu-press-quote">&ldquo;{p.quote}&rdquo;</p>
              <p className="lu-press-outlet">&mdash;&nbsp;{p.outlet}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommunitySection() {
  return (
    <section className="lu-section lu-section-tinted" id="community">
      <div className="lu-container">
        <p className="lu-eyebrow">Real People. Real Skin.</p>
        <h2 className="lu-section-title">The Muse Community</h2>
        <div className="lu-testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="lu-testimonial">
              <p className="lu-quote-glyph">&ldquo;</p>
              <p className="lu-quote-body">{t.quote}</p>
              <p className="lu-quote-byline">{t.name} &middot; {t.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="lu-cta-section" id="cta">
      <div className="lu-cta-inner">
        <p className="lu-eyebrow">Stay in the Know</p>
        <h2 className="lu-cta-title">Be First to Every Drop</h2>
        <p className="lu-cta-body">New shades, limited sets, and exclusive offers &mdash; straight to your inbox.</p>
        <form className="lu-cta-form" onSubmit={(e) => e.preventDefault()}>
          <input className="lu-input" type="email" placeholder="your@email.com" aria-label="Email address" required />
          <button type="submit" className="lu-btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="lu-footer">
      <div className="lu-footer-grid">
        <div className="lu-footer-brand">
          <div className="lu-footer-logo-row">
            <LogoMark />
            <span className="lu-logo-wordmark">
              <span className="lu-logo-script">Nude Muse</span>
              <span className="lu-logo-cosmetics">COSMETICS</span>
            </span>
          </div>
          <p className="lu-footer-tagline">Beauty rooted in authenticity. Shades for every muse.</p>
          <p className="lu-footer-copy">&copy; 2025 Nude Muse Cosmetics. All rights reserved.</p>
        </div>
        <div>
          <p className="lu-footer-heading">Shop</p>
          <ul className="lu-footer-links">
            <li><a href="#collection" className="lu-footer-link">Lip Gloss</a></li>
            <li><a href="#collection" className="lu-footer-link">Lip Liner</a></li>
            <li><a href="#collection" className="lu-footer-link">Lip Oil</a></li>
            <li><a href="#collection" className="lu-footer-link">Gift Sets</a></li>
          </ul>
        </div>
        <div>
          <p className="lu-footer-heading">Help</p>
          <ul className="lu-footer-links">
            <li><a href="#" className="lu-footer-link">Shipping &amp; Returns</a></li>
            <li><a href="#" className="lu-footer-link">FAQ</a></li>
            <li><a href="#" className="lu-footer-link">Contact Us</a></li>
            <li><a href="#" className="lu-footer-link">Track Order</a></li>
          </ul>
        </div>
        <div>
          <p className="lu-footer-heading">About</p>
          <ul className="lu-footer-links">
            <li><a href="#about" className="lu-footer-link">Our Story</a></li>
            <li><a href="#community" className="lu-footer-link">Community</a></li>
            <li><a href="#" className="lu-footer-link">Press</a></li>
            <li><a href="#" className="lu-footer-link">Careers</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}



function LaunchSection() {
  return (
    <section className="lu-launch">
      <div className="lu-launch-inner">
        <p className="lu-launch-eyebrow">Launching 2025</p>
        <h2 className="lu-launch-title">Nudes Built for Every Skin. Finally.</h2>
        <p className="lu-launch-body">
          Nude Muse was founded on a single belief: beauty products labeled &ldquo;nude&rdquo; should
          actually work for every skin tone. Our debut lip collection delivers four essential
          formulas &mdash; clean ingredients, luxurious finish, and shades that were made with you in mind.
        </p>
        <div className="lu-launch-stats">
          <div className="lu-stat">
            <span className="lu-stat-num">4</span>
            <span className="lu-stat-label">Debut Products</span>
          </div>
          <div className="lu-stat">
            <span className="lu-stat-num">100%</span>
            <span className="lu-stat-label">Clean Formula</span>
          </div>
          <div className="lu-stat">
            <span className="lu-stat-num">0</span>
            <span className="lu-stat-label">Compromises</span>
          </div>
        </div>
        <a href="#cta" className="lu-btn-launch">Join the Waitlist &rarr;</a>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="lu-page">
      <header className="lu-header">
        <AnnouncementBar />
        <Nav />
      </header>
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      <TrustBar />
      <LaunchSection />
      <CollectionSection />
      <FeatureSection />
      <PressBar />
      <CommunitySection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}

export default Index;
