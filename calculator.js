/* tool-psi-port · ELUCENIA · https://github.com/Elucenia/tool-psi-port
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"psi-port","title":"PSI/PORT (índice de gravidade da pneumonia)","fields":[["sexo","Sexo","radio",{"opts":{"F":"Feminino","M":"Masculino"}}],["idade","Idade","num",{"min":18,"max":110,"unit":"anos","ph":"65"}],["casa","Mora em instituição de longa permanência (+10)","chk",[]],["neoplasia","Neoplasia ativa ou diagnosticada no último ano (+30)","chk",[]],["hepatica","Doença hepática (cirrose, hepatite crônica) (+20)","chk",[]],["icc","Insuficiência cardíaca (+10)","chk",[]],["avc","Doença cerebrovascular (+10)","chk",[]],["renal","Doença renal crônica (+10)","chk",[]],["confusao","Alteração do estado mental (+20)","chk",[]],["fr","FR ≥ 30 irpm (+20)","chk",[]],["pas","PA sistólica &lt; 90 mmHg (+20)","chk",[]],["temp","Temperatura &lt; 35 °C ou ≥ 40 °C (+15)","chk",[]],["fc","FC ≥ 125 bpm (+10)","chk",[]],["ph","pH arterial &lt; 7,35 (+30)","chk",[]],["ureia","Ureia ≥ 64 mg/dL (BUN ≥ 30 mg/dL) (+20)","chk",[]],["sodio","Sódio &lt; 130 mEq/L (+20)","chk",[]],["glicose","Glicose ≥ 250 mg/dL (+10)","chk",[]],["ht","Hematócrito &lt; 30% (+10)","chk",[]],["pao2","PaO₂ &lt; 60 mmHg ou SatO₂ &lt; 90% (+10)","chk",[]],["derrame","Derrame pleural na radiografia (+10)","chk",[]]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var i=e.yes;
var t=function(a,e){var o=0;return e.forEach(function(e){i(a[e])&&o++}),o};
a.def("psi-port",function(a){var e=+a.idade,o="F"===a.sexo,r=e<=50&&0===t(a,["neoplasia","hepatica","icc","avc","renal"])&&0===t(a,["confusao","fr","pas","temp","fc"]),n={casa:10,neoplasia:30,hepatica:20,icc:10,avc:10,renal:10,confusao:20,fr:20,pas:20,temp:15,fc:10,ph:30,ureia:20,sodio:20,glicose:10,ht:10,pao2:10,derrame:10},s=e-(o?10:0);for(var d in n)i(a[d])&&(s+=n[d]);var l=r?1:s<=70?2:s<=90?3:s<=130?4:5,c=["","I","II","III","IV","V"],m=l<=2?"Tratamento ambulatorial":3===l?"Ambulatorial ou internação breve em observação":"Internação hospitalar";return{main:["Classe "+c[l],r?"sem pontuação (critérios da classe I)":s+" pontos"],label:"PSI/PORT",level:l<=2?"low":3===l?"mid":"high",verdict:"Classe "+c[l]+": mortalidade em 30 dias de "+["","0,1 a 0,4%","0,6 a 0,7%","0,9 a 2,8%","8,2 a 9,3%","27,0 a 31,1%"][l],rows:[["Pontos",r?"não se aplica (classe I pela etapa 1)":String(s)],["Conduta sugerida (Fine 1997)",m]],note:l>=4&&!r?"":"O PSI subestima a gravidade em jovens sem comorbidades: hipoxemia, instabilidade ou impossibilidade de via oral indicam internação independentemente da classe.",raw:{score:r?0:s,cls:l}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
