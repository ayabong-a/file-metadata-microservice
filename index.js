const express = require("express");
const multer = require("multer");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(express());
app.use(express.static("public"));
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({ name: file.originalname, type: file.mimetype, size: file.size });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${listener.address().port}`);
});