import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const files = {'/':'index.html','/index.html':'index.html','/lighthouse.svg':'lighthouse.svg','/form-qr.svg':'form-qr.svg'};
createServer(async(req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);res.end('Not found');return;}try{const content=await readFile(new URL('./dist/'+file,import.meta.url));res.setHeader('Content-Type',file.endsWith('.css')?'text/css':file.endsWith('.svg')?'image/svg+xml':'text/html; charset=utf-8');res.end(content);}catch{res.writeHead(500);res.end('Unable to load page');}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
