var Controller = function (){

    const model = new Model();
    const view = new View(model, onClickCell);

    function onClickCell(X, Y, isChecker){
        if (isChecker){
            model.x = X;
            model.y = Y;
            view.render();
        } else {
            if (model.x !== null && model.y !== null){
                //Черные фигуры
                // console.log(model.y, model.x);
                // console.log(Y, X);
                if (model.cells[model.y][model.x] === 1){
                    if (model.y !== 7) {
                        if (((model.x - 1) === X && (model.y + 1) === Y) || ((model.x + 1) === X && (model.y + 1) === Y)) {
                            model.cells[Y][X] = model.cells[model.y][model.x];
                            model.cells[model.y][model.x] = 0;

                            model.x = null;
                            model.y = null;
                            view.render();

                        } else if ((model.cells[model.y + 1][model.x + 1] === 2) && ((model.x + 2) === X && (model.y + 2) === Y)) {
                            model.cells[Y][X] = model.cells[model.y][model.x];
                            model.cells[model.y + 1][model.x + 1] = 0;
                            model.cells[model.y][model.x] = 0;

                            model.x = null;
                            model.y = null;
                            view.render();

                        } else if ((model.cells[model.y + 1][model.x - 1] === 2) && ((model.x - 2) === X && (model.y + 2) === Y)) {
                            model.cells[Y][X] = model.cells[model.y][model.x];
                            model.cells[model.y + 1][model.x - 1] = 0;
                            model.cells[model.y][model.x] = 0;

                            model.x = null;
                            model.y = null;
                            view.render();

                        }
                    } else {
                        alert("Black Win!!!")
                    }
                } else {
                    //Белые фигуры
                    if (model.y !== 1) {
                        if (((model.x + 1) === X && (model.y - 1) === Y) || ((model.x - 1) === X && (model.y - 1) === Y)) {
                            model.cells[Y][X] = model.cells[model.y][model.x];
                            model.cells[model.y][model.x] = 0;

                            model.x = null;
                            model.y = null;
                            view.render();
                        } else if ((model.cells[model.y - 1][model.x + 1] === 1) && ((model.x + 2) === X && (model.y - 2) === Y)) {
                            model.cells[Y][X] = model.cells[model.y][model.x];
                            model.cells[model.y - 1][model.x + 1] = 0;
                            model.cells[model.y][model.x] = 0;

                            model.x = null;
                            model.y = null;
                            view.render();
                        } else if ((model.cells[model.y - 1][model.x - 1] === 1) && ((model.x - 2) === X && (model.y - 2) === Y)) {
                            model.cells[Y][X] = model.cells[model.y][model.x];
                            model.cells[model.y - 1][model.x - 1] = 0;
                            model.cells[model.y][model.x] = 0;

                            model.x = null;
                            model.y = null;
                            view.render();
                        }
                    } else {
                        alert("White Win!!!");
                    }
                }
            }
        }
    }

    view.render();
}