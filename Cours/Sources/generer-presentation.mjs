import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {Presentation,PresentationFile} from '@oai/artifact-tool';
import {slides,modules} from './contenu.mjs';

const buildDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.dirname(buildDir);
const skill='C:/Users/odaha/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations';
const python='C:/Users/odaha/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe';
process.env.RUNTIME_NODE_MODULES='C:/Users/odaha/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const p=Presentation.create({slideSize:{width:1280,height:720}});
const navy='#0D1B29', ink='#183044', muted='#566B7B', teal='#167E84', gold='#F3CF83';
const full=process.argv.includes('--full');
const sourceSlides=full?slides:slides.slice(0,12);

/** Add an editable text box with explicit typography and geometry. */
function text(slide,name,value,x,y,w,h,size=32,color=ink,bold=false,family='Arial') {
 const shape=slide.shapes.add({geometry:'textbox',name,position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 shape.text=value;
 shape.text.style={typeface:family,fontSize:size,bold,color,autoFit:'none',verticalAlignment:'top',wrap:'square',insets:{left:0,right:0,top:0,bottom:0}};
 return shape;
}
/** Embed supplied artwork without cropping away its content. */
async function image(slide,name,x,y,w,h,alt) {
 slide.images.add({blob:new Uint8Array(await fs.readFile(path.join(buildDir,'Assets',name))),contentType:'image/png',fit:'contain',alt,position:{left:x,top:y,width:w,height:h}});
}
/** Format comparable records as an editable native PowerPoint table. */
function table(slide,s) {
 const values=[s.headers,...s.body];
 const rowHeight=Math.min(86,420/values.length);
 const t=slide.tables.add({rows:values.length,columns:2,left:72,top:206,width:1136,height:rowHeight*values.length,columnWidths:[370,766],values});
 t.styleOptions={headerRow:true,bandedRows:false};
 t.borders.assign({fill:'#D7E2E8',width:0.5});
 for(let r=0;r<values.length;r++) for(let c=0;c<2;c++) {
  const cell=t.getCell(r,c);
  cell.fill=r===0?navy:(r%2===0?'#F2F6F8':'#FFFFFF');
  cell.text.style={typeface:'Arial',fontSize:r===0?25:27,color:r===0?'#FFFFFF':ink,bold:r===0||c===0,autoFit:'none',verticalAlignment:'middle',insets:{left:18,right:16,top:8,bottom:8}};
 }
}
for(const s of sourceSlides) {
 const slide=p.slides.add();
 const dark=s.layout==='prompt'||s.layout==='cover'||s.layout==='excerpt';
 slide.background.fill=dark?navy:'#FFFFFF';
 const fg=dark?'#F1F6FA':ink;
 const accent=dark?'#7DE1E5':teal;
 const moduleName=modules[s.module-1][0];
 if(s.layout==='cover') {
  await image(slide,s.image,72,56,320,120,'Logo officiel S.A.W.');
  text(slide,'title',s.title,72,228,1136,110,72,fg,true);
  text(slide,'subtitle',s.body.join('\n'),72,378,1050,135,36,'#CDDFE9');
  text(slide,'author','Olivier Dahan • SDD Another Way',72,584,1000,45,27,gold);
 } else {
  text(slide,'module',`${String(s.module).padStart(2,'0')}  ${moduleName.toUpperCase()}`,72,44,1100,30,20,accent,true);
  text(slide,'title',s.title,72,94,1136,102,44,fg,true);
  if(s.layout==='table') table(slide,s);
  else if(s.layout==='prompt') {
   text(slide,'prompt',s.body[0],72,262,1136,215,52,fg,true);
   text(slide,'meaning',s.module===5?'Les fichiers portent le protocole et le contexte.':'La procédure vérifie les conditions et applique la décision humaine.',72,542,1090,85,30,gold);
  } else if(s.layout==='image') {
   await image(slide,s.image,72,205,1136,360,s.title);
   text(slide,'caption',s.module===1&&s.id===6?'Capture d’une version ultérieure • les fichiers du lot 003 décrivent la V0.2 historique.':'Clarifier le besoin et les limites avant de demander une réalisation.',72,593,1136,65,25,muted);
  } else if(s.layout==='book') {
   await image(slide,s.image,838,205,300,400,'Couverture du livre Le développement piloté par les spécifications à l’ère des agents IA');
   text(slide,'booktext',s.body.join('\n\n'),72,225,700,300,32,ink);
   const link=text(slide,'booklink','Le livre sur Amazon',72,565,660,50,28,teal,true);
   link.text.get('Le livre sur Amazon').link={uri:s.link,isExternal:true};
  } else if(s.layout==='code') {
   const longest=Math.max(...s.body.map(x=>x.length));
   const size=longest>78?24:29;
   text(slide,'code',s.body.join('\n'),72,226,1136,414,size,ink,false,'Consolas');
  } else if(s.layout==='exercise') {
   for(let i=0;i<s.body.length;i++) {
    text(slide,`step-${i+1}`,String(i+1).padStart(2,'0'),72,218+i*94,75,62,37,teal,true);
    text(slide,`instruction-${i+1}`,s.body[i],175,218+i*94,1010,84,34,ink);
   }
  } else {
   const n=s.body.length, gap=n===5?79:n===4?97:118;
   for(let i=0;i<n;i++) {
    text(slide,`item-${i+1}`,s.body[i],72,220+i*gap,1136,gap-12,n===5?31:36,fg,i===0&&s.layout==='excerpt');
   }
  }
 }
 text(slide,'slide-number',String(s.id).padStart(2,'0'),1150,668,58,28,18,dark?'#ABC0D3':muted,false);
 const transition=s.id<slides.length?`Transition : ${slides[s.id].title}`:'Fin des annexes de référence.';
 const notes=[`Slide ${s.id} — ${s.title}`,`Module : ${moduleName} | Durée indicative : ${s.minutes===0?'annexe à consulter':s.minutes+' min'}`,`Objectif : ${s.objective}`,`\nTexte à prononcer\n${s.speech}`,s.demo?`\nDémonstration / animation\n${s.demo}`:'',s.question?`\nQuestion\n${s.question}`:'',s.answer?`\nRéponse attendue / correction\n${s.answer}`:'',`\n${transition}`,`\nSources\n${s.source}`].filter(Boolean).join('\n');
 slide.speakerNotes.textFrame.setText(notes);
}
await fs.mkdir(path.join(buildDir,'Verification'),{recursive:true});
await fs.writeFile(path.join(buildDir,'contenu.json'),JSON.stringify({modules,slides},null,2));
const candidate=path.join(buildDir,'Verification',full?'candidate.pptx':'probe.pptx');
await (await PresentationFile.exportPptx(p)).save(candidate);
console.log(`Exported ${sourceSlides.length} slides to ${candidate}`);
if(full) {
 const outputDir=path.join(buildDir,'Export');
 await fs.mkdir(outputDir,{recursive:true});
 const final=path.join(outputDir,`SAW-3.2-Cours-${Date.now()}.pptx`);
 const receipt=path.join(buildDir,'Verification',`presentation-validation-${Date.now()}.json`);
 await finalizePresentation({workspaceDir:root,candidatePath:candidate,finalPath:final,pythonExecutable:python,integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit'],requiredNativeTableOwnerSlides:[],fontPolicy:{basis:'design',families:['Arial','Consolas']},verifyArtifactToolImport:true,receiptPath:receipt});
 console.log(`Finalized ${final}`);
 await fs.copyFile(final,path.join(root,'SAW-3.2-Cours.pptx'));
 await fs.copyFile(receipt,path.join(buildDir,'Verification','presentation-validation.json'));
}
// Export each slide for visual review of the complete authored presentation.
for(let i=0;i<sourceSlides.length;i++) {
 const preview=await p.export({slide:p.slides.items[i],format:'png',scale:1});
 await fs.writeFile(path.join(buildDir,'Verification',`slide-${String(i+1).padStart(2,'0')}.png`),new Uint8Array(await preview.arrayBuffer()));
}
console.log('Rendered all authored slides.');
