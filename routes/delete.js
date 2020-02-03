const { Router } = require('express');
const router = Router();
const globalStorage = require('../storage/storage');


router.delete('/', function(req, res) {
    globalStorage.find((value, index) => {
        console.log(value.id)
        console.log(value.title)
    });
    console.log(globalStorage)
});

module.exports = router;
