class PlayingScene{
	
	constructor(game) {
	    this.game=game;
		this.pacman=game.pacman;
	}
	
	paint(ctx){
		//绘制 这是游戏场景
		ctx.strokeStyle="#000000";
		ctx.strokeText("我是游戏场景",10,10);
	}
	onMouseClick(evt){
		this.game.changeToGameOverScene();
	}
}