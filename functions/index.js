const functions = require("firebase-functions");
const express = require("express");
const path = require("path");
const firebase = require("firebase-admin");
const bodyParser = require("body-parser");
const flash = require("connect-flash");

const app = express();

app.set("port", process.env.PORT || 8000);
app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use("/", require("./routes/web"));
app.use("/api",require("./routes/api"));

app.listen(app.get("port", (req,res)=>{
  res.set("Cache-control","public, max-age=86400,s-maxage=604800")
}), function(){
  console.log("Server started on port " + app.get("port"));
});

exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
