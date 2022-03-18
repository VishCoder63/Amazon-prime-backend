require("dotenv").config();
// console.log("user:", process.env.DB_USER);
const mongoose = require("mongoose");
module.exports = () => {
  let connection_String = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3r8xl.mongodb.net/PrimeVideo?retryWrites=true&w=majority`;
  // mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w1a4o.mongodb.net/pepperfryDB?retryWrites=true&w=majority`)
  mongoose.connect(connection_String);
};
