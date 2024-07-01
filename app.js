// console.log('Express Tutorial')

const http = require('http');
const {readFileSync} = require('fs')

const homepage = readFileSync('./index.html')
const server = http.createServer((req, res) => {
    console.log('user made request')
    console.log(req.method)
    console.log(req.url)


    if(req.url === '/') {
        // res.writeHead(200, {'content-type': 'text/html'})
   res.writeHead(200, {'content-type': 'text/plain'})
    res.write(homepage)
        res.end()
    }
    //about page
    else if(req.url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Welcome to our about page</h1>')
        res.end()
    }
    //404
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
   
}
)

server.listen(5000)