const https = require('https');

setInterval(() => {
    const time = (Date.now() % (86400*1000));
    if(time < 68400*1000) process.exit(0);
    console.log(Date.now());
    https.get("https://brilliant-crash-5e.herokuapp.com/");
}, 1000*60);