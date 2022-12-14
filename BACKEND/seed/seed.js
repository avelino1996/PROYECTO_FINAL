require("dotenv").config();

const { Seeder } = require("mongo-seeding");
const path = require("path");

const config = {
  database: process.env.DATABASE_URI,
  dropDatabase: true,
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(
  path.resolve("./seed/collections")
);

seeder
  .import(collections)
  .then(() => {
    // Do whatever you want after successful import
  })
  .catch((err) => {
    // Handle errors
    console.error(err);
  });
