const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");
const morgan = require("morgan");
const path = require("path");
const serveStatic = require("serve-static");

const app = express();

// Store sessions in MongoDB
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "amazonSession",
});

// Catch errors
store.on("error", function(error) {
  console.log(error);
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log(
      `Connected to MongoDB ! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((error) => {
    console.error("Error while connecting to MongoDB !", error);
  });

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/owners", require("./routes/owners"));
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/addresses", require("./routes/addresses"));
app.use("/api/payments", require("./routes/payments"));
app.use("/api/orders", require("./routes/orders"));

require("./services/passport");

if (process.env.NODE_ENV === "production") {
  const appPath = path.join(__dirname, "..", "dist");
  app.use(serveStatic(appPath));

  app.get("*", function(req, res) {
    res.sendFile(path.resolve(appPath, "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`App listening on: http://localhost:${process.env.PORT} !`);
});
