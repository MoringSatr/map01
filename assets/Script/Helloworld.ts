import Sunwukong from "./Sunwukong";
import {Dis} from "./Dis";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {


    @property(Sunwukong)
    private sunwukong: Sunwukong;

    start() {
        // init logic
        this.moveTimer();
    }

    public change(event): void {
        cc.log(event);
        switch (event.target._name) {
            case "shang":
                this.sunwukong.change(Dis.shang);
                break;
            case "xia":
                this.sunwukong.change(Dis.xia);
                break;
            case "zuo":
                this.sunwukong.change(Dis.zuo);
                break;
            case "you":
                this.sunwukong.change(Dis.you);
                break;
        }
    }


    private moveTimer(): void {
        setInterval(() => {
            cc.log(setTimeout);
            this.sunwukong.move(10);
        }, 100);
    }
}
