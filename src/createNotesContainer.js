export function createNotesContainer() {
    const notesContainer = document.createElement("div");
    notesContainer.className = "grid grid-cols-1 gap-4 w-full max-w-3xl overflow-y-auto";
    return notesContainer;
}
