import { renderCinematic } from "./cinematic.js";
const ROOT="https://github.com/SacredRebel/circle-of-truth";
let DATA=null, ORIGINAL=null, INTEGRATION=null;const state={sector:"All",castQuery:"",gallery:"All"};
const statuses={"approved-artwork":["Approved look","approved"],"artwork-created":["Artwork produced","neutral"],"reference-artwork":["Reference art","neutral"],"needs-correct-image":["Needs correct poster","blocked"],"development":["In development","neutral"],"roster-only":["Dedup registry","neutral"],storyboard:["Storyboard","neutral"],idea:["Concept only","neutral"],rendered:["Rendered","neutral"],approved:["Creator approved","approved"],rejected:["Rejected","blocked"],review:["Needs review","neutral"],reference:["Reference","neutral"]};
const $=s=>document.querySelector(s);
const esc=(s="")=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const slug=s=>String(s).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const badge=s=>{const [t,c]=statuses[s]||[String(s).replaceAll("-"," "),"neutral"];return `<span class="tag ${c}">${esc(t)}</span>`};
const initials=s=>String(s).split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0].toUpperCase()).join("");
const icon=(name)=>({home:"⌂",collections:"▦",characters:"♧",episodes:"▤",gallery:"▧",story:"✧",production:"⚙",assets:"◈",collaboration:"✎"}[name]||"◇");
const navLinks=[["/","home","Overview"],["/collections","collections","Collections"],["/characters","characters","Character library"],["/episodes","episodes","Episodes & slate"],["/gallery","gallery","Visual gallery"],["/story","story","Story world"],["/production","production","Production"],["/assets","assets","Assets & research"],["/collaboration","collaboration","Collaboration"]];
const routePath=()=>decodeURIComponent((location.hash||"#/").replace(/^#/,""))||"/";
const url=path=>"#"+path;
const personByName=name=>DATA.characters.find(x=>x.name===name);
const collectionById=id=>DATA.collections.find(x=>x.id===id);
function shell(body,path){
 document.body.classList.remove("cinematic-mode");
 const sect=path.split("/")[1]||"";
 const active=sect==="collection"?"collections":sect==="character"?"characters":sect==="episode"?"episodes":sect;
 const crumb=navLinks.find(x=>x[1]===active)?.[2]|| (sect==="collection"?"Collection details":sect==="episode"?"Episode detail":sect==="character"?"Character": "Overview");
 $("#app").innerHTML=`<div class="app-shell">
 <aside class="sidebar"><a class="brand-block" href="#/"><div class="brand-symbol">◉</div><div class="brand-word">Circle of<br/> Truth<small>Creative studio</small></div></a>
 <div class="nav-head">Explore the universe</div><nav>${navLinks.slice(0,6).map(([p,k,t])=>`<a href="#${p}" class="nav-item ${active===k?"active":""}"><span style="font-size:18px;width:20px;text-align:center">${icon(k)}</span><span>${t}</span>${k==="collections"?'<small>'+DATA.collections.length+'</small>':""}</a>`).join("")}</nav>
 <div class="nav-head">Production office</div><nav>${navLinks.slice(6).map(([p,k,t])=>`<a href="#${p}" class="nav-item ${active===k?"active":""}"><span style="font-size:18px;width:20px;text-align:center">${icon(k)}</span><span>${t}</span></a>`).join("")}</nav>
 <div class="sidebar-bottom"><div class="mini-online">Project library online</div><p>Internal development portal.<br/>Fictional portrayals · Working material</p><a class="top-link" href="${ROOT}" target="_blank" rel="noopener noreferrer">Repository ↗</a></div></aside>
 <div class="main-shell"><header class="topbar"><div style="display:flex;align-items:center;gap:12px"><button class="menu-toggle" data-action="menu" aria-label="Toggle menu">☰</button><div class="crumb">PROJECT <span style="color:#586475;padding:0 7px">/</span> <b>${esc(crumb)}</b></div></div><div class="top-actions"><span class="meta-tag">PRE-PRODUCTION</span><a class="top-link" href="${ROOT}/issues" target="_blank" rel="noopener noreferrer">GitHub workspace ↗</a></div></header>
 <main class="page">${body}<footer class="footer"><div>© Circle of Truth · Fictional creative development · ${DATA.meta.lastCurated}</div><div><a href="#/story">Show bible</a> · <a href="#/collaboration">Team handoff</a> · <a href="${ROOT}" target="_blank" rel="noopener noreferrer">Source on GitHub</a></div></footer></main></div></div>`;
 document.body.classList.remove("menu-open");document.title=(crumb==="Overview"?"Circle of Truth":crumb+" — Circle of Truth")+" | Production Studio";window.scrollTo({top:0,behavior:"instant"});
}
function heading(eye,title,lead){return `<div class="eyebrow">${esc(eye)}</div><h1 class="page-title">${esc(title)}</h1><p class="page-lead">${esc(lead)}</p>`;}
function section(name,sub,link,label="View all"){return `<div class="section-heading"><div><h2>${esc(name)}</h2>${sub?`<p>${esc(sub)}</p>`:""}</div>${link?`<a href="#${link}">${label} <span class="arrow">↗</span></a>`:""}</div>`;}
function poster(a,title="",big=false){
 const image=a?.filename?`<img class="poster-img" loading="lazy" src="/artwork/${encodeURIComponent(a.filename)}" alt="${esc(title||a.title||"Cast artwork")}" onerror="this.remove()"/>`:"";
 return `<div class="poster"><img class="fallback-tree" src="/assets/tree-of-life.svg" alt="" aria-hidden="true"/>${image}<div class="poster-title-overlay">${esc(big?"":title)}</div></div>`;
}
function collectionCard(g){const art=DATA.artworks.find(x=>x.id===g.id);return `<a class="collection-card" href="#/collection/${g.id}">${poster(art,g.title)}<div class="card-content"><div class="eyebrow">${esc(g.sector)} · ${g.count} CHARACTERS</div><h3>${esc(g.title)}</h3><p>${esc(g.short)}</p><div class="card-foot">${badge(g.status)}<span>Explore cast ↗</span></div></div></a>`;}
function episodeCard(ep){return `<a class="episode-card" href="#/episode/${ep.id}"><div class="ep-head"><span class="eyebrow">${esc(ep.number)}</span>${badge(ep.status)}</div><h3>${esc(ep.title)}</h3><p>${esc(ep.description)}</p><div class="ep-bottom"><span>${esc(ep.guests.length)} guests · ${esc(ep.type)}</span><span>View episode ↗</span></div></a>`;}
function personCard(p){return `<a class="person-card" href="#/character/${p.id}"><div class="avatar-medallion">${esc(initials(p.name))}</div><strong>${esc(p.name)}</strong><small>${esc(p.role)}</small><div class="person-meta">${esc(p.tags[0])} · ${p.collections.length} ${p.collections.length===1?"collection":"collections"} ↗</div></a>`;}
function home(){
 const featured=DATA.collections.filter(x=>["hollywood-legends-i","global-iii","global-iv"].includes(x.id));
 const html=`<div class="hero"><img class="hero-art" src="/assets/tree-of-life.svg" alt="" aria-hidden="true"/><div class="hero-content"><div class="hero-kicker">An original animated conversation universe</div><h1>What if the<br/><span>world listened?</span></h1><p class="hero-desc">When power, faith, fame and humanity finally sit in the same circle, the real conversation begins. Explore the characters, stories and creative world behind <em>Circle of Truth</em>.</p><div class="hero-actions"><a class="btn primary" href="#/episodes">Explore the story <span class="arrow">↗</span></a><a class="btn secondary" href="#/collections">Enter the cast library <span class="arrow">→</span></a></div></div><div class="hero-bottom">THE STORY BEGINS WITH A QUESTION</div></div>
 <div class="stat-grid"><div class="stat"><div class="eyebrow">Cast archive</div><strong>${DATA.characters.length}</strong><small>Unique character records</small></div><div class="stat"><div class="eyebrow">Collections</div><strong>${DATA.collections.length}</strong><small>Curated casting groups</small></div><div class="stat"><div class="eyebrow">Episode slate</div><strong>${DATA.episodes.length}</strong><small>1 pilot + proposed concepts</small></div><div class="stat"><div class="eyebrow">Visual assets</div><strong>${DATA.artworks.length}</strong><small>Tracked files (sync pending)</small></div></div>
 ${section("Featured collections","A growing universe of people and perspectives.","/collections","See all collections")}<div class="cards">${featured.map(collectionCard).join("")}</div>
 ${section("The first conversation","The pilot that establishes the world.","/episode/pilot-001","Open pilot")}<div class="split"><a href="#/episode/pilot-001" class="feature-banner"><span class="eyebrow">PILOT / 001 · STORYBOARD</span><h2>The Invitation</h2><p>At a private gala, a quiet visitor changes the entire room. Beyond the doors: equal-height chairs, a low fire, and the question nobody was ready to answer.</p><div class="btn primary" style="margin-top:16px">Explore pilot storyboard ↗</div><div class="ornament">✧</div></a><div class="panel"><h3>Inside the production</h3><div class="link-list"><a class="link-item" href="#/story">The show's creative bible <span>↗</span></a><a class="link-item" href="#/production">Blender → Remotion workflow <span>↗</span></a><a class="link-item" href="#/gallery">Artwork approvals & rejects <span>↗</span></a><a class="link-item" href="#/collaboration">The team workspace <span>↗</span></a></div></div></div>
 ${section("On the horizon","Planned thematic discussions; not yet written or produced.","/episodes","Full episode slate")}<div class="episode-grid">${DATA.episodes.slice(1,5).map(episodeCard).join("")}</div>
 <div class="alert" style="margin-top:29px"><strong style="color:#e7c996">Fiction disclosure.</strong> ${esc(DATA.meta.publicDisclosure)} All character images and cast-sheet titles are working creative material, not verified statements or endorsements.</div>`;
 shell(html,"/");
}
function collections(){
 const groups=DATA.collections.filter(g=>g.id!=="previously-featured");
 const filters=[...new Set(groups.map(x=>x.sector))];
 shell(heading("The ensemble","Cast collections","Distinct rosters, each with a clear role in the Circle of Truth universe. Each 10-person lineup is tracked separately and never silently substituted.")+
 `<div class="filters"><button class="chip active" data-collection-filter="All">All collections</button>${filters.map(s=>`<button class="chip" data-collection-filter="${esc(s)}">${esc(s)}</button>`).join("")}</div><div class="cards" id="collection-grid">${groups.map(collectionCard).join("")}</div><div class="alert" style="margin-top:23px"><strong>Roster integrity:</strong> All ${DATA.characters.length} names are stored once in the character registry; collections refer to those records. Posters needing roster corrections are explicitly marked.</div>`,"/collections");
}
function collectionDetail(id){
 const g=collectionById(id);if(!g)return notFound();const art=DATA.artworks.find(a=>a.id===g.id);
 const list=g.people.map((name,i)=>{const p=personByName(name);return `<a class="row-item" href="#/character/${p?.id||""}"><span class="row-num">${String(i+1).padStart(2,"0")}</span><span class="row-body"><strong>${esc(name)}</strong><small>${esc(g.people.find(x=>x===name)?(p?.role||"Cast participant"):"")}</small></span><span class="row-actions">↗</span></a>`}).join("");
 const body=`<div class="eyebrow"><a href="#/collections">← ALL COLLECTIONS</a> · ${esc(g.sector)}</div><h1 class="page-title">${esc(g.title)}</h1><p class="page-lead">${esc(g.short)} · ${g.count} characters</p><div class="split"><div>${poster(art,g.title,true)}<div class="panel" style="border-top:0;border-top-left-radius:0;border-top-right-radius:0"><div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">${badge(g.status)}<span class="fineprint">Asset: ${esc(g.artwork||"not yet approved")}</span></div><p>${esc(g.notes)}</p></div></div><div class="panel"><h3>Collection brief</h3><p>${esc(g.short)}</p><p>Members are listed in the exact planned order. Click a character to see their registry record and other collection appearances.</p><div class="link-list"><a class="link-item" href="#/gallery">Open image register <span>↗</span></a><a class="link-item" href="#/production">Visual quality framework <span>↗</span></a><a class="link-item" href="${ROOT}/issues/new" target="_blank" rel="noopener">Discuss this collection <span>↗</span></a></div></div></div>${section("The complete lineup","Ten positions, no internal duplicates.")}<div class="row-list">${list}</div>`;
 shell(body,"/collections");
}
function filterPeople(){
 const q=state.castQuery.trim().toLocaleLowerCase();const found=DATA.characters.filter(p=>(state.sector==="All"||p.tags.includes(state.sector))&&(!q||[p.name,p.role,...p.tags].join(" ").toLocaleLowerCase().includes(q)));
 const grid=$("#people-grid");if(grid)grid.innerHTML=found.length?found.map(personCard).join(""):'<div class="empty">No matching characters in this registry.</div>';const count=$("#search-count");if(count)count.textContent=found.length+" of "+DATA.characters.length+" characters";
}
function characters(){
 const sectors=["All",...new Set(DATA.characters.flatMap(x=>x.tags))];shell(heading("Character index","The character library","A single deduplicated record for each person. Search by name, field, or public role; review which collections they belong to.")+`<div class="filters"><input id="cast-search" class="search-field" type="search" placeholder="Search characters, names, roles…" value="${esc(state.castQuery)}" aria-label="Search characters"/>${sectors.map(s=>`<button class="chip ${s===state.sector?"active":""}" data-sector="${esc(s)}">${esc(s)}</button>`).join("")}</div><div id="search-count" class="fineprint" style="margin:-4px 0 18px"></div><div class="people-grid" id="people-grid"></div>`,"/characters");filterPeople();
}
function characterDetail(id){const p=DATA.characters.find(x=>x.id===id);if(!p)return notFound();shell(`<div class="eyebrow"><a href="#/characters">← CAST INDEX</a></div><div class="feature-banner" style="margin-top:24px"><div class="avatar-medallion" style="width:80px;height:80px;font-size:33px">${esc(initials(p.name))}</div><h2>${esc(p.name)}</h2><p>${esc(p.role)}</p><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:20px">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div></div>${section("Casting appearances","Cross-referenced roster records.")}<div class="row-list">${p.collections.map(id=>{const g=collectionById(id);return g?`<a class="row-item" href="#/collection/${id}"><span class="row-num">✧</span><span class="row-body"><strong>${esc(g.title)}</strong><small>${esc(g.short)}</small></span><span class="row-actions">↗</span></a>`:""}).join("")}</div><div class="alert" style="margin-top:24px">This is a working casting reference for fictional, stylized animated depictions. Roles and affiliations require verification where relevant. All imagined dialogue must be clearly disclosed; use original voices, never voice clones.</div>`,"/characters");}
function episodes(){shell(heading("The story slate","Episodes & conversations","The Invitation is our documented pilot storyboard. The remaining titles are clearly labeled concept proposals, not completed screenplays or released episodes.")+`<div class="feature-banner"><div class="eyebrow">STORY SYSTEM</div><h2>Every episode begins with a question.</h2><p>A reusable gala-to-circle opening leads into a character-driven conversation about truth, responsibility, identity and what it means to be human.</p></div>${section("The development slate","Ordered by concept ID, not release date.")}<div class="episode-grid">${DATA.episodes.map(episodeCard).join("")}</div>`,"/episodes");}
function episodeDetail(id){const ep=DATA.episodes.find(x=>x.id===id);if(!ep)return notFound();
 const guestCards=ep.guests.map(name=>{const p=personByName(name);return `<a class="row-item" href="#/character/${p?.id||""}"><div class="avatar-medallion" style="margin:0;width:38px;height:38px;font-size:15px">${esc(initials(name))}</div><span class="row-body"><strong>${esc(name)}</strong><small>${esc(p?.role||"Casting concept")}</small></span><span class="row-actions">↗</span></a>`}).join("");
 shell(`<div class="eyebrow"><a href="#/episodes">← EPISODE SLATE</a> · ${esc(ep.number)}</div><h1 class="page-title">${esc(ep.title)}</h1><p class="page-lead">${esc(ep.description)}</p><div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;flex-wrap:wrap">${badge(ep.status)}<span class="meta-tag">${esc(ep.duration)}</span></div><div class="split"><div class="panel"><h3>Story & direction</h3><p>${esc(ep.notes)}</p><div style="margin:17px 0">${ep.themes.map(t=>`<span class="tag" style="margin:0 5px 7px 0">${esc(t)}</span>`).join("")}</div>${ep.beats.length?`<div class="quote">Well. How is everyone doing?</div>${section("Pilot storyboard","Working beats for the first technical prototype.")}<div class="beats">${ep.beats.map(([n,t])=>`<div class="beat"><div class="beat-id">${n}</div><div class="beat-body">${esc(t)}</div></div>`).join("")}</div>`:'<div class="alert">This is a concept direction, not an approved script. No scenes, dialogue tracks or footage are complete.</div>'}</div><div><div class="panel"><h3>Proposed participants</h3><div class="row-list">${guestCards}</div></div><div class="panel" style="margin-top:16px"><h3>Production references</h3><div class="link-list">${ep.id==="pilot-001"?`<a class="link-item" href="${ROOT}/blob/main/episodes/pilot-001/STORYBOARD.md" target="_blank" rel="noopener">Technical storyboard ↗</a><a class="link-item" href="${ROOT}/blob/main/episodes/pilot-001/dialogue.json" target="_blank" rel="noopener">Pilot dialogue data ↗</a>`:""}<a class="link-item" href="#/story">Creative bible ↗</a><a class="link-item" href="#/production">Quality gates ↗</a></div></div></div></div>`,"/episodes");
}
function gallery(){
 const works=DATA.artworks.filter(a=>state.gallery==="All"||(state.gallery==="Rejected"?a.status==="rejected":state.gallery==="Branding"?a.type==="branding":state.gallery==="Cast"?a.type==="cast":a.type==="reference"));
 const body=heading("Image archive","Visual gallery","The art direction has a unified gold Tree of Life, blue celestial landscape and full-body ensemble language. This register distinguishes approved designs, drafts and wrong-roster images.")+
 `<div class="alert">Original poster image binaries have not yet been uploaded into the GitHub artwork/ folder. Cards currently show the original website's Tree of Life fallback. The complete filenames and approval notes are preserved; upload the source files to reveal the actual posters.</div><div class="filters">${["All","Cast","Branding","Reference","Rejected"].map(s=>`<button class="chip ${s===state.gallery?"active":""}" data-gallery="${s}">${s}</button>`).join("")}</div><div class="gallery-grid">${works.map(a=>`<article class="gallery-item ${a.status==="rejected"?"rejected":""}">${poster(a,a.title)}<div class="card-content"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px">${badge(a.status)}<span class="eyebrow">${esc(a.type)}</span></div><h3>${esc(a.title)}</h3><span class="filename">${esc(a.filename)}</span>${collectionById(a.id)?`<a class="top-link" style="display:inline-block;margin-top:12px" href="#/collection/${a.id}">Open collection ↗</a>`:""}</div></article>`).join("")}</div>`;
 shell(body,"/gallery");
}
function story(){
 const body=heading("The creative bible","The world of Circle of Truth","A bold fictional premise with a simple emotional center: what happens when the loudest people in the room are finally given space to listen?")+
 `<div class="feature-banner"><div class="eyebrow">THE ORIGINAL PREMISE</div><h2>The invitation changes everything.</h2><p>A private, extravagant gala. A quiet figure dressed in linen. A room full of influence becomes suddenly still. An invitation leads beyond the world's hierarchies and into a circle where everyone occupies an equal chair.</p></div>
 ${section("The two worlds","One story. Two radically different atmospheres.")}<div class="cols-2"><div class="panel"><div class="eyebrow">WORLD 01 — ELITE HALL</div><h3>Prestige. Noise. Performance.</h3><p>Dark wood, brass, precious materials and enormous original works of art. The powerful hold court; Jesus enters without spectacle. Cooler lighting, polished surfaces and a careful entrance pathway amplify the contrast.</p></div><div class="panel"><div class="eyebrow">WORLD 02 — THE FIRE CIRCLE</div><h3>Warmth. Equality. Presence.</h3><p>A low central fire, hand-worn stone and wooden seats all at the same height. No throne, no classroom. Nothing to hide behind. Quiet reactions become as important as spoken words.</p></div></div>
 ${section("The conversation","Emotion leads. Spectacle follows.")}<div class="quote">How's everyone doing?</div>
 <div class="prose"><h3>The tone</h3><p>Thoughtful, cinematic and lightly humorous. Never a lecture or a caricature of someone we disagree with. The people we recognize should behave like surprisingly human guests: a little awkward, occasionally funny, sometimes sincere. Jesus listens; he does not monopolize the conversation.</p><h3>Visual identity</h3><p>Original mature stylized 3D characters with consistent shading, expressive facial rigs, believable eyes and subtle gestures. The golden Tree of Life and quiet sacred geometry connect the poster artwork and website. For cast sheets: <strong>exactly ten distinct figures, in one horizontal row, full bodies including shoes, correct gold nameplates and no substituted faces.</strong></p><h3>Representation & trust</h3><p>All real personalities and historical or spiritual figures are represented as imaginative fictional characters. The series never claims anyone said or attended a real private meeting. No voice imitation of living people and no unapproved third-party models. Distinguish research claims from dramatization.</p></div>
 <div class="alert">${esc(DATA.meta.publicDisclosure)}</div><a class="btn primary" href="${ROOT}/blob/main/docs/SHOW_BIBLE.md" target="_blank" rel="noopener">Open full show bible ↗</a>`;
 shell(body,"/story");
}
function production(){
 const stages=DATA.production.pipeline;
 const priorities=[
 ["P0","Proof character rigs","Jesus, Barack Obama and Donald Trump; facial movement, sitting and listening."],
 ["P0","Two reusable sets","Elite hall with entrance; equal-height fire circle."],
 ["P0","Short technical render","12–20 seconds with one speaking character and two responsive guests."],
 ["P1","Title & packaging","60-second intro, credits, scene disclosure and branded caption style."],
 ["P1","Expanded pilot","Three-minute dialogue prototype before approving long-form production."],
 ["P2","Long-form episodes","20–30 minutes only after look, voices, rights and costs are approved."]
 ];
 shell(heading("From concept to screen","Production pipeline","A local-first animation workflow is planned around Blender, original voice performances, Remotion and FFmpeg. This portal tracks intent and source material, not completed renders.")+
 `<div class="split"><div class="panel"><div class="eyebrow">THE PRODUCTION LADDER</div><h3>Build small. Prove quality. Expand.</h3><div class="timeline">${stages.map((s,i)=>`<div class="timeline-step"><div class="step-no">${String(i+1).padStart(2,"0")}</div><div><strong>${esc(s)}</strong><small>${i<4?"Quality gate / planned":"Future phase / not started"}</small></div></div>`).join("")}</div></div><div><div class="panel"><h3>Tools & systems</h3><div class="link-list">${DATA.production.tools.map(t=>`<div class="link-item">${esc(t)}<span>◇</span></div>`).join("")}</div></div><div class="panel" style="margin-top:16px"><h3>Validation gates</h3><div class="link-list">${DATA.production.qualityGates.map(x=>`<div class="link-item">${esc(x)} <span>◌</span></div>`).join("")}</div></div></div></div>
 ${section("Practical milestones","Priorities for production team discussions.")}<div class="cards">${priorities.map(([prio,title,desc])=>`<div class="panel"><div class="eyebrow">${prio}</div><h3 style="margin-top:11px">${esc(title)}</h3><p>${esc(desc)}</p></div>`).join("")}</div><div class="alert" style="margin-top:23px"><strong>Verified boundary:</strong> no rigs, Blender scene files, rendered shots, motion tests, voice files, or complete episodes are claimed as delivered here. The <a class="gold" href="${ROOT}/blob/main/docs/HERMES_MASTER_PRODUCTION_BRIEF.md" target="_blank" rel="noopener">technical master brief</a> lists source candidates and staged work, not completed acquisitions.</div>`,"/production");
}
function assets(){
 const docs=[["Show bible","docs/SHOW_BIBLE.md"],["Asset register","docs/ARTWORK_ASSET_REGISTER.md"],["Production handoff","docs/PRODUCTION_HANDOFF.md"],["Technical Hermes master brief","docs/HERMES_MASTER_PRODUCTION_BRIEF.md"],["Pilot storyboard","episodes/pilot-001/STORYBOARD.md"],["Dialogue schema","episodes/pilot-001/dialogue.schema.json"],["Original Freemasonry research","research/FREEMASONRY_DISCUSSION_SOURCE.txt"]];
 shell(heading("Creative source of truth","Assets & research","Everything has a place: current planning content, imagery inventory, script drafts, technology references and approval criteria.")+
 `<div class="alert"><strong>File status:</strong> text records and JSON source data are versioned in GitHub. Generated posters are tracked by original filenames; binary transfer must be verified separately. Research is for internal creative exploration and does not prove affiliations, licenses or living people's views.</div>
 ${section("Working documents","Versioned text files in the repository.")}<div class="row-list">${docs.map(([t,p],i)=>`<a class="row-item" href="${ROOT}/blob/main/${p}" target="_blank" rel="noopener noreferrer"><span class="row-num">${String(i+1).padStart(2,"0")}</span><span class="row-body"><strong>${esc(t)}</strong><small>${esc(p)}</small></span><span class="row-actions">↗</span></a>`).join("")}</div>
 ${section("Art intake queue","Import, verify, label and approve source files.")}<div class="responsive-table"><table class="data-table"><thead><tr><th>Artwork</th><th>Class</th><th>Review</th><th>Original filename</th></tr></thead><tbody>${DATA.artworks.map(a=>`<tr><td>${esc(a.title)}</td><td>${esc(a.type)}</td><td>${badge(a.status)}</td><td><code>${esc(a.filename)}</code></td></tr>`).join("")}</tbody></table></div>
 ${section("Asset integrity rules","Do not confuse a listing, generated preview or proposed file with an acquired asset.")}<div class="cols-2"><div class="panel"><h3>Characters & environments</h3><p>For 3D source assets record original creator, exact license, price, format, checksum, body rig, face rig, commercial-use clearance and attribution. A static scan or CC preview is not a speaking-ready character.</p></div><div class="panel"><h3>Artwork & identity</h3><p>Every collection has a locked roster and QA status. Wrong-roster artwork is archived as rejected. Public figure roles and Freemasonry affiliations need careful verification before any factual release.</p></div></div>`,"/assets");
}
function collaboration(){
 const tasks=[
 "Review 10-name roster for Hollywood Influence II",
 "Generate a correct full-body modern superstar cast sheet",
 "Generate the correct 10 musicians poster",
 "Fix the historic Freemasons sheet (John Wayne, not Churchill)",
 "Transfer approved artwork binaries to GitHub /artwork/",
 "Verify public role labels and sensitive affiliation claims",
 "Approve P0 character style (Jesus / Obama / Trump)",
 "Prototype Blender elite hall & circular fire room",
 "Record legally usable original voice performances",
 "Validate first 12–20 second animated render",
 "Set up private access controls if required",
 "Import repository into Vercel and review mobile layout"
 ];
 const saved=JSON.parse(localStorage.getItem("cot.tasks")||"{}");
 const notes=localStorage.getItem("cot.notes")||"";
 shell(heading("The production office","Collaboration board","Plan the work, review assets and share updates. The GitHub repository is the shared source of truth; personal checkboxes and quick notes on this page are saved only in this browser.")+
 `<div class="alert"><strong>Collaboration model:</strong> GitHub issues and pull requests provide shared history. The checkboxes and notes below are local drafts, not cloud-synced and not visible to colleagues until exported or copied into an issue.</div><div class="split"><div class="panel"><div class="eyebrow">TEAM CHECKLIST</div><h3>Production priorities</h3><div id="task-list">${tasks.map((t,i)=>`<label class="task-item"><input type="checkbox" data-task="${i}" ${saved[i]?"checked":""}/><span style="${saved[i]?"text-decoration:line-through;opacity:.56":""}">${esc(t)}</span></label>`).join("")}</div><button class="btn secondary" data-action="reset-tasks">Reset local checklist</button></div><div><div class="panel"><div class="eyebrow">PERSONAL WORK NOTES</div><h3>Brief the next agent</h3><p>Draft your handoff or review comments here. Download the notes or create a GitHub issue so the team can see them.</p><textarea class="notes" id="work-notes" placeholder="Progress, blockers, decisions, reference links…">${esc(notes)}</textarea><div style="display:flex;gap:9px;flex-wrap:wrap;margin-top:14px"><button class="btn primary" data-action="export-notes">Download handoff JSON ↗</button><a class="btn" href="${ROOT}/issues/new" target="_blank" rel="noopener">Create GitHub issue ↗</a></div><p class="fineprint">Changes are saved locally as you type. Do not put secrets or private credentials in this public-repository workflow.</p></div><div class="panel" style="margin-top:16px"><h3>Team workflow</h3><div class="link-list"><a class="link-item" target="_blank" rel="noopener" href="${ROOT}/issues">Open issues ↗</a><a class="link-item" target="_blank" rel="noopener" href="${ROOT}/pulls">Review pull requests ↗</a><a class="link-item" target="_blank" rel="noopener" href="${ROOT}/blob/main/docs/PRODUCTION_HANDOFF.md">Read handoff guide ↗</a></div></div></div></div>`,"/collaboration");
}
function notFound(){shell(heading("404","That doorway is closed","The requested record is not in our curated archive yet.")+'<a class="btn primary" href="#/">Return to the overview ↗</a>',"/");}
function route(){
 if(!DATA)return;
 const path=routePath(); const [_,a,b]=path.split("/");
 const cinematicRoutes={ "/":"home","/origin":"origin","/animated":"animated","/acts":"acts","/people":"people","/impact":"impact","/partners":"partners","/timeline":"timeline","/foundations":"foundations" };
 if(cinematicRoutes[path]){renderCinematic(cinematicRoutes[path],{data:DATA,orig:ORIGINAL,integration:INTEGRATION});window.scrollTo({top:0,behavior:"instant"});return;}
 if(a==="collections")collections();
 else if(a==="collection")collectionDetail(b);
 else if(a==="characters")characters();
 else if(a==="character")characterDetail(b);
 else if(a==="episodes")episodes();
 else if(a==="episode")episodeDetail(b);
 else if(a==="gallery")gallery();
 else if(a==="story")story();
 else if(a==="production")production();
 else if(a==="assets")assets();
 else if(a==="collaboration")collaboration();
 else notFound();
}
document.addEventListener("click",e=>{
 const action=e.target.closest("[data-action]");if(action){const a=action.dataset.action;if(a==="menu")document.body.classList.toggle("menu-open");if(a==="reset-tasks"){localStorage.removeItem("cot.tasks");collaboration();}if(a==="export-notes"){const obj={project:"Circle of Truth",exported_at:new Date().toISOString(),notes:localStorage.getItem("cot.notes")||"",tasks:JSON.parse(localStorage.getItem("cot.tasks")||"{}")};const blob=new Blob([JSON.stringify(obj,null,2)],{type:"application/json"});const u=URL.createObjectURL(blob);const el=document.createElement("a");el.href=u;el.download="circle-of-truth-handoff.json";el.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}return;}
 const chip=e.target.closest("[data-sector]");if(chip){state.sector=chip.dataset.sector;document.querySelectorAll("[data-sector]").forEach(x=>x.classList.toggle("active",x===chip));filterPeople();return;}
 const col=e.target.closest("[data-collection-filter]");if(col){const s=col.dataset.collectionFilter;document.querySelectorAll("[data-collection-filter]").forEach(x=>x.classList.toggle("active",x===col));const groups=DATA.collections.filter(g=>g.id!=="previously-featured"&&(s==="All"||g.sector===s));$("#collection-grid").innerHTML=groups.map(collectionCard).join("");return;}
 const ga=e.target.closest("[data-gallery]");if(ga){state.gallery=ga.dataset.gallery;gallery();return;}
 if(e.target.closest(".nav-item"))document.body.classList.remove("menu-open");
});
document.addEventListener("input",e=>{
 if(e.target.id==="cast-search"){state.castQuery=e.target.value;filterPeople();}
 if(e.target.id==="work-notes"){localStorage.setItem("cot.notes",e.target.value);}
});
document.addEventListener("change",e=>{if(e.target.matches("[data-task]")){const saved=JSON.parse(localStorage.getItem("cot.tasks")||"{}");saved[e.target.dataset.task]=e.target.checked;localStorage.setItem("cot.tasks",JSON.stringify(saved));e.target.nextElementSibling.style.textDecoration=e.target.checked?"line-through":"none";e.target.nextElementSibling.style.opacity=e.target.checked?".56":"1";}});
window.addEventListener("hashchange",route);
async function start(){
 try{
  const urls=["/data/content.json","/data/original-concept.json","/data/concept-integration.json"];
  const responses=await Promise.all(urls.map(url=>fetch(url,{cache:"no-store"})));
  for(let i=0;i<responses.length;i++)if(!responses[i].ok)throw new Error(urls[i]+" returned "+responses[i].status);
  [DATA,ORIGINAL,INTEGRATION]=await Promise.all(responses.map(r=>r.json()));
  route();
 }catch(err){
  $("#app").innerHTML=`<div class="loading-screen"><div class="loading-orb">!</div><h1>Archive unavailable</h1><p>${esc(err.message)}</p><p>Make sure the source and data directories are deployed together.</p></div>`;
  console.error(err);
 }
}
start();
