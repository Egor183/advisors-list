const {
  generateAdvisorsData,
  createDelay,
} = require("../helpers/advisors.helpers.ts");
const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  // artificial delay
  await createDelay();

  res.json(generateAdvisorsData());
});

module.exports = router;
