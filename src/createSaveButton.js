import { addNoteToList } from "./addNoteToList.js";
import { saveNotes } from "./saveNotes.js";

export function createSaveButton(
    noteTitleInput,
    noteBodyInput,
    notesContainer,
    noteInputContainer
) {
    const saveButton = document.createElement("button");
    saveButton.innerText = "Save";
    saveButton.className =
        "text-blue-500 hover:text-blue-600 transition duration-200 transform hover:scale-105 mr-4";
    saveButton.addEventListener("click", () => {
        const titleText = noteTitleInput.value.trim();
        const bodyText = noteBodyInput.value.trim();
        if (titleText || bodyText) {
            addNoteToList(titleText, bodyText, notesContainer);
            noteInputContainer.classList.add("hidden");
            noteTitleInput.value = "";
            noteBodyInput.value = "";
            saveNotes();
        }
    });
    return saveButton;
}
