package _05_class._f_interface;

import java.util.ArrayList;
import java.util.List;

public class Execute {
    public static void main(String[] args) {
        RemoteControl rc;   // reference 타입, null 초기화 할 수 있음
        rc = null;
        System.out.println(rc); // null

        System.out.println("\n===== Television 객체 생성 =====");
        rc = new Television();  // RemoteControl rc = new Television();
        rc.turnOn();
        rc.setVolume(5);
        rc.turnOff();

        System.out.println("\n===== Audio 객체 생성 =====");
        rc = new Audio();   // RemoteControl rc = new Audio();
        rc.turnOn();
        rc.setVolume(150);
        rc.turnOff();
    }
}
