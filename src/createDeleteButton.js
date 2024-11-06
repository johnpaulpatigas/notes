import { saveNotes } from "./saveNotes.js";
import { sortNotes } from "./sortNotes.js";

export function createDeleteButton(listItem, notesContainer) {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className =
        "absolute right-6 bottom-6 text-sm text-red-500 hover:text-red-600 transform hover:scale-105 transition duration-200 delete-button";
    deleteButton.onclick = (event) => {
        event.stopPropagation();
        notesContainer.removeChild(listItem);
        saveNotes();
        sortNotes(notesContainer);
    };
    return deleteButton;
}
