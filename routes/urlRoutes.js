const validUrl = require("valid-url");
const express = require("express");
const shortid = require("shortid");

const router = express.Router();

const Url = require("../models/url");


// CREATE SHORT URL
router.post("/shorten", async (req, res) => {

  const { originalUrl } = req.body;

  if (!validUrl.isUri(originalUrl)) {
    return res.status(400).json({
        message: "Invalid URL"
    });
}
  let existingUrl = await Url.findOne({
    originalUrl
});

if (existingUrl) {
    return res.json(existingUrl);
}

  try {

    const shortCode = shortid.generate();

    const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

    const newUrl = new Url({
      originalUrl,
      shortCode,
      shortUrl
    });

    await newUrl.save();

    res.json(newUrl);

  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});


// REDIRECT
router.get("/:code", async (req, res) => {

  try {

    const url = await Url.findOne({
      shortCode: req.params.code
    });

    if (url) {

    url.clicks++;

    await url.save();

    return res.redirect(url.originalUrl);
}
    res.status(404).json({
      message: "URL not found"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});
router.get("/stats/:code", async (req, res) => {

    const url = await Url.findOne({
        shortCode: req.params.code
    });

    if (!url) {
        return res.status(404).json({
            message: "Not Found"
        });
    }

    res.json(url);

});
module.exports = router;