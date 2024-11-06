import { addNoteToList } from "./addNoteToList.js";

export function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note) =>
        addNoteToList(note.title, note.body, document.querySelector(".grid"), note.modified)
    );
}
