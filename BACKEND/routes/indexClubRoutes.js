const express = require('express');
const router = express.Router();

const { create, list} = require('../controllers/clubRoutesControllers')

router.get('/routesList', list);
router.post('/createRout', create);

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["tittle", "description", "distance", "dayAt", "routeNumber", "photo"], req.body);
    
    User.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true, context: 'query' },
        (error, updatedClubRoute) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(200).json({ok: true, updatedClubRoute});
            }
        }
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

     Coment.findByIdAndRemove(id, (error, removedClubRoute) => {
         if(error) {
             res.status(400).json({ok: false, error});
         } else {
             res.status(200).json({ok: true, removedClubRoute});
         }
     });
});

module.exports = router;