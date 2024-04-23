import { _decorator, Component, Vec3,Node ,find, Sprite,assetManager, Prefab, instantiate, tween} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KK')
export class KK extends Component {

    @property(Prefab)
    kk=null;

    start() {
        let tweenDuration:number =1.0;
        tween(this.node.position)
        .to(tweenDuration,new Vec3(0,10,0),{
            onUpdate:(target:Vec3,ratio:number)=>{
                this.node.position=target;
                console.log("r",ratio);
            }
        }).start();
    }

    update(deltaTime: number) {
        
    }
}


