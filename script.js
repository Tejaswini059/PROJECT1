document.addEventListener("DOMContentLoaded", function () {
    const draggableElements = document.querySelectorAll(".draggable");
    const contentArea = document.querySelector(".droppable");

    draggableElements.forEach((element) => {
        element.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.id);
        });
    });

    contentArea.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    contentArea.addEventListener("drop", (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        const element = document.getElementById(data);

        // Clone the element and add it to the content area
        const clone = element.cloneNode(true);
        clone.classList.remove("draggable");
        clone.classList.add("added-element");
        contentArea.appendChild(clone);
    });
});
