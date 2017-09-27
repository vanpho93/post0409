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

// app.locals.name = 'Khoa Pham Online';
// app.locals.address = '92 Le Thi Rieng';

app.locals = {
    name: 'Khoa Pham Online',
    address: '92 Le Thi Rieng'
};
app.locals.district = 'Q1';

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home', { arrPerson }));

app.get('/signin', (req, res) => res.render('signin'));

reload(app);

app.listen(3000, () => console.log('Server start!'));
