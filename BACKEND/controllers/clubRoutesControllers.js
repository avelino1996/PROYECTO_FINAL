const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs')
const Routs = require('../models/clubRoutes')

exports.list = (req, res) => {
    

     Routs.find({}, (error, routs) => {
        if (error) {
            res.status(400).json({ ok: false, error });
        } else {
            res.status(201).json({ ok: true, routs });
        }
    }) 
};

exports.create = (req, res) => {
    let rout = new Routs();
    rout.tittle = req.body.tittle;
    rout.description = req.body.description;
    rout.dayAt = req.body.dayAt;
    rout.distance = req.body.distance;
    

    if (req.body.photo != "") {
        const photo = req.body.photo;
        const fileName = req.body.tittle + ".jpg";
        const buffer = Buffer.from(photo.split(",")[1], "base64")
        fs.writeFile("public/upload/" + fileName, buffer, (error) => {
            rout.save((error, savedRout) => {
                if (error) {
                    res.status(400).json({ ok: false, error });
                } 
                rout.photo = "public/upload/" + fileName;
                
                res.status(201).json({ ok: true, savedRout });
                
            });
        });
    } 
}