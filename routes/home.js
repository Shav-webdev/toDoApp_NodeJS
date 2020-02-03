const globalStorage = require('../storage/storage');
let bodyParser = require('body-parser');
const ToDo = require('../ToDo/ToDo');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
const { Router } = require('express');
const router = Router();

/**
 * router for home page*/

router.get('/', (req, res) => {
    res.render('index', { toDoes: globalStorage});
});

router.post('/', urlencodedParser, function(req, res) {
    console.log(req.body.to_do);
    let id = globalStorage.length;
    if (req.body.to_do.toString().length){
        globalStorage.push(
            new ToDo(
                ++id,
                req.body.to_do,
            )
        );
        res.redirect(req.get('referer'));
    }else{
        res.send(`<a href="/">Go back <a/>`)
    }
    console.log(globalStorage)
});




module.exports = router;
