import { useState } from "react";

type Capability = {
  title: string;
  body: string;
};

type Screenshot = {
  src: string;
  alt: string;
  label: string;
};

type SuiteApp = {
  name: string;
  category: "Audio Mastery" | "Music Intelligence" | "Execution Systems";
  description: string;
  href: string;
  featured?: boolean;
  screenshots: Screenshot[];
  defaultScreenshot: string;
};

type CategoryGroup = {
  name: SuiteApp["category"];
  body: string;
};

type AppScreenshotShowcaseProps = {
  appName: string;
  screenshots: Screenshot[];
  defaultActiveScreenshot: string;
  eyebrow?: string;
  heading?: string;
  badge?: string;
  compact?: boolean;
};

const capabilities: Capability[] = [
  {
    title: "Instant A/B switching",
    body: "Move between decks without losing the listening thread.",
  },
  {
    title: "Loudness matching",
    body: "Compare tone, depth, and impact without volume bias.",
  },
  {
    title: "Blend mode",
    body: "Hear references and working masters together for fast calibration.",
  },
  {
    title: "Difference mode",
    body: "Expose what changed between versions, not just what feels louder.",
  },
  {
    title: "Mono and phase analysis",
    body: "Check translation, center image, and phase behavior in context.",
  },
  {
    title: "Loop and alignment controls",
    body: "Repeat critical moments and align decisions to the exact passage.",
  },
];

const heroHighlights = [
  "Interactive chord diagrams",
  "Song workspace and chord search",
  "Upload and organize song material",
  "Built for practice, learning, and arrangement",
];

const suiteApps: SuiteApp[] = [
  {
    name: "TrackMaster",
    category: "Audio Mastery",
    description:
      "A focused audio mastery app for sharpening reference listening, mastering judgment, and workflow confidence.",
    href: "https://trackmaster.aibry.shop",
    screenshots: [
      {
        src: "/screenshots/trackmaster/TrackMaster1.PNG",
        alt: "TrackMaster main dashboard screenshot",
        label: "Main view",
      },
      {
        src: "/screenshots/trackmaster/TrackMaster2.PNG",
        alt: "TrackMaster secondary workflow screenshot",
        label: "Workflow",
      },
      {
        src: "/screenshots/trackmaster/TrackMaster3.PNG",
        alt: "TrackMaster focused tool screenshot",
        label: "Detail",
      },
    ],
    defaultScreenshot: "/screenshots/trackmaster/TrackMaster1.PNG",
  },
  {
    name: "TrackMaster Comparator",
    category: "Audio Mastery",
    description:
      "A/B mastering comparison with instant deck switching, loudness matching, blend and difference listening, mono checks, and phase tools.",
    href: "https://comparator.aibry.shop",
    screenshots: [
      {
        src: "/screenshots/comparator/Comparator1.PNG",
        alt: "TrackMaster Comparator comparison interface screenshot",
        label: "Compare",
      },
      {
        src: "/screenshots/comparator/Comparator2.PNG",
        alt: "TrackMaster Comparator detailed analysis screenshot",
        label: "Analyze",
      },
    ],
    defaultScreenshot: "/screenshots/comparator/Comparator1.PNG",
  },
  {
    name: "ChordMaster",
    category: "Music Intelligence",
    description:
      "Practice, analyze, and organize songs with an interactive chord workspace.",
    href: "https://chordmaster.aibry.shop",
    featured: true,
    screenshots: [
      {
        src: "/screenshots/chordmaster/ChordMaster1.PNG",
        alt: "ChordMaster app screenshot",
        label: "Workspace",
      },
      {
        src: "/screenshots/chordmaster/ChordMaster2.PNG",
        alt: "ChordMaster chord chart workspace screenshot",
        label: "Analysis",
      },
    ],
    defaultScreenshot: "/screenshots/chordmaster/ChordMaster1.PNG",
  },
  {
    name: "TaskMaster",
    category: "Execution Systems",
    description:
      "A structured execution system for turning creative work into clear priorities, focused tasks, and reliable follow-through.",
    href: "https://taskmaster.aibry.shop",
    screenshots: [
      {
        src: "/screenshots/taskmaster/TaskMaster1.PNG",
        alt: "TaskMaster planning view screenshot",
        label: "Planning",
      },
      {
        src: "/screenshots/taskmaster/TaskMaster2.PNG",
        alt: "TaskMaster structured workflow screenshot",
        label: "Workflow",
      },
      {
        src: "/screenshots/taskmaster/TaskMaster3.PNG",
        alt: "TaskMaster task detail screenshot",
        label: "Detail",
      },
    ],
    defaultScreenshot: "/screenshots/taskmaster/TaskMaster1.PNG",
  },
];

const categoryGroups: CategoryGroup[] = [
  {
    name: "Audio Mastery",
    body: "Reference listening, mastering comparison, and decision tools for engineers, producers, and critical listeners.",
  },
  {
    name: "Music Intelligence",
    body: "Interactive systems for understanding harmony, structure, and musical relationships through use, not memorization.",
  },
  {
    name: "Execution Systems",
    body: "Workflow apps that help creative teams and solo builders convert intent into organized, trackable action.",
  },
];

const steps = [
  "Learn the concept in a tight, practical frame.",
  "Use the app against real creative material.",
  "Get immediate feedback from the instrument itself.",
  "Build judgment through repetition and real workflow pressure.",
];

const heroApp = suiteApps.find((app) => app.name === "ChordMaster");

function App() {
  return (
    <main>
      <Hero />
      <ProductSpotlight />
      <WhyAibry />
      <CategoryGrouping />
      <AppSuite />
      <HowItWorks />
      <ClosingCta />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero section-pad" id="top">
      <Nav />
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">AIBRY Masterclass App Series</p>
          <h1>ChordMaster</h1>
          <p className="hero__subhead">
            Practice, analyze, and organize songs with an interactive chord workspace.
          </p>
          <p>
            ChordMaster helps musicians work through songs faster with chord search, visual diagrams, song workspace tools, file uploads, and a cleaner practice flow for learning and arranging music.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            <a className="button button--primary" href="#apps">
              Explore Apps
            </a>
            <a className="button button--secondary" href={heroApp?.href ?? "https://chordmaster.aibry.shop"} target="_blank" rel="noreferrer">
              Open ChordMaster
            </a>
          </div>
          <div className="hero__proof" aria-label="Product principles">
            {heroHighlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </div>
        {heroApp ? (
          <AppScreenshotShowcase
            appName={heroApp.name}
            screenshots={heroApp.screenshots}
            defaultActiveScreenshot={heroApp.defaultScreenshot}
            eyebrow="Interactive chord workspace"
            heading="ChordMaster"
            badge="Featured"
          />
        ) : null}
      </div>
    </section>
  );
}

function Nav() {
  return (
    <header className="nav" aria-label="Site header">
      <a className="brand" href="#top" aria-label="AIBRY home">
        <span className="brand__mark">A</span>
        <span>AIBRY</span>
      </a>
      <nav className="nav__links" aria-label="Primary navigation">
        <a href="#trackmaster">TrackMaster</a>
        <a href="#categories">Categories</a>
        <a href="#apps">Apps</a>
        <a href="#start">Start</a>
      </nav>
    </header>
  );
}

function AppScreenshotShowcase({
  appName,
  screenshots,
  defaultActiveScreenshot,
  eyebrow = "Live app preview",
  heading,
  badge = "Live",
  compact = false,
}: AppScreenshotShowcaseProps) {
  const initialIndex = screenshots.findIndex((screenshot) => screenshot.src === defaultActiveScreenshot);
  const [activeIndex, setActiveIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const activeScreenshot = screenshots[activeIndex] ?? screenshots[0];

  return (
    <section className={`showcase ${compact ? "showcase--compact" : ""}`} aria-label={`${appName} screenshot showcase`}>
      <div className="showcase__frame">
        <div className="showcase__meta">
          <div>
            <p>{eyebrow}</p>
            <strong>{heading ?? appName}</strong>
          </div>
          <span className="status-pill">{badge}</span>
        </div>
        <div className="laptop">
          <div className="laptop__camera" aria-hidden="true" />
          <div className="laptop__screen">
            <img
              key={activeScreenshot.src}
              className="showcase__image"
              src={activeScreenshot.src}
              alt={activeScreenshot.alt}
            />
          </div>
          <div className="laptop__base" aria-hidden="true" />
        </div>
      </div>
      <div className="showcase__thumbs" role="tablist" aria-label={`${appName} screenshots`}>
        {screenshots.map((screenshot, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={screenshot.src}
              type="button"
              className={`showcase__thumb ${isActive ? "showcase__thumb--active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              aria-label={`Show ${appName} screenshot ${index + 1}: ${screenshot.label}`}
            >
              <img src={screenshot.src} alt="" />
              <span>{screenshot.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ProductSpotlight() {
  return (
    <section className="section-pad spotlight" id="trackmaster">
      <div className="section-heading">
        <p className="eyebrow">Flagship product</p>
        <h2>TrackMaster Comparator turns mastering comparison into focused practice.</h2>
        <p>
          Built for engineers, producers, and critical listeners who need more than passive lessons. TrackMaster gives you an instrument for hearing decisions clearly.
        </p>
      </div>
      <div className="feature-grid">
        {capabilities.map((capability) => (
          <article className="feature-card" key={capability.title}>
            <div className="feature-card__icon" aria-hidden="true" />
            <h3>{capability.title}</h3>
            <p>{capability.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyAibry() {
  return (
    <section className="section-pad philosophy" id="why">
      <div className="philosophy__panel">
        <p className="eyebrow">Why AIBRY</p>
        <h2>Most platforms give you content. AIBRY gives you instruments.</h2>
        <p>
          Creative skill does not develop by watching alone. It develops through comparison, adjustment, feedback, and repetition inside the workflow you are trying to master.
        </p>
        <p>The Masterclass App Series pairs concise instruction with purpose-built tools, helping users practice real decisions instead of collecting more passive lessons.</p>
      </div>
    </section>
  );
}

function CategoryGrouping() {
  return (
    <section className="section-pad categories" id="categories">
      <div className="section-heading">
        <p className="eyebrow">Product categories</p>
        <h2>One system, three skill domains.</h2>
        <p>The suite spans listening, music intelligence, and execution so practice connects directly to the work.</p>
      </div>
      <div className="category-grid">
        {categoryGroups.map((group) => (
          <article className="category-card" key={group.name}>
            <span>{group.name}</span>
            <p>{group.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AppSuite() {
  return (
    <section className="section-pad" id="apps">
      <div className="section-heading">
        <p className="eyebrow">Live app suite</p>
        <h2>Launch the AIBRY apps from one place.</h2>
        <p>The suite spans comparison, music intelligence, and execution tools built for real workflow practice.</p>
      </div>
      <div className="series-grid">
        {suiteApps.map((app) => (
          <article className={`series-card ${app.featured ? "series-card--featured" : ""}`} key={app.name}>
            <div className="series-card__top">
              <span>{app.category}</span>
              <strong>Live</strong>
            </div>
            <AppScreenshotShowcase
              appName={app.name}
              screenshots={app.screenshots}
              defaultActiveScreenshot={app.defaultScreenshot}
              compact
            />
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <a className="button button--card" href={app.href} target="_blank" rel="noreferrer">
              Launch App
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-pad flow" id="how">
      <div className="section-heading">
        <p className="eyebrow">How it works</p>
        <h2>Learn through deliberate interaction.</h2>
      </div>
      <div className="flow-grid">
        {steps.map((step, index) => (
          <article className="flow-card" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="section-pad cta" id="start">
      <div className="cta__panel">
        <p className="eyebrow">Start using the system</p>
        <h2>Open the suite and practice inside the workflow.</h2>
        <p>Begin with TrackMaster Comparator, then move across the AIBRY app system as your work demands sharper listening, clearer music decisions, and better execution.</p>
        <div className="cta__actions" aria-label="Suite launch actions">
          <a className="button button--primary" href="https://trackmaster.aibry.shop" target="_blank" rel="noreferrer">
            Launch TrackMaster Comparator
          </a>
          <a className="button button--secondary" href="#apps">
            Explore All Apps
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand" href="#top" aria-label="AIBRY home">
          <span className="brand__mark">A</span>
          <span>AIBRY</span>
        </a>
        <p>Interactive masterclass apps that teach by doing.</p>
      </div>
      <nav className="footer__links" aria-label="Footer navigation">
        <a href="#trackmaster">TrackMaster</a>
        <a href="#why">Why AIBRY</a>
        <a href="#categories">Categories</a>
        <a href="#apps">Apps</a>
      </nav>
      <p className="copyright">© 2026 AIBRY. All rights reserved.</p>
    </footer>
  );
}

export default App;
