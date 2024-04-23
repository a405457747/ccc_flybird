import { _decorator, Component, Node ,find, Sprite,assetManager} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KK')
export class KK extends Component {
    start() {
    let k =new Node();
        find("Canvas").addChild(k);
    }

    update(deltaTime: number) {
        
    }
}


