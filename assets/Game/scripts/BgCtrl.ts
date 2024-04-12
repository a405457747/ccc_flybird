import { v3 } from 'cc';
import { Vec3 } from 'cc';
import { _decorator, Component, Node } from 'cc';
import { GameMgr } from './GameMgr';
const { ccclass, property } = _decorator;

@ccclass('BgCtrl')
export class BgCtrl extends Component {



    initX: number = 0;
    targetX: number = 0;

    // 设置移动速度
    @property
    speed: number = 100;

    onLoad() {
        this.initX = this.node.getPosition().x;
        this.targetX=this.initX-750;
        console.log(" x : x ",this.initX,this.targetX);
    }

    start() {

    }

    update(deltaTime: number) {

        if(GameMgr.Inst.isGameOver===true) return;

        let cur =this.node.getPosition();
        cur.x-=deltaTime*this.speed;
        if(cur.x<=this.targetX){
            cur.x=this.initX;
        }

        this.node.position=cur;
    }
}


