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
            var ns = 'http://www.w3.org/2000/svg';

            const svgElement = document.createElementNS(ns, "svg");
            svgElement.setAttributeNS(null, 'width', '100%');
            svgElement.setAttributeNS(null, 'height', '100%');

            svgElement.innerHTML = ` <rect width="100%" height="100%" fill=${(innerIndex + outerIndex) % 2 === 0 ? "white" : "black"}>`

            if (cell !== 0) {
                svgElement.innerHTML += `<circle cx="50%" cy="50%" r="30%" stroke="gray" stroke-opacity="1" fill=${cell === 1 ? "black" : "white"}>`;
            }

            svgElement.onclick = () => this._onclick(innerIndex, outerIndex, cell !== 0);

            if (this._model.x === innerIndex && this._model.y === outerIndex){
                svgElement.querySelector("rect").setAttributeNS(null, 'fill', "yellow");
            }
            board.appendChild(svgElement);
        });
    });
}

