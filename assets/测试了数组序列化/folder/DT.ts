import { _decorator, Component, Node, serializeTag } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('DT')
export class DT  {

    @property
    public age:number=0;

    @property
    public name:string="";

    @property
    public is_man:boolean=true;
}


