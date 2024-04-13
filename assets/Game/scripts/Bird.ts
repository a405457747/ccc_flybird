import { _decorator,Animation, Component, Node, Collider2D, Contact2DType, PhysicsSystem2D, IPhysics2DContact, physics, SpriteFrame, Sprite, resources } from 'cc';
import { GameMgr } from './GameMgr';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {

    @property({type:[SpriteFrame]})
    aniamlArr:SpriteFrame[]=[];


    animalIdx=0;

    sp=null;
    animalTimer=0;
    protected onLoad(): void {
        this.sp =this.getComponent(Sprite);
    }


    protected update(dt: number): void {
        if(GameMgr.Inst.isGameOver===true) return;
        this.animalTimer+=dt;
        if(this.animalTimer>=0.2){
            this.animalTimer=0;

            this.animalIdx+=1;
            let nIdx =this.animalIdx %3;
            console.log("new_sp",nIdx);

            
            if(nIdx===0){
                resources.load("sprites/bluebird-downflap/spriteFrame",SpriteFrame,(err,ass)=>{
                    if(err) return;
                    this.sp.spriteFrame=ass;
                })
            }else if(nIdx===1){
                resources.load("sprites/redbird-midflap/spriteFrame",SpriteFrame,(err,ass)=>{
                    if(err) return;
                    this.sp.spriteFrame=ass;
                })
            }else if(nIdx===2){
                resources.load("sprites/yellowbird-upflap/spriteFrame",SpriteFrame,(err,ass)=>{
                    if(err) return;
                    this.sp.spriteFrame=ass;
                })
            }


        }


        //let new_sp =this.aniamlArr[ this.animalIdx % (this.aniamlArr.length)];
      
        //this.sp.SpriteFrame=new_sp;

        

    }

    start() {


        /*
        const animation = this.node.getComponent(Animation);
        console.log("anim",animation);
        animation.play();//如果不写组名就播放默认的动画
        */


        // 注册单个碰撞体的回调函数
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }

        // 注册全局碰撞回调函数
        if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }
    }
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        //console.log('onBeginContact');
        GameMgr.Inst.gameOver();

    }
    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体结束接触时被调用一次
        // console.log('onEndContact');
    }
    onPreSolve(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 每次将要处理碰撞体接触逻辑时被调用
        // console.log('onPreSolve');
    }
    onPostSolve(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 每次处理完碰撞体接触逻辑时被调用
        //  console.log('onPostSolve');
    }
}


