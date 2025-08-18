package _05_class._d_inheritance;

public class DogEx {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sayHello(); // 부모 클래스의 메서드
        dog.fetch();    // 자식 클래스의 메서드
        dog.makeSound("멍멍");    // 메서드 오버라이딩

        System.out.println("\n======== cat =========");
        Animal cat = new Animal();
        cat.sayHello();
        cat.makeSound("야옹");
    }
}
