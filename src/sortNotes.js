export function sortNotes(notesContainer) {
    const notes = Array.from(notesContainer.children);
    notes.sort((a, b) => new Date(b.dataset.modifiedDate) - new Date(a.dataset.modifiedDate));
    notesContainer.innerHTML = "";
    notes.forEach((note) => notesContainer.appendChild(note));
}
