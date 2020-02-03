const express = require('express');
const router = express.Router();
const globalStorage = require('../storage/storage');


/**
 * router for home page*/

router.get('/', (req, res) => {
    res.render('index', { toDoes: globalStorage});
});

module.exports = router;
