import { _decorator, Component, input, Node,Input, Game, Director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartGame')
export class StartGame extends Component {
    start() {

        input.on(Input.EventType.TOUCH_START,this.touchStart,this);
    }

    touchStart(){
        Director.instance.loadScene("scene");
    }

    update(deltaTime: number) {
        
    }
}


