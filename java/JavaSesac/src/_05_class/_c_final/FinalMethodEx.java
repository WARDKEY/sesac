package _05_class._c_final;

public class FinalMethodEx {
    public static void main(String[] args) {

    }
}

class ClassWithFinalMethod {

    final void showMessage() {
        System.out.println("이 메서드는 final로 선언되었어요.");
    }
}


class SubClass extends ClassWithFinalMethod {

    // final 메서드는 재정의 불가
    // overriding 불가
//    void showMessage() {
//
//    }

}

/////////////////
final class FinalClass { // 클래스에도 final 붙을 수 있음
}

//class SubClass2 extends FinalClass {  // error, final 붙어있는 클래스는 상속 불가능!
//
//}


