const express = require("express");
const router = express.Router();
const Publication = require("../models/publication");

const { create, list } = require("../controllers/publicationControllers");

router.get("/publicationsList", list);
router.post("/createPublication", create);

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Publication.findByIdAndRemove(id, (error, removedPublication) => {
    if (error) {
      res.status(400).json({ ok: false, error });
    } else {
      res.status(200).json({ ok: true, removedPublication });
    }
  });
});

module.exports = router;
