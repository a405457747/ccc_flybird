import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TT')
export class TT extends Component {
    start() {
        let a=[3,2,1]
        for(let [k,v] of a.entries()){
            console.log(k+":"+v);
        }
    }

    update(deltaTime: number) {
        
    }
}

