export function createHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.className = "mb-6 text-center";
    const title = document.createElement("h1");
    title.innerText = "Notes";
    title.className = "text-5xl font-medium text-gray-900";
    headerContainer.appendChild(title);
    return headerContainer;
}
