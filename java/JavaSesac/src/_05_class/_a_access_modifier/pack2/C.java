package _05_class._a_access_modifier.pack2;

import _05_class._a_access_modifier.pack1.B;

// 다른 패키지에 있는 클래스에 접근할 때 import 필수
public class C {
    public static void main(String[] args) {
//        A instanceA = new A();
        // A 클래스의 접근 제한자는 default
        // >> 외부 패키지인 C에서는 접근 불가

        B b = new B();
        // 다른 패키지에 있지만
        // public으로 선언되어 있기 때문에 접근 가능

    }
}
