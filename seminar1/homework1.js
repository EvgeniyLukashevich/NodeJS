const http = require("http");

let homePageViews = 0;
let aboutPageViews = 0;
let wrongWayCounter = 0;

const homeTemplate = () => {
    return `<h1>Добро пожаловать!</h1>
<p>Просмотров главной страницы: ${homePageViews}</p>
<a href="/about">go to ABOUT</a>`;
};

const aboutTemplate = () => {
    return `<h1>Страница About</h1>
<p>Просмотров страницы 'About': ${aboutPageViews}</p>
<a href="/">go HOME</a>`;
};

const wrongWayTemplate = () => {
    return `<h1>Такой страницы не существует :(</h1>
<p>Заблудившихся: ${wrongWayCounter}</p>
<a href="/">go HOME</a><br>
<a href="/about">go to ABOUT</a>`;
};

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        homePageViews++;
        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
        res.end(homeTemplate());
    } else if (req.url === "/about") {
        aboutPageViews++;
        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
        res.end(aboutTemplate());
    } else {
        wrongWayCounter++;
        res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
        res.end(wrongWayTemplate());
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
