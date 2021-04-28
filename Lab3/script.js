let i;
const whiteChecker = "<div class='white-checker'></div>";
const blackChecker = "<div class='black-checker'></div>";

const boardTile = document.querySelectorAll(".board-tile");

function addCheckers(){

    for(i=1; i<8; i+=2){
        document.getElementById(i).innerHTML = whiteChecker;
    }
    for(i=12; i<19; i+=2){
        document.getElementById(i).innerHTML = whiteChecker;
    }
    for(i=21; i<28; i+=2){
        document.getElementById(i).innerHTML = whiteChecker;
    }

    for(i=52; i<59; i+=2){
        document.getElementById(i).innerHTML = blackChecker;
    }
    for(i=61; i<68; i+=2){
        document.getElementById(i).innerHTML = blackChecker;
    }
    for(i=72; i<79; i+=2){
        document.getElementById(i).innerHTML = blackChecker;
    }
}

boardTile.forEach(function(tile){
    tile.addEventListener("click", function(){

        let possibleMoveIndicator = "<div class='possible-move'></div>";

        let nullcheck2;
        if (this.hasChildNodes) {

            function clearSelected() {
                let selectedDiv = document.querySelectorAll(".selected");
                [].forEach.call(selectedDiv, function (sel) {
                    sel.classList.remove("selected");
                });
            }

            clearSelected();

            $(".possible-move").remove();


            //Выбранная позиция фишки
            let pieceLocation = tile.id;

            //console.log("Position " + pieceLocation + " selected.");

            //Цвет фишки
            if (tile.childNodes[0] != null) {
                var pieceColor = tile.childNodes[0].className;
                //console.log(pieceColor);
            }

            //Возможный ход
            if (pieceColor == "black-checker") {
                var possibleMove1 = pieceLocation - 9;
                var possibleMove2 = pieceLocation - 11;

            } else {

                possibleMove1 = parseInt(pieceLocation) + 9;
                possibleMove2 = parseInt(pieceLocation) + 11;
            }
            //console.log(possibleMove1 + " and " + possibleMove2 + " are possible moves.");

            //Индикатор возможного хода
            let indicatorAdded1 = false;
            let indicatorAdded2 = false;

            let jump1 = false;
            let jump2 = false;

            let nullCheck = document.getElementById(possibleMove1);
            let nullCheck2 = document.getElementById(possibleMove1 - 9);
            if (nullCheck != null && tile.hasChildNodes()) {
                if (document.getElementById(possibleMove1).hasChildNodes() == 0) {
                    document.getElementById(possibleMove1).innerHTML = possibleMoveIndicator;
                    indicatorAdded1 = true;
                } else if (pieceColor == "black-checker") {
                    if (nullCheck2 != null) {
                        if (document.getElementById(possibleMove1 - 9).hasChildNodes() == 0) {
                            document.getElementById(possibleMove1 - 9).innerHTML = possibleMoveIndicator;
                            indicatorAdded1 = true;
                            possibleMove1 -= 9;
                            jump1 = true;
                        }
                    }
                } else if (pieceColor == "white-checker") {
                    nullcheck2 = document.getElementById(parseInt(possibleMove1) + 9);
                    if (nullcheck2 != null) {
                        if (document.getElementById(parseInt(possibleMove1) + 9).hasChildNodes() == 0) {
                            document.getElementById(parseInt(possibleMove1) + 9).innerHTML = possibleMoveIndicator;
                            indicatorAdded1 = true;
                            possibleMove1 = parseInt(possibleMove1) + 9;
                            jump1 = true;
                        }
                    }
                }
            }

            nullCheck = document.getElementById(possibleMove2);
            nullCheck2 = document.getElementById(possibleMove2 - 11);
            if (nullCheck != null && tile.hasChildNodes()) {
                if (document.getElementById(possibleMove2).hasChildNodes() == 0) {
                    document.getElementById(possibleMove2).innerHTML = possibleMoveIndicator;
                    indicatorAdded2 = true;
                } else if (pieceColor == "black-checker") {
                    if (nullCheck2 != null) {
                        if (document.getElementById(possibleMove2 - 11).hasChildNodes() == 0) {
                            document.getElementById(possibleMove2 - 11).innerHTML = possibleMoveIndicator;
                            indicatorAdded2 = true;
                            possibleMove2 -= 11;
                            jump2 = true;
                        }
                    }
                } else if (pieceColor == "white-checker") {
                    nullcheck2 = document.getElementById(parseInt(possibleMove2) + 11);
                    if (nullcheck2 != null) {
                        if (document.getElementById(parseInt(possibleMove2) + 11).hasChildNodes() == 0) {
                            document.getElementById(parseInt(possibleMove2) + 11).innerHTML = possibleMoveIndicator;
                            indicatorAdded2 = true;
                            possibleMove2 = parseInt(possibleMove2) + 11;
                            jump2 = true;
                        }
                    }
                }
            }

            //Подсвечивает выделенное поле
            if (indicatorAdded1 || indicatorAdded2 === true) {
                if (tile.hasChildNodes()) {
                    document.getElementById(pieceLocation).classList.add("selected");
                }
            }

            let jumpedPiece;
            let pieceMoved = false;

            //позволяет переместить шашку в возможное место
            $("#" + possibleMove1).click(function () {
                pieceMoved = true;
                //Возможная победа
                if (pieceColor == "black-checker") {
                    if (parseInt(possibleMove1) < 8) {
                        console.log("black win");
                        alert("black win");
                    }
                }
                if (pieceColor == "white-checker") {
                    if (parseInt(possibleMove1) > 71) {
                        console.log("white win");
                        alert("white win");
                    }
                }

                if (indicatorAdded1 && tile.hasChildNodes()) {
                    $("#" + pieceLocation).empty();
                    if (pieceColor == "black-checker") {
                        $(this).html(blackChecker);
                        if (jump1) {
                            jumpedPiece = pieceLocation - 9;
                            $("#" + jumpedPiece).empty();
                        }
                    } else {
                        $(this).html(whiteChecker);
                        if (jump1) {
                            jumpedPiece = parseInt(pieceLocation) + 9;
                            $("#" + jumpedPiece).empty();
                        }
                    }
                }
                return;
            });

            $("#" + possibleMove2).click(function () {
                pieceMoved = true;
                //Победа
                if (pieceColor == "black-checker") {
                    if (parseInt(possibleMove2) < 8) {
                        console.log("black win");
                        alert("black win");
                    }
                }
                if (pieceColor == "white-checker") {
                    if (parseInt(possibleMove2) > 71) {
                        console.log("white win");
                        alert("white win");
                    }
                }

                if (indicatorAdded2 && tile.hasChildNodes()) {
                    $("#" + pieceLocation).empty();
                    if (pieceColor == "black-checker") {
                        $(this).html(blackChecker);
                        if (jump2) {
                            jumpedPiece = pieceLocation - 11;
                            $("#" + jumpedPiece).empty();
                        }
                    } else {
                        $(this).html(whiteChecker);
                        if (jump2) {
                            jumpedPiece = parseInt(pieceLocation) + 11;
                            $("#" + jumpedPiece).empty();
                        }
                    }
                }
                return;
            });

        }
    });
});
