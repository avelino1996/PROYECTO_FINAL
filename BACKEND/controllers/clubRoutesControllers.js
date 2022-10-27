const { existsSync } = require("fs");
const { writeFile, mkdir } = require("fs/promises");
const Routs = require("../models/clubRoutes");

exports.list = (req, res) => {
  Routs.find({}, (error, routs) => {
    if (error) {
      res.status(400).json({ ok: false, error });
    } else {
      res.status(201).json({ ok: true, routs });
    }
  });
};

exports.create = async (req, res) => {
  let rout = new Routs();
  rout.title = req.body.title;
  rout.description = req.body.description;
  rout.dayAt = req.body.dayAt;
  rout.distance = req.body.distance;

  try {
    if (req.body.photo != "") {
      const photo = req.body.photo;
      const fileName = rout.id + ".jpg";
      const buffer = Buffer.from(photo.split(",")[1], "base64");

      if (!existsSync("./public/upload/routes/")) {
        await mkdir("./public/upload/routes/");
      }

      await writeFile("./public/upload/routes/" + fileName, buffer);
      await writeFile("./public/upload/routes/" + fileName, buffer);
      rout.photo = "public/upload/routes/" + fileName;
    }
    const savedRout = await rout.save();
    res.status(201).json({ ok: true, savedRout});
  } catch (err) {
    console.log(err);
    res.status(400).json({ ok: false, err });
  }
};
