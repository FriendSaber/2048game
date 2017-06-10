var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('2058', {
    fontSize: 250
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
        graphics.drawRect(app.renderer.width / 8 + j * 155, app.renderer.height / 8 * 3 + i * 155, 150, 150);
        app.stage.addChild(graphics);
    }
}

