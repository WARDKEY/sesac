package _05_class.practice.pr04;

public abstract class Shape {
    private String color;
    private String type;

    public Shape(String color, String type) {
        this.color = color;
        this.type = type;
    }

    abstract double calculateArea();

    public String getColor() {
        return color;
    }

    public String getType() {
        return type;
    }
}
