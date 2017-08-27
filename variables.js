var fs = require('fs'),
    ps = fs.read('./passwd.txt').replace(/\n/g, '');
console.log(JSON.stringify(ps));
phantom.exit();
