const express = require('express');
const router = express.Router();

const { create, list} = require('.../controllers/newsControllers')

router.get('/newsList', list);
router.post('/createNews', create);


module.exports = router;