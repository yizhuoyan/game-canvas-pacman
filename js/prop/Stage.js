/**
 * 舞台
 */
class Stage{
	
	/**
	 * @param {Object} game 游戏对象
	 * @param {Object} cvs canvas
	 */
	constructor(game,cvs) {
		//游戏控制类
		this.game=game;
		//游戏画布
	    this.cvs=cvs;
		//舞台高宽
		this.w=cvs.width;
		this.h=cvs.height;
	}
	/**
	 * 舞台绘制
	 */
	paint(ctx){
		ctx.clearRect(0,0,this.w,this.h);		
	}
	
}