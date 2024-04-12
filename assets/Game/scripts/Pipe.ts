import { _decorator, Component, Node ,find,AudioSource} from 'cc';
import { GameMgr } from './GameMgr';
const { ccclass, property } = _decorator;

@ccclass('Pipe')
export class Pipe extends Component {

    bird=null;

    score=1;

    @property(AudioSource)
    as=null;

    protected onLoad(): void {
        this.bird=find("Canvas/bird");
    }

    addScore(){
        //console.log("准备开始得分");
        if(this.score===1){
            this.score=0;
            this.as.play();
            GameMgr.Inst.addScore();
            //console.log("得分了");
        }
    }

    update(deltaTime: number) {

     
            let curX =this.node.children[0].getWorldPosition().x;
            let birdX =this.bird.getWorldPosition().x;
            if(curX<=birdX){
                this.addScore();
            }
           // console.log(`pipeX:${curX.toFixed(2)} birdX:${birdX.toFixed(2)}`);
        
        
    }
}


