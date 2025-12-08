const mongoose = require("mongoose");

async function ConnectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://umarfarookvj_db_user:oOrKzKOv5djsMPnq@studentmanagement.1ltiybk.mongodb.net/?appName=studentmanagement"
    );
    console.log("Connected Mongodb");
  } catch (error) {
    console.log("Error Connecting to Mongodbv", error);
  }
}

module.exports = ConnectDB;