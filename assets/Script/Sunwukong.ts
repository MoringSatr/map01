import {Dis} from "./Dis";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Sunwukong extends cc.Component {

    @property(cc.Animation)
    private player: cc.Animation;
    private spd: number;
    private dis: Dis;


    public move(time: number): void {
        if (this.dis == null) {
            this.dis = Dis.stop;
        }
        if (this.spd == null || this.spd == 0) {
            this.spd = 4;
        }
        let jvli = time / 10 * this.spd;
        cc.log("this.dis :", this.dis);
        cc.log("this.spd :", this.spd);
        switch (this.dis) {
            case Dis.shang:
                this.player.node.setPositionY(this.player.node.y + jvli);
                break;
            case Dis.xia:
                this.player.node.setPositionY(this.player.node.y - jvli);
                break;
            case Dis.zuo:
                this.player.node.setPositionX(this.player.node.x - jvli);
                break;
            case Dis.you:
                this.player.node.setPositionX(this.player.node.x + jvli);
                break;
        }

        cc.log("jvli :", jvli);
    }

    public change(dis: Dis): void {
        if (dis != this.dis) {
            this.dis = dis;
            switch (this.dis) {
                case Dis.shang:
                    this.player.play("sunwukong-hou");
                    break;
                case Dis.xia:
                    this.player.play("sunwukong-qian");
                    break;
                case Dis.zuo:
                    this.player.play("sunwukong-zuo");
                    break;
                case Dis.you:
                    this.player.play("sunwukong-you");
                    break;
            }
        }
    }

}