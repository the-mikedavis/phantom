var page = require('webpage').create();
let steps = [],
    textIndex = 0,
    loading = false;

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
        console.log('At sign-in page');
        page.open("https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fusers%2f7232773%2fm-davis", function (st) {
            console.log(st);
        }
    },
    //  send the form
    function () {

    }
];

page.open('http://stackoverflow.com/', function () {
    console.log('Status: ' + status)
    if (status === "Success")
        page.render('today.png');
    phantom.exit();
}
