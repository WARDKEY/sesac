package _05_class._f_interface;

abstract class MyAbstractClass {
    public abstract void abstractMethod();
}


interface MyInterface {
    void interfaceMethod();
}

public class Interface02 extends MyAbstractClass implements MyInterface {

    @Override
    public void abstractMethod() {
        System.out.println("추상 클래스로부터 상속 받은 메서드");
    }

    @Override
    public void interfaceMethod() {
        System.out.println("인터페이스로부터 구현된 메서드");
    }

    public static void main(String[] args) {
        Interface02 interface02 = new Interface02();
        interface02.abstractMethod();
        interface02.interfaceMethod();
    }
}
