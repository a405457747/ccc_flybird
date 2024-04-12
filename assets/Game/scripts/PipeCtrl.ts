import { _decorator, Component, Node, Vec3,math } from 'cc';
import { GameMgr } from './GameMgr';
const { ccclass, property } = _decorator;

@ccclass('PipeCtrl')
export class PipeCtrl extends Component {
    start() {
        this.scheduleOnce(()=>{
            this.node.destroy();
        },8);

        let cur = this.node.getPosition();
        cur.y=math.randomRangeInt(-177,177);
        this.node.position =cur;
    }

    update(deltaTime: number) {
        if(GameMgr.Inst.isGameOver===true) return;
        
        let cur = this.node.getPosition();
        cur.x-=deltaTime*200;
        this.node.position=cur;
    }
}


