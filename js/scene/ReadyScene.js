/**
 * 游戏准备场景
 */
class ReadyScene{
	
	constructor(game) {
		this.game=game;
		//游戏舞台
		this.stage=game.stage;
	    this.backgroundColor="#000";
		this.readyImg=game.load("ready");
		
		this.tipOpacity=1;
		this.tipOpacityChangeSpeed=-0.01;
	}
	
	
	/**
	 * 场景绘制方法
	 */
	paint(ctx){
		this.readyImgX=(this.stage.w-this.readyImg.width)/2;
		this.readyImgY=(this.stage.h-this.readyImg.height)/2;
		//背景色
		ctx.fillRect(0,0,this.stage.w,this.stage.h,this.backgroundColor);
		//绘制图片
		ctx.drawImage(this.readyImg,this.readyImgX,this.readyImgY);
		ctx.font="20 宋体";
		const tipTxt="点击鼠标开始";
		const mt=ctx.measureText(tipTxt);
		ctx.strokeStyle="rgba(255,255,255,"+this.tipOpacity+")";
		ctx.strokeText(tipTxt,(this.stage.w-mt.width)/2,this.readyImgY+this.readyImg.height+50)
		this.tipOpacity+=this.tipOpacityChangeSpeed;
		if(this.tipOpacity<0||this.tipOpacity>1){
			this.tipOpacityChangeSpeed=-this.tipOpacityChangeSpeed;
		}
	}
	onMouseClick(evt){
		this.game.changeToPlayingScene();
	}
}