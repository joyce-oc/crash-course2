const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) =>{

    // lodash
    const num = _.random(0, 67); 
    console.log(num);
    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();
// set header content type
res.setHeader('Content-Type', 'text/plain');
res.write('<p>hello, ninjas</p>');
res.end();

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})