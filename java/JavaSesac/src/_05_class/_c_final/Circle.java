package _05_class._c_final;

import java.util.Scanner;

public class Circle {
    final double radius;
    static final double
            PI = 3.141592;

    public Circle(double radius) {
        this.radius = radius;
    }

    double calculateArea() {
        return radius * radius * PI;
    }

    public double getRadius() {
        return radius;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("원의 반지름을 입력하세요: ");
        double r = sc.nextDouble();

        Circle circle = new Circle(r);

        System.out.println("원의 반지름: " + circle.getRadius());
        System.out.println("원의 넓이: " + circle.calculateArea());

    }
}
