const fs = require('fs')
const Publication = require('../models/publication')




exports.list = (req, res) => {
    

     Publication.find({}, (error, publications) => {
        if (error) {
            res.status(400).json({ ok: false, error });
        } else {
            res.status(201).json({ ok: true, publications });
        }
    }) 
};

exports.create = (req, res) => {
    let publication = new Publication();
    publication.tittle = req.body.tittle;
    publication.description = req.body.description;
    publication.distance = req.body.distance;
    publication.createBy = req.body.createBy;
    publication.publicationNumber = req.body.publicationNumber ;

    if (req.body.photo != "") {
        const photo = req.body.photo;
        const fileName = req.body.publicationNumber  + ".jpg";

        fs.writeFile("public/upload/" + fileName, photo, 'base64', (error) => {
            publication.save((error, savedPublication) => {
                if (error) {
                    res.status(400).json({ ok: false, error });
                } 
                publication.photo = "public/upload/" + fileName;
                
                res.status(201).json({ ok: true, savedPublication });
                
            });
        });
    } 
}

exports.remove = (req, res) => {
    let publication = req.publication
    publication.remove((error, deletedPublication) => {
        if (error) {
            res.status(400).json({ ok: false, error });
        } else {
            res.status(201).json({ ok: true, deletedPublication });
        }
    })
  }

exports.publicationById = (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["tittle", "description", "distance", "createBy", "publicationNumber", "publication.photo"], req.body);
    
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
}

