import { addNoteToList } from "./addNoteToList.js";
import { saveNotes } from "./saveNotes.js";

export function importNotes(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const notes = JSON.parse(event.target.result);
            if (Array.isArray(notes)) {
                notes.forEach((note) => {
                    if (note.title && note.body && note.modified) {
                        addNoteToList(
                            note.title,
                            note.body,
                            document.querySelector(".grid"),
                            note.modified
                        );
                    }
                });
                saveNotes();
            } else {
                console.error("Invalid file format");
            }
        } catch (error) {
            console.error("Failed to import notes:", error);
        }
    };
    reader.readAsText(file);
}
