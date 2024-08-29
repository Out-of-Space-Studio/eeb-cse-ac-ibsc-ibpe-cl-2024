window.addEventListener("load", function () {
    var table = document.querySelector("table");
    var container = document.querySelector(".calendar-container");

    function scaleTable() {
        var scaleX = container.clientWidth / table.scrollWidth;
        var scaleY = container.clientHeight / table.scrollHeight;
        var scale = Math.min(scaleX, scaleY);

        table.style.transform = `scale(${scale})`;
        table.style.transformOrigin = "top left";
    }

    scaleTable();
    window.addEventListener("resize", scaleTable);
});
