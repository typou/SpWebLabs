var View = function (model, onclickCell) {

    this._model = model;
    this._onclick = function (x, y, z) {
        onclickCell(x, y ,z);
    }
}

View.prototype.render = function () {
    const board = document.getElementById("board");
    board.innerHTML = "";

    this._model.cells.forEach((raw, outerIndex) => {
        raw.forEach((cell, innerIndex) => {
            const id = outerIndex * raw.length + innerIndex;
            // board.innerHTML += `<div id="${id}"
            //     class="board-tile ${(innerIndex + outerIndex) % 2 === 0 ? "bt-white" : "bt-black"}">
            //     ${cell === 1 ? "<div class='black-checker'></div>" : cell === 2 ? "<div class='white-checker'></div>" : ""} </div>`
            // // const elem = document.getElementById(id);

            const element = document.createElement("div");
            element.innerHTML = `
                ${cell === 1 ? "<div class='black-checker'></div>" : cell === 2 ? "<div class='white-checker'></div>" : ""}`

            element.id = id;
            element.classList.add(`board-tile`, (innerIndex + outerIndex) % 2 === 0 ? "bt-white" : "bt-black");

            element.onclick = () => this._onclick(innerIndex, outerIndex, cell !== 0);

            if (this._model.x === innerIndex && this._model.y === outerIndex){
                element.classList.add(`selected`);
            }
            board.appendChild(element);
        });
    });
}

