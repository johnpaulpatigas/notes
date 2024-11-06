import { createNoteTitleInput } from "./createNoteTitleInput.js";
import { createNoteBodyInput } from "./createNoteBodyInput.js";
import { createSaveButton } from "./createSaveButton.js";
import { createCancelButton } from "./createCancelButton.js";

export function createNoteInputContainer(notesContainer) {
    const noteInputContainer = document.createElement("div");
    noteInputContainer.className = "hidden p-6 bg-white rounded-3xl mb-4 w-full max-w-3xl";
    const noteTitleInput = createNoteTitleInput();
    const noteBodyInput = createNoteBodyInput();
    const saveButton = createSaveButton(
        noteTitleInput,
        noteBodyInput,
        notesContainer,
        noteInputContainer
    );
    const cancelButton = createCancelButton(noteInputContainer, noteTitleInput, noteBodyInput);
    noteInputContainer.append(noteTitleInput, noteBodyInput, saveButton, cancelButton);
    return noteInputContainer;
}
