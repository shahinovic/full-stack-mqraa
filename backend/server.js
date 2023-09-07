const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}
  http://localhost:5000`);
});
