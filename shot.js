const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});
await p.goto('file://'+__dirname+'/index.html');await p.fill('#a',`3' 7-5/16"`);await p.fill('#b','7 5/16');await p.click('#eq');await p.screenshot({path:'shot-calc.png'});
await p.click('[data-t=conv]');await p.fill('#dec','2.37');await p.screenshot({path:'shot-convert.png'});
await p.click('[data-t=bend]');await p.fill('#off','6');await p.screenshot({path:'shot-bending.png'});await b.close()})();
