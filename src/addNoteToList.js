import { createDeleteButton } from "./createDeleteButton.js";
import { formatDate } from "./formatDate.js";
import { sortNotes } from "./sortNotes.js";
import { saveNotes } from "./saveNotes.js";

export function addNoteToList(
    titleText,
    bodyText,
    notesContainer,
    modifiedDate = new Date().toISOString()
) {
    const listItem = document.createElement("div");
    listItem.className = "relative flex flex-col p-6 bg-white rounded-3xl";
    const noteTitle = document.createElement("h1");
    noteTitle.innerText = titleText;
    noteTitle.className = "font-medium text-lg text-gray-900 break-words";
    noteTitle.contentEditable = true;
    const noteBody = document.createElement("p");
    noteBody.innerText = bodyText;
    noteBody.className = "text-gray-800 mb-2 break-words";
    noteBody.contentEditable = true;
    const lastModified = document.createElement("span");
    lastModified.className = "text-gray-500 text-sm";
    lastModified.innerText = formatDate(new Date(modifiedDate));
    const deleteButton = createDeleteButton(listItem, notesContainer);
    listItem.append(deleteButton, noteTitle, noteBody, lastModified);
    listItem.dataset.modifiedDate = modifiedDate;
    notesContainer.insertBefore(listItem, notesContainer.firstChild);
    noteTitle.addEventListener("blur", updateNote);
    noteBody.addEventListener("blur", updateNote);

    function updateNote() {
        const now = new Date();
        lastModified.innerText = formatDate(now);
        listItem.dataset.modifiedDate = now.toISOString();
        saveNotes();
        sortNotes(notesContainer);
    }

    sortNotes(notesContainer);
}
