import { _decorator, Component, Node ,find, Sprite,assetManager, Prefab, instantiate} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KK')
export class KK extends Component {

    @property(Prefab)
    kk=null;

    start() {
        let k2=instantiate(this.kk);
    
        find("Canvas").addChild(k2);
    }

    update(deltaTime: number) {
        
    }
}


