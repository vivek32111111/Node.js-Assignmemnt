import http from 'http';
import fs from 'fs';

const port = 8080; 

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.end("Nothing Loaded");
    }
    if(req.url == '/vegetables') {
        fs.readFile('vegetables.json', 'utf-8', (err, data) => {
            console.log(data);
            res.end(data);
        });
    }
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});