console.log('Script started');
var page = require('webpage').create();
/*var steps = [
    function () {
        page.open('https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fusers%2f7232773%2fm-davis', 
            function (st) {
            console.log(st);
        } !!! The problem was here, a missing closing paren
    },
    function () {
        page.evaluate(function () {
            document.getElementById('email').value = 
            document.getElementById('password').value = 
            document.getElementById('login-form').submit();         
        });
    },
    function () {
        page.render('build.png');
    }
];*/
var steps = [
    function () { 
        console.log('function 1'); 
        page.open('http://google.com/', function (st) {
            console.log(st)
        })
    },
    function () {
        console.log('function 2');
    },
    function () {
        console.log('function 3');
    }
]
var index = 0;
var loading = false;
interval = setInterval(ex, 50);

function ex () {
    if (!loading && typeof steps[index] === 'function')
        steps[index++]();
    if (typeof steps[index] !== 'function') {
        console.log('finished');
        phantom.exit();
    }
}

page.onLoadStarted = function () {
    loading = true;
    console.log('loading');
};
page.onLoadFinished = function () {
    loading = false;
    console.log('loading finished');
};
//console.log('finished')
//phantom.exit();
