const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json(["deded", "wedwede", "yuwgedhweiud"]);
});

module.exports = router;
