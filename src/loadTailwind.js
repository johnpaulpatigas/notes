export function loadTailwind() {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "./src/tailwindcss@3.4.14.js";
        script.onload = resolve;
        script.onerror = () => {
            console.error("Failed to load Tailwind CSS");
        };
        document.head.appendChild(script);
    });
}
