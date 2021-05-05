const getElementArrayByXY = (array, x, y) => {
    return array[x][y];
}

function clearSelected() {
    let selectedDiv = document.querySelectorAll(".selected");

    selectedDiv.forEach(function (sel) {
        sel.classList.remove("selected");
    });
}