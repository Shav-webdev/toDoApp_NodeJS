const express = require('express');
const homeRoute = require('./routes/home');
const addRoute = require('./routes/add');
const deleteRoute = require('./routes/delete');
const globalStorage = require('./storage/storage');
const toDoController = require('./controllers/toDoController')



const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', homeRoute);
app.use('/add', addRoute);
app.use('/delete', deleteRoute);
app.use(express.static(__dirname + '/public'));

app.get('/edit/:id', (req, res, next) => {
    let toDo = globalStorage.filter((el, index)=> {
        return el.id === Number(req.params.id);
    });
    let id = toDo[0].id;
    let title = toDo[0].title;
    const data = {id: id, title: title};
    res.render('edit', {toDo: data});
    next()
})

toDoController(app);

app.listen(PORT, () => {
    console.log('Server is running...');
});
