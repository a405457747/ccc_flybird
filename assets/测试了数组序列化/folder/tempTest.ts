import { _decorator, Component, JsonAsset, Label, Node, resources, SpriteFrame } from 'cc';
import { DT } from './DT';
const { ccclass, property } = _decorator;

interface KI {

}

@ccclass('tempTest')
export class tempTest extends Component implements  KI{

    @property([SpriteFrame])
    sps: SpriteFrame[] = [];

    @property([DT])
    dts: DT[] = [];

    @property([JsonAsset])
    jsons: JsonAsset[] = [];

    @property(Label)
    ll:Label|null=null;

    ff:number=0;
    start() {
        this.ff=0;
    }

    chiji(){
        console.log("chiji");
    }

    update(deltaTime: number) {
        this.ff+=deltaTime;
        this.ll.string=this.ff+":";
        debugger;
    }
}


