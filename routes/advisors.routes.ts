const { generateAdvisorsData } = require("../helpers/advisors.helpers.ts");
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json(generateAdvisorsData());
});

module.exports = router;
