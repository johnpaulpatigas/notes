export function createNoteBodyInput() {
    const noteBodyInput = document.createElement("textarea");
    noteBodyInput.placeholder = "Note";
    noteBodyInput.className =
        "p-4 w-full border border-gray-200 rounded-lg mb-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200";
    return noteBodyInput;
}
