import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Instagram, Linkedin, Menu, Music2, X, Youtube } from "lucide-react";
import { config, images, A, wa, gmail } from "./config";
import "./styles.css";

const nav = [
  ["HOME", "/"],
  ["3D", "/3d"],
  ["AI", "/ai"],
  ["WEB", "/web"],
  ["BRANDING", "/branding"],
  ["ABOUT", "/#about"],
  ["CONTACT", "/contact"]
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

        <Link className="header-button" to="/contact">
          START A PROJECT <ArrowRight size={14} />
        </Link>
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
            <a aria-label="TikTok" href={config.socials.tiktok || "#"} target={config.socials.tiktok ? "_blank" : undefined} rel={config.socials.tiktok ? "noreferrer" : undefined} className={!config.socials.tiktok ? "unconfigured" : ""}>
              <Music2 size={16} />
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

          <Link className="mini-button" to="/contact">
            START A PROJECT <ArrowRight size={12} />
          </Link>
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

const serviceOptions = [
  ["WEB", "Web Development"],
  ["AI", "AI Solutions"],
  ["3D", "3D / Visualization"],
  ["BRANDING", "Branding"],
  ["OTHER", "Other"]
];

function Contact() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    company: "",
    interests: [],
    projectDescription: "",
    budget: "",
    consent: false,
    website: ""
  });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState(() => new URLSearchParams(window.location.search).get("confirmed") === "1" ? "success" : "idle");

  const update = (field, value) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "", form: "" }));
  };

  const toggleInterest = (interest) => {
    const interests = values.interests.includes(interest)
      ? values.interests.filter((item) => item !== interest)
      : [...values.interests, interest];
    update("interests", interests);
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid business email address.";
    }
    if (values.interests.length === 0) nextErrors.interests = "Please choose at least one area of interest.";
    if (values.name.length > 100) nextErrors.name = "Please keep your name under 100 characters.";
    if (values.email.length > 254) nextErrors.email = "Please enter a shorter email address.";
    if (values.company.length > 120) nextErrors.company = "Please keep your company name under 120 characters.";
    if (values.projectDescription.length > 2000) nextErrors.projectDescription = "Please keep your description under 2,000 characters.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setErrors({});
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrors({ form: "Something went wrong. Please try again or contact us directly." });
    }
  };

  return (
    <div className="page-shell contact-page">
      <section className="container contact-layout">
        <div className="contact-intro">
          <SectionLabel>IMPCO / START A PROJECT</SectionLabel>
          <p className="contact-disciplines">3D <span>·</span> WEB <span>·</span> AI <span>·</span> BRANDING</p>
          <h1>Let's Build<br /><em>Something</em><br />Extraordinary</h1>
          <p className="contact-support">Tell us what you're working on. We'll show you how Impcoagency can turn your idea into a powerful digital experience.</p>
          <div className="contact-rule"><span>01</span><span>CREATIVE THINKING, BUILT TO WORK.</span></div>
        </div>

        <div className="contact-form-wrap">
          {status === "success" ? (
            <div className="contact-success" role="status" aria-live="polite">
              <span className="success-mark" aria-hidden="true">✓</span>
              <p className="contact-eyebrow">MESSAGE RECEIVED</p>
              <h2>Message received.</h2>
              <p>Thanks for sharing your project with IMPCOAGENCY. Our team has received your details and will reach out shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="contact-form-heading">
                <span>LET'S TALK</span>
                <span>01 <i>/</i> 01</span>
              </div>

              <div className="contact-fields-row">
                <div className="contact-field">
                  <label htmlFor="lead-name">Name <span>*</span></label>
                  <input id="lead-name" name="name" autoComplete="name" maxLength={100} value={values.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "lead-name-error" : undefined} />
                  {errors.name && <span className="field-error" id="lead-name-error">{errors.name}</span>}
                </div>
                <div className="contact-field">
                  <label htmlFor="lead-email">Business Email <span>*</span></label>
                  <input id="lead-email" name="email" type="email" autoComplete="email" maxLength={254} value={values.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "lead-email-error" : undefined} />
                  {errors.email && <span className="field-error" id="lead-email-error">{errors.email}</span>}
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="lead-company">Company <span className="optional">OPTIONAL</span></label>
                <input id="lead-company" name="company" autoComplete="organization" maxLength={120} value={values.company} onChange={(event) => update("company", event.target.value)} aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "lead-company-error" : undefined} />
                {errors.company && <span className="field-error" id="lead-company-error">{errors.company}</span>}
              </div>

              <fieldset className="contact-interest-set" aria-describedby={errors.interests ? "lead-interests-error" : undefined}>
                <legend>What can we help you create? <span>*</span></legend>
                <div className="interest-options">
                  {serviceOptions.map(([value, label]) => (
                    <label className={`interest-option ${values.interests.includes(value) ? "selected" : ""}`} key={value}>
                      <input type="checkbox" name="interests" value={value} checked={values.interests.includes(value)} onChange={() => toggleInterest(value)} />
                      <span className="interest-check" aria-hidden="true"></span>
                      {label}
                    </label>
                  ))}
                </div>
                {errors.interests && <span className="field-error" id="lead-interests-error">{errors.interests}</span>}
              </fieldset>

              <div className="contact-field">
                <label htmlFor="lead-project">Tell us a little about your project <span className="optional">OPTIONAL</span></label>
                <textarea id="lead-project" name="projectDescription" rows="3" maxLength={2000} placeholder="What are you trying to create, improve, launch, or visualize?" value={values.projectDescription} onChange={(event) => update("projectDescription", event.target.value)} aria-invalid={Boolean(errors.projectDescription)} aria-describedby={errors.projectDescription ? "lead-project-error" : undefined} />
                {errors.projectDescription && <span className="field-error" id="lead-project-error">{errors.projectDescription}</span>}
              </div>

              <div className="contact-field contact-budget-field">
                <label htmlFor="lead-budget">Estimated project budget <span className="optional">OPTIONAL</span></label>
                <select id="lead-budget" name="budget" value={values.budget} onChange={(event) => update("budget", event.target.value)}>
                  <option value="">Choose a range</option>
                  <option value="Not sure yet">Not sure yet</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 – $3,000">$1,000 – $3,000</option>
                  <option value="$3,000 – $10,000">$3,000 – $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>

              <div className="consent-row">
                <input id="lead-consent" name="consent" type="checkbox" checked={values.consent} onChange={(event) => update("consent", event.target.checked)} />
                <label htmlFor="lead-consent">I agree to receive emails from Impcoagency about services, insights, updates, and relevant offers. I understand I can unsubscribe at any time. <span className="optional">OPTIONAL</span> <Link to="/privacy">Privacy Policy</Link></label>
              </div>

              <div className="contact-trap" aria-hidden="true">
                <label htmlFor="lead-website">Leave this field empty</label>
                <input id="lead-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} />
              </div>

              {errors.form && <p className="form-error" role="alert">{errors.form}</p>}
              <button className="contact-submit" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Start a Project"}
                {status !== "sending" && <ArrowRight size={17} />}
              </button>
              <p className="contact-note">Your project enquiry goes directly to our team. Marketing emails are only sent if you opt in above.</p>
            </form>
          )}
        </div>
      </section>
      <section className="home-signup contact-signup">
        <div className="container home-signup-inner">
          <div className="home-signup-copy">
            <SectionLabel>IMPCO / UPDATES</SectionLabel>
            <h2>Stay Connected<br /><span>With IMPCOAGENCY</span></h2>
            <p>Get selected updates, new 3D work, creative projects and opportunities from IMPCOAGENCY.</p>
            <p className="signup-disciplines">TECHNOLOGY <span>•</span> CREATIVE <span>•</span> AI <span>•</span> 3D</p>
          </div>
          <div className="brevo-form-container">
            <iframe
              className="brevo-signup-embed"
              title="IMPCO Agency email signup form"
              src="https://1b069c9c.sibforms.com/v2/serve/MUIFAI9gs55vSAuANUqrHySkla01C9ZaerqEKY0zcCKIrQhge_A_3JgqtxZFkhPzmdbsOrr2iQd1ohStJPTtUmEEeuooPJs-hNECNaoVdl7BbBn8Mf6abjMRKMgd14eszNsKFdRCxb4jVPPHBFgYfnCl5H_LJABfe-OIZU3b5vkJ9S8Pm4hfKjDYsoQgwMjwgaN1XzujYhwg5tA0-Q=="
              width="540"
              height="305"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{ display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Buttons({ accent = false }) {
  return (
    <div className="button-row">
      <Link className={accent ? "button button-primary button-accent" : "button button-primary"} to="/contact">
        Start a Project <ArrowRight size={16} />
      </Link>
      <Link className="button button-secondary" to="/contact">
        Contact Us <ArrowRight size={16} />
      </Link>
    </div>
  );
}

function Home() {
  return (
    <>
      <main className="page-shell">
        <section className="home-hero">
        <div className="container home-hero-content">
          <div className="home-hero-kicker">IMPCO AGENCY <span>/</span> DIGITAL STUDIO</div>
          <h1>MAKE THE<br /><em>IMPOSSIBLE</em><br />VISIBLE.</h1>
          <div className="home-hero-bottom">
            <p>We build sharp identities, immersive visuals, intelligent systems, and digital experiences for brands with something to say.</p>
            <Buttons />
          </div>
          <div className="home-hero-scroll">SCROLL TO EXPLORE <ArrowRight size={14} /></div>
        </div>
        </section>

        <section className="home-services">
        <div className="container home-services-head">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <p>One studio. Four ways to move your brand forward.</p>
        </div>
        <div className="service-rail">
          {[
            ["01", "3D / MOTION", "Visual worlds that make products impossible to ignore.", "/3d"],
            ["02", "AI / SYSTEMS", "Useful intelligence that makes ambitious businesses move faster.", "/ai"],
            ["03", "WEB / DIGITAL", "Web experiences designed to be felt, understood, and remembered.", "/web"],
            ["04", "BRANDING / IDENTITY", "A distinct point of view, made visible across every touchpoint.", "/branding"]
          ].map(([number, title, copy, href]) => (
            <Link className="service-rail-item" to={href} key={number}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
        </section>

        <section className="container home-intro section-block">
        <div className="home-intro-title">
          <SectionLabel>THE IMPCO APPROACH</SectionLabel>
          <h2>NOT JUST<br /><span>ANOTHER</span><br />AGENCY.</h2>
        </div>
        <div className="home-intro-copy">
          <p className="home-lede">We bring creative direction and technical craft into the same room. That is how good ideas become clear, confident experiences that people actually remember.</p>
          <div className="home-stat-row">
            <div><strong>04</strong><span>DISCIPLINES</span></div>
            <div><strong>01</strong><span>CONNECTED STUDIO</span></div>
            <div><strong>∞</strong><span>ROOM TO THINK</span></div>
          </div>
          <Link className="text-link" to="/#about">More about IMPCO <ArrowRight size={16} /></Link>
        </div>
        </section>

        <section className="container home-work section-block">
        <div className="home-work-head">
          <div>
            <SectionLabel>SELECTED WORK</SectionLabel>
            <h2>THE WORK<br /><span>SPEAKS.</span></h2>
          </div>
          <Link className="text-link" to="/3d">See all work <ArrowUpRight size={16} /></Link>
        </div>
        <div className="home-work-grid">
          {images.homeProjects.slice(0, 4).map(([image, title, tag], index) => (
            <Link className={`home-work-card work-${index + 1}`} to={tag === "3D" ? "/3d" : tag === "AI" ? "/ai" : tag === "WEB" ? "/web" : "/branding"} key={title}>
              <img src={image.startsWith("http") ? image : A + image} alt={title} loading="lazy" />
              <div className="home-work-caption"><span>{tag}</span><strong>{title}</strong><ArrowUpRight size={18} /></div>
            </Link>
          ))}
        </div>
        </section>

        <section id="about" className="home-about">
        <div className="container home-about-grid">
          <div>
            <SectionLabel>ABOUT IMPCO</SectionLabel>
            <h2>BIG THINKING.<br /><span>BUILT PROPERLY.</span></h2>
          </div>
          <div>
            <p className="home-lede">IMPCO is an independent digital studio for people who want to make something that matters. We keep the team close, the thinking sharp, and the output unmistakably yours.</p>
            <Link className="text-link" to="/#about">Start a conversation <ArrowRight size={16} /></Link>
          </div>
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

        <section className="home-signup">
          <div className="container home-signup-inner">
            <div className="home-signup-copy">
              <SectionLabel>IMPCO / UPDATES</SectionLabel>
              <h2>GOOD IDEAS<br /><span>IN YOUR INBOX.</span></h2>
              <p>Get occasional updates, insights, and ideas from the IMPCO studio.</p>
            </div>
            <div className="brevo-form-container">
              <iframe
                className="brevo-signup-embed"
                title="IMPCO Agency email signup form"
                src="https://1b069c9c.sibforms.com/v2/serve/MUIFAI9gs55vSAuANUqrHySkla01C9ZaerqEKY0zcCKIrQhge_A_3JgqtxZFkhPzmdbsOrr2iQd1ohStJPTtUmEEeuooPJs-hNECNaoVdl7BbBn8Mf6abjMRKMgd14eszNsKFdRCxb4jVPPHBFgYfnCl5H_LJABfe-OIZU3b5vkJ9S8Pm4hfKjDYsoQgwMjwgaN1XzujYhwg5tA0-Q=="
                width="540"
                height="305"
                frameBorder="0"
                scrolling="auto"
                allowFullScreen
                style={{ display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
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
          <img key={gallery[index]} src={A + gallery[index]} alt={`${project.title} ${index + 1}`} />
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
          onChange={(nextIndex) => setViewer((current) => ({ ...current, index: nextIndex }))}
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
          <div className="project-count">10 PROJECTS</div>
        </section>

        <section className="container web-grid section-block">
          {images.webProjects.map(([image, title, tag, link], index) => (
            <article key={title} className={index === 0 || index === 3 || index === 8 ? "wide" : ""}>
              <a href={link} target="_blank" rel="noreferrer">
                <img src={image.startsWith("http") ? image : A + image} alt={title} loading="lazy" />
              </a>
              <div className="web-info">
                <span>{tag}</span>
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noreferrer">Visit Website <ArrowRight size={14} /></a>
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
          <p>When you contact IMPCO Agency, we may receive the information you choose to provide, such as your name, email address, company details and project requirements. Our website may also process basic technical information needed to operate and secure the site.</p>
          <h2>2. How We Use and Share Information</h2>
          <p>We use information to respond to enquiries, discuss and deliver services, communicate about projects, improve our website and maintain security. If you check the marketing consent box on our project form, we use Brevo to send a confirmation email and, only after you confirm, relevant services, insights, updates and offers. You can unsubscribe at any time. We do not sell personal information.</p>
          <h2>3. Email, WhatsApp and Social Links</h2>
          <p>When you choose to contact us by email, WhatsApp or a social platform, you leave this website and use that provider's service. Their own privacy policies and terms apply to information handled by those services.</p>
          <h2>4. Cookies and Analytics</h2>
          <p>If analytics, cookies or similar tools are added in the future, this policy may be updated to explain their purpose and your available choices.</p>
          <h2>5. Data Retention and Security</h2>
          <p>We retain project and enquiry information only for as long as reasonably necessary for business, legal or operational purposes and take reasonable measures to protect it.</p>
          <h2>6. Your Rights</h2>
          <p>Depending on applicable law, you may have rights to request access, correction or deletion of personal information, or to object to certain processing. Contact us at <a href={gmail()} target="_blank" rel="noreferrer">contact@impcoagency.agency</a>.</p>
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
        <Route path="/contact" element={<Contact />} />
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
