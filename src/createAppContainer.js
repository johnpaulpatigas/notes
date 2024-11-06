import { createHeader } from "./createHeader.js";
import { createNotesContainer } from "./createNotesContainer.js";
import { createNoteInputContainer } from "./createNoteInputContainer.js";

export function createAppContainer() {
    const appContainer = document.createElement("div");
    appContainer.className =
        "flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50";
    const header = createHeader();
    const notesContainer = createNotesContainer();
    const noteInputContainer = createNoteInputContainer(notesContainer);
    appContainer.append(header, noteInputContainer, notesContainer);
    return appContainer;
}
