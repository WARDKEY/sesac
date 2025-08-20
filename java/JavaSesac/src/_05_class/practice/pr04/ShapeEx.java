package _05_class.practice.pr04;

import java.util.ArrayList;
import java.util.List;

public class ShapeEx {
    public static void main(String[] args) {
        List<Shape> shapes = new ArrayList<>();

        shapes.add(new Circle("Red", "Circle", 8));
        shapes.add(new Rectangle("Blue", "Rectangle", 4, 8));

        for (Shape s : shapes) {
            System.out.println("=== " + s.getType() + " 도형의 정보 ===");
            System.out.println("도형의 색상: " + s.getColor());
            System.out.println("도형의 넓이: " + s.calculateArea());
            System.out.println();
        }


    }
}
