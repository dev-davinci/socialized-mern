import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import postsRoutes from "./routes/postsRoutes.js";

// APP CONFIGURATION

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// ROUTES SETUP

app.use("/posts", postsRoutes);

const CONNECTTION_URL =
  "mongodb+srv://dev_muhammad:dolanf4ee5@cluster0.gv0jz.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(
      PORT,
      console.log(
        `Connected to Database successfully and App is running on port: ${PORT}`
      )
    );
  })
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
