package _05_class.practice;

public class Bus extends Vehicle {

    private int passengerCapacity;

    public Bus(String brand, String model, int year, int passengerCapacity) {
        super(brand, model, year);
        this.passengerCapacity = passengerCapacity;
    }

    @Override
    public void move() {
        System.out.println("승객을 운송합니다.");
    }

    @Override
    public String toString() {
        System.out.println("=== Bus 정보 ===");
        return "Bus{" + super.toString() +
                ", passengerCapacity=" + passengerCapacity +
                "} ";
    }
}
