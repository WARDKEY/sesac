package _05_class.practice;

public class Car extends Vehicle {
    private boolean convertible;

    public Car(String brand, String model, int year, boolean convertible) {
        super(brand, model, year);
        this.convertible = convertible;
    }

    @Override
    public void move() {
        System.out.println("주차했습니다.");
    }

    @Override
    public String toString() {
        System.out.println("=== Car 정보 ===");
        return "Car{" + super.toString() +
                ", convertible=" + convertible +
                "} ";
    }
}
