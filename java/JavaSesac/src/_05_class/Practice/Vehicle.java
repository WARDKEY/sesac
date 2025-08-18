package _05_class.Practice;

import java.util.ArrayList;
import java.util.List;

public class Vehicle {
    private String brand;
    private String model;
    private int year;

    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public void startUp() {
        System.out.println("차량 시동을 걸었습니다.");
    }

    public void move() {
    }

    public void stop() {
        System.out.println("차량을 정지했습니다.");
    }

    public static void main(String[] args) {
        List<Vehicle> vehicles = new ArrayList<>();
        vehicles.add(new Bus("Hyundai", "City Bus", 2022, 30));
        vehicles.add(new Car("Toyota", "Camry", 2023, true));
        vehicles.add(new Motorcycle("Harley-Davidson", "Sportster", 2021, "A"));

        for (Vehicle v : vehicles) {
            System.out.println(v);
            v.startUp();
            v.move();
            v.stop();
            System.out.println();
        }
    }

    @Override
    public String toString() {
        return
                "brand='" + brand + '\'' +
                        ", model='" + model + '\'' +
                        ", year=" + year
                ;
    }
}
