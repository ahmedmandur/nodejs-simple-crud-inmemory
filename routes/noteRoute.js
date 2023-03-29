var router = require("express").Router();
var noteController = require("../controllers/noteController");

router.get("/notes", noteController.getAllNotes);
router.post("/notes", noteController.saveNote);
router.put("/notes/:id", noteController.updateNote);
router.delete("/notes/:id", noteController.deleteNote);

module.exports = router;
