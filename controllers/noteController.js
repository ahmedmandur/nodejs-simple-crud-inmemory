var generator = require("../utils/generator");
var memoryStorage = require("../utils/memory.storage");
var noteModel = require("../models/note.model");

exports.getAllNotes = function (req, res) {
  var keys = memoryStorage.getKeys(memoryStorage.store);
  var values = memoryStorage.getValues(memoryStorage.store);
  res.send({
    keys: keys,
    values: values,
  });
};

exports.saveNote = function (req, res) {
  var Note = noteModel.Note;

  if (!req.body.title || !req.body.content) {
    return res.status(400).send("Bad Request: title and content are required");
  }

  var createdBy = "admin";
  var createdOn = new Date();

  var note = new Note(
    generator.generate(),
    req.body.title,
    req.body.content,
    createdBy,
    createdOn
  );

  memoryStorage.store.setItem(note.id, note);
  return res.status(201).send(note);
};

exports.updateNote = function (req, res) {
  var Note = noteModel.Note;

  var noteId = req.params.id;
  if (!noteId) {
    return res.status(400).send("Bad Request: note id is required");
  }

  if (!req.body.title || !req.body.content) {
    return res.status(400).send("Bad Request: title and content are required");
  }

  var createdBy = "admin";
  var createdOn = new Date();

  var notedb = memoryStorage.store.getItem(noteId);

  if (!notedb) {
    return res.status(404).send("Note not found");
  }

  var note = new Note(
    noteId,
    req.body.title,
    req.body.content,
    createdBy,
    createdOn
  );

  memoryStorage.store.setItem(note.id, note);
  return res.status(200).send(note);
};

exports.deleteNote = function (req, res) {
  var noteId = req.params.id;
  if (!noteId) {
    return res.status(400).send("Bad Request: note id is required");
  }

  var notedb = memoryStorage.store.getItem(noteId);
  if (!notedb) {
    return res.status(404).send("Note not found");
  }

  memoryStorage.store.removeItem(noteId);

  return res.status(200).send("Note deleted");
};
