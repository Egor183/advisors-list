const express = require("express");
const config = require("config");

const app = express();

app.use("/api/advisors", require("./routes/advisors.routes.ts"));

const port = config.get("port") || 5000;

app.listen(port, () => console.log(`App has been started on port ${port}`));
