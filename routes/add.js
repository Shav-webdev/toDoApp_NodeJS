const { Router } = require('express');
const router = Router();
const globalStorage = require('../storage/storage');
let bodyParser = require('body-parser');
const ToDo = require('../ToDo/ToDo');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/', urlencodedParser, function(req, res) {
    globalStorage.push(
        new ToDo(
            globalStorage.length,
            req.body.to_do,
        )
    );
    console.log(globalStorage)
});

module.exports = router;
