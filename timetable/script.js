window.addEventListener("load", function () {
    var table = document.querySelector("table");
    var container = document.querySelector(".calendar-container");

    function scaleTable() {
        // Reset any existing transform
        table.style.transform = "none";

        var scaleX = container.clientWidth / table.offsetWidth;
        var scaleY = container.clientHeight / table.offsetHeight;
        var scale = Math.min(scaleX, scaleY);

        // Apply the scale transform
        table.style.transform = `scale(${scale})`;

        // Center the table horizontally and vertically
        var translateX =
            (container.clientWidth - table.offsetWidth * scale) / 2;
        var translateY =
            (container.clientHeight - table.offsetHeight * scale) / 2;
        table.style.transform += ` translate(${translateX / scale}px, ${
            translateY / scale
        }px)`;
    }

    scaleTable();
    window.addEventListener("resize", scaleTable);
});
