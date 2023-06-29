const express = require("express");
const router = express.Router();
const albumsController = require("../controllers/albumsController");

router.get("/", albumsController.getAlbums);
router.post("/", albumsController.createAlbum);

// Add more routes as needed

module.exports = router;
