import app from './src/app.js'

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server listen with http://localhost:${port}`)
})



//Exemplo subindo servidor usando método http
// const http = require("http")
// const route = {
//     '/': 'Node Course',
//     '/books': 'Books page',
//     '/authors': 'Author list',
//     '/publishing': 'Publishing company list',
//     '/abouth': 'Information abouth project'
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(route[req.url]);
// })
