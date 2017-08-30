console.log('Starting...');
var page = require('webpage').create(),
    fs = require('fs'),
    home = '/home/mcarsondavis/phantom',
    passwd = fs.read(home + '/passwd.txt').replace(/\s/g, ''),
    email = fs.read(home + '/email.txt').replace(/\s/g, ''),
    steps = [],
    index = 0,
    loading = false,
    date = new Date();

//  page settings
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36';
page.settings.javascriptEnabled = true;
page.settings.loadImages = false;
phantom.cookiesEnabled = true;
phantom.javascriptEnabled = true;

//  print the console to the command line
page.onConsoleMessage = function (str) {
    console.log(str);
};

steps = [
    //  open the login page
    function () {
        console.log('Going to sign-in page');
        page.open("https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fusers%2f7232773%2fm-davis", function (st) {
            if (st === 'success')
                console.log('At sign-in page');
        });
    },
    //  populate the form
    function () {
        console.log('Populating form');
        page.evaluate(function (email, pass) {
            document.getElementById('email').value = email;
            document.getElementById('password').value = pass;
            document.getElementById('login-form').submit();
        }, email, passwd);
    },
    //  draw the page to which phantom is redirected
    function () {
        console.log('Logging check-in...')
        var prog = page.evaluate(function () {
            return document.getElementsByClassName('-count')[1].innerText.match(/\d+/)[0];
        });
        var output = date.toString() + ': Fanatic badge is now at ' + prog + ' days.\n';
        console.log(output);
        fs.write('log.txt', output, 'a');
    }
];

var interval = setInterval(executeReqs, 50);

function executeReqs() {
    if (loading === false && typeof steps[index] === 'function') {
        steps[index]();
        index++;
    }
    if (typeof steps[index] !== 'function') {
        console.log('Check-in completed.\n');
        phantom.exit();
    }
}

page.onLoadStarted = function () {
    loading = true;
    console.log('Loading...');
}

page.onLoadFinished = function () {
    loading = false;
    console.log('Loaded');
}
