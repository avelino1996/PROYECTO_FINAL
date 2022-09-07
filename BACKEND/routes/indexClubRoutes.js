const express = require('express');
const router = express.Router();

const { create, list} = require('../controllers/clubRoutesControllers')

router.get('/routesList', list);
router.post('/createRout', create);


module.exports = router;