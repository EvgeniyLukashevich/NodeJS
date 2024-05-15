const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;


const viewCountFile = 'viewCounts.json';


const readViewCounts = () => {
    if (fs.existsSync(viewCountFile)) {
        const data = fs.readFileSync(viewCountFile, 'utf-8');
        return JSON.parse(data);
    }
    return {};
};


const writeViewCounts = (viewCounts) => {
    fs.writeFileSync(viewCountFile, JSON.stringify(viewCounts, null, 2));
};

const viewCounts = readViewCounts();


const updateViewCount = (page) => {
    viewCounts[page] = (viewCounts[page] || 0) + 1;
    writeViewCounts(viewCounts);
};


app.get('/', (req, res) => {
    updateViewCount('/');
    res.send(`<h1>Главная Страница</h1>
<p>Просмотров: ${viewCounts['/']}</p>
<a href="http://localhost:${PORT}/about">About</a>`);
});


app.get('/about', (req, res) => {
    updateViewCount('/about');
    res.send(`<h1>О сайте</h1>
<p>Просмотров: ${viewCounts['/about']}</p>
<a href="http://localhost:${PORT}/">Home</a>`);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
