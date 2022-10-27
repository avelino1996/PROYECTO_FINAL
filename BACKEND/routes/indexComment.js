const express = require("express");
const router = express.Router();
const Coment = require("../models/comment");

const { create, list, remove } = require("../controllers/commentControllers");

router.get("/comentList", list);
router.post("/createComent", create);

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Coment.findByIdAndRemove(id, (error, removedComent) => {
    if (error) {
      res.status(400).json({ ok: false, error });
    } else {
      res.status(200).json({ ok: true, removedComent });
    }
  });
});

module.exports = router;
