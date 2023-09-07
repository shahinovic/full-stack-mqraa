const data = [
  {
    day: "الأحد",
    sessionType: "memorizing",
    from: {
      surah: "البقرة",
      ayah: "1",
    },
    to: {
      surah: "البقرة",
    },
  },
  {
    day: "الأثنين",
    sessionType: "memorizing",
    from: {},
    to: {},
  },
];

const express = require("express");
const router = express.Router();

// Define an API route
router.get("/hello", (req, res) => {
  res.json({ message: JSON.stringify(data) });
});

module.exports = router;
