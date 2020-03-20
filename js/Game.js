/**
 * 游戏控制类
 * 
 */
class Game{
	/**
	 * 
	 * @param {Object} cvs canvas对象
	 */
	constructor(cvs) {
		
		//游戏所有资源
		this.asset={};
		//游戏画布
		this.cvs=cvs;
		//画布画笔
		this.ctx;
		//游戏的舞台
		this.stage;
		//pacman
		this.pacman;
		//多个鬼
		this.ghosts;
		//游戏当前场景
		this.currentScene=null;	
		
		this.init();
		this.initListener();
	}
	/**
	 * 游戏初始化
	 */
	init(){
		//初始化舞台
		this.ctx=this.cvs.getContext("2d");
		this.stage=new Stage(this,this.cvs);
		this.pacman=new PacMan(this);
		
	}
	initListener(){
		this.cvs.addEventListener("click",function(evt){
			//让当前场景去处理事件
			this.currentScene.onMouseClick(evt);
			
		}.bind(this));
		
		document.addEventListener("keydown",function(evt){
			//让当前场景去处理事件
			this.currentScene.onKeyDown(evt);
		}.bind(this));
	}
	changeToReadyScene(){
		this.currentScene=new ReadyScene(this) ;	
	}
	changeToPlayingScene(){
		this.currentScene=new PlayingScene(this) ;	
	}
	changeToGameOverScene(){
		this.currentScene=new GameOverScene(this) ;	
	}
	start(){
		//设置当前场景
		this.changeToReadyScene();
		//开启游戏循环
		setInterval(this.run.bind(this),1000/30)
	}
	
	run(){
		let ctx=this.ctx;
		//让舞台重绘
		this.stage.paint(ctx);
		//让场景绘制
		this.currentScene.paint(ctx);
	}
	/**
	 * 加载游戏资源
	 * @param {Object} name
	 */
	load(name){
		let a=this.asset[name];
		if(a){
			return a;
		}
		//资源库没有，则立即加载
		let img=new Image();
		img.src="img/"+name+".png";
		//保存，用于后续使用
		this.asset[name]=img;
		return img;
	}
}