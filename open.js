var page = require('webpage').create();
page.open('https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fusers%2f7232773%2fm-davis', function (st) {
    console.log(st);
    page.evaluate(function () {
        document.getElementById('email').value = "*****";
        document.getElementById('password').value = "*****";
        document.getElementById('login-form').submit();         
    });
    console.log('form evaluated');
    page.render('testform.png');
    phantom.exit();
});
