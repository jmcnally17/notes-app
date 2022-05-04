/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const notesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('NotesView', () => {
  it('has a model injected into the constructor', () => {
    const model = new notesModel();
    const view = new NotesView(model);
    expect(view.model).toEqual(model);
  });

  it('displayNotes creates a new div element for each note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new notesModel();
    model.addNote('Get milk');
    model.addNote('Go to the gym');
    const view = new NotesView(model);

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(model.getNotes().length);
  });
});