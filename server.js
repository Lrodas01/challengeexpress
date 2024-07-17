var express = require ('express')
var fs = require ('fs')
const app = express()

let port = 3001;


//This is to open home

app.use ('/home', (req, res)=>{
    fs.readFile('home.html', (err, data)=>{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end ();
    })
});

//This is to open contact

app.use ('/contact', (req, res)=>{
    fs.readFile('contact.html', (err, data)=>{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end ();
    })
});

//This is to open about

app.use ('/about', (req, res)=>{
    fs.readFile('about.html', (err, data)=>{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end ();
    })
});

//console log

    app.listen(port, function () {
        console.log (`listening on port ${port}`)
    })


