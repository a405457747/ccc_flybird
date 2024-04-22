import { _decorator, Component, Node ,find, Sprite} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KK')
export class KK extends Component {
    start() {

        let n =new Node("h");
        n.addComponent(Sprite);
        find("Canvas").addChild(n);
    }

    update(deltaTime: number) {
        
    }
}


