import { loadTailwind } from "./loadTailwind.js";
import { createAppContainer } from "./createAppContainer.js";
import { createAddButton } from "./createAddButton.js";
import { loadNotes } from "./loadNotes.js";

export function createApp() {
    loadTailwind().then(() => {
        const appContainer = createAppContainer();
        document.body.append(appContainer, createAddButton());
        loadNotes();
    });
}

createApp();
