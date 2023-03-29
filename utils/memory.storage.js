var MemoryStorage = require("memorystorage");

var store = new MemoryStorage("notes-app");

exports.getKeys = (store) => {
  var keys = [];
  for (let index = 0; index < store.length; index++) {
    const element = store.key(index);
    keys.push(element);
  }

  return keys;
};

exports.getValues = (store) => {
  var values = [];
  for (let index = 0; index < store.length; index++) {
    const element = store.key(index);
    var value = store.getItem(element);
    values.push(value);
  }

  return values;
};

exports.store = store;
