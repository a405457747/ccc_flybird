import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TT')
export class TT extends Component {
    start() {
        let k =new Map();
        k.set('a',3);
        console.log(k.get('a'));
    }

    update(deltaTime: number) {
        
    }
}

