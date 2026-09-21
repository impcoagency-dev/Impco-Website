import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Instagram, Linkedin, Menu, X, Youtube } from "lucide-react";
import { config, images, A, wa, mail } from "./config";
import "./styles.css";

const nav = [
  ["HOME", "/"],
  ["3D", "/3d"],
  ["AI", "/ai"],
  ["WEB", "/web"],
  ["BRANDING", "/branding"],
  ["ABOUT", "/#about"],
  ["CONTACT", null]
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const location = window.location.pathname + window.location.hash;

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          {config.brand}
          <small> AGENCY</small>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          {nav.map(([label, href]) => {
            if (!href) {
              return (
                <a key={label} href={mail()} onClick={() => setOpen(false)}>
                  {label}
                </a>
              );
            }

            const isActive =
              href === "/"
                ? location === "/"
                : href === "/#about"
                  ? location === "/#about"
                  : location.startsWith(href);

            return (
              <a key={label} href={href} className={isActive ? "active" : ""} onClick={() => setOpen(false)}>
                {label}
              </a>
            );
          })}
        </nav>

        <a className="header-button" href={wa()} target="_blank" rel="noreferrer">
          START A PROJECT <ArrowRight size={14} />
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            {config.brand}
            <small> AGENCY</small>
          </div>
          <div className="muted">3D · AI · WEB · BRANDING</div>
          <p>Premium digital experiences for ambitious brands and organizations worldwide.</p>
        </div>

        <div>
          <h4>NAVIGATION</h4>
          <div className="footer-links">
            {nav.map(([label, href]) => {
              if (!href) return null;
              return (
                <a key={label} href={href}>
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4>CONNECT</h4>
          <div className="socials">
            <a aria-label="LinkedIn" href={config.socials.linkedin || "#"} target={config.socials.linkedin ? "_blank" : undefined} rel={config.socials.linkedin ? "noreferrer" : undefined} className={!config.socials.linkedin ? "unconfigured" : ""}>
              <Linkedin size={16} />
            </a>
            <a aria-label="X" href={config.socials.x || "#"} target={config.socials.x ? "_blank" : undefined} rel={config.socials.x ? "noreferrer" : undefined} className={!config.socials.x ? "unconfigured" : ""}>
              <span className="x-mark">𝕏</span>
            </a>
            <a aria-label="Threads" href={config.socials.threads || "#"} target={config.socials.threads ? "_blank" : undefined} rel={config.socials.threads ? "noreferrer" : undefined} className={!config.socials.threads ? "unconfigured" : ""}>
              <span className="threads-mark">@</span>
            </a>
            <a aria-label="YouTube" href={config.socials.youtube || "#"} target={config.socials.youtube ? "_blank" : undefined} rel={config.socials.youtube ? "noreferrer" : undefined} className={!config.socials.youtube ? "unconfigured" : ""}>
              <Youtube size={16} />
            </a>
            <a aria-label="Instagram" href={config.socials.instagram || "#"} target={config.socials.instagram ? "_blank" : undefined} rel={config.socials.instagram ? "noreferrer" : undefined} className={!config.socials.instagram ? "unconfigured" : ""}>
              <Instagram size={16} />
            </a>
          </div>

          <div className="whatsapp-box">
            <span>WHATSAPP</span>
            <a href={wa()} target="_blank" rel="noreferrer">+44 7418 320714</a>
          </div>

          <a className="mini-button" href={wa()} target="_blank" rel="noreferrer">
            START A PROJECT <ArrowRight size={12} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} IMPCO AGENCY. ALL RIGHTS RESERVED.</span>
        <span>
          <Link to="/privacy">PRIVACY POLICY</Link>
          <Link to="/terms">TERMS OF SERVICE</Link>
        </span>
      </div>
    </footer>
  );
}

function SectionLabel({ children }) {
  return <div className="section-label"><span></span>{children}</div>;
}

function Buttons({ accent = false }) {
  return (
    <div className="button-row">
      <a className={accent ? "button button-primary button-accent" : "button button-primary"} href={wa()} target="_blank" rel="noreferrer">
        Start a Project <ArrowRight size={16} />
      </a>
      <a className="button button-secondary" href={mail()}>
        Contact Us <ArrowRight size={16} />
      </a>
    </div>
  );
}

function Home() {
  const capabilities = [
    ["01", "3D DESIGN & ANIMATION", "Immersive visual storytelling for products, environments, character work, and motion-led experiences.", "/3d"],
    ["02", "AI SOLUTIONS", "Smart automation and AI experiences designed to improve customer journeys and business operations.", "/ai"],
    ["03", "WEB SOLUTIONS", "High-performing digital experiences built for modern brands, e-commerce, and scalable growth.", "/web"],
    ["04", "BRANDING & CREATIVE", "Visual systems, brand strategy and digital creativity that help brands stand out with clarity.", "/branding"]
  ];

  return (
    <main className="page-shell">
      <section className="hero-section container">
        <div className="hero-copy">
          <SectionLabel>3D · AI · WEB · BRANDING</SectionLabel>
          <h1>
            WE BUILD WHAT
            <span>IMAGINATION</span>
            DEMANDS.
          </h1>
          <p>
            IMPCO Agency blends creative strategy, 3D execution, AI systems, and digital design to shape experiences that feel premium and perform brilliantly.
          </p>
          <Buttons />
        </div>

        <div className="hero-visual">
          <img src={A + images.homeHero} alt="IMPCO hero visual" />
          <div className="floating-tag tag-one">3D / ANIMATION</div>
          <div className="floating-tag tag-two">AI / BRANDING</div>
          <div className="floating-tag tag-three">WEB / DIGITAL</div>
        </div>
      </section>

      <section className="container section-block">
        <SectionLabel>OUR CAPABILITIES</SectionLabel>
        <div className="section-header split-header">
          <h2>WHAT WE CREATE</h2>
        </div>
        <p className="section-intro">
          From strategic digital products to immersive brand experiences, we turn bold ideas into polished, measurable outcomes.
        </p>

        <div className="capability-grid">
          {capabilities.map(([id, title, copy, href]) => (
            <Link key={id} to={href} className="capability-card">
              <span className="card-index">{id}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="card-link">Explore <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container feature-section section-block">
        <div className="feature-image">
          <img src={A + images.homeFeature} alt="IMPCO creative studio" />
        </div>
        <div className="feature-copy">
          <SectionLabel>WHY IMPCO</SectionLabel>
          <h2>CREATIVITY MEETS TECHNOLOGY</h2>
          <p>
            We combine clear strategy with modern execution so every project feels distinctive, useful, and built to perform at scale.
          </p>
          <div className="fact-grid">
            <div>
              <strong>Creative Thinking</strong>
              <span>Smart ideas shaped around your audience.</span>
            </div>
            <div>
              <strong>Technical Expertise</strong>
              <span>Modern systems built to be reliable and scalable.</span>
            </div>
            <div>
              <strong>End-to-End Delivery</strong>
              <span>From concept through launch and ongoing support.</span>
            </div>
            <div>
              <strong>Goal-Focused</strong>
              <span>Every decision aligned to your outcomes.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <SectionLabel>PORTFOLIO</SectionLabel>
        <div className="section-header split-header">
          <h2>A GLIMPSE OF WHAT WE DO</h2>
        </div>

        <div className="portfolio-grid">
          {images.homeProjects.map(([image, title, tag]) => (
            <article className="portfolio-card" key={title}>
              <img src={A + image} alt={title} loading="lazy" />
              <div className="portfolio-info">
                <span>{tag}</span>
                <h3>{title}</h3>
                <p>Selected work from the IMPCO portfolio.</p>
              </div>
            </article>
          ))}
        </div>

        <div className="inline-links">
          <Link to="/3d">View All 3D Work</Link>
          <Link to="/ai">View All AI Work</Link>
          <Link to="/web">View All Web Work</Link>
          <Link to="/branding">View All Branding Work</Link>
        </div>
      </section>

      <section className="container section-block process-section">
        <SectionLabel>OUR PROCESS</SectionLabel>
        <div className="section-header split-header">
          <h2>FROM IDEA TO REALITY</h2>
        </div>

        <div className="process-grid">
          {['DISCOVER', 'DESIGN', 'BUILD', 'DELIVER'].map((item, index) => (
            <div key={item} className="process-card">
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>We clarify the vision, design the right solution, and deliver with precision.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block audience-section">
        <SectionLabel>WHO WE WORK WITH</SectionLabel>
        <div className="section-header split-header">
          <h2>BUILT FOR AMBITIOUS IDEAS</h2>
        </div>
        <p className="section-intro narrow">
          We partner with startups, businesses, agencies, and organizations ready to grow through smarter digital experiences.
        </p>
        <div className="pill-list">
          {['Startups', 'Businesses', 'Agencies', 'Enterprises', 'Product Designers', 'Creative Teams', 'Organizations'].map((pill) => (
            <span key={pill}>{pill}</span>
          ))}
        </div>
      </section>

      <section id="about" className="container about-section section-block">
        <div>
          <SectionLabel>ABOUT IMPCO</SectionLabel>
          <h2>CREATIVE THINKING.<br /><span>TECHNICAL PRECISION.</span></h2>
          <p>
            IMPCO Agency is a multidisciplinary digital studio bringing 3D, AI, web technology, and branding together under one roof.
          </p>
          <p>
            We help businesses and individuals turn ambitious ideas into high-impact experiences that feel elevated and work beautifully.
          </p>
          <p>
            From launching digital identities to building modern web experiences and immersive visuals, we focus on clarity, performance, and memorable execution.
          </p>
        </div>

        <div className="about-points">
          {[
            ['3D & VISUAL EXPERIENCES', 'Product storytelling, animation, environments, and immersive visual design.'],
            ['AI & AUTOMATION', 'Practical, scalable AI experiences that improve business workflow and customer engagement.'],
            ['WEB & DIGITAL PRODUCTS', 'Websites, apps, and product experiences built for conversion and usability.'],
            ['BRANDING & CREATIVE', 'Identity systems and creative direction designed to leave a lasting impression.']
          ].map(([title, copy]) => (
            <div key={title} className="about-point">
              <strong>{title}</strong>
              <span>{copy}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <div className="container cta-inner">
          <SectionLabel>HAVE AN IDEA?</SectionLabel>
          <h2>LET'S BUILD IT.</h2>
          <p>Tell us what you're planning, and we’ll help turn it into a sharper digital experience.</p>
          <Buttons />
        </div>
      </section>
    </main>
  );
}

function PortfolioViewer({ project, index, onClose, onChange }) {
  const startX = React.useRef(null);
  const gallery = project.images;
  const total = gallery.length;

  const change = (offset) => {
    onChange((index + offset + total) % total);
  };

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") change(-1);
      if (event.key === "ArrowRight") change(1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, total, onClose]);

  return (
    <div className="viewer-overlay" onClick={onClose}>
      <div className="viewer-panel" onClick={(event) => event.stopPropagation()}>
        <button className="viewer-close" type="button" onClick={onClose} aria-label="Close image viewer">
          <X size={18} />
        </button>

        <div className="viewer-header">
          <span>{project.id}</span>
          <h3>{project.title}</h3>
        </div>

        <div className="viewer-stage"
          onTouchStart={(event) => {
            startX.current = event.changedTouches[0].clientX;
          }}
          onTouchEnd={(event) => {
            const dx = event.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 45) change(dx > 0 ? -1 : 1);
          }}
        >
          <img src={A + gallery[index]} alt={`${project.title} ${index + 1}`} />
          {total > 1 && (
            <>
              <button type="button" className="viewer-nav prev" onClick={() => change(-1)} aria-label="Previous image">
                <ChevronLeft size={20} />
              </button>
              <button type="button" className="viewer-nav next" onClick={() => change(1)} aria-label="Next image">
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        <div className="viewer-footer">
          <span>{index + 1} / {total}</span>
          {total > 1 && (
            <div className="viewer-dots">
              {gallery.map((image, imageIndex) => (
                <button
                  key={`${image}-${imageIndex}`}
                  type="button"
                  className={imageIndex === index ? "active" : ""}
                  onClick={() => onChange(imageIndex)}
                  aria-label={`View image ${imageIndex + 1}`}
                />
              ))}
            </div>
          )}
          <span>ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}

function ThreeD() {
  const [viewer, setViewer] = React.useState(null);

  return (
    <>
      <main className="page-shell portfolio-page">
        <section className="container section-block page-header">
          <SectionLabel>IMPCO / 3D</SectionLabel>
          <h1>3D</h1>
          <p>Immersive visuals, product storytelling, environments, and motion-led concepts crafted for impact.</p>
        </section>

        <section className="container gallery-grid section-block">
          {images.threeD.map((project) => (
            <button key={project.id} type="button" className="gallery-card" onClick={() => setViewer({ project, index: 0 })}>
              <img src={A + project.images[0]} alt={project.title} loading="lazy" />
              <div className="gallery-overlay">
                <span>3D</span>
                <strong>{project.title}</strong>
                <ArrowUpRight size={18} />
              </div>
            </button>
          ))}
        </section>
      </main>

      <Footer />

      {viewer && (
        <PortfolioViewer
          project={viewer.project}
          index={viewer.index}
          onClose={() => setViewer(null)}
          onChange={(nextIndex) => setViewer({ ...viewer, index: nextIndex })}
        />
      )}
    </>
  );
}

function AI() {
  const services = [
    "AI CHATBOTS",
    "AI AGENTS & AUTOMATION",
    "AI-POWERED WEBSITES",
    "AI CONTENT & MEDIA",
    "CUSTOM AI SOLUTIONS",
    "AI-DRIVEN DATA",
    "AI FOR E-COMMERCE",
    "AI IMPLEMENTATION"
  ];

  return (
    <>
      <main className="page-shell ai-page">
        <section className="container hero-split section-block">
          <div>
            <SectionLabel>AI / SOLUTIONS</SectionLabel>
            <h1>INTELLIGENCE,<br /><span>BUILT FOR<br />YOUR BUSINESS.</span></h1>
            <p>We design practical AI experiences that automate the right work, improve service, and create measurable value.</p>
            <Buttons />
            <div className="metrics-row">
              <div><strong>8+</strong><span>AI SOLUTIONS</span></div>
              <div><strong>100%</strong><span>SCALABLE</span></div>
              <div><strong>24/7</strong><span>SUPPORT</span></div>
            </div>
          </div>

          <div className="ai-visual">
            <div className="chat-card">
              <span>AI assistant</span>
              <strong>How can I help your business?</strong>
              <div className="line" />
              <div className="line short" />
            </div>
          </div>
        </section>

        <section className="container section-block">
          <SectionLabel>WHAT WE CAN BUILD</SectionLabel>
          <h2 className="stacked-heading">WHAT WE CAN BUILD<br /><span>WITH AI</span></h2>
          <div className="service-grid">
            {services.map((service, index) => (
              <div key={service} className="service-card">
                <b>◈</b>
                <small>0{index + 1}</small>
                <h3>{service}</h3>
                <p>Purpose-built systems aligned with your business goals and operational realities.</p>
                <a href={wa()} target="_blank" rel="noreferrer">Explore AI <ArrowRight size={14} /></a>
              </div>
            ))}
          </div>
        </section>

        <section className="container section-block purpose-grid">
          <div>
            <SectionLabel>THE DIFFERENCE</SectionLabel>
            <h2>AI WITH<br /><span>A PURPOSE</span></h2>
            <p>We do not chase trends. We identify the places where AI creates meaningful value and build around that.</p>
            <blockquote>“Build smarter. Build with AI.”</blockquote>
          </div>

          <div className="purpose-cards">
            {['POWERFUL', 'SCALABLE', 'SECURE', 'HUMAN-CENTRED'].map((item) => (
              <div key={item} className="purpose-card">
                <strong>{item}</strong>
                <p>Thoughtful systems designed for sustainable growth and strong customer experiences.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container section-block ai-work-section">
          <SectionLabel>PORTFOLIO</SectionLabel>
          <h2 className="stacked-heading">AI SOLUTIONS<br /><span>WE'VE BUILT</span></h2>
          <div className="project-strip">
            {images.aiProjects.map(([image, name]) => (
              <div key={name} className="project-tile">
                <img src={A + image} alt={name} loading="lazy" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Web() {
  return (
    <>
      <main className="page-shell web-page">
        <section className="container section-block page-header">
          <SectionLabel>IMPCO AGENCY / WEB</SectionLabel>
          <h1><span>WEB</span> SOLUTIONS</h1>
          <p>Modern websites and digital products built for clarity, performance, and conversion.</p>
          <div className="project-count">12 PROJECTS</div>
        </section>

        <section className="container web-grid section-block">
          {images.webProjects.map(([image, title, tag], index) => (
            <article key={title} className={index === 0 || index === 3 || index === 8 ? "wide" : ""}>
              <img src={A + image} alt={title} loading="lazy" />
              <div className="web-info">
                <span>{tag}</span>
                <h3>{title}</h3>
                <a href={wa()} target="_blank" rel="noreferrer">Visit Website <ArrowRight size={14} /></a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

function Branding() {
  return (
    <>
      <main className="page-shell brand-page">
        <section className="brand-hero">
          <div className="container brand-hero-inner">
            <div className="brand-copy">
              <SectionLabel>IMPCO AGENCY / BRANDING</SectionLabel>
              <h1>BRANDING</h1>
              <p>Identity systems and creative direction that give your business a sharper, stronger presence.</p>
              <Buttons accent />
            </div>

            <div className="brand-collage">
              {images.branding.slice(0, 4).map(([image, title]) => (
                <img key={title} src={A + image} alt={title} />
              ))}
            </div>
          </div>
        </section>

        <section className="container section-block brand-work">
          <SectionLabel>OUR BRANDING WORK</SectionLabel>
          <h2>BRANDED PRODUCTS<br /><span>& CREATIVE WORK</span></h2>
          <div className="brand-grid">
            {images.branding.map(([image, title]) => (
              <article key={title} className="brand-tile">
                <img src={A + image} alt={title} loading="lazy" />
                <span>{title}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Legal({ type }) {
  const privacy = type === "privacy";

  return (
    <main className="container legal-page section-block">
      <SectionLabel>{privacy ? "PRIVACY POLICY" : "TERMS OF SERVICE"}</SectionLabel>
      <h1>{privacy ? "PRIVACY POLICY" : "TERMS OF SERVICE"}</h1>
      <p className="last-updated">Last updated: September 16, 2026</p>

      {privacy ? (
        <>
          <h2>1. Information We Collect</h2>
          <p>When you contact IMPCO Agency, we may receive the information you choose to provide, such as your name, email address, phone number, company details and project requirements. Our website may also process basic technical information needed to operate and secure the site.</p>
          <h2>2. How We Use Information</h2>
          <p>We use information to respond to enquiries, discuss and deliver services, communicate about projects, improve our website and maintain security. We do not sell personal information.</p>
          <h2>3. Email, WhatsApp and Social Links</h2>
          <p>When you choose to contact us by email, WhatsApp or a social platform, you leave this website and use that provider's service. Their own privacy policies and terms apply to information handled by those services.</p>
          <h2>4. Cookies and Analytics</h2>
          <p>If analytics, cookies or similar tools are added in the future, this policy may be updated to explain their purpose and your available choices.</p>
          <h2>5. Data Retention and Security</h2>
          <p>We retain project and enquiry information only for as long as reasonably necessary for business, legal or operational purposes and take reasonable measures to protect it.</p>
          <h2>6. Your Rights</h2>
          <p>Depending on applicable law, you may have rights to request access, correction or deletion of personal information, or to object to certain processing. Contact us at <a href={mail()}>hello@impcoagency.com</a>.</p>
          <h2>7. Changes</h2>
          <p>We may update this policy when our services, technology or legal obligations change. The date above will be updated when material changes are made.</p>
        </>
      ) : (
        <>
          <h2>1. Services</h2>
          <p>IMPCO Agency provides creative and digital services including 3D design, AI systems, web development, digital strategy, and branding support.</p>
          <h2>2. Scope and Deliverables</h2>
          <p>The exact scope, timeline, and deliverables for every project will be agreed in writing before work begins. IMPCO Agency will perform services in line with the approved brief and agreed payment schedule.</p>
          <h2>3. Client Responsibilities</h2>
          <p>Clients are responsible for timely approvals, access to assets, feedback, and any information needed to keep the project moving. Delays caused by client input may affect timing and delivery milestones.</p>
          <h2>4. Intellectual Property</h2>
          <p>Unless otherwise agreed in writing, project work created for a client remains subject to the project agreement and relevant ownership terms. General concepts and samples remain the property of IMPCO Agency unless otherwise stated.</p>
          <h2>5. Payments</h2>
          <p>Fees and payment terms will be agreed before a project starts. Late payments may suspend the delivery of work until the outstanding balance is resolved.</p>
          <h2>6. Limitation of Liability</h2>
          <p>IMPCO Agency will use reasonable care in delivering services, but cannot be held liable for indirect, incidental or consequential losses arising from delays, third-party services, or business outcomes beyond the agreed scope.</p>
          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of the jurisdiction in which IMPCO Agency operates, and any disputes will be resolved through the relevant legal process.</p>
        </>
      )}
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/3d" element={<ThreeD />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/web" element={<Web />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/privacy" element={<><Legal type="privacy" /><Footer /></>} />
        <Route path="/terms" element={<><Legal type="terms" /><Footer /></>} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
