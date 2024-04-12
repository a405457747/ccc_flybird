import { _decorator, AudioSource, find, Component, Input, input, instantiate, Node, Prefab, RigidBody2D, Vec2, Contact2DType, PhysicsSystem2D, Collider2D, BoxCollider2D, Director, RichText } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameMgr')
export class GameMgr extends Component {

    @property(RichText)
    scoreText:RichText=null;

    @property(Prefab)
    pipe: Prefab | null = null;


    @property(Node)
    bird: Node | null = null;


    @property(AudioSource)
    birdFly: AudioSource | null = null;

    @property(AudioSource)
    birdHit: AudioSource | null = null;

    static Inst: GameMgr | null = null;


    isGameOver = false;
    score=0;
    start() {

        if (GameMgr.Inst == null) {
            GameMgr.Inst = this;
        }

        input.on(Input.EventType.TOUCH_START, this.click, this);

        this.createManyPipe();

    }

    updateUI(){

        let f=String.raw`<outline color=black width=2><b>${this.score}</b></outline>`;
        this.scoreText.string=f;
    }


    onBeginContact(self, other, contact) {
        console.log("碰撞了");
    }

    addScore(){
        this.score+=1;
        console.log("得分",this.score);
    }

    onSceneLaunched(){
        console.log("load scence callback");
        GameMgr.Inst=null;
    }

    click() {
        if(GameMgr.Inst.isGameOver===true){
            Director.instance.loadScene("scene-2d",this.onSceneLaunched);
            return;
        }
        
        let rb2d: RigidBody2D | null | undefined = this.bird?.getComponent(RigidBody2D);
        rb2d?.applyForceToCenter(new Vec2(0, 4600), true);
        this.birdFly?.play();
    }

    createManyPipe() {

        this.schedule(() => {
            this.createPipe();
        }, 2, 1000000, 2);


    }

    createPipe() {
        let pNode: Node | null | undefined = instantiate(this.pipe);

        find("Canvas/allPipe")?.addChild(pNode);

    }

    gameOver() {
        if (this.isGameOver === false) {
            this.isGameOver = true;
            console.log("gameOver")
            this.birdHit.play();

            find("Canvas/gameOver").active=true;
        }
    }

    update(deltaTime: number) {

        if(this.bird.getPosition().y>=667 &&(this.isGameOver===false)){
            this.gameOver();
        }

        this.updateUI();
    }
}


