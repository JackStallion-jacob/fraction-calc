const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const c=await b.newContext({viewport:{width:412,height:780},deviceScaleFactor:2});const p=await c.newPage();
p.on('pageerror',e=>console.log('ERR',e.message));await p.goto('http://localhost:8765/index.html');
const seq=async a=>{for(const s of a)await p.click(s)};
await seq(['[data-w="3"]','#kn [data-n="5"]','#kd [data-d="1"]','#kd [data-d="6"]','[data-op="+"]','[data-w="1"]','#kn [data-n="7"]','#kd [data-d="8"]','[data-a=EQ]']);
for(let i=0;i<5;i++){await seq(['[data-a=C]','[data-a=C]','[data-w="'+(i+2)+'"]','[data-op="*"]','#kn [data-n="3"]','#kd [data-d="4"]','[data-a=EQ]'])}
await seq(['[data-a=C]','[data-w="9"]','[data-op="/"]','[data-w="7"]','[data-a=EQ]']);
await p.reload();await p.click('#lcd');await p.waitForTimeout(400);
const n=await p.$$eval('.he',x=>x.length);const ob=await p.evaluate(()=>document.querySelector('.ops').getBoundingClientRect().bottom<=innerHeight&&document.documentElement.scrollHeight<=innerHeight);
console.log('entries after reload',n,'fit',ob);await p.screenshot({path:'shot-history-412x780.png'});
await p.click('.he >> nth=3');await p.waitForTimeout(400);console.log('closed',!(await p.$eval('#hist',e=>e.classList.contains('on'))),'res',await p.$eval('#res',e=>e.textContent));
await p.click('#lcd');await p.waitForTimeout(350);await p.mouse.click(30,15);await p.waitForTimeout(350);console.log('outside closes',!(await p.$eval('#hist',e=>e.classList.contains('on'))));
await p.click('#lcd');await p.waitForTimeout(350);await p.click('#lcd');await p.waitForTimeout(350);console.log('lcd toggles',!(await p.$eval('#hist',e=>e.classList.contains('on'))));
await p.click('#lcd');await p.click('#hclr');console.log('cleared',await p.$$eval('.he',x=>x.length),await p.evaluate(()=>localStorage.getItem('fc-history')));await p.screenshot({path:'shot-history-empty-412x780.png'});await b.close()})();
