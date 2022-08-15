const express = require('express');
const router = express.Router();

const { create, list, remove, userById } = require('../controllers/userControllers')

router.get('/usersList', list);
router.post('/createUser', create);
router.delete('/delete/:userId', remove);

router.param('userId', userById);

module.exports = router;