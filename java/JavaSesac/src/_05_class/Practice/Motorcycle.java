package _05_class.Practice;

public class Motorcycle extends Vehicle {
    private String licenseType;

    public Motorcycle(String brand, String model, int year, String licenseType) {
        super(brand, model, year);
        this.licenseType = licenseType;
    }

    @Override
    public void move() {
        System.out.println("울림통을 합니다.");
    }

    @Override
    public String toString() {
        System.out.println("=== Motorcycle 정보 ===");
        return "Motorcycle{" + super.toString() +
                ", licenseType='" + licenseType + '\'' +
                "} ";
    }
}
