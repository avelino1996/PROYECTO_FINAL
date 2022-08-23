const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs')
const Publication = require('../models/publication')

exports.list = (req, res) => {

  /*   publication.find({}, (error, publications) => {
        if (error) {
            res.status(400).json({ ok: false, error });
        } else {
            res.status(201).json({ ok: true, publications });
        }
    }) */


    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : Date ;

    publication.find()
        .select("-photo")
        .populate("publication")
        .sort([[sortBy, order]])
        .exec((error, publication) => {
            if (error) {
                res.status(400).json({ ok: false, error });
            } else {
                res.status(201).json({ ok: true, publication });
            }
        })

};

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
     form.keepExtensions = true;
     form.parse(req, (error, fields, files) => {
         if (error) {
             res.status(400).json({ ok: false, error });
         }
         const { tittle, description, idPublication, createAt } = fields;
         let publication = new Publication(fields);
 
         if (files.photo) {
             if (files.photo.size > 1000000) {
                 return res.status(400).json({
                     error: "Image should be less than 1mb in size"
                 })
             }
             publication.photo.data = fs.readFileSync(files.photo.path);
             publication.photo.contentType = files.photo.type
         }
 
         publication.save((error, savedPublication) => {
             if (error) {
                 res.status(400).json({ ok: false, error });
             } else {
                 res.status(201).json({ ok: true, savedPublication });
             }
         })
 
     }) 
  /*   let publication = new Publication();
    publication.tittle = req.body.tittle;
    publication.description = req.body.description;
    publication.IdPublication = req.body.IdPublication

    if (req.body.photo != "") {
        const photo = req.body.photo;
        const fileName = Math.random().toString() + ".jpg";

        fs.writeFile("public/upload/" + fileName, photo, 'base64', (error) => {
            publication.save((error, savedPublication) => {
                if (error) {
                    res.status(400).json({ ok: false, error });
                } 
                publication.photo = "public/upload/" + fileName;
                
                res.status(201).json({ ok: true, savedPublication });
                
            });
        });
    } */
}

