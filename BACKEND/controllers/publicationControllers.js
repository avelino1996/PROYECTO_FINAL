const { existsSync } = require("fs");
const { writeFile, mkdir } = require("fs/promises");
const Publication = require("../models/publication");

exports.list = (req, res) => {
  Publication.find({}, (error, publications) => {
    if (error) {
      res.status(400).json({ ok: false, error });
    } else {
      console.log("Publications: ", publications);
      res.status(201).json({ ok: true, publications });
    }
  });
};

exports.create = async (req, res) => {
  let publication = new Publication();
  publication.title = req.body.title;
  publication.description = req.body.description;
  publication.distance = req.body.distance;
  publication.createBy = req.body.createBy;

  try {
    if (req.body.photo != "") {
      const photo = req.body.photo;
      const fileName = publication.id + ".jpg";
      const buffer = Buffer.from(photo.split(",")[1], "base64");

      if (!existsSync("./public/upload/publications/")) {
        await mkdir("./public/upload/publications/");
      }

      await writeFile("./public/upload/publications/" + fileName, buffer);
      await writeFile("./public/upload/publications/" + fileName, buffer);
      publication.photo = "public/upload/publications/" + fileName;
    }
    const savedPublication = await publication.save();
    res.status(201).json({ ok: true, savedPublication });
  } catch (err) {
    console.log(err);
    res.status(400).json({ ok: false, err });
  }
};
