document.addEventListener("DOMContentLoaded", function() {
    const shape = document.getElementById("shape");
    const topLeftInput = document.getElementById("top-left");
    const topRightInput = document.getElementById("top-right");
    const bottomLeftInput = document.getElementById("bottom-left");
    const bottomRightInput = document.getElementById("bottom-right");
    const copyCSSButton = document.getElementById("copy-css");

    function updateShape() {
    const topLeft = topLeftInput.value + "%";
    const topRight = topRightInput.value + "%";
    const bottomLeft = bottomLeftInput.value + "%";
    const bottomRight = bottomRightInput.value + "%";

    shape.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
    }

    function copyCSS() {
    const cssValue = `border-radius: ${topLeftInput.value}% ${topRightInput.value}% ${bottomRightInput.value}% ${bottomLeftInput.value}%`;

    navigator.clipboard.writeText(cssValue)
        .then(() => {
        alert("CSS copiado para a área de transferência!");
        })
        .catch((error) => {
        console.error("Erro ao copiar CSS:", error);
        });
    }

    topLeftInput.addEventListener("input", updateShape);
    topRightInput.addEventListener("input", updateShape);
    bottomLeftInput.addEventListener("input", updateShape);
    bottomRightInput.addEventListener("input", updateShape);
    copyCSSButton.addEventListener("click", copyCSS);
});
