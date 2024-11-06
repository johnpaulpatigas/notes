export function saveNotes() {
    const notes = Array.from(document.querySelector(".grid").children).map((item) => ({
        title: item.children[1].innerText,
        body: item.children[2].innerText,
        modified: item.dataset.modifiedDate || new Date().toISOString(),
    }));
    localStorage.setItem("notes", JSON.stringify(notes));
}
