const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));
