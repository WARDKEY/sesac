package _05_class._e_abstract;

// 구체화된 클래스
public class Circle extends Shape {

    public Circle(String color) {
        super(color);
    }

    // draw 추상 메서드 실제 구현
    @Override
    void draw() {
        System.out.println("원 그리기");
    }
}
