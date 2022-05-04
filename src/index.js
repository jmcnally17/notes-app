const notesModel = require('./notesModel');
const notesView = require('./notesView');

const model = new notesModel();
model.addNote('This is an example note');

const view = new notesView(model);

view.displayNotes();

console.log('The notes app is running');
console.log(model.getNotes());