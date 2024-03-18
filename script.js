function buildHamburger() {
    const bun = document.getElementById("bun").value;
    const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    let description = `You've built a burger with a ${bun} bun`;

    if (toppings.length > 0) {
        description += ` and topped with ${toppings.join(", ")}.`;
    } else {
        description += " with no additional toppings.";
    }

    document.getElementById("burgerSummary").innerText = description;
}
