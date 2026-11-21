#!/usr/bin/env node
import fs from "node:fs";
const json=JSON.parse(fs.readFileSync("data/content.json","utf8"));
const ids=new Set(),names=new Set(),errors=[];
for(const p of json.characters){if(ids.has(p.id))errors.push("Repeated character ID: "+p.id);ids.add(p.id);const k=p.name.toLowerCase();if(names.has(k))errors.push("Repeated character name: "+p.name);names.add(k)}
for(const g of json.collections){const seen=new Set();for(const name of g.people){if(seen.has(name))errors.push("Duplicate in "+g.id+": "+name);seen.add(name);if(!names.has(name.toLowerCase()))errors.push("Unregistered "+g.id+": "+name)}if(g.id!=="pilot-cast"&&g.id!=="previously-featured"&&g.people.length!==10)errors.push(g.id+" has "+g.people.length+" people; expected 10")}
for(const a of json.artworks){if(!a.filename||!a.id)errors.push("Missing artwork filename/id")}
const status=new Set(json.collections.map(x=>x.id));for(const p of json.characters)for(const id of p.collections)if(!status.has(id))errors.push("Unknown collection "+id+" for "+p.name);
console.log("Circle of Truth:",json.characters.length+" people,",json.collections.length+" collections,",json.episodes.length+" episodes,",json.artworks.length+" artworks.");
if(errors.length){for(const e of errors)console.error("ERROR:",e);process.exit(1)}console.log("Data validation passed.");
