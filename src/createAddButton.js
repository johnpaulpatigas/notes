import { backupNotes } from "./backupNotes.js";
import { restoreNotes } from "./restoreNotes.js";

export function createAddButton() {
    const addButton = document.createElement("button");
    addButton.innerHTML = "+";
    addButton.className =
        "fixed bottom-6 right-6 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-600 transition duration-200 transform hover:scale-105";

    const dropdownMenu = document.createElement("div");
    dropdownMenu.className = "hidden fixed bottom-20 right-6 bg-white rounded-3xl shadow-lg w-32";

    const hideDropdown = () => dropdownMenu.classList.add("hidden");

    const newButton = document.createElement("button");
    newButton.innerText = "New";
    newButton.className = "p-4 w-full hover:bg-gray-100 rounded-3xl";
    newButton.onclick = () => {
        document.querySelector(".hidden").classList.remove("hidden");
        document.querySelector("input").focus();
        hideDropdown();
    };

    const backupButton = document.createElement("button");
    backupButton.innerText = "Backup";
    backupButton.className = "p-4 w-full hover:bg-gray-100 rounded-3xl";
    backupButton.onclick = () => {
        backupNotes();
        hideDropdown();
    };

    const restoreButton = document.createElement("button");
    restoreButton.innerText = "Restore";
    restoreButton.className = "p-4 w-full hover:bg-gray-100 rounded-3xl";
    restoreButton.onclick = () => {
        fileInput.click();
        hideDropdown();
    };

    dropdownMenu.append(newButton, backupButton, restoreButton);

    const container = document.createElement("div");
    container.className = "relative";
    container.appendChild(addButton);
    container.appendChild(dropdownMenu);

    addButton.onclick = (event) => {
        event.stopPropagation();
        dropdownMenu.classList.toggle("hidden");
    };

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/json";
    fileInput.style.display = "none";
    fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            restoreNotes(file);
        }
    };
    container.appendChild(fileInput);

    document.addEventListener("click", (event) => {
        if (!container.contains(event.target)) {
            hideDropdown();
        }
    });

    return container;
}
