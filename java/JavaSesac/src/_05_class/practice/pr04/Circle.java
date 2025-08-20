package _05_class.practice.pr04;

public class Circle extends Shape {

    private double radius;

    public Circle(String color, String type, double radius) {
        super(color, type);
        this.radius = radius;
    }

    @Override
    double calculateArea() {
        return Math.PI * Math.pow(radius, 2);
    }
}
