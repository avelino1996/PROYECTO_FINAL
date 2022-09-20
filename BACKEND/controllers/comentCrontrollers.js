const Coment = require('../models/coment')

exports.list = (req, res) => {
    

     Coment.find({}, (error, coments) => {
        if (error) {
            res.status(400).json({ ok: false, error });
        } else {
            res.status(201).json({ ok: true, coments });
        }
    }) 
};


exports.create = (req, res) => {
    let body = req.body;

    const coment = new Coment({
        name: body.name,
        surname: body.surname,
        email: body.email,
        description: body.description
        
    });

    coment.save((error, savedComent) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(201).json({ok: true, savedComent});
        }
    });
};

