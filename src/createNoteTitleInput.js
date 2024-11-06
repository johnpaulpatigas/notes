export function createNoteTitleInput() {
    const noteTitleInput = document.createElement("input");
    noteTitleInput.placeholder = "Title";
    noteTitleInput.className =
        "p-4 w-full border border-gray-200 rounded-lg mb-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200";
    return noteTitleInput;
}
