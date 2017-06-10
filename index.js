var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('2058', {
    fontSize: 48
});
basicText.anchor.set(0.5);
basicText.x = app.renderer.width / 2;
basicText.y = app.renderer.height / 4;

app.stage.addChild(basicText);

var grid = [];
for (var i = 0; i < 4; i++) {
    grid[i] = [0, 0, 0, 0];
}

var flushUI = function () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            drawCell(i, j);
        }
    }
};
flushUI();

function generateRandomNumber() {
    return Math.floor(Math.random() * 4);
}


function drawCell(rowIndex, columnIndex) {
    var color = 0x00FF00;

    if (grid[rowIndex][columnIndex] === 2) {
        color = 0xFF0000;
    }

    var graphics = new PIXI.Graphics();
    graphics.beginFill(color, 1);
    graphics.drawRect(app.renderer.width / 8 + columnIndex * 77, app.renderer.height / 8 * 3 + rowIndex * 77, 75, 75);
    app.stage.addChild(graphics);

    if (grid[rowIndex][columnIndex] !== 0) {
        var number = new PIXI.Text(grid[rowIndex][columnIndex], {
            fontSize: 48
        });
        number.anchor.set(0.5);
        number.x = 75 / 2 + app.renderer.width / 8 + columnIndex * 77;
        number.y = 75 / 2 + app.renderer.height / 8 * 3 + rowIndex * 77;
        app.stage.addChild(number);
    }
};

var rowIndex = generateRandomNumber();
var columnIndex = generateRandomNumber();

grid[rowIndex][columnIndex] = 2;

drawCell(rowIndex, columnIndex);

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        moveCellToRight();
        flushUI();
    }
});

function moveCellToRight() {
    for (var rowIndex = 0; rowIndex < 4; rowIndex++) {
        for (var columnIndex = 2;columnIndex >=0;columnIndex--) {
            if (grid[rowIndex][columnIndex] === 0) continue;
            
            var theEmptyCellIndex = findTheFirstRightCell(rowIndex, columnIndex);
            grid[rowIndex][theEmptyCellIndex] = grid[rowIndex][columnIndex];
            grid[rowIndex][columnIndex] = 0;
        }
    }
}

function findTheFirstRightCell(rowIndex, columnIndex) {
    for (let i = 3; i>columnIndex; i--) {
        if (grid[rowIndex][i] === 0) {
            return i;
        }
    }

    return -1;
}
