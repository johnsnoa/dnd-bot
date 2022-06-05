import http from 'http';

setInterval(() => {
    http.get("https://brilliant-crash-5e.herokuapp.com/");
}, 1000*30);