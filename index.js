var app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('2058');
basicText.x = 30;
basicText.y = 90;

app.stage.addChild(basicText);