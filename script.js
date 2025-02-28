document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const boxes = Array.from(container.children);

    // Randomiserer rekkefølgen på boksene
    boxes.sort(() => Math.random() - 0.5);

    // Legger boksene tilbake i tilfeldig rekkefølge
    boxes.forEach(box => container.appendChild(box));
});
