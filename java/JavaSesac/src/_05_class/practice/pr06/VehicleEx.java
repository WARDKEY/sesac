package _05_class.practice.pr06;

public class VehicleEx {
    public static void main(String[] args) {
        Vehicle[] vehicles = new Vehicle[2];
        vehicles[0] = new Car("차", 100);
        vehicles[1] = new Airplane("비행기", 1000);

        for (Vehicle v : vehicles) {
            v.move();
            if (v instanceof Airplane) {
                ((Airplane) v).fly();
            }
        }

    }
}
