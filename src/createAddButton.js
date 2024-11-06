export function createAddButton() {
    const addButton = document.createElement("button");
    addButton.innerHTML = "+";
    addButton.className =
        "fixed bottom-6 right-6 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-600 transition duration-200 transform hover:scale-105";
    addButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.querySelector(".hidden").classList.remove("hidden");
        document.querySelector("input").focus();
    });
    return addButton;
}
