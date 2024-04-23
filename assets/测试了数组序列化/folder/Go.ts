import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Go')
export class Go extends Component {
    start() {

    }

    update(deltaTime: number) {
        let pos =this.node.getPosition();
        pos.y+=2;
        this.node.position=pos;
    }
}


