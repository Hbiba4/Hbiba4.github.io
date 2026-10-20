import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  ChevronRight,
  Code2,
  Globe2,
  Handshake,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Sparkles,
  Target,
  Users,
  X,
} from 'lucide-react';

type Category = 'All' | 'Leadership' | 'Technology' | 'Community';

type Highlight = {
  category: Exclude<Category, 'All'>;
  title: string;
  organization: string;
  detail: string;
  year: string;
  image: string;
  tag: string;
};

const portrait = '/Professional_Hijab_Business_Headshot.png';
const students = '/image copy 2.png';
const workshop = '/image copy.png';
const campus = '/image3.png';
const library = '/٢٠٢٥٠٧٢٦_١٦٣١٠٠.jpg';

const highlights: Highlight[] = [
  {
    category: 'Technology',
    title: 'Full-stack development',
    organization: 'Digital Egypt Pioneers Initiative',
    detail: 'Completed intensive .NET development training and co-developed a university management system.',
    year: '2024—25',
    image: workshop,
    tag: 'Applied project',
  },
  {
    category: 'Leadership',
    title: 'Vice President, Ecoverse',
    organization: 'Assiut University student community',
    detail: 'Led student teams in planning environmental campaigns, awareness sessions, and sustainability initiatives.',
    year: '2024—25',
    image: students,
    tag: 'Executive role',
  },
  {
    category: 'Community',
    title: 'International experience',
    organization: 'SHE CAN in ICT · ECO Leaders',
    detail: 'Selected through a competitive interview and worked across inclusive technology, climate action, and social impact.',
    year: '2024—26',
    image: campus,
    tag: '15 participants',
  },
  {
    category: 'Leadership',
    title: 'CFA Institute Research Challenge',
    organization: 'Assiut University champion',
    detail: 'Led industry analysis for Edita Food Industries, studying FMCG market trends and growth drivers.',
    year: 'July 2026',
    image: library,
    tag: '1st place',
  },
];

const stats = [
  { value: '200+', label: 'young learners supported' },
  { value: '1st', label: 'university champion' },
  { value: '15', label: 'selected program participants' },
];

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleHighlights = activeCategory === 'All'
    ? highlights
    : highlights.filter((item) => item.category === activeCategory);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <div className="grain" />
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Back to top">
          <span className="brand-mark">HK</span>
          <span className="brand-copy"><strong>Habiba Kamel</strong><small>Impact portfolio · 2026</small></span>
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => scrollTo('story')}>About</button>
          <button onClick={() => scrollTo('work')}>Experience</button>
          <button onClick={() => scrollTo('highlights')}>Highlights</button>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Start a conversation <ArrowUpRight size={15} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> Ideal Student 2026</div>
          <h1>Building a future<br /><em>with purpose.</em></h1>
          <p className="hero-lede">I’m Habiba — a commerce student, builder, and community leader turning curiosity into meaningful action.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => scrollTo('highlights')}>Explore my work <ArrowDownRight size={17} /></button>
            <button className="text-link" onClick={() => scrollTo('contact')}>Let’s connect <ArrowUpRight size={16} /></button>
          </div>
          <div className="hero-footnote"><span>Based in Assiut, Egypt</span><span className="line" /><span>Commerce · Technology · Impact</span></div>
        </div>
        <div className="hero-visual">
          <div className="image-frame"><img src={portrait} alt="Professional portrait" /></div>
          <div className="visual-note note-top"><Sparkles size={15} /><span>Beyond achievement,<br />toward impact.</span></div>
          <div className="visual-note note-bottom"><span>01</span><span className="note-rule" /><span>story / 26</span></div>
          <div className="stamp"><span>HK</span><small>Assiut University<br />Faculty of Commerce</small></div>
        </div>
      </section>

      <section className="stats-row" aria-label="Portfolio highlights">
        {stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        <div className="stat stat-caption"><span>Selected for<br /><strong>initiative & character</strong></span><Award size={24} /></div>
      </section>

      <section className="story section-grid" id="story">
        <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>THE STORY</span></div>
        <div className="story-content">
          <div className="section-heading"><p className="overline">A curious mind with a bias for action</p><h2>Ideas matter most<br />when they <em>move.</em></h2></div>
          <div className="story-columns">
            <p>My journey sits at the intersection of business, technology, and community. From developing digital solutions to leading student initiatives, I look for the work that creates momentum for people around me.</p>
            <p>I bring an analytical mindset, a collaborative spirit, and the courage to start. Every experience has made the next question more interesting.</p>
          </div>
          <div className="values">
            <div><Target size={20} /><strong>Purpose-led</strong><span>Work that creates real value.</span></div>
            <div><Handshake size={20} /><strong>People-first</strong><span>Better outcomes, together.</span></div>
            <div><Lightbulb size={20} /><strong>Always learning</strong><span>Curiosity into capability.</span></div>
          </div>
        </div>
      </section>

      <section className="work section-grid" id="work">
        <div className="section-kicker"><span>02</span><span className="kicker-line" /><span>WHAT I DO</span></div>
        <div className="work-content">
          <div className="section-heading"><p className="overline">Three ways I contribute</p><h2>From first idea<br />to lasting <em>impact.</em></h2></div>
          <div className="capabilities">
            <article><span className="cap-number">01</span><Code2 size={25} /><h3>Build & create</h3><p>Front-end development, full-stack projects, and digital experiences made to be useful.</p><ChevronRight size={19} /></article>
            <article><span className="cap-number">02</span><Users size={25} /><h3>Lead & grow</h3><p>Student teams, events, and initiatives that turn shared energy into progress.</p><ChevronRight size={19} /></article>
            <article><span className="cap-number">03</span><Globe2 size={25} /><h3>Connect & serve</h3><p>Community engagement, sustainability, and inclusive access to opportunity.</p><ChevronRight size={19} /></article>
          </div>
        </div>
      </section>

      <section className="highlights" id="highlights">
        <div className="highlights-head"><div><div className="section-kicker"><span>03</span><span className="kicker-line" /><span>SELECTED WORK</span></div><h2>Proof in <em>practice.</em></h2></div><p>A growing collection of projects, programs, and moments that shaped how I lead.</p></div>
        <div className="filter-row">{(['All', 'Leadership', 'Technology', 'Community'] as Category[]).map((category) => <button key={category} className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
        <div className="highlight-grid">
          {visibleHighlights.map((item, index) => <article className={index === 0 ? 'highlight-card featured' : 'highlight-card'} key={item.title}>
            <div className="card-image"><img src={item.image} alt={item.title} /><span className="card-tag">{item.tag}</span><span className="card-arrow"><MoveUpRight size={17} /></span></div>
            <div className="card-meta"><span>{item.category}</span><span>{item.year}</span></div><h3>{item.title}</h3><p>{item.detail}</p><small>{item.organization}</small>
          </article>)}
        </div>
      </section>

      <section className="quote-section"><div className="quote-mark">“</div><blockquote>Success is not just what I achieve. It’s what becomes possible for others because I showed up.</blockquote><div className="quote-author"><span className="dot" /> Habiba Kamel · Ideal Student 2026</div></section>

      <footer className="footer" id="contact"><div className="footer-main"><div><div className="eyebrow"><span className="dot" /> Let’s make something meaningful</div><h2>Have an idea?<br /><em>Let’s talk.</em></h2></div><a className="contact-link" href="mailto:habibakamel2019@gmail.com"><span>habibakamel2019<br />@gmail.com</span><ArrowUpRight size={22} /></a></div><div className="footer-bottom"><span>© 2026 Habiba Kamel</span><span>Assiut, Egypt</span><div className="socials"><a href="mailto:habiba.kamel@example.com" aria-label="Email"><Mail size={17} /></a><a href="#top" aria-label="LinkedIn"><Linkedin size={17} /></a></div></div></footer>
    </main>
  );
}

export default App;
