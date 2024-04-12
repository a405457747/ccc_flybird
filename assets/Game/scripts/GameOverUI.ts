import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameOverUI')
export class GameOverUI extends Component {


    protected onEnable(): void {
        console.log("game Over animation");
    }

}


