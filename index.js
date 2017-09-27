const express = require('express');
const reload = require('reload');
const app = express();

let arrPerson = [
    { name: 'Ti', age: 10 },
    { name: 'Teo', age: 11 },
    { name: 'Tun', age: 13 },
];

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home', { arrPerson }));

reload(app);

app.listen(3000, () => console.log('Server start!'));
