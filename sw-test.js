const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const c=await b.newContext();const p=await c.newPage();
await p.goto('http://localhost:8765/index.html');await p.evaluate(()=>navigator.serviceWorker.ready);await p.waitForTimeout(500);
await c.setOffline(true);await p.reload();console.log('offline title:',await p.title());
console.log('manifest:',await p.evaluate(async()=>(await (await fetch('manifest.webmanifest')).json()).name));await b.close()})();
