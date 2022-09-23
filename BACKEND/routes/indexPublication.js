const express = require('express');
const router = express.Router();
const Publication = require('../models/publication')

const { create, list } = require('../controllers/publicationControllers')

router.get('/publicationsList', list);
router.post('/createPublication', create);


router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["tittle", "description", "distance", "createBy", "publicationNumber", "photo"], req.body);
    
    Publication.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true, context: 'query' }, 
        (error, updatedPublication) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(200).json({ok: true, updatedPublication});
            }
        }
    );
}); 

router.delete("/:id", (req, res) => {
    const id = req.params.id;

     Publication.findByIdAndRemove(id, (error, removedPublication) => {
         if(error) {
             res.status(400).json({ok: false, error});
         } else {
             res.status(200).json({ok: true, removedPublication});
         }
     });
});


module.exports = router;