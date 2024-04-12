import { _decorator, Component, JsonAsset, Node, SpriteFrame } from 'cc';
import { DT } from './DT';
const { ccclass, property } = _decorator;

@ccclass('tempTest')
export class tempTest extends Component {

    @property([SpriteFrame])
    sps:SpriteFrame[]=[];

    @property([DT])
    dts:DT[]=[];

    @property([JsonAsset])
    jsons:JsonAsset[]=[];

    start() {
               for(let item in this.dts){
                          console.log(this.dts[item].name);
        }
    }

    update(deltaTime: number) {
        
    }
}


