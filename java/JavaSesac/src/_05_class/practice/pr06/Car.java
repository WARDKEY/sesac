package _05_class.practice.pr06;

public class Car extends Vehicle {

    public Car(String name, int maxSpeed) {
        super(name, maxSpeed);
    }

    @Override
    public void move() {
        System.out.println("도로를 따라 이동 중");
    }
}
