const mongoose = require("mongoose");

// const { MONGO_URI } = process.env;
const password = "british2317";

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(
      `mongodb+srv://chilara:${password}@cluster0.mzbsrpy.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      }
    )
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
