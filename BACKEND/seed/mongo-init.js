print("Started Adding the Users.");
db = db.getSiblingDB("SilexBikers");
db.createUser({
  user: "admin",
  pwd: "adminpass",
  roles: [{ role: "dbOwner", db: "SilexBikers" }],
});

print("End Adding the User Roles.");
