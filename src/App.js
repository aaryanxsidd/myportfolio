import { useState, useEffect, useRef } from "react";

/* ─── DATA ──────────────────────────────────────────────────────────────── */
const SKILLS = {
  Languages:  ["Java", "JavaScript", "SQL", "C++", "Python", "HTML"],
  Frameworks: ["React.js", "Node.js", "Express.js", "FastAPI", "Spring Boot"],
  Databases:  ["MongoDB", "PostgreSQL"],
  Tools:      ["Git", "GitHub", "VS Code"],
  Libraries:  ["pandas", "NumPy", "Matplotlib"],
};

const PROJECTS = [
  {
    title: "O2C Management System",
    status: "completed",
    description: "Order-to-Cash management system with a Node.js backend automating the full invoice and payment lifecycle through clean RESTful APIs.",
    tech: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    github: "https://github.com/aaryanxsidd",
    num: "01",
  },
  {
    title: "To-Do List Application",
    status: "completed",
    description: "Task management app with add, delete, and update support. Persists data via localStorage with live DOM manipulation for a snappy UX.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/aaryanxsidd",
    num: "02",
  },
  {
    title: "Blog Application",
    status: "in-progress",
    description: "Full-stack blog platform for creating, editing, and managing posts with RESTful CRUD APIs, React architecture, and JWT-based auth.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/aaryanxsidd",
    num: "03",
  },
  {
    title: "Portfolio Website",
    status: "completed",
    description: "Responsive personal portfolio with interactive navigation, smooth scrolling, and deployment on GitHub Pages.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aaryanxsidd",
    num: "04",
  },
];

const LEADERSHIP = [
  {
    role: "Volunteer Lead",
    org: "Medical Society — KIIT",
    period: "Sep 2024 – Present",
    points: [
      "Led volunteers for community health outreach & awareness drives",
      "Managed event logistics, registration data, and coordination tools",
      "Collaborated cross-functionally to streamline execution",
    ],
  },
  {
    role: "NSS Volunteer",
    org: "National Service Scheme — KIIT",
    period: "Sep 2024 – Present",
    points: [
      "Participated in social welfare and public awareness initiatives",
      "Handled data collection, documentation, and reporting",
      "Assisted in event management and team coordination",
    ],
  },
];

/* ─── HOOKS ─────────────────────────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, y = 24, style = {}, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── ICONS ─────────────────────────────────────────────────────────────── */
const IconMail = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>;
const IconGH   = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
const IconLI   = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
const IconDown = () => <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const IconArr  = () => <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>;

/* ─── PALETTE ────────────────────────────────────────────────────────────── */
// cream base, deep navy text, warm antique gold accent
const C = {
  bg:       "#F8F5F0",   // warm cream
  bgAlt:    "#F2EDE6",   // slightly deeper cream
  card:     "#FFFFFF",   // white cards
  border:   "#E4DDD4",   // warm grey border
  navy:     "#1B2A4A",   // deep navy — primary text
  navyMid:  "#3D5070",   // medium navy
  navyLight:"#7A8FA8",   // muted navy
  gold:     "#A8864A",   // antique gold accent
  goldLight:"#C9A96E",   // lighter gold
  green:    "#4A7C59",   // muted sage green for "in progress"
};

/* ─── APP ────────────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("hero");
  const NAV = ["About", "Skills", "Projects", "Experience", "Contact"];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id.toLowerCase());
    setMenuOpen(false);
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: ${C.bg}; }
    ::-webkit-scrollbar-thumb { background: ${C.gold}; }
    ::selection { background: ${C.gold}22; }
    a { color: inherit; text-decoration: none; }
    body { background: ${C.bg}; }

    .nav-link {
      background: none; border: none; cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-size: .72rem; letter-spacing: .14em; text-transform: uppercase;
      color: ${C.navyLight}; padding: 4px 0; position: relative; transition: color .3s;
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: -2px; left: 0;
      width: 0; height: 1px; background: ${C.gold}; transition: width .3s;
    }
    .nav-link:hover, .nav-link.on { color: ${C.gold}; }
    .nav-link:hover::after, .nav-link.on::after { width: 100%; }

    .sec { padding: 7rem 0; }
    .wrap { max-width: 1120px; margin: 0 auto; padding: 0 2rem; }

    .lbl {
      font-family: 'DM Sans', sans-serif;
      font-size: .65rem; letter-spacing: .22em; text-transform: uppercase;
      color: ${C.gold}; margin-bottom: .6rem;
      display: flex; align-items: center; gap: 10px;
    }
    .lbl::before { content: ''; display: block; width: 28px; height: 1px; background: ${C.gold}; }

    .sec-h {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2.4rem, 5vw, 3.8rem);
      color: ${C.navy}; line-height: 1.05; font-weight: 600;
    }

    .divider { height: 1px; background: ${C.border}; }

    .chip {
      display: inline-block; padding: 5px 16px;
      border: 1px solid ${C.border}; border-radius: 20px;
      font-family: 'DM Sans', sans-serif;
      font-size: .75rem; color: ${C.navyMid}; background: ${C.card};
      transition: all .25s; cursor: default;
    }
    .chip:hover { border-color: ${C.gold}88; color: ${C.gold}; background: #FBF8F3; }

    .pcard {
      background: ${C.card}; border: 1px solid ${C.border};
      padding: 2.2rem; transition: all .35s; position: relative;
      overflow: hidden; height: 100%;
    }
    .pcard::before {
      content: ''; position: absolute; top: 0; left: 0;
      width: 0; height: 2px; background: ${C.gold}; transition: width .4s;
    }
    .pcard:hover { box-shadow: 0 12px 48px ${C.navy}0e; transform: translateY(-3px); border-color: ${C.border}; }
    .pcard:hover::before { width: 100%; }

    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 11px 28px;
      border: 1px solid ${C.navy}; color: ${C.navy};
      font-family: 'DM Sans', sans-serif; font-size: .75rem;
      letter-spacing: .1em; text-transform: uppercase;
      cursor: pointer; background: transparent; transition: all .3s;
      text-decoration: none;
    }
    .btn:hover { background: ${C.navy}; color: #fff; }
    .btn-gold { border-color: ${C.gold}; color: ${C.gold}; }
    .btn-gold:hover { background: ${C.gold}; color: #fff; }
    .btn-fill { background: ${C.navy}; color: #fff; border-color: ${C.navy}; }
    .btn-fill:hover { background: ${C.navyMid}; border-color: ${C.navyMid}; }

    .crow {
      display: flex; align-items: center; gap: 14px;
      padding: 16px 0; border-bottom: 1px solid ${C.border};
      color: ${C.navyLight}; transition: color .3s; cursor: pointer;
    }
    .crow:hover { color: ${C.gold}; }

    .tline { position: relative; padding-left: 1.6rem; }
    .tline::before {
      content: ''; position: absolute; left: 0; top: 8px; bottom: 4px;
      width: 1px; background: linear-gradient(to bottom, ${C.gold}, transparent);
    }
    .tdot {
      position: absolute; left: -4px; width: 9px; height: 9px;
      border-radius: 50%; background: ${C.gold};
      box-shadow: 0 0 0 3px ${C.bg};
    }

    .stat-card {
      border: 1px solid ${C.border}; padding: 1.4rem 1.8rem;
      background: ${C.card}; transition: border-color .3s;
    }
    .stat-card:hover { border-color: ${C.gold}88; }

    @keyframes fadeUp { from{opacity:0;transform:translateY(28px);} to{opacity:1;transform:translateY(0);} }
    @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:0} }
    .blink { animation: blink 1.2s step-end infinite; }

    /* ornament line */
    .ornament {
      display: flex; align-items: center; gap: 12px;
      color: ${C.gold}; font-size: 1rem; margin: 2rem 0;
    }
    .ornament::before, .ornament::after {
      content: ''; flex: 1; height: 1px; background: ${C.border};
    }

    @media (max-width: 640px) {
      .desknav { display: none !important; }
      .mobtog  { display: block !important; }
      .twocol  { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
      .fourcol { grid-template-columns: 1fr 1fr !important; }
    }
  `;

  return (
    <div id="hero" style={{ background: C.bg, color: C.navy, fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{css}</style>

      {/* ── NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.2rem 2.5rem",
        background: scrolled ? "rgba(248,245,240,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all .4s",
      }}>
        <span onClick={() => go("hero")} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: C.navy, cursor: "pointer", fontWeight: 600, letterSpacing: ".02em" }}>
          Aaryan<span style={{ color: C.gold }}>.</span>
        </span>
        <div className="desknav" style={{ display: "flex", gap: "2.4rem" }}>
          {NAV.map(n => (
            <button key={n} className={`nav-link ${activeNav === n.toLowerCase() ? "on" : ""}`} onClick={() => go(n)}>{n}</button>
          ))}
        </div>
        <button className="mobtog" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: C.navy, fontSize: "1.4rem", cursor: "pointer" }}>
          {menuOpen ? "✕" : "≡"}
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", top: 56, left: 0, right: 0, zIndex: 40, background: C.bg, padding: "1.2rem 2rem", borderBottom: `1px solid ${C.border}`, display: "flex", flexDirection: "column", gap: ".8rem" }}>
          {NAV.map(n => <button key={n} className="nav-link" style={{ textAlign: "left" }} onClick={() => go(n)}>{n}</button>)}
        </div>
      )}

      {/* ── HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: `linear-gradient(160deg, #F8F5F0 60%, #F0E8D8 100%)` }}>
        {/* decorative large letter */}
        <div style={{ position: "absolute", right: "-2%", top: "50%", transform: "translateY(-52%)", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(14rem, 28vw, 26rem)", fontWeight: 700, color: C.border, lineHeight: 1, pointerEvents: "none", userSelect: "none", opacity: .6 }}>
          A
        </div>

        <div className="wrap" style={{ paddingTop: "8rem", paddingBottom: "5rem", position: "relative" }}>
          <div style={{ opacity: 0, animation: "fadeUp .8s ease .1s forwards" }}>
            <p className="lbl" style={{ marginBottom: "2rem" }}>KIIT · B.Tech IT · 2027</p>
          </div>

          <div style={{ opacity: 0, animation: "fadeUp .8s ease .3s forwards" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3.8rem, 11vw, 9rem)", fontWeight: 600, lineHeight: .92, color: C.navy, letterSpacing: "-.02em" }}>
              Aaryan<br />
              <span style={{ color: C.gold, fontStyle: "italic" }}>Siddhartha</span>
            </h1>
          </div>

          <div style={{ opacity: 0, animation: "fadeUp .8s ease .5s forwards" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "2.2rem 0" }}>
              <div style={{ width: 48, height: 1, background: C.gold }} />
              <p style={{ fontFamily: "'DM Sans'", fontSize: "clamp(.82rem, 1.6vw, .95rem)", color: C.navyMid, letterSpacing: ".12em", fontWeight: 500 }}>
                ASPIRING FULL STACK DEVELOPER
              </p>
            </div>
          </div>

          <div style={{ opacity: 0, animation: "fadeUp .8s ease .65s forwards" }}>
            <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: C.navyLight, maxWidth: 480, lineHeight: 1.8, fontWeight: 300 }}>
              Building scalable web applications using the MERN stack.
              <span className="blink" style={{ color: C.gold, marginLeft: 2 }}>|</span>
            </p>
          </div>

          <div style={{ opacity: 0, animation: "fadeUp .8s ease .8s forwards", marginTop: "2.8rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn btn-fill" onClick={() => go("Projects")}>View Projects</button>
            <button className="btn btn-gold" onClick={() => go("Contact")}>Get in Touch</button>
          </div>

          {/* Stats row */}
          <div style={{ opacity: 0, animation: "fadeUp .8s ease 1s forwards", display: "flex", gap: "2rem", marginTop: "5rem", flexWrap: "wrap" }}>
            {[["7.45", "CGPA"], ["4+", "Projects"], ["2", "Leadership Roles"]].map(([v, l]) => (
              <div key={l} className="stat-card">
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", color: C.navy, lineHeight: 1, fontWeight: 600 }}>{v}</p>
                <p style={{ fontSize: ".65rem", letterSpacing: ".14em", color: C.navyLight, marginTop: 4, textTransform: "uppercase" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT */}
      <section id="about" className="sec" style={{ borderTop: `1px solid ${C.border}` }}>
        <div className="wrap">
          <div className="twocol" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "5rem", alignItems: "start" }}>
            <Reveal>
              <p className="lbl">Who I Am</p>
              <h2 className="sec-h">Crafting ideas into<br /><em>digital reality</em></h2>
              <p style={{ color: C.navyLight, lineHeight: 1.95, fontSize: ".92rem", marginTop: "1.6rem", fontWeight: 300 }}>
                I'm a second-year B.Tech IT student at <span style={{ color: C.gold, fontWeight: 500 }}>KIIT, Bhubaneswar</span> with a CGPA of 7.45. I work across the full stack — designing RESTful APIs in Node.js to building polished React interfaces.
              </p>
              <p style={{ color: C.navyLight, lineHeight: 1.95, fontSize: ".92rem", marginTop: "1rem", fontWeight: 300 }}>
                Currently exploring <span style={{ color: C.gold, fontWeight: 500 }}>Next.js</span> for server-side rendering and diving into <span style={{ color: C.gold, fontWeight: 500 }}>Machine Learning</span> with Python — bridging intelligent systems with modern web apps.
              </p>
              <div style={{ marginTop: "2rem", display: "flex", gap: 12 }}>
                <a href="https://github.com/aaryanxsidd" target="_blank" rel="noreferrer" className="btn" style={{ padding: "9px 18px", fontSize: ".7rem" }}><IconGH /> GitHub</a>
                <a href="https://www.linkedin.com/in/aaryan-siddhartha-b02ba6343" target="_blank" rel="noreferrer" className="btn btn-gold" style={{ padding: "9px 18px", fontSize: ".7rem" }}><IconLI /> LinkedIn</a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              {/* Education */}
              <div style={{ border: `1px solid ${C.border}`, padding: "2rem", background: C.card, marginBottom: "1.5rem" }}>
                <p style={{ fontSize: ".65rem", letterSpacing: ".18em", textTransform: "uppercase", color: C.gold, marginBottom: "1rem", fontFamily: "'DM Sans'" }}>Education</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: C.navy, fontWeight: 600 }}>B.Tech in Information Technology</p>
                <p style={{ color: C.navyLight, fontSize: ".85rem", marginTop: 4, fontWeight: 300 }}>Kalinga Institute of Industrial Technology</p>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.2rem", alignItems: "center" }}>
                  <span style={{ fontSize: ".72rem", color: C.navyLight, letterSpacing: ".06em" }}>Jul 2023 – Jul 2027</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: C.gold, fontWeight: 600 }}>CGPA: 7.45</span>
                </div>
              </div>

              {/* 2×2 grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: C.border }}>
                {[["MERN Stack","Core expertise"],["REST APIs","Backend focus"],["Next.js","Learning now"],["Machine Learning","Exploring"]].map(([t,s]) => (
                  <div key={t} style={{ background: C.bg, padding: "1.2rem 1.4rem" }}>
                    <p style={{ color: C.navy, fontSize: ".88rem", fontWeight: 500 }}>{t}</p>
                    <p style={{ color: C.gold, fontSize: ".65rem", letterSpacing: ".12em", textTransform: "uppercase", marginTop: 3, fontFamily: "'DM Sans'" }}>{s}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SKILLS */}
      <section id="skills" className="sec" style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="wrap">
          <Reveal>
            <p className="lbl">Tech Stack</p>
            <h2 className="sec-h">Skills</h2>
          </Reveal>
          <div style={{ marginTop: "3.5rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <Reveal key={cat} delay={i * 0.07}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "2.5rem", flexWrap: "wrap" }}>
                  <div style={{ minWidth: 90, paddingTop: 6 }}>
                    <p style={{ fontSize: ".65rem", letterSpacing: ".16em", textTransform: "uppercase", color: C.border, fontFamily: "'DM Sans'" }}>{cat}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flex: 1 }}>
                    {items.map(s => <span key={s} className="chip">{s}</span>)}
                  </div>
                </div>
                {i < Object.keys(SKILLS).length - 1 && <div className="divider" style={{ marginTop: "2rem" }} />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS */}
      <section id="projects" className="sec">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "3.5rem" }}>
            <Reveal>
              <p className="lbl">What I've Built</p>
              <h2 className="sec-h">Projects</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a href="https://github.com/aaryanxsidd" target="_blank" rel="noreferrer" className="btn" style={{ padding: "9px 20px", fontSize: ".7rem" }}>
                <IconGH /> All Repos
              </a>
            </Reveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(265px,1fr))", gap: "1.5rem" }}>
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="pcard">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", color: C.border, lineHeight: 1, fontWeight: 600 }}>{p.num}</span>
                    <span style={{
                      fontFamily: "'DM Sans'", fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase",
                      padding: "4px 12px", borderRadius: 20,
                      background: p.status === "in-progress" ? "#EEF6EE" : "#EEF1F8",
                      color: p.status === "in-progress" ? C.green : C.navyMid,
                      border: `1px solid ${p.status === "in-progress" ? "#C4DEC8" : "#C4CFDF"}`,
                    }}>
                      {p.status === "in-progress" ? "In Progress" : "Completed"}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: C.navy, marginBottom: ".8rem", fontWeight: 600 }}>{p.title}</h3>
                  <p style={{ color: C.navyLight, fontSize: ".85rem", lineHeight: 1.75, marginBottom: "1.5rem", fontWeight: 300 }}>{p.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.8rem" }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ fontFamily: "'DM Sans'", fontSize: ".68rem", padding: "3px 10px", border: `1px solid ${C.border}`, color: C.navyMid, borderRadius: 3 }}>{t}</span>
                    ))}
                  </div>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, color: C.gold, fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", fontFamily: "'DM Sans'", transition: "gap .2s" }}
                    onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                    onMouseLeave={e => e.currentTarget.style.gap = "6px"}
                  >
                    View on GitHub <IconArr />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE */}
      <section id="experience" className="sec" style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="wrap">
          <Reveal>
            <p className="lbl">Leadership</p>
            <h2 className="sec-h">Experience</h2>
          </Reveal>
          <div className="twocol" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", marginTop: "3.5rem" }}>
            {LEADERSHIP.map((l, i) => (
              <Reveal key={l.role} delay={i * 0.15}>
                <div style={{ background: C.card, border: `1px solid ${C.border}`, padding: "2.2rem", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem", flexWrap: "wrap", gap: ".5rem" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: C.navy, fontWeight: 600 }}>{l.role}</h3>
                      <p style={{ color: C.gold, fontSize: ".78rem", letterSpacing: ".06em", marginTop: 3, fontFamily: "'DM Sans'" }}>{l.org}</p>
                    </div>
                    <span style={{ fontFamily: "'DM Sans'", fontSize: ".65rem", color: C.navyLight, letterSpacing: ".08em", whiteSpace: "nowrap" }}>{l.period}</span>
                  </div>
                  <div className="tline" style={{ marginTop: "1.4rem" }}>
                    {l.points.map((pt, j) => (
                      <div key={j} style={{ position: "relative", marginBottom: "1rem" }}>
                        <span className="tdot" style={{ top: 7 }} />
                        <p style={{ color: C.navyLight, fontSize: ".85rem", lineHeight: 1.7, paddingLeft: ".5rem", fontWeight: 300 }}>{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME */}
      <section id="resume" className="sec">
        <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Reveal>
            <p className="lbl" style={{ justifyContent: "center" }}>Download</p>
            <h2 className="sec-h">Resume</h2>
            <div className="ornament"><span>✦</span></div>
            <p style={{ color: C.navyLight, fontSize: ".9rem", maxWidth: 420, lineHeight: 1.85, fontWeight: 300 }}>
              My full credentials, academic background, technical skills, and project history — all in one place.
            </p>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#" className="btn btn-fill"><IconDown /> Download PDF</a>
              <a href="https://github.com/aaryanxsidd" target="_blank" rel="noreferrer" className="btn btn-gold"><IconGH /> GitHub Profile</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT */}
      <section id="contact" className="sec" style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
        <div className="wrap">
          <div className="twocol" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <Reveal>
              <p className="lbl">Let's Talk</p>
              <h2 className="sec-h">Get in<br /><em>touch</em></h2>
              <p style={{ color: C.navyLight, lineHeight: 1.9, fontSize: ".9rem", marginTop: "1.4rem", maxWidth: 340, fontWeight: 300 }}>
                Open to full-time roles, freelance projects, and interesting collaborations. I respond promptly.
              </p>
              {/* status */}
              <div style={{ marginTop: "2.5rem", padding: "1.4rem 1.8rem", background: C.card, border: `1px solid ${C.border}`, display: "inline-block" }}>
                <p style={{ fontFamily: "'DM Sans'", fontSize: ".65rem", letterSpacing: ".16em", textTransform: "uppercase", color: C.navyLight, marginBottom: ".4rem" }}>Current Status</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.green, boxShadow: `0 0 8px ${C.green}66`, display: "inline-block" }} />
                  <span style={{ fontFamily: "'DM Sans'", color: C.green, fontSize: ".85rem", fontWeight: 500 }}>Available for opportunities</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div style={{ marginTop: ".5rem" }}>
                {[
                  { label: "Email",    val: "aaryansiddhartha66@gmail.com", href: "mailto:aaryansiddhartha66@gmail.com", icon: <IconMail /> },
                  { label: "LinkedIn", val: "aaryan-siddhartha", href: "https://www.linkedin.com/in/aaryan-siddhartha-b02ba6343", icon: <IconLI /> },
                  { label: "GitHub",   val: "aaryanxsidd", href: "https://github.com/aaryanxsidd", icon: <IconGH /> },
                ].map(({ label, val, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="crow">
                    <span style={{ color: C.gold, flexShrink: 0 }}>{icon}</span>
                    <div>
                      <p style={{ fontFamily: "'DM Sans'", fontSize: ".63rem", letterSpacing: ".16em", textTransform: "uppercase", color: C.border, marginBottom: 2 }}>{label}</p>
                      <p style={{ fontSize: ".88rem", fontWeight: 400 }}>{val}</p>
                    </div>
                    <span style={{ marginLeft: "auto", opacity: .4 }}><IconArr /></span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER */}
      <footer style={{ padding: "2rem 2.5rem", borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: C.navyLight, fontStyle: "italic" }}>Aaryan Siddhartha</span>
        <p style={{ fontFamily: "'DM Sans'", fontSize: ".68rem", letterSpacing: ".12em", color: C.border }}>© 2025 · KIIT · Bhubaneswar</p>
      </footer>
    </div>
  );
}
