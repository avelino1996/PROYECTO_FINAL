const express = require('express');
const router = express.Router();

const { create, list} = require('../controllers/publicationControllers')

router.get('/newsList', list);
router.post('/createPublication', create);


module.exports = router;