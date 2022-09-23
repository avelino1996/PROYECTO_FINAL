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
};