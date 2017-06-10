var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('2058', {
    fontSize: 48
});
basicText.anchor.set(0.5);
basicText.x = app.renderer.width/2;
basicText.y = app.renderer.height / 4;

app.stage.addChild(basicText);

var grid =[];
for (var i =0; i< 4;i++) {
    grid[i] = [0,0,0,0];
}

for (var i = 0;i < 4;i ++) {
    for (var j = 0; j<4;j++) {
        var graphics = new PIXI.Graphics();
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(app.renderer.width / 8 + j * 77, app.renderer.height / 8 * 3 + i * 77, 75, 75);
        app.stage.addChild(graphics);
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 4);
}

var x = generateRandomNumber();
var y = generateRandomNumber();

var graphics = new PIXI.Graphics();
graphics.beginFill(0xFF0000, 1);
graphics.drawRect(app.renderer.width / 8 + x  * 77, app.renderer.height / 8 * 3 + y * 77, 75, 75);
app.stage.addChild(graphics);

var number = new PIXI.Text('2', {
    fontSize: 48
});
number.anchor.set(0.5);
number.x = 75/2 + app.renderer.width/ 8 + x * 77;
number.y = 75 /2 + app.renderer.height / 8 * 3 + y * 77;
app.stage.addChild(number);
