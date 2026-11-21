export function renderCinematic(page,context){
  const {data,orig,integration,season}=context;
  const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const link=(path,text,cls="")=>`<a href="#${path}" class="${cls}">${text}</a>`;
  const crew=orig.production.team;
  const menu=[
    ["/","THE VISION"],
    ["/origin","THE ORIGINAL SERIES"],
    ["/animated","ANIMATED UNIVERSE"],
    ["/acts","EIGHT ACTS"],
    ["/people","THE PEOPLE"],
    ["/impact","IMPACT"],
  ];
  const actStatus=`<span class="f-status">CONCEPT / DEVELOPMENT</span>`;
  const excerpt=`<div class="f-source">FROM THE ORIGINAL 20-PAGE CONCEPT DECK · 2026 PROPOSAL</div>`;
  const sec=(kicker,title,extra="")=>`<div class="f-section-head"><div><span class="f-kicker">${esc(kicker)}</span><h2>${esc(title)}</h2></div>${extra}</div>`;
  const outlineButton=(to,label)=>link(to,`${label} <span aria-hidden="true">↗</span>`,"f-btn f-outline");
  const primaryButton=(to,label)=>link(to,`${label} <span aria-hidden="true">↗</span>`,"f-btn f-primary");
  const premiumCard=(n,title,desc,to)=>`<a href="#${to}" class="f-premium-card"><span class="f-card-number">${n}</span><span class="f-card-icon" aria-hidden="true">✧</span><div class="f-card-content"><h3>${esc(title)}</h3><p>${esc(desc)}</p><span class="f-card-link">EXPLORE THE CHAPTER <b aria-hidden="true">↗</b></span></div></a>`;
  const formatItem=(value,label)=>`<div class="f-fact"><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`;
  const filmCard=(subtitle,title,description,to,kind)=>`<a href="#${to}" class="f-format-card ${kind}"><div class="f-format-art"><img src="${kind==="f-documentary"?"/assets/origin-cover.svg":"/assets/tree-of-life.svg"}" alt="" aria-hidden="true"/></div><div class="f-format-copy"><span class="f-kicker">${esc(subtitle)}</span><h3>${esc(title)}</h3><p>${esc(description)}</p><span class="f-more">ENTER THE WORLD <span>↗</span></span></div></a>`;
  const sourceTag=(pages)=>`<span class="f-source-tag">ORIGINAL DECK · PAGE ${pages.join("–")}</span>`;
  let body="",title="The Vision";
  const heroFire=`<img src="/assets/origin-cover.svg" class="f-fire-art" alt="" aria-hidden="true"/><img src="/assets/circle-sigil.svg" class="f-floating-sigil" alt="" aria-hidden="true"/>`;
  if(page==="home"){
    title="The Vision";
    body=`
      <section class="f-hero f-hero-home">
        ${heroFire}
        <div class="f-hero-noise" aria-hidden="true"></div>
        <div class="f-hero-copy">
          <div class="f-overline"><span></span> AN EPISODIC SERIES & CINEMATIC UNIVERSE <span></span></div>
          <h1>One circle.<br/><em>Infinite</em><br/>perspectives.</h1>
          <p>Where the ancient and the future sit together. Where humanity meets itself, and every conversation has the power to change what comes next.</p>
          <div class="f-actions">
            ${primaryButton("/origin","DISCOVER THE ORIGINAL VISION")}
            ${outlineButton("/animated","EXPLORE THE ANIMATED WORLD")}
          </div>
          <div class="f-hero-notation">AN ORIGINAL DEVELOPMENT PROJECT <span>✦</span> ORIGINAL SERIES + ANIMATED COMPANION</div>
        </div>
        <div class="f-side-text">CIRCLE OF TRUTH — THE STORY CONTINUES</div>
        <div class="f-scroll-hint">SCROLL TO ENTER THE CIRCLE <span>↓</span></div>
      </section>
      <div class="f-ribbon"><span>TRUTH</span><i>✧</i><span>REGENERATION</span><i>✧</i><span>CONVERSATION</span><i>✧</i><span>CONSCIOUSNESS</span><i>✧</i><span>COLLECTIVE FUTURES</span></div>
      <section class="f-section f-intro">
        <div class="f-decorative-number">01 / 05</div>
        <div class="f-intro-grid">
          <div><span class="f-kicker">THE ORIGINAL IDEA</span><h2>We are more connected<br/>than we've ever been.<br/><em>Why do we feel so far apart?</em></h2></div>
          <div><p class="f-intro-prose">Circle of Truth began as an ambitious live documentary and ceremonial gathering: influential voices, everyday people, restorative practices, live performances, and real projects brought into one circle. The evolving creative universe now extends that original idea into fictional, animated conversations.</p><p class="f-smallnote">The original live format and animated companion are separate production concepts united by a shared mission. Guest participation, production schedules and funding remain proposals—not confirmed commitments.</p>${outlineButton("/foundations","READ THE FOUNDING CONTEXT")}</div>
        </div>
      </section>
      <section class="f-section f-format-section">
        ${sec("TWO WORLDS · ONE HUMAN QUESTION","A living experience.<br/>An imagined conversation.",outlineButton("/foundations","HOW THE TWO CONNECT"))}
        <div class="f-format-grid">
          ${filmCard("THE FOUNDING FILM SERIES","The Original Series","An immersive documentary format exploring three ceremonial days, real participants, healing arts, regenerative projects and the closing Circle of Truth.","/origin","f-documentary")}
          ${filmCard("THE NEW CINEMATIC COMPANION","The Animated Universe","A fictional 3D world where powerful personalities step beyond titles and sit together by the fire, exploring questions no stage is willing to ask.","/animated","f-animation")}
        </div>
      </section>
      <section class="f-section f-stats-section">
        <div class="f-stats-intro"><span class="f-kicker">THE ORIGINAL BLUEPRINT</span><h2>Designed for<br/><em>human connection.</em></h2></div>
        <div class="f-stats-grid">${formatItem("15","EPISODES PROPOSED")}${formatItem("12","MAIN GUESTS / CIRCLE")}${formatItem("08","EDITORIAL ACTS")}${formatItem("03","CEREMONIAL DAYS")}</div>
        <p class="f-smallnote">Figures are from the 2026 original development deck; the source also says “90 minutes,” whose exact use requires confirmation.</p>
      </section>
      <section class="f-section f-acts-feature">
        ${sec("THE EIGHT ACTS","The conversations that shape the world.",outlineButton("/acts","EXPLORE ALL EIGHT ACTS"))}
        <div class="f-act-feature-grid">${orig.acts.slice(0,4).map(a=>premiumCard(String(a.number).padStart(2,"0"),a.title,a.subtitle,"/acts")).join("")}</div>
      </section>
      <section class="f-section f-people-highlight"><div class="f-people-illumination" aria-hidden="true"></div><div><span class="f-kicker">THE PEOPLE · THE QUESTIONS</span><h2>World leaders. Artists.<br/>Healers. <em>Human beings.</em></h2><p>Twenty-four potential guests appeared in the original concept deck. Today the combined casting archive documents ${data.characters.length} unique people. No invitation or appearance is implied.</p>${primaryButton("/people","EXPLORE PEOPLE & CAST")}</div><img src="/assets/tree-of-life.svg" alt="" aria-hidden="true"/></section>
      <section class="f-section f-final-prompt"><div class="f-kicker">BEYOND THE SCREEN</div><h2>What if a conversation<br/>could become <em>collective action?</em></h2><p>From storytelling to regenerative projects, the original vision asked us not only to speak about a better world, but to help create it.</p>${outlineButton("/impact","DISCOVER THE IMPACT VISION")}</section>
    `;
  }else if(page==="origin"){
    title="The Original Series";
    body=`<section class="f-hero f-subhero f-origin-hero">${heroFire}<div class="f-subhero-copy"><span class="f-kicker">01 / FOUNDING CONCEPT · EPISODIC DOCUMENTARY</span><h1>The original<br/><em>Circle of Truth.</em></h1><p>A three-day ceremonial journey of conversations, lived experience, healing arts, sound, regenerative practice and truth.</p><div class="f-actions">${primaryButton("/acts","EXPLORE THE EIGHT ACTS")}${outlineButton("/season","VIEW THE 15-EPISODE PLAN")}${outlineButton("/people","ORIGINAL GUEST WISHLIST")}</div><div class="f-source-inline">SOURCE: ORIGINAL DEVELOPMENT DECK · PAGE 3</div></div></section>
    <section class="f-section">${sec("AN AMBITIOUS ORIGINAL FORMAT","A ceremony becomes a conversation.")}<div class="f-editorial-two"><div><p class="f-largelead">The founding show isn't a panel discussion. It is an immersive shared experience unfolding across three ceremonial days and closing with a Circle of 12.</p><div class="f-prose">The deck describes a host, Mark Pancis, guiding guests through regeneration of land, body and spirit. Each installment proposes live performances, regenerative practices, two leading questions and a real project showing people collaborating toward a shared future.</div><p class="f-smallnote">Host and participation roles are as described in the historical deck; current commitments have not been confirmed.</p></div><div class="f-figure-box"><span class="f-kicker">FROM THE ORIGINAL PITCH</span>${formatItem("15","EPISODES PROPOSED")}${formatItem("90 MIN","FORMAT LABEL · MEANING TO CONFIRM")}${formatItem("12","MAIN GUESTS")}${formatItem("1–2","LIVE PERFORMANCES / PRACTICES")}</div></div></section>
    <section class="f-section f-ritual">${sec("THE EVENT ARC","Three days. One circle.")}<div class="f-triptych"><article><span class="f-kicker">DAY I · THE ARRIVAL</span><h3>Gathering</h3><p>Place, land, tradition and people. Participants move beyond their familiar public roles into a shared setting.</p></article><article><span class="f-kicker">DAY II · THE EXPERIENCE</span><h3>Remembering</h3><p>Embodied, ceremonial and regenerative experiences invite curiosity and reflection through practical encounters.</p></article><article><span class="f-kicker">DAY III · THE CONVERSATION</span><h3>Reconnecting</h3><p>Twelve participants sit together to explore two central truth topics and the choices that could follow.</p></article></div><p class="f-smallnote">Illustrative three-day treatment based on the deck's three-day ceremonial concept, not an approved production schedule.</p></section>
    <section class="f-section">${sec("A SHOW ABOUT DOING","Every episode points toward action.",outlineButton("/impact","IMPACT FRAMEWORK"))}<div class="f-ritual-illustration"><div class="f-ritual-circle" aria-hidden="true">◎</div><div class="f-ritual-copy"><span class="f-kicker">THE FIELD COMPONENT</span><h3>Regeneration is not a backdrop.</h3><p>Land restoration, community leadership, practical projects and collective decisions are part of the original storytelling design—not just atmospheric imagery.</p></div></div></section>
    <section class="f-section">${sec("PEOPLE BEHIND THE INITIAL VISION","The founding production roster.")}<div class="f-crew-grid">${crew.map(c=>`<div class="f-crew"><span class="f-kicker">${esc(c.role)}</span><h3>${esc(c.name)}</h3><small>${esc(c.status)} · DECK P. 10</small></div>`).join("")}</div><p class="f-smallnote">All credits are transcribed from the original pitch-era roster, not represented as current contracts. Jerry Bruckheimer is explicitly listed as a potential lead producer only.</p></section>
    ${renderDistribution()}
    <section class="f-section f-concept-next"><h2>A vision rooted in ceremony.<br/><em>Built to make room for everyone.</em></h2>${outlineButton("/timeline","HISTORICAL PLAN & TIMELINE")}</section>`;
  }else if(page==="animated"){
    title="The Animated Universe";
    const pilot=data.episodes[0];
    body=`<section class="f-hero f-subhero f-animated-hero"><div class="f-tree-hero-visual"><img src="/assets/tree-of-life.svg" alt="" aria-hidden="true"/></div><div class="f-subhero-copy"><span class="f-kicker">02 / THE FICTIONAL CINEMATIC COMPANION</span><h1>The circle<br/>beyond <em>reality.</em></h1><p>What if the most powerful, familiar and contradictory voices in human history were simply asked to sit down and listen?</p><div class="f-actions">${primaryButton("/episode/pilot-001","READ THE PILOT STORYBOARD")}${outlineButton("/collections","ENTER THE CAST LIBRARY")}</div><div class="f-source-inline">ORIGINAL FICTIONAL PORTRAYALS · PRE-PRODUCTION</div></div></section>
    <section class="f-section">${sec("THE STORY ENGINE","From spectacle to stillness.")}<div class="f-editorial-two"><div><p class="f-largelead">At an extravagant gala, a quiet visitor arrives in simple linen. One invitation changes the room forever.</p><p class="f-prose">Jesus guides selected guests away from prestige into a timeless space with equal-height chairs and a shared fire. He asks a disarming question: “How is everyone doing?” Suddenly the people we think we know are simply human.</p><div class="f-actions">${primaryButton("/episode/pilot-001","OPEN THE INVITATION")}</div></div><div class="f-animated-panel"><img src="/assets/tree-of-life.svg" alt="" aria-hidden="true"/><span>THE INVITATION<br/><em>pilot 001</em></span></div></div></section>
    <section class="f-section">${sec("THE FICTIONAL WORLD","Two spaces. One threshold.")}<div class="f-triptych f-two"><article><span class="f-kicker">I / THE GALA</span><h3>The world of status</h3><p>Power, luxury and endless noise. Dramatic architecture, restrained movement and a quiet interruption.</p></article><article><span class="f-kicker">II / THE CIRCLE</span><h3>The world of presence</h3><p>A low fire, warm light and equal chairs. No stage, no throne: only real-feeling human questions.</p></article></div></section>
    <section class="f-section">${sec("THE CAST LIBRARY","A living archive of perspectives.",outlineButton("/characters","BROWSE ALL PEOPLE"))}<div class="f-stat-strip">${formatItem(String(data.characters.length),"UNIQUE CHARACTER RECORDS")}${formatItem(String(data.collections.length),"COLLECTIONS & REFERENCE SETS")}${formatItem(String(data.episodes.length),"PILOT & EPISODE CONCEPTS")}</div><div class="f-featured-lineup">${data.collections.filter(g=>["hollywood-legends-i","global-iii","hollywood-power-iii"].includes(g.id)).map(g=>`<a href="#/collection/${g.id}"><span class="f-kicker">${esc(g.sector)}</span><h3>${esc(g.title)}</h3><p>${esc(g.short)}</p><b>VIEW COLLECTION ↗</b></a>`).join("")}</div></section>
    <section class="f-section">${sec("TELLING THE TRUTH ABOUT FICTION","Clear creative boundaries.")}<div class="f-prose">The dialogue is invented. These are artistic portrayals of real people and historical or spiritual figures, never real meetings, statements, endorsements, or authentic religious revelations. Voices must be original/licensed performances, not unauthorized clones. This track has not yet produced a finished animated episode.</div></section>`;
  }else if(page==="acts"){
    title="The Eight Acts";
    body=`<section class="f-page-heading f-acts-heading"><span class="f-kicker">THE EIGHT PILLARS · ORIGINAL DECK PAGES 5–6</span><h1>Eight acts.<br/><em>One collective question.</em></h1><p>The founding documentary's eight thematic acts are a storytelling framework across the proposed live series—not eight completed episodes. Select an act to explore its purpose.</p></section>
    <section class="f-section f-act-page">${sec("THE ORIGINAL STRUCTURE","A journey from remembrance to possibility.")}<div class="f-act-select-grid">${orig.acts.map((a,i)=>`<button type="button" class="f-act-choice ${i===0?"selected":""}" data-act="${i}" aria-pressed="${i===0}"><span>${String(a.number).padStart(2,"0")}</span><strong>${esc(a.title)}</strong><small>↗</small></button>`).join("")}</div><div id="f-active-act" class="f-act-detail">${actDetail(orig.acts[0])}</div></section>`;
  }else if(page==="season"){

 title="The 15-Episode Plan";
 const n=season.episodes.length;
 body=`<section class="f-page-heading"><span class="f-kicker">THE ORIGINAL SERIES · PROPOSED SEASON</span><h1>Fifteen episodes.<br/><em>One larger story.</em></h1><p>The founding deck proposed ${n} episodes built around eight editorial acts. It did not assign individual episode titles, guests, filming dates or specific stories. This development board preserves every open slot without inventing production milestones.</p></section>
 <section class="f-section">${sec("THE OPEN SEASON SLATE","Structured for collaboration; programming not yet approved.")}<div class="f-season-grid">${season.episodes.map(ep=>`<article class="f-season-episode"><div class="f-season-top"><span>EPISODE ${String(ep.ordinal).padStart(2,"0")}</span><b>UNASSIGNED</b></div><strong>${String(ep.ordinal).padStart(2,"0")}</strong><h3>Awaiting the story.</h3><p>Guests, ceremony, regenerative practice, impact project and two topics to be developed.</p><a href="https://github.com/SacredRebel/circle-of-truth/issues/new" target="_blank" rel="noopener noreferrer">PROPOSE A BRIEF ↗</a></article>`).join("")}</div><p class="f-smallnote">Original deck p. 3 and p. 15. The phrase “90 minutes” is retained in the source; its precise relationship to each episode is not confirmed.</p></section>
 <section class="f-section">${sec("THE FORMAT BLOCKS","A proposed blueprint for each filmed episode.")}<div class="f-episode-blocks">${season.programmingRules.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><p>${esc(x)}</p></article>`).join("")}</div><div class="f-actions">${primaryButton("/acts","EIGHT EDITORIAL ACTS")}${outlineButton("/timeline","PRODUCTION HISTORY")}</div></section>`;

  }else if(page==="people"){
    title="The People";
    body=`<section class="f-page-heading"><span class="f-kicker">THE HUMAN CONSTELLATION</span><h1>Not just names.<br/><em>Potential conversations.</em></h1><p>Explore the original 24-person potential guest wishlist and the combined ${data.characters.length}-person character registry. The two lists are connected, but a wishlist is never a confirmed booking.</p></section>
    <section class="f-section"><div class="f-people-controls"><div class="f-toggle-set"><button class="f-toggle selected" data-people-view="original" aria-pressed="true">ORIGINAL GUEST WISHLIST <b>24</b></button><button class="f-toggle" data-people-view="cast" aria-pressed="false">COMPLETE REGISTRY <b>${data.characters.length}</b></button></div><input type="search" class="f-guest-search" id="f-person-filter" placeholder="Find a person or field…" aria-label="Search people"/></div><div class="f-smallnote" id="f-people-summary">Potential guests listed in the founding 2026 deck, pp. 7–8. None presented as confirmed.</div><div class="f-guest-grid" id="f-guest-grid">${guestCards("original","")}</div></section>`;
  }else if(page==="impact"){
    title="Regeneration & Impact";
    body=`<section class="f-hero f-subhero f-impact-hero">${heroFire}<div class="f-subhero-copy"><span class="f-kicker">03 / THE PHYSICAL WORLD</span><h1>Stories that<br/><em>restore.</em></h1><p>Regeneration of land, body and spirit: the original vision links profound conversation to tangible work in the world.</p><div class="f-actions">${primaryButton("/origin","THE ORIGINAL SERIES")}${outlineButton("/foundations","SOURCE & PROVENANCE")}</div></div></section>
    <section class="f-section">${sec("BEYOND THE STORY","A lens on practical collaboration.")}<div class="f-impact-grid">${orig.pillars.map((p,i)=>`<article><span>0${i+1} / PILLAR</span><h3>${esc(p.title)}</h3><p>${esc(p.detail)}</p></article>`).join("")}</div></section>
    <section class="f-section"><div class="f-editorial-two"><div><span class="f-kicker">THE PROPOSED ORIGIN PLACE</span><h2 class="f-editorial-title">Awhai / <em>Ojai.</em><br/>California.</h2><p class="f-prose">The deck places production in Ojai, framing the valley as a setting for regenerative communities, reflection and cultural dialogue. The place is a proposed setting, not a confirmed filming contract.</p><p class="f-smallnote">Specific historical, Indigenous and land assertions in the deck require review with reliable sources and relevant communities. No spiritual or medical efficacy is claimed as proven.</p></div><div class="f-land-art"><span>LAND · PEOPLE · CULTURE</span><div>Ojai<br/><em>California</em></div></div></div></section>
    <section class="f-section f-concept-next"><h2>Not a promise of impact.<br/><em>A framework to earn it.</em></h2><p>Field projects, permission-led community stories and transparent outcomes belong in future verified editions of the site.</p>${outlineButton("/timeline","VIEW THE DEVELOPMENT ROADMAP")}</section>`;
  }else if(page==="partners"){
    title="Development & Partners";
    body=`<section class="f-page-heading"><span class="f-kicker">ARCHIVED DEVELOPMENT PLAN · NOT AN ACTIVE OFFER</span><h1>Resources for<br/><em>the bigger vision.</em></h1><p>The original deck included a three-show pilot proposal, suggested production financing and five contribution levels. We preserve these for historical planning without presenting them as current offers or verified financial projections.</p></section>
    <section class="f-section">${sec("THE ORIGINAL PILOT PROPOSAL","An archived budget, not committed funding.")}<div class="f-finance-hero"><div><span class="f-kicker">SOURCE: ORIGINAL PITCH DECK · P. 16</span><strong>$1.1M</strong><p>Historical proposed budget for three pilot shows in Q2–Q3 2026. No current funding, contracts or tax status is independently confirmed.</p></div><div class="f-funding-meta">${formatItem("03","PROPOSED PILOT SHOWS")}${formatItem("2026","ORIGINAL TARGET YEAR")}${formatItem("TBD","REMAINING SERIES BUDGET")}</div></div></section>
    <section class="f-section">${sec("HISTORICAL CONTRIBUTION CONCEPTS","Retained for review only. No checkout, enrollment, donation or investment is enabled.")}<div class="f-package-grid">${orig.business.packages.map((p,i)=>`<article class="f-package"><span class="f-kicker">DRAFT TIER 0${i+1}</span><h3>${esc(p.headline)}</h3><strong>${p.amountUSD>=1000000?"$1M+":"$"+p.amountUSD/1000+"K"}</strong><div class="f-package-lines">${p.benefits.map(b=>`<span>${esc(b)}</span>`).join("")}</div><small>HISTORICAL PITCH CONCEPT · NOT AN ACTIVE OFFER</small></article>`).join("")}</div><p class="f-smallnote">Audience-size claims, philanthropic tax deductibility, credit, participation, and promised outcomes require legal/commercial review and must not be advertised as established.</p></section>`;
  }else if(page==="timeline"){
    title="Timeline";
    body=`<section class="f-page-heading"><span class="f-kicker">PRODUCTION REALITY · HISTORICAL VS ACTIVE</span><h1>A vision across<br/><em>time and mediums.</em></h1><p>The founding proposal contained 2026 full-moon filming milestones. This page separates those historical targets from the actual animated preproduction work and future decisions.</p></section>
    <section class="f-section">${sec("THE ORIGINAL DECK","The intended documentary production cycle.")}<div class="f-history">${orig.production.cadence.originalMilestones.map((m,i)=>`<article><span>0${i+1}</span><div><h3>${esc(m.split(":")[0])}</h3><p>${esc(m.split(":").slice(1).join(":").trim())}</p></div><b>UNVERIFIED / HISTORICAL</b></article>`).join("")}<article><span>04</span><div><h3>2026–2027 lunar production</h3><p>Full-moon recordings and proposed new-moon retreat content from the original deck.</p></div><b>PLANNED ONLY</b></article></div></section>
    <section class="f-section">${sec("THE DEVELOPMENT TRACKS","What we have today—and the next verified gate.")}<div class="f-triptych f-two"><article><span class="f-kicker">LIVE DOCUMENTARY</span><h3>Concept & research</h3><p>Founding production structure, historical target schedule, guest wishlist and draft business plan have been archived. Filming, funding and participant confirmations still require evidence.</p></article><article><span class="f-kicker">ANIMATED COMPANION</span><h3>Story & casting</h3><p>A pilot storyboard, ${data.characters.length} canonical names and concept art have been organized. The first technical goal is a 12–20 second three-character Blender proof.</p></article></div><div class="f-actions" style="margin-top:26px">${primaryButton("/production","PRODUCTION STUDIO")}${outlineButton("/foundations","INTEGRATION NOTES")}</div></section>`;
  }else if(page==="foundations"){
    title="Foundations & Source";
    body=`<section class="f-page-heading"><span class="f-kicker">EDITORIAL PROVENANCE · THE FULL IDEA</span><h1>Where we began.<br/><em>What we're building.</em></h1><p>The original 20-page presentation and the newer animated concept are both part of Circle of Truth. Here is how we preserve the foundational intention without confusing two very different formats.</p></section>
    <section class="f-section">${sec("ONE NAME · TWO CREATIVE TRACKS","The original documentary is the foundation. The animated world is a separate companion.")}<div class="f-format-grid">${integration.tracks.map(t=>filmCard(t.label,t.subtitle,t.foundation,t.id==="live"?"/origin":"/animated",t.id==="live"?"f-documentary":"f-animation")).join("")}</div></section>
    <section class="f-section">${sec("THE CREATIVE COMPARISON","Preserved distinctions, not an artificial merger.")}<div class="f-comparison"><div class="f-comp-head"><span>DIMENSION</span><span>ORIGINAL DOCUMENTARY</span><span>ANIMATED COMPANION</span></div>${integration.conflicts.map(c=>`<div class="f-comp-row"><strong>${esc(c.field)}</strong><p>${esc(c.founding)}</p><p>${esc(c.newer)}</p><small>${esc(c.resolution)}</small></div>`).join("")}</div></section>
    <section class="f-section">${sec("THE FOUNDING DECK","Twenty pages. A complete early development vision.")}<div class="f-source-grid">${orig.provenance.map((x,i)=>`<div class="f-source-card"><span>${String(i+1).padStart(2,"0")}</span><div><h3>${esc(x.section)}</h3><p>ORIGINAL PDF · ${x.pages.map(p=>"P."+p).join(", ")}</p></div></div>`).join("")}</div><div class="f-source-disclaimer"><strong>The original file is intentionally not republished here.</strong><p>It contains contact details and third-party-looking mood-board photography, whose public reuse rights have not been established. The source is preserved in the original user-provided PDF; derived editorial data and page provenance are available in the GitHub repository.</p><a href="https://github.com/SacredRebel/circle-of-truth/blob/main/docs/ORIGINAL_DECK_ANALYSIS.md" target="_blank" rel="noopener noreferrer">READ THE PROVENANCE & COMPARISON REPORT ↗</a></div></section>
    <section class="f-section">${sec("WHAT WE MUST NOT CONFUSE","Planning is not production.")}<div class="f-ethics-grid">${integration.editorialDecisions.map((x,i)=>`<div><span>0${i+1}</span><p>${esc(x)}</p></div>`).join("")}</div></section>`;
  }else{return false;}
  const nav=menu.map(([path,label])=>`<a href="#${path}" class="${(page==="home"&&path==="/")||(page!=="home"&&path==="/"+page)?"current":""}">${esc(label)}</a>`).join("");
  const footExtra=[
    ["/season","15-EPISODE SLATE"],["/timeline","TIMELINE"],["/partners","DEVELOPMENT"],["/foundations","SOURCE NOTES"],["/collections","CAST COLLECTIONS"],["/episodes","EPISODES"],["/production","PRODUCTION STUDIO"]
  ].map(([path,label])=>`<a href="#${path}">${label}</a>`).join("");
  document.body.classList.add("cinematic-mode");
  document.title=title+" · Circle of Truth";
  const app=document.querySelector("#app");
  app.innerHTML=`<div class="film-site">
    <header class="f-header"><a href="#/" class="f-brand" aria-label="Circle of Truth home"><img src="/assets/circle-sigil.svg" alt="" aria-hidden="true"/><span>CIRCLE <em>OF</em> TRUTH <small>AN EPISODIC UNIVERSE</small></span></a>
    <nav class="f-desktop-nav" aria-label="Main navigation">${nav}</nav>
    <div class="f-nav-right"><a href="#/collections" class="f-studio-link">ENTER STUDIO <span>↗</span></a><button class="f-menu-btn" aria-controls="f-mobile-nav" aria-expanded="false" aria-label="Open navigation">☰</button></div></header>
    <div class="f-mobile-nav" id="f-mobile-nav" hidden>${menu.map(([path,label])=>`<a href="#${path}">${esc(label)}</a>`).join("")}<a href="#/collections">PRODUCTION STUDIO ↗</a>${footExtra}</div>
    <main id="f-main">${body}</main>
    <footer class="f-footer"><div class="f-footer-primary"><div class="f-footer-brand"><img src="/assets/circle-sigil.svg" alt="" aria-hidden="true"/><span>Circle of Truth<small>THE HUMAN STORY CONTINUES</small></span></div><p>One circle. Two worlds. An invitation to see one another differently.</p></div><div class="f-footer-links"><span>DISCOVER</span><a href="#/origin">ORIGINAL SERIES</a><a href="#/animated">ANIMATED UNIVERSE</a><a href="#/acts">THE EIGHT ACTS</a><a href="#/people">PEOPLE & CAST</a></div><div class="f-footer-links"><span>PROJECT</span>${footExtra}</div><div class="f-footer-bottom"><span>© CIRCLE OF TRUTH · CREATIVE DEVELOPMENT · ORIGINAL DECK INTEGRATED</span><span>WORK IN PROGRESS / FICTIONAL CONTENT CLEARLY LABELED</span></div></footer>
  </div>`;
  const menuBtn=document.querySelector(".f-menu-btn");
  const mobile=document.querySelector("#f-mobile-nav");
  menuBtn.addEventListener("click",()=>{const open=menuBtn.getAttribute("aria-expanded")==="true";menuBtn.setAttribute("aria-expanded",String(!open));mobile.hidden=open;menuBtn.textContent=open?"☰":"✕";});
  mobile.addEventListener("click",e=>{if(e.target.closest("a")){mobile.hidden=true;menuBtn.setAttribute("aria-expanded","false");menuBtn.textContent="☰";}});
  if(page==="acts"){
    document.querySelectorAll(".f-act-choice").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".f-act-choice").forEach(b=>{b.classList.remove("selected");b.setAttribute("aria-pressed","false");});btn.classList.add("selected");btn.setAttribute("aria-pressed","true");const a=orig.acts[Number(btn.dataset.act)];document.querySelector("#f-active-act").innerHTML=actDetail(a);}));
  }
  if(page==="people"){
    let view="original";
    const input=document.querySelector("#f-person-filter");
    const update=()=>{const q=input.value.trim().toLowerCase();document.querySelector("#f-guest-grid").innerHTML=guestCards(view,q);document.querySelector("#f-people-summary").textContent=view==="original"?"Original pitch guest wishlist • no bookings confirmed • source pages 7–8":`Shared canonical registry • ${data.characters.length} unique entries • status does not imply participation`;};
    document.querySelectorAll("[data-people-view]").forEach(btn=>btn.addEventListener("click",()=>{view=btn.dataset.peopleView;document.querySelectorAll("[data-people-view]").forEach(b=>{b.classList.toggle("selected",b===btn);b.setAttribute("aria-pressed",String(b===btn));});update();}));
    input.addEventListener("input",update);
  }
  function guestCards(which,q){
    if(which==="original"){
      const people=orig.guests.filter(g=>[g.name,g.domain,g.sourceSpelling].join(" ").toLowerCase().includes(q));
      return people.length?people.map((g,i)=>{const character=data.characters.find(p=>p.name.toLowerCase()===g.name.toLowerCase());const inner=`<div class="f-person-mark">${esc(g.name.split(" ").map(n=>n[0]).slice(0,2).join(""))}</div><span class="f-kicker">${esc(g.domain)}</span><h3>${esc(g.name)}</h3><p>ORIGINAL DECK P. ${g.sourcePage} · POTENTIAL GUEST</p>${character?'<span class="f-person-link">VIEW CANONICAL RECORD ↗</span>':""}`;return character?`<a href="#/character/${character.id}" class="f-person-box">${inner}</a>`:`<article class="f-person-box">${inner}</article>`;}).join(""):`<div class="f-empty">No guests match that search.</div>`;
    }
    const all=data.characters.filter(p=>[p.name,p.role,...p.tags].join(" ").toLowerCase().includes(q));
    return all.length?all.slice(0,160).map(p=>`<a href="#/character/${p.id}" class="f-person-box"><div class="f-person-mark">${esc(p.name.split(" ").map(n=>n[0]).slice(0,2).join(""))}</div><span class="f-kicker">${esc(p.tags[0]||"CASTING")}</span><h3>${esc(p.name)}</h3><p>${esc(p.role)}</p><span class="f-person-link">OPEN CAST RECORD ↗</span></a>`).join(""):`<div class="f-empty">No characters match that search.</div>`;
  }
  function actDetail(a){
    return `<div class="f-act-detail-num">${String(a.number).padStart(2,"0")}<span>/ 08</span></div><div><span class="f-kicker">FROM THE FOUNDING SCRIPT TREATMENT · DECK P. ${a.pages.join(", ")}</span><h3>${esc(a.title)}</h3><h4>${esc(a.subtitle)}</h4><p>${esc(a.description)}</p><div class="f-keywords">${a.themes.map(t=>`<span>${esc(t)}</span>`).join("")}</div></div>`;
  }
function renderDistribution(){
 return `<section class="f-section f-distribution-section">${sec("REACH THE AUDIENCE","The original release and distribution concept.")}<div class="f-distribution-grid">${orig.distribution.channels.map((ch,i)=>`<div class="f-distribution-card"><span class="f-kicker">CHANNEL / 0${i+1}</span><h3>${esc(ch.name)}</h3><p>${esc(ch.role)}</p></div>`).join("")}</div><p class="f-smallnote">Source deck p. 12. These were proposed distribution platforms, not confirmed deals, premieres or publication dates.</p></section>`;
}
  return true;
}
