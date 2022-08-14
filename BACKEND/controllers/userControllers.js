const User = require('../models/user')

//get method
exports.list = (req, res) => {
    User.find().exec((error, savedUser) => {
        if (error) {
            return res.status(400).json({ ok: false, error });
        } else {
            res.status(200).json({ ok: true, savedUser });
        }
    })
};

//post method
exports.create = (req, res) => {
    const user = new User(req.body)
    user.save((error, savedUser) => {
        if (error) {
            res.status(400).json({ ok: false, error });
        } else {
            res.status(201).json({ ok: true, savedUser });
        }
    })
};

//delete method
exports.remove = (req, res) => {
    let user = req.user;
    user.remove((error, removedUser) => {
        if (error) {
            res.status(400).json({ ok: false, error });
        } else {
            res.status(200).json({ ok: true, removedUser });
        }
    })

} 

exports.userById = (req,res, next, id) => {
    User.findById(id).exec((error, user) => {
        if (error || !user) {
            return res.status(400).json({
                error: "User was not found or does not exit"
            });
        }
        req.user = user;
        next();
    })
}
