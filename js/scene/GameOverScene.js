class GameOverScene{
	
	constructor(game) {
	    this.game=game;
	}
	
	paint(ctx){
		//绘制 这是游戏场景
		ctx.strokeText("我是游戏结束场景",100,100);
	}
	onMouseClick(evt){
		this.game.changeToReadyScene();
	}
}