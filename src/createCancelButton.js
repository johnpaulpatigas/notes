export function createCancelButton(noteInputContainer, noteTitleInput, noteBodyInput) {
    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    cancelButton.className =
        "text-red-500 hover:text-red-600 transition duration-200 transform hover:scale-105";
    cancelButton.addEventListener("click", () => {
        noteInputContainer.classList.add("hidden");
        noteTitleInput.value = "";
        noteBodyInput.value = "";
    });
    return cancelButton;
}
