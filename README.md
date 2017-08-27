# Headless Check-in

Stack Overflow has a gold "Fanatic" badge which is obtained by visiting the site for 100 consecutive days.
I have lost my streak twice now, and I don't intend on losing it again.

The `attendance.js` script, when run through phantomjs, logs in using email and password information from the `passwd.txt` and `email.txt` files (not committed). The progress on the badge is shown in a text file with the date checked in.
If the fanatic badge is the one being 'watched', its current count will be logged as well. If not, the current badge may be logged.

"Days" are counted in UTC, so the script must be run daily, by a cron job. This will depend on the server's location, but as long as it is run daily, the badge will see progresss
