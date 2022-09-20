const express = require('express');
const router = express.Router();

const { create, list, remove, publicationById} = require('../controllers/publicationControllers')

router.get('/publicationsList', list);
router.post('/createPublication', create);
router.delete('/:publicationId', remove);
router.put("/editPublication", publicationById);


module.exports = router;