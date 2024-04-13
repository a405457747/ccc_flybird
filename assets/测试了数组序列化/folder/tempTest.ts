import { _decorator, Component, JsonAsset, Node, resources, SpriteFrame } from 'cc';
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

    start() {

    }

    chiji(){
        console.log("chiji");
    }

    update(deltaTime: number) {

    }
}


