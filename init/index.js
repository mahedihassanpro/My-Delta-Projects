const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
main()
  .then(() => {
    console.log("Connection Success");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67f676a20be9132e1c4ac8f7",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
