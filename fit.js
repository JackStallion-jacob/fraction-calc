const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();
for(const [w,h] of [[390,844],[390,700],[360,640],[412,780]]){const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:2});
await p.goto('file://'+__dirname+'/index.html');for(const s of ['[data-w="3"]','#kn [data-n="5"]','#kd [data-d="1"]','#kd [data-d="6"]','[data-op="+"]','[data-w="1"]','#kn [data-n="7"]','#kd [data-d="8"]','[data-a=EQ]'])await p.click(s);
const r=await p.evaluate(()=>{const o=document.querySelector('.ops').getBoundingClientRect();const k=[...document.querySelectorAll('.k')].map(x=>x.getBoundingClientRect().height);return{opsBottom:o.bottom,vh:innerHeight,scroll:document.documentElement.scrollHeight,minKey:Math.min(...k.filter(x=>x>0))}});
console.log(w+'x'+h,JSON.stringify(r),r.opsBottom<=r.vh&&r.scroll<=r.vh?'OK':'CLIPPED');await p.screenshot({path:`shot-calc-${w}x${h}.png`});await p.close()}await b.close()})();
