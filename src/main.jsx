import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter,useLocation,useNavigate,Link} from "react-router-dom";
import {ArrowRight,ArrowUpRight,Instagram,Linkedin,Youtube,Menu,X,ChevronLeft,ChevronRight} from "lucide-react";
import {config,images,A,wa,mail} from "./config";
import "./styles.css";

const nav=[["HOME","/"],["3D","/3d"],["AI","/ai"],["WEB","/web"],["BRANDING","/branding"],["ABOUT","/#about"],["CONTACT",null]];

function Header(){
 const [open,setOpen]=React.useState(false);
 const loc=useLocation();
 return <header className="header"><div className="nav-inner">
   <Link className="brand" to="/" onClick={()=>setOpen(false)}>{config.brand}<small> AGENCY</small></Link>
   <button className="hamb" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   <nav className={open?"open":""}>{nav.map(([n,p])=>p===null?<a key={n} href={mail()} onClick={()=>setOpen(false)}>{n}</a>:<a key={n} className={(loc.pathname===p.split("#")[0]&&(!p.includes("#")||loc.hash==="#about")?"active ":"")} href={p} onClick={()=>setOpen(false)}>{n}</a>)}</nav>
   <a className="top-btn" href={wa()} target="_blank" rel="noreferrer">START A PROJECT <ArrowRight size={13}/></a>
 </div></header>
}

function Footer(){
 return <footer><div className="footer-inner">
   <div><div className="brand foot-brand">{config.brand}<small> AGENCY</small></div><div className="muted">3D · AI · WEB · BRANDING</div><p>Premium digital experiences for forward-thinking brands and organizations worldwide.</p></div>
   <div><b>NAVIGATION</b>{nav.slice(0,7).map(([n,p])=><Link key={n} to={p}>{n}</Link>)}</div>
   <div><b>CONNECT</b><div className="socials">
    <a aria-label="LinkedIn" className={!config.socials.linkedin?"unconfigured":""} href={config.socials.linkedin||"#"} target={config.socials.linkedin?"_blank":undefined} rel={config.socials.linkedin?"noreferrer":undefined}><Linkedin/></a>
    <a aria-label="X" className={!config.socials.x?"unconfigured":""} href={config.socials.x||"#"} target={config.socials.x?"_blank":undefined} rel={config.socials.x?"noreferrer":undefined}><span className="x-icon">𝕏</span></a>
    <a aria-label="Threads" className={!config.socials.threads?"unconfigured":""} href={config.socials.threads||"#"} target={config.socials.threads?"_blank":undefined} rel={config.socials.threads?"noreferrer":undefined}><span className="threads-icon">@</span></a>
    <a aria-label="YouTube" className={!config.socials.youtube?"unconfigured":""} href={config.socials.youtube||"#"} target={config.socials.youtube?"_blank":undefined} rel={config.socials.youtube?"noreferrer":undefined}><Youtube/></a>
    <a aria-label="Instagram" className={!config.socials.instagram?"unconfigured":""} href={config.socials.instagram||"#"} target={config.socials.instagram?"_blank":undefined} rel={config.socials.instagram?"noreferrer":undefined}><Instagram/></a>
   </div><div className="whatsapp-contact"><span>WHATSAPP</span><a href={wa()} target="_blank" rel="noreferrer">+44 7418 320714</a></div><a className="small-start" href={wa()} target="_blank" rel="noreferrer">START A PROJECT <ArrowRight size={12}/></a></div>
 </div><div className="footer-bottom"><span>© {new Date().getFullYear()} IMPCO AGENCY. ALL RIGHTS RESERVED.</span><span><Link to="/privacy">PRIVACY POLICY</Link> &nbsp;&nbsp; <Link to="/terms">TERMS OF SERVICE</Link></span></div></footer>
}

function Label({children}){return <div className="label"><i></i>{children}</div>}
function Buttons({gold=false}){return <div className="buttons"><a className={gold?"btn gold":"btn"} href={wa()} target="_blank" rel="noreferrer">Start a Project <ArrowRight/></a><a className="btn ghost" href={mail()}>Contact Us <ArrowRight/></a></div>}

function Home(){
 const cards=[["01","◇","3D DESIGN & ANIMATION","Immersive 3D visuals, product showcases, environments, animation and interactive experiences.","3D","/3d"],
 ["02","◇","AI SOLUTIONS","Intelligent systems and automation that help businesses work smarter, faster and more efficiently.","AI","/ai"],
 ["03","◇","WEB SOLUTIONS","Modern websites and web applications, e-commerce and scalable digital experiences.","WEB","/web"],
 ["04","◇","BRANDING & CREATIVE","Complete visual identities and digital experiences that make brands impossible to ignore.","Branding","/branding"]];
 return <><main className="home">
  <section className="home-hero wrap"><div className="hero-copy"><Label>3D · AI · WEB · BRANDING · BRANDING</Label><h1>WE BUILD WHAT<br/><span>IMAGINATION</span><br/>DEMANDS.</h1><p>IMPCO Agency combines 3D design, artificial intelligence, web technology and creative branding to help businesses transform ideas into exceptional digital experiences.</p><Buttons/></div><div className="hero-visual"><img src={A+images.homeHero}/><div className="tag t1">3D / ANIMATION</div><div className="tag t2">AI / BRANDING</div><div className="tag t3">WEB / DIGITAL</div></div></section>
  <section className="wrap create"><Label>OUR CAPABILITIES</Label><h2>WHAT WE CREATE</h2><p className="intro">From high-performance digital products and immersive experiences to powerful brand identities, we create the possibilities that turn ideas into impact.</p><div className="cap-grid">{cards.map(([n,ic,t,d,l,p])=><Link to={p} className="cap" key={n}><em>{ic}</em><strong>{n}</strong><h3>{t}</h3><p>{d}</p><span>Explore {l} <ArrowRight/></span></Link>)}</div></section>
  <section className="wrap meet"><div className="meet-img"><img src={A+images.homeFeature}/></div><div><Label>WHY IMPCO</Label><h2>CREATIVITY MEETS<br/>TECHNOLOGY</h2><p>We leverage technology and creative thinking to build experiences that make brands unforgettable.</p><div className="mini-grid"><div><b>Creative Thinking</b><span>Ideas crafted for meaningful impact.</span></div><div><b>Technical Expertise</b><span>Modern solutions built to perform.</span></div><div><b>End-to-End Solutions</b><span>From concept through launch.</span></div><div><b>Built Around Your Goals</b><span>Strategy aligned with your vision.</span></div></div></div></section>
  <section className="wrap portfolio"><Label>PORTFOLIO</Label><h2>A GLIMPSE OF WHAT WE DO</h2><div className="home-projects">{images.homeProjects.map(([im,t,tag])=><div className="home-project" key={t}><img src={A+im}/><div><span>{tag}</span><h3>{t}</h3><p>Selected work from the IMPCO creative portfolio.</p></div></div>)}</div><div className="filter-links"><Link to="/3d">View All 3D Work</Link><Link to="/ai">View All AI Work</Link><Link to="/web">View All Web Work</Link><Link to="/branding">View All Branding Work</Link></div></section>
  <section className="process wrap"><Label>OUR PROCESS</Label><h2>FROM IDEA TO REALITY</h2><div className="process-row">{["DISCOVER","DESIGN","BUILD","DELIVER"].map((x,i)=><div key={x}><b>0{i+1}</b><h3>{x}</h3><p>We understand your needs, develop the right solution and deliver with precision.</p></div>)}</div></section>
  <section className="ambition wrap"><Label>WHO WE WORK WITH</Label><h2>BUILT FOR AMBITIOUS IDEAS</h2><p>We partner with startups, businesses, agencies and organizations ready to turn bold ideas into meaningful digital experiences.</p><div className="pills">{["Startups","Businesses","Agencies","Enterprises","Product Designers","Creative Teams","Organizations"].map(x=><span key={x}>{x}</span>)}</div></section>
  <section id="about" className="wrap about-section"><div><Label>ABOUT IMPCO</Label><h2>CREATIVE THINKING.<br/><span>TECHNICAL PRECISION.</span></h2><p>IMPCO Agency is a multidisciplinary digital studio bringing 3D, AI, web technology and branding together under one roof. We work with companies and individuals to turn ideas into clear, engaging and purposeful digital experiences.</p><p>Our work spans different fields and project types — from product visualisation, 3D environments and animation to intelligent AI systems, websites, web applications, e-commerce experiences and complete brand identities. Every engagement is shaped around the client's goals, audience and practical needs.</p><p>Whether we're helping a growing company launch a digital presence, supporting an established organisation with a new platform, or helping an individual bring a creative idea to life, our approach combines design, technology and dependable execution from concept to delivery.</p></div><div className="about-points"><div><b>3D & VISUAL EXPERIENCES</b><span>Product, environment, character, animation and visualisation work.</span></div><div><b>AI & AUTOMATION</b><span>Practical intelligent tools, automation and AI-powered experiences.</span></div><div><b>WEB & DIGITAL PRODUCTS</b><span>Websites, applications, e-commerce and scalable digital experiences.</span></div><div><b>BRANDING & CREATIVE</b><span>Identity systems, creative direction and digital brand expression.</span></div></div></section>
  <section className="home-cta"><h2>HAVE AN IDEA?<br/><span>LET'S BUILD IT.</span></h2><p>Tell us what you're thinking about. We'll help turn the idea into a powerful digital experience.</p><Buttons/></section>
 </main><Footer/></>
}

function PortfolioViewer({project,index,onClose,onChange}){
 const touchStart=React.useRef(null);
 const gallery=project.images.slice(0,5);
 const total=gallery.length;
 const change=(offset)=>onChange((index+offset+total)%total);
 React.useEffect(()=>{
  const onKeyDown=(event)=>{
   if(event.key==="Escape")onClose();
   if(event.key==="ArrowLeft")change(-1);
   if(event.key==="ArrowRight")change(1);
  };
  document.addEventListener("keydown",onKeyDown);
  const previousOverflow=document.body.style.overflow;
  document.body.style.overflow="hidden";
  return()=>{document.removeEventListener("keydown",onKeyDown);document.body.style.overflow=previousOverflow;};
 },[index,total,onClose]);
 return <div className="portfolio-viewer" role="dialog" aria-modal="true" aria-label={`${project.title} image viewer`} onClick={onClose}>
  <div className="viewer-panel" onClick={(event)=>event.stopPropagation()} onTouchStart={(event)=>{touchStart.current=event.changedTouches[0].clientX;}} onTouchEnd={(event)=>{const distance=event.changedTouches[0].clientX-touchStart.current;if(Math.abs(distance)>45)change(distance>0?-1:1);}}>
   <button className="viewer-close" type="button" onClick={onClose} aria-label="Close image viewer"><X/></button>
   <div className="viewer-heading"><span>3D / {project.id}</span><h2>{project.title}</h2></div>
  <div className="viewer-image-wrap"><img src={A+gallery[index]} alt={`${project.title}, image ${index+1} of ${total}`}/></div>
   {total>1&&<><button className="viewer-nav viewer-prev" type="button" onClick={()=>change(-1)} aria-label="Previous image"><ChevronLeft/></button><button className="viewer-nav viewer-next" type="button" onClick={()=>change(1)} aria-label="Next image"><ChevronRight/></button></>}
  <div className="viewer-footer"><span>{index+1} / {total}</span>{total>1&&<div className="viewer-dots" aria-label="Choose image">{gallery.map((image,imageIndex)=><button key={`${image}-${imageIndex}`} className={imageIndex===index?"active":""} type="button" onClick={()=>onChange(imageIndex)} aria-label={`Show image ${imageIndex+1}`}/>)}</div>}<span>ESC TO CLOSE</span></div>
  </div>
 </div>;
}

function ThreeD(){
 const [viewer,setViewer]=React.useState(null);
 const open=(project)=>setViewer({project,index:0});
 return <><main className="portfolio-page threeD-page"><section className="page-head wrap"><Label>IMPCO / 3D</Label><h1>3D</h1><p>A collection of 3D experiences, visuals and environments we've created.</p><div className="tabs">{["ALL","CONCEPTS","PRODUCTS","ARCHITECTURE","ENVIRONMENTS","CHARACTERS","OTHER"].map((x,i)=><button className={i===0?"sel":""} key={x}>{x}</button>)}</div></section><section className="threeD-list wrap">{images.threeD.map((project)=><button className="threeD-item" type="button" key={project.id} onClick={()=>open(project)} aria-label={`Open ${project.title} gallery`}><img src={A+project.images[0]} alt={project.title} loading="lazy"/><span className="threeD-caption"><span>3D</span><strong>{project.title}</strong><ArrowUpRight/></span></button>)}</section></main><Footer/>{viewer&&<PortfolioViewer project={viewer.project} index={viewer.index} onClose={()=>setViewer(null)} onChange={(index)=>setViewer({...viewer,index})}/>}</>;
}

function AI(){
 const services=["AI CHATBOTS","AI AGENTS & AUTOMATION","AI-POWERED WEBSITES","AI CONTENT & MEDIA","CUSTOM AI SOLUTIONS","AI-DRIVEN DATA","AI FOR E-COMMERCE","AI IMPLEMENTATION"];
 return <><main className="ai-page"><section className="ai-hero wrap"><div><Label>AI / SOLUTIONS</Label><h1>INTELLIGENCE,<br/><span>BUILT FOR<br/>YOUR BUSINESS.</span></h1><p>We design and build practical AI solutions that automate workflows, improve customer experiences and create new possibilities.</p><Buttons/><div className="ai-stats"><b>8+ <small>AI SOLUTIONS</small></b><b>100% <small>SCALABLE</small></b><b>24/7 <small>SUPPORT</small></b></div></div><div className="ai-art"><div className="chat-card">AI assistant<br/><b>How can I help your business?</b><div className="chat-line"></div><div className="chat-line short"></div></div></div></section>
 <section className="wrap ai-services"><Label>WHAT WE CAN BUILD</Label><h2>WHAT WE CAN BUILD<br/><span>WITH AI</span></h2><p>From intelligent customer solutions to business automation, we turn AI into practical solutions.</p><div className="service-grid">{services.map((x,i)=><div key={x}><b>◈</b><small>0{i+1}</small><h3>{x}</h3><p>Practical AI systems designed around your business needs and real-world outcomes.</p><a href={wa()} target="_blank" rel="noreferrer">Explore AI <ArrowRight/></a></div>)}</div></section>
 <section className="wrap purpose"><div><Label>THE DIFFERENCE</Label><h2>AI WITH<br/><span>A PURPOSE</span></h2><p>We don't use AI simply because it's trending. We focus on finding where AI can create real value for your business.</p><blockquote>“Build smarter. Build with AI.”</blockquote></div><div className="purpose-cards">{["POWERFUL","SCALABLE","SECURE","HUMAN-CENTRED"].map(x=><div key={x}><b>{x}</b><p>Thoughtful systems made for sustainable growth.</p></div>)}</div></section>
 <section className="wrap ai-process"><Label>PROCESS</Label><h2>FROM IDEA TO<br/><span>INTELLIGENCE</span></h2><div>{["DISCOVER","STRATEGY","BUILD","OPTIMIZE"].map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3><p>Clear goals, thoughtful design and measurable results.</p></article>)}</div></section>
 <section className="wrap ai-services ai-business"><Label>CAPABILITIES</Label><h2>WHAT CAN AI DO<br/><span>FOR YOUR BUSINESS?</span></h2><div className="service-grid compact">{["CUSTOMER SUPPORT","LEAD GENERATION","BUSINESS AUTOMATION","CONTENT CREATION","DATA ANALYSIS","E-COMMERCE","MARKETING","INTERNAL OPERATIONS"].map(x=><div key={x}><h3>{x}</h3><p>Automate, analyze and improve the work that matters.</p></div>)}</div></section>
 <section className="wrap ai-work"><Label>PORTFOLIO</Label><h2>AI SOLUTIONS<br/><span>WE'VE BUILT</span></h2><div className="ai-project-grid">{images.aiProjects.map(([im,t])=><div key={t}><img src={A+im}/><span>{t}</span></div>)}</div></section>
 <section className="ai-cta"><Label>READY FOR AI?</Label><h2>READY TO PUT<br/><span>AI TO WORK?</span></h2><p>Tell us what you want to automate, improve or create. We'll help turn the idea into practical AI.</p><Buttons/><div className="ai-values"><b>Fast</b><b>Scalable</b><b>Practical</b></div></section></main><Footer/></>
}

function Web(){
 return <><main className="web-page"><section className="web-head wrap"><Label>IMPCO AGENCY / WEB</Label><h1><span>WEB</span> SOLUTIONS</h1><p>Websites, applications and digital experiences we've built.</p><div className="project-count">12 PROJECTS</div><div className="tabs">{["ALL","WEBSITES","WEB APPS","E-COMMERCE","APPLICATIONS","OTHER"].map((x,i)=><button className={i===0?"sel":""} key={x}>{x}</button>)}</div></section><section className="web-grid wrap">{images.webProjects.map(([im,t,tag],i)=><article className={(i===0||i===3||i===8)?"wide":""} key={t}><img src={A+im}/><div><span>{tag}</span><h3>{t}</h3><a href={wa()} target="_blank" rel="noreferrer">Visit Website <ArrowRight/></a></div></article>)}</section></main><Footer/></>
}

function Branding(){
 return <><main className="brand-page"><section className="brand-hero"><div className="brand-hero-copy wrap"><Label>IMPCO AGENCY / BRANDING</Label><h1>BRANDING</h1><p>Building memorable brands through strategy, identity, creative direction and digital expression.</p><Buttons gold/></div><div className="brand-hero-collage">{images.branding.slice(0,4).map(([im,t])=><img key={t} src={A+im}/>)}</div></section>
 <section className="wrap brand-products"><Label>OUR BRANDING WORK</Label><h2>BRANDED PRODUCTS<br/><span>& CREATIVE WORK</span></h2><div className="tabs">{["ALL","IDENTITY","PACKAGING","PRINT","DIGITAL","CAMPAIGNS","OTHER"].map((x,i)=><button className={i===0?"sel":""} key={x}>{x}</button>)}</div><div className="brand-stack">{images.branding.map(([im,t])=><article key={t}><img src={A+im}/><span>{t}</span></article>)}</div></section>
 <section className="wrap identities"><Label>BRANDING</Label><h2>COMPLETE<br/><span>BRAND IDENTITIES</span></h2><div>{images.branding.slice(0,4).map(([im,t])=><article key={t}><img src={A+im}/><b>{t}</b></article>)}</div></section>
 <section className="brand-cta"><Label>LET'S CREATE TOGETHER</Label><h2>READY TO BUILD</h2><p>Have a brand that needs a stronger identity? Let's create something memorable.</p><Buttons gold/></section></main><Footer/></>
}


function Legal({type}){ const privacy=type==="privacy"; return <main className="legal-page wrap"><Label>IMPCO AGENCY / {privacy?"PRIVACY POLICY":"TERMS OF SERVICE"}</Label><h1>{privacy?"PRIVACY POLICY":"TERMS OF SERVICE"}</h1><p className="legal-updated">Last updated: September 16, 2026</p>{privacy?<><h2>1. Information We Collect</h2><p>When you contact IMPCO Agency, we may receive the information you choose to provide, such as your name, email address, phone number, company details and project requirements. Our website may also process basic technical information needed to operate and secure the site.</p><h2>2. How We Use Information</h2><p>We use information to respond to enquiries, discuss and deliver services, communicate about projects, improve our website and maintain security. We do not sell personal information.</p><h2>3. Email, WhatsApp and Social Links</h2><p>When you choose to contact us by email, WhatsApp or a social platform, you leave this website and use that provider's service. Their own privacy policies and terms apply to information handled by those services.</p><h2>4. Cookies and Analytics</h2><p>If analytics, cookies or similar tools are added in the future, this policy may be updated to explain their purpose and your available choices.</p><h2>5. Data Retention and Security</h2><p>We retain project and enquiry information only for as long as reasonably necessary for business, legal or operational purposes and take reasonable measures to protect it.</p><h2>6. Your Rights</h2><p>Depending on applicable law, you may have rights to request access, correction or deletion of personal information, or to object to certain processing. Contact us at <a href={mail()}>hello@impcoagency.com</a>.</p><h2>7. Changes</h2><p>We may update this policy when our services, technology or legal obligations change. The date above will be updated when material changes are made.</p></>:<><h2>1. Services</h2><p>IMPCO Agency provides creative and digital services including 3D design and animation, AI solutions, web development and branding. The exact scope, deliverables, timeline and fees for a project are agreed with the client before work begins.</p><h2>2. Client Responsibilities</h2><p>Clients are responsible for supplying accurate information, approvals, content, credentials and other materials reasonably required to complete a project. Delays in client feedback or supplied materials may affect delivery dates.</p><h2>3. Fees and Payment</h2><p>Project fees, deposits, milestones and payment dates are agreed in writing for each engagement. Work may be paused when agreed payments are overdue.</p><h2>4. Revisions and Approval</h2><p>Revisions are handled according to the scope agreed for the project. Once a deliverable is approved, later changes may be treated as additional work.</p><h2>5. Intellectual Property</h2><p>Unless a project agreement states otherwise, IMPCO retains ownership of its pre-existing tools, templates, processes and reusable know-how. Final client deliverables and their usage rights are transferred or licensed according to the agreed project terms and payment status.</p><h2>6. Third-Party Services</h2><p>Projects may use third-party software, hosting, APIs, platforms or assets. Their availability and terms are controlled by those providers and may affect project functionality or costs.</p><h2>7. Portfolio Use</h2><p>Unless a confidentiality agreement or project agreement says otherwise, IMPCO may display completed work in its portfolio and promotional materials.</p><h2>8. Limitation</h2><p>We aim to deliver professional work with reasonable care. To the extent permitted by applicable law, IMPCO is not responsible for indirect losses arising from use of a delivered website, application, creative asset or service.</p><h2>9. Cancellation</h2><p>Either party may end an engagement according to the agreed project terms. Fees for completed work, committed costs and approved deliverables remain payable.</p><h2>10. Contact</h2><p>Questions about these terms can be sent to <a href={mail()}>hello@impcoagency.com</a>.</p></>}</main> }

function App(){return <><Header/><Routes/></>}
function Routes(){const p=useLocation().pathname; if(p==="/3d")return <ThreeD/>; if(p==="/ai")return <AI/>; if(p==="/web")return <Web/>; if(p==="/branding")return <Branding/>; if(p==="/privacy")return <><Legal type="privacy"/><Footer/></>; if(p==="/terms")return <><Legal type="terms"/><Footer/></>; return <Home/>}
createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);